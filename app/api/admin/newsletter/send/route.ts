import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Inscription from '@/models/Inscription';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        // Authentification vérification cookie
        const authCookie = req.cookies.get('admin_auth');
        if (!authCookie || authCookie.value !== 'true') {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        const { subject, content } = await req.json();

        if (!subject || !content) {
            return NextResponse.json({ success: false, error: 'Subject and content are required' }, { status: 400 });
        }

        await dbConnect();

        // Récupérer tous les emails des inscrits et les emails retenus
        const inscriptions = await Inscription.find().select('email -_id');
        const RetainedEmail = (await import('@/models/RetainedEmail')).default;
        const retainedEmails = await RetainedEmail.find().select('email -_id');
        
        const rawEmails = [
            ...inscriptions.map((inc) => inc.email),
            ...retainedEmails.map((re) => re.email)
        ].filter(email => email); // filtrer les vides si existant
        
        // Remove duplicates
        const emails = Array.from(new Set(rawEmails));

        if (emails.length === 0) {
            return NextResponse.json({ success: false, error: 'Aucun inscrit trouvé.' }, { status: 404 });
        }

        // Email HTML Template
        const emailHtml = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-w-2xl mx-auto p-4">
                ${content}
                <br/>
                <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;" />
                <p style="font-size: 12px; color: #777; text-align: center;">
                    Vous recevez cet email car vous êtes inscrit au programme RDC Agro Business Booster.
                </p>
            </div>
        `;

        // Resend batch sending allows up to 100 emails per batch.
        // If there are more than 100 emails, we chunk them.
        const chunkSize = 100;
        const fromName = process.env.RESEND_FROM_NAME || 'RDC Agro Business Booster';
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        const replyTo = process.env.REPLY_TO;

        for (let i = 0; i < emails.length; i += chunkSize) {
            const chunk = emails.slice(i, i + chunkSize);
            
            // Generate batch array
            const batchPayload = chunk.map((email) => ({
                from: `${fromName} <${fromEmail}>`,
                replyTo: replyTo,
                to: [email],
                subject: subject,
                html: emailHtml,
            }));

            await resend.batch.send(batchPayload);
        }
        // Save log to DB
        await import('@/models/NewsletterLog').then(async ({ default: NewsletterLog }) => {
            await NewsletterLog.create({
                subject: subject,
                recipientCount: emails.length,
            });
        });

        return NextResponse.json({ success: true, message: `Newsletter envoyée à ${emails.length} contacts.` });
    } catch (error: unknown) {
        console.error('Error sending newsletter:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
    }
}
