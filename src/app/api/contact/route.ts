import { NextRequest, NextResponse } from 'next/server'

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

    // Log the submission for now (in production, you'd integrate with your email service)
    const timestamp = new Date().toISOString()
    console.log('=== CONTACT FORM SUBMISSION ===')
    console.log('Timestamp:', timestamp)
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Company:', company || 'Not provided')
    console.log('Stage:', stage || 'Not provided')
    console.log('Message:', message)
    console.log('==================================')

    // Try to send via email if Resend is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        await resend.emails.send({
          from: 'DueReady Contact <onboarding@resend.dev>',
          to: 'hello@dueready.com',
          subject: `New Contact: ${name} from ${company || 'Unknown Company'}`,
          replyTo: email,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Stage:</strong> ${stage || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Sent from DueReady Contact Form with GDPR consent at ${timestamp}</small></p>
          `,
        })
        console.log('Email sent successfully via Resend')
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        return NextResponse.json(
          { error: 'Failed to send email. Please try emailing hello@dueready.com directly.' },
          { status: 500 }
        )
      }
    } else {
      console.log('Note: RESEND_API_KEY not configured, email not sent')
      return NextResponse.json(
        { error: 'Email service not configured. Please email hello@dueready.com directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Message received successfully! We\'ll get back to you within 24 hours.',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your message. Please try emailing hello@dueready.com directly.' },
      { status: 500 }
    )
  }
}
