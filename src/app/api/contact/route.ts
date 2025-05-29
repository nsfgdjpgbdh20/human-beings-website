import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer'; // <- 実際に使用する場合はコメントアウトを解除

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

    // 現在はコンソールログのみ（開発用）
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      to: 'nsfgdjpgbdh20@gmail.com'
    });

    // 🚀 実際のメール送信を有効にするには以下の手順が必要です：
    // 1. npm install nodemailer @types/nodemailer
    // 2. 環境変数の設定（.env.local）
    // 3. 以下のコードのコメントアウトを解除

    /*
    // 実際のメール送信実装例：
    await sendActualEmail({
      to: 'nsfgdjpgbdh20@gmail.com',
      from: email,
      name,
      message
    });
    */
    
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

// 実際のメール送信関数（使用する場合）
/*
async function sendActualEmail(data: {
  to: string;
  from: string;
  name: string;
  message: string;
}) {
  const transporter = nodemailer.createTransporter({
    service: 'gmail', // または他のメールサービス
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'noreply@yourdomain.com',
    to: data.to,
    subject: `お問い合わせ - ${data.name}様より`,
    html: `
      <h2>新しいお問い合わせが届きました</h2>
      <p><strong>お名前:</strong> ${data.name}</p>
      <p><strong>メールアドレス:</strong> ${data.from}</p>
      <p><strong>メッセージ:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${data.message.replace(/\n/g, '<br>')}
      </div>
    `,
    replyTo: data.from,
  });
}
*/

// Simulate email sending - replace with actual email service
async function simulateEmailSending(data: {
  to: string;
  from: string;
  name: string;
  message: string;
}) {
  // 開発環境での動作確認用
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log(`📧 メール送信シミュレーション:`);
  console.log(`   宛先: ${data.to}`);
  console.log(`   送信者: ${data.name} (${data.from})`);
  console.log(`   件名: お問い合わせ - ${data.name}様より`);
  console.log(`   メッセージ: ${data.message}`);
}