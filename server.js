const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files from the current directory

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'All fields are required.' });
        }

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error('Telegram bot token or chat ID is not configured.');
            return res.status(500).json({ success: false, error: 'Server configuration error.' });
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
            res.json({ success: true, message: 'Message sent successfully.' });
        } else {
            console.error('Telegram API error:', data);
            res.status(500).json({ success: false, error: 'Failed to send message.' });
        }
    } catch (error) {
        console.error('Error handling contact request:', error);
        res.status(500).json({ success: false, error: 'Internal server error.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
