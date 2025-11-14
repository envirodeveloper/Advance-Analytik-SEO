const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  qualification: { type: String, required: true },
  resume: { type: String, required: true }, // path to file
}, { timestamps: true });

module.exports = mongoose.model("Career", careerSchema);
