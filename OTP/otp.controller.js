const nodemailer = require("nodemailer");
const OTP = require("./otp.model");

// Function to generate a random 5-digit OTP
const generateOTP = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "wjr46269@gmail.com",
    pass: "gkpfylwfovacmedy",
  },
});

const sendOTP = async (email) => {
  try {
    // Generate 5-digit OTP
    const otp = generateOTP();

    // Store OTP and email in the database
    await OTP.create({ email, OTP: otp });

    // Send email with OTP
    const mailOptions = {
      from: "wjr46269@gmail.com",
      to: email,
      subject: "OTP Verification",
      text: `Your OTP for verification is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    return otp;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP");
  }
};

const getOTP = async () => {
  try {
    // Query database for all OTPs
    const otpRecords = await OTP.find({}, { OTP: 1 });
    return otpRecords.map((record) => record.OTP);
  } catch (error) {
    console.error("Error retrieving OTPs:", error);
    throw new Error("Failed to retrieve OTPs");
  }
};

module.exports = { sendOTP, generateOTP, getOTP };
