const express = require("express");
const router = express.Router();
const { submitEnquiry } = require("../controllers/enquiryController");

// POST /api/enquiries
router.post("/", submitEnquiry);

module.exports = router;
