import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Inscription from '@/models/Inscription';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Connect to database
    await dbConnect();

    // Save to database
    const newInscription = await Inscription.create(data);

    // Send confirmation email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p>Bonjour cher(e) <strong>${data.nom}</strong>,</p>
        <p>
          Nous avons reçu votre demande d'adhésion au programme <strong>RDC Agro Business Booster 2026</strong>, 
          nous allons vous recontacter via WhatSapp pour vous donner l'adresse du bureau pour confirmer 
          votre inscription et prendre connaissance du déroulement des activités jusqu'à l'obtention du financement.
        </p>
        
        <p>
          Suivez-nous sur notre chaîne WhatSapp : 
          <a href="https://whatsapp.com/channel/0029VbBgcNSBfxo0C7SLc52a" style="color: #4CAF50; font-weight: bold;">Notre chaîne WhatSapp</a>
        </p>
        
        <br/>
        <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px; border-top: 1px solid #eeeeee; padding-top: 20px; width: 100%;">
          <tr>
            <td style="padding-bottom: 15px;">
              <p style="margin: 0; font-family: Arial, sans-serif; color: #333;"><strong>L'équipe RDC Agro Business Booster</strong></p>
            </td>
          </tr>
          <tr>
            <td>
              <!-- Veuillez remplacer ces liens par les vraies URLs de vos logos -->
              <img src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1790180006/android-chrome-192x192_gqu9hh.png" alt="Logo 1" height="80" style="margin-right: 15px; display: inline-block; vertical-align: middle; border-radius: 8px;" />
              <img src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1790180175/Logo_jcajox.png" alt="Logo 2" height="80" style="display: inline-block; vertical-align: middle; border-radius: 8px;" />
              <img src="https://res.cloudinary.com/dgv2vmgio/image/upload/v1792242290/Agano-logo_2_z1phdy.png" alt="Logo 3" height="80" style="display: inline-block; vertical-align: middle; border-radius: 8px;" />
              </td>
          </tr>

            <tr>
            <td style="padding-bottom: 15px;">
              <p style="margin: 0; font-family: Arial, sans-serif; color: #333;"><strong>Nos partenaires</strong></p>
            </td>
          </tr>
          <tr>
            <td>
              <!-- NOS PARTENAIRES -->
              <img src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1788768027/ANAPI_zli8pn.jpg" alt="Logo 1" height="60" style="margin-right: 15px; display: inline-block; vertical-align: middle; border-radius: 8px;" />
              <img src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1788768026/ANADEC_nmlkrm.jpg" alt="Logo 2" height="60" style="display: inline-block; vertical-align: middle; border-radius: 8px;" />
              <img src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1788768027/BANQUE_rhbr5e.png" alt="Logo 3" height="60" style="display: inline-block; vertical-align: middle; border-radius: 8px;" />
              <img src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1788768027/FOGEC_rpmpvr.jpg" alt="Logo 4" height="60" style="display: inline-block; vertical-align: middle; border-radius: 8px;" />
              <img src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1788768027/FPI_juzrls.jpg" alt="Logo 5" height="60" style="display: inline-block; vertical-align: middle; border-radius: 8px;" />
              </td>
          </tr>
        </table>
      </div>
    `;

    const fromName = process.env.RESEND_FROM_NAME || 'RDC Agro Business Booster';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const replyTo = process.env.REPLY_TO;

    await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      replyTo: replyTo,
      to: data.email,
      subject: 'Confirmation de votre demande d\'adhésion - RDC Agro Business Booster 2026',
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: 'Inscription réussie', data: newInscription }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error in Inscription submission:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, message: 'Internal Server Error', error: errorMessage }, { status: 500 });
  }
}
