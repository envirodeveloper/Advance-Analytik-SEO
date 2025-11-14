const Career = require("../models/Career");
const nodemailer = require("nodemailer");
const path = require("path");

// WebSMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Handle application
exports.submitApplication = async (req, res) => {
  try {
    const { fullname, address, phone, qualification } = req.body;
    const resumeFile = req.file;

    if (!resumeFile) {
      return res.status(400).json({ message: "Resume is required" });
    }

    const newApplication = await Career.create({
      fullname,
      address,
      phone,
      qualification,
      resume: resumeFile.filename,
    });

    // Send email with attachment
    await transporter.sendMail({
      from: `"Careers Portal" <${process.env.SMTP_USER}>`,
      to: "hr@spectrumsinstrument.com", // HR team
      subject: "New Job Application",
      html: `
        <h3>New Application Received</h3>
        <p><b>Name:</b> ${fullname}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Qualification:</b> ${qualification}</p>
      `,
      attachments: [
        {
          filename: resumeFile.originalname,
          path: path.join(__dirname, "../uploads/", resumeFile.filename),
        },
      ],
    });

    res.status(201).json({ message: "Application submitted & emailed ✅", newApplication });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
