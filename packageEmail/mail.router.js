const express = require("express");
const packageMailRouter = express.Router();
const { sendTicketEmail } = require("./mail.controller");

// Route to send ticket details via email
packageMailRouter.post("/api/package-email", async (req, res) => {
  const { email, ticketDetails } = req.body;

  try {
    console.log("Received email:", email);
    console.log("Received ticket details:", ticketDetails);

    // Check if ticketDetails is properly structured
    if (
      !ticketDetails ||
      typeof ticketDetails !== "object" ||
      !ticketDetails.packageID ||
      !ticketDetails.fullNames ||
      !ticketDetails.email ||
      !ticketDetails.tellNumber ||
      !ticketDetails.recipientsNames ||
      !ticketDetails.recipientsNumber ||
      !ticketDetails.destination ||
      !ticketDetails.chosenBus ||
      !ticketDetails.shippingDate ||
      !ticketDetails.shippingTime
    ) {
      throw new Error("Invalid ticket details object");
    }

    // Send email with ticket details
    await sendTicketEmail(ticketDetails);

    res.status(200).json({ message: "Ticket details sent successfully" });
  } catch (error) {
    console.error("Error sending ticket email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = packageMailRouter;
