const express = require("express");
const otpRouter = express.Router();
const { sendOTP, getOTP } = require("./otp.controller");

// Route to generate and send OTP
otpRouter.post("/api/OTP", async (req, res) => {
  const { email } = req.body;
  try {
    const otp = await sendOTP(email);
    res.status(200).json({ otp });
  } catch (error) {
    console.error("Error generating OTP:", error);
    res.status(500).json({ error: "Failed to generate OTP" });
  }
});

// Route to retrieve any OTP from the database
otpRouter.get("/api/OTP", async (req, res) => {
  try {
    const otps = await getOTP();
    res.status(200).json({ otps });
  } catch (error) {
    console.error("Error retrieving OTPs:", error);
    res.status(500).json({ error: "Failed to retrieve OTPs" });
  }
});

module.exports = otpRouter;
