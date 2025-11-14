const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { submitApplication } = require("../controllers/careerController");

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Career form route
router.post("/", upload.single("resume"), submitApplication);

module.exports = router;
