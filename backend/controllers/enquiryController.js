const Enquiry = require("../models/Enquiry");
const nodemailer = require("nodemailer");

exports.submitEnquiry = async (req, res) => {
  const { name, email, number, enquiry } = req.body;

  if (!name || !email || !number || !enquiry) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    const newEnquiry = new Enquiry({ name, email, number, enquiry });
    await newEnquiry.save();

    // Gmail Service (Simplest)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Advance analytik" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Enquiry from ${name}`,
      html: `
        <h3>You have a new enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Enquiry:</strong> ${enquiry}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Enquiry saved & email sent!",
      data: newEnquiry,
    });

  } catch (error) {
    console.error("Enquiry Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }

};
