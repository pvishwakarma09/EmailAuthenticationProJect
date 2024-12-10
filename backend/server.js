const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const users = {};
const otpStore = {};

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.PASSWORD, // Your email password
  },
});

// Send OTP
app.post("/send-otp", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
  otpStore[email] = otp;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your OTP for Signup",
    text: `Your OTP is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).json({ message: "Error sending OTP" });
    }
    res.status(200).json({ message: "OTP sent successfully" });
  });
});

// Verify OTP
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  if (otpStore[email] && otpStore[email] === parseInt(otp)) {
    delete otpStore[email];
    return res.status(200).json({ success: true });
  }

  res.status(400).json({ message: "Invalid OTP" });
});

// Signup
app.post("/signup", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  if (users[email]) {
    return res.status(400).json({ message: "Email is already registered" });
  }

  users[email] = { email };
  res.status(201).json({ message: "Signup successful" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
