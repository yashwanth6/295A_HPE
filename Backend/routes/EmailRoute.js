const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const router = express.Router();


// Handle form submission
router.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter to send the email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hpesjsu@gmail.com',
      pass: ''
    }
  });

  // Set up email options
  const mailOptions = {
    from: email,
    to: 'hpesjsu@gmail.com',
    subject: `New message from ${name}`,
    text: message
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

module.exports = router;
