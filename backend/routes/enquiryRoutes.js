const express = require("express");
const router = express.Router();
const { submitEnquiry } = require("../controllers/enquiryController");

// Submit enquiry
router.post("/", submitEnquiry);

module.exports = router;
