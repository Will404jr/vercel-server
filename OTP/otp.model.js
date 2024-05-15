const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  OTP: {
    type: String,
    required: true,
  },
});

const OTP = mongoose.model("OTP", OtpSchema);

module.exports = OTP;
