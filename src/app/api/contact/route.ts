import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Input sanitization function
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .substring(0, 1000) // Limit length
}

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    let { name, email, company, stage, message, consent } = body

    // Sanitize all inputs
    name = sanitizeInput(name)
    email = sanitizeInput(email)
    company = sanitizeInput(company || '')
    stage = sanitizeInput(stage || '')
    message = sanitizeInput(message)

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check GDPR consent
    if (!consent) {
      return NextResponse.json(
        { error: 'Privacy consent is required' },
        { status: 400 }
      )
    }

    // Check if email service is configured
    if (!resend) {
      console.log('Contact form submission received but email service not configured:', {
        name, email, company, stage, message: message.substring(0, 100)
      })
      return NextResponse.json(
        { error: 'Email service is temporarily unavailable. Please try emailing hello@dueready.com directly.' },
        { status: 503 }
      )
    }

    // Send email using Resend (all inputs are now sanitized)
    await resend.emails.send({
      from: 'DueReady Contact <onboarding@resend.dev>',
      to: 'hello@dueready.com',
      subject: `New Contact: ${name} from ${company || 'Unknown Company'}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>DueReady Contact Form</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; background-color: #f8f9fa; border: 1px solid #dee2e6; width: 120px;">Name:</td>
                <td style="padding: 8px; border: 1px solid #dee2e6;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background-color: #f8f9fa; border: 1px solid #dee2e6;">Email:</td>
                <td style="padding: 8px; border: 1px solid #dee2e6;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background-color: #f8f9fa; border: 1px solid #dee2e6;">Company:</td>
                <td style="padding: 8px; border: 1px solid #dee2e6;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background-color: #f8f9fa; border: 1px solid #dee2e6;">Stage:</td>
                <td style="padding: 8px; border: 1px solid #dee2e6;">${stage || 'Not provided'}</td>
              </tr>
            </table>
            
            <h3 style="color: #2c3e50; margin-top: 30px;">Message:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #3498db; margin: 10px 0;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #dee2e6;">
            <p style="font-size: 12px; color: #6c757d; text-align: center;">
              Sent from DueReady Contact Form with GDPR consent
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission from DueReady Website

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Stage: ${stage || 'Not provided'}

Message:
${message}

---
Sent from DueReady Contact Form with GDPR consent
      `.trim()
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 