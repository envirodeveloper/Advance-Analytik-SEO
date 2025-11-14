const Enquiry = require("../models/Enquiry");
const nodemailer = require("nodemailer");

// Create transporter using WebSMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // use true if port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// @desc  Submit enquiry + send email
exports.submitEnquiry = async (req, res) => {
  try {
    const { name, email, number, enquiry } = req.body;

    // Save to DB
    const newEnquiry = await Enquiry.create({ name, email, number, enquiry });

    // Send email via WebSMTP
    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.SMTP_USER}>`,
      to: "sales@technicrafts.com", // receiver email
      subject: "New Website Enquiry",
      html: `
        <h3>You have a new enquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Number:</b> ${number}</p>
        <p><b>Enquiry:</b> ${enquiry}</p>
      `,
    });

    res.status(201).json({ message: "Enquiry saved & email sent ✅", newEnquiry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



