const express = require('express');
const nodemailer = require('nodemailer');
// require('dotenv').config(); // Load environment variables

const app = express();

// Route to send email
app.get('/send', async (req, res) => {
    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            // service: 'gmail',
            host: 'smtp.zoho.in',  // For Personal Users or Free Organization
            port: 465,             // TLS Port
            secure: true,
            auth: {
                user: "no-reply@tradly.in", // Your email from .env
                pass: "kSad9-op", // Your app password from .env
            },
        });

        // Email options
        const mailOptions = {
            from: "no-reply@tradly.in",       // Sender's email
            to: 'selmonbhoi690@gmail.com',             // Recipient's email
            subject: 'Test Email',
    text: 'Hello, this is a test email sent via Zoho SMTP.',
    html: '<p>Hello, this is a <b>test email</b> sent via Zoho SMTP.</p>',
    headers: {
        'X-Mailer': 'Node.js with Nodemailer',
        'X-Priority': '3',  // Normal priority
        'X-Status': '1',     // Sent status
    },
 // Email body
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.response);

        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email: ', error.message);
        res.status(500).send('Failed to send email.');
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
