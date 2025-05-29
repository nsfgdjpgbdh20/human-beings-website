import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // For now, we'll just log the form submission
    // In a real application, you would integrate with an email service
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      to: 'nsfgdjpgbdh20@gmail.com'
    });

    // Here you would typically:
    // 1. Save to database
    // 2. Send email using a service like:
    //    - Nodemailer with SMTP
    //    - SendGrid
    //    - AWS SES
    //    - Resend
    //    - etc.
    
    // For demonstration, we'll simulate email sending
    await simulateEmailSending({
      to: 'nsfgdjpgbdh20@gmail.com',
      from: email,
      name,
      message
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Simulate email sending - replace with actual email service
async function simulateEmailSending(data: {
  to: string;
  from: string;
  name: string;
  message: string;
}) {
  // This is where you would integrate with your email service
  // For example, with Nodemailer:
  /*
  const transporter = nodemailer.createTransporter({
    // your email service config
  });
  
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: data.to,
    subject: `Contact Form Submission from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.from}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  });
  */
  
  // For now, just simulate delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log(`Email would be sent to ${data.to} from ${data.from}`);
  console.log(`Subject: Contact Form Submission from ${data.name}`);
  console.log(`Message: ${data.message}`);
}