require('dotenv').config();
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASSWORD exists:', !!process.env.SMTP_PASSWORD);
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// JSON file database
const DB_FILE = process.env.DB_PATH || './submissions.json';

function readSubmissions() {
  try {
    if (fs.existsSync(DB_FILE)) {
      return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    }
  } catch (err) {
    console.error('Error reading submissions:', err);
  }
  return [];
}

function saveSubmission(submission) {
  const submissions = readSubmissions();
  submission.id = submissions.length + 1;
  submission.created_at = new Date().toISOString();
  submissions.push(submission);
  fs.writeFileSync(DB_FILE, JSON.stringify(submissions, null, 2));
  return submission;
}

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

// async function sendDummyEmail() {
//   // Email options
//   const mailOptions = {
//     from: `"Test Sender" <${process.env.SMTP_USER}>`,
//     to: process.env.SMTP_USER, // send to yourself
//     subject: "Dummy Email Test ✔",
//     text: "This is a test email sent using Node.js and Gmail SMTP.",
//     html: "<h3>Dummy Email Test</h3><p>If you got this, SMTP works 🎉</p>",
//   };

//   // Send email
//   const info = await transporter.sendMail(mailOptions);
//   console.log("Email sent:", info.messageId);
// }

// // Run
// sendDummyEmail().catch(console.error);

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, email, suburb, message, service, preferCallback } = req.body;

    // Validate required fields
    if (!name || !phone || !email) {
      return res.status(400).json({
        success: false,
        error: 'Name, phone, and email are required'
      });
    }

    // Save to JSON file
    const submission = saveSubmission({
      name,
      phone,
      email,
      suburb: suburb || '',
      message: message || '',
      service: service || 'general',
      preferCallback: preferCallback || false
    });

    // Format service name for email
    const serviceName = service ? service.charAt(0).toUpperCase() + service.slice(1) : 'General';

    // Service-specific email routing
    const emailRouting = {
      tiling: 'northshorecleaning@gmail.com',
      painting: 'northshorepainting8@gmail.com',
      cleaning: 'northshoreremovals1@gmail.com',
      removals: 'northshoreremovals1@gmail.com'
    };
    const notificationEmail = emailRouting[service] || emailRouting.tiling;

    // Send email notification
    if (process.env.SMTP_USER) {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: notificationEmail,
          subject: `New ${serviceName} Quote Request from ${name}`,
          html: `
            <h2>New Quote Request - ${serviceName} Service</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Suburb:</strong> ${suburb || 'Not specified'}</p>
            <p><strong>Service:</strong> ${serviceName}</p>
            <p><strong>Prefers Callback:</strong> ${preferCallback ? 'Yes' : 'No'}</p>
            <p><strong>Message:</strong></p>
            <p>${message || 'No message provided'}</p>
            <hr>
            <p><small>Submitted at ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}</small></p>
          `
        });
      } catch (emailError) {
        console.error('Email send failed:', emailError.message);
      }
    }

    res.json({
      success: true,
      message: 'Thank you! We\'ll be in touch within 24 hours.',
      id: submission.id
    });

  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again or call us directly.'
    });
  }
});

// View submissions (protected)
app.get('/api/submissions', (req, res) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json(readSubmissions());
});

// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
