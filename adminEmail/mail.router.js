const express = require("express");
const adminEmailRouter = express.Router();
const { sendEmailWithPassword } = require("./mail.controller");

// Route to send email with generated password
adminEmailRouter.post("/api/send-email", async (req, res) => {
  try {
    const { email, password } = req.body;
    sendEmailWithPassword(email, password); // Call the function to send email with generated password
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = adminEmailRouter;
