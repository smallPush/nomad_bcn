import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram bot token or chat ID is not configured.');
      return NextResponse.json({ success: false, error: 'Server configuration error.' }, { status: 500 });
    }

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const text = `New Contact Request:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });

    const data = await response.json();

    if (data.ok) {
      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    } else {
      console.error('Telegram API error:', data);
      return NextResponse.json({ success: false, error: 'Failed to send message.' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error handling contact request:', error);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
