import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

const toSafeString = (value: unknown): string =>
  typeof value === 'string' ? value : '';

const removeUnsafeControlChars = (value: string) =>
  value.replace(/[\0-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

const sanitizeForHeader = (value: string) =>
  removeUnsafeControlChars(value)
    .replace(/[\r\n]+/g, ' ')
    .trim();

const normalizeMessage = (value: string) =>
  removeUnsafeControlChars(value).replace(/\r\n?/g, '\n');

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const nameInput = toSafeString(body?.name);
    const emailInput = toSafeString(body?.email);
    const subjectInput = toSafeString(body?.subject);
    const messageInput = toSafeString(body?.message);

    const trimmedName = nameInput.trim();
    const trimmedEmail = emailInput.trim();
    const trimmedSubject = subjectInput.trim();
    const normalizedMessage = normalizeMessage(messageInput);

    // Validate required fields
    if (!trimmedName || !trimmedEmail || !trimmedSubject || !normalizedMessage) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const sanitizedEmail = sanitizeForHeader(trimmedEmail);
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const sanitizedName = sanitizeForHeader(trimmedName);
    const sanitizedSubject = sanitizeForHeader(trimmedSubject);
    const sanitizedMessage = normalizedMessage;

    const escapedName = escapeHtml(sanitizedName);
    const escapedEmail = escapeHtml(sanitizedEmail);
    const escapedSubject = escapeHtml(sanitizedSubject);
    const escapedMessage = escapeHtml(sanitizedMessage);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY is not set. Falling back to console logging.');
    }

    const emailPayload = {
      from: FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL ?? 'nsfgdjpgbdh20@gmail.com'],
      replyTo: sanitizedEmail,
      subject: `お問い合わせ: ${sanitizedSubject}`,
      text: `お名前: ${sanitizedName}\nメールアドレス: ${sanitizedEmail}\n件名: ${sanitizedSubject}\n\nメッセージ:\n${sanitizedMessage}`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>お名前:</strong> ${escapedName}</p>
        <p><strong>メールアドレス:</strong> ${escapedEmail}</p>
        <p><strong>件名:</strong> ${escapedSubject}</p>
        <p><strong>メッセージ:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
          ${escapedMessage.replace(/\n/g, '<br />')}
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
