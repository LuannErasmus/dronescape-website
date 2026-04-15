import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, service, message } = await request.json()

    await resend.emails.send({
      from: 'DroneScape Contact <onboarding@resend.dev>',
      to: ['info@dronescape.co.za'],
      subject: `New enquiry from ${name} — DroneScape`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
          <div style="background: #1a5631; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
            <h1 style="color: #f5981a; margin: 0; font-size: 22px;">New Enquiry — DroneScape</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 8px 0 0; font-size: 14px;">Someone has submitted the contact form on your website.</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; width: 140px;">
                <span style="font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Name</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="color: #1a5631; font-weight: 600;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Email</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <a href="mailto:${email}" style="color: #f5981a;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Phone</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="color: #1a5631;">${phone || '—'}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Company</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="color: #1a5631;">${company || '—'}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Service</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="color: #1a5631;">${service || '—'}</span>
              </td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</p>
            <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
              <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0;">This email was sent via the DroneScape website contact form.</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
