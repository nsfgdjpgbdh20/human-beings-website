import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
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

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY is not set. Falling back to console logging.');
    }

    const sanitizedMessage = escapeHtml(message);
    const sanitizedSubject = escapeHtml(subject);
    const emailPayload = {
      from: FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL ?? 'nsfgdjpgbdh20@gmail.com'],
      replyTo: email,
      subject: `お問い合わせ: ${subject}`,
      text: `お名前: ${name}\nメールアドレス: ${email}\n件名: ${subject}\n\nメッセージ:\n${message}`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${sanitizedSubject}</p>
        <p><strong>メッセージ:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
          ${sanitizedMessage.replace(/\n/g, '<br />')}
        </div>
      `
    };

    if (apiKey) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send(emailPayload);

      if (error) {
        console.error('Resend email error:', error);
        return NextResponse.json(
          { error: 'Failed to send email. Please try again later.' },
          { status: 500 }
        );
      }
    } else {
      console.log('Contact form submission (メール送信シミュレーション):', {
        ...emailPayload,
        timestamp: new Date().toISOString()
      });
    }

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
