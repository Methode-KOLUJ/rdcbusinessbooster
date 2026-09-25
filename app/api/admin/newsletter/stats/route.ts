import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import NewsletterLog from '@/models/NewsletterLog';
import Inscription from '@/models/Inscription';

export async function GET(req: NextRequest) {
    try {
        const authCookie = req.cookies.get('admin_auth');
        if (!authCookie || authCookie.value !== 'true') {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const logs = await NewsletterLog.find().sort({ sentAt: -1 });
        
        // Fetch unique emails
        const inscriptions = await Inscription.find().select('email -_id');
        const RetainedEmail = (await import('@/models/RetainedEmail')).default;
        const retainedEmails = await RetainedEmail.find().select('email -_id');
        
        const rawEmails = [
            ...inscriptions.map((inc) => inc.email),
            ...retainedEmails.map((re) => re.email)
        ].filter(email => email);
        const uniqueEmails = Array.from(new Set(rawEmails));

        return NextResponse.json({ 
            success: true, 
            logs,
            emails: uniqueEmails,
            totalEmails: uniqueEmails.length
        });
    } catch (error: unknown) {
        console.error('Error fetching newsletter stats:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}
