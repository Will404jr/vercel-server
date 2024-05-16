const express = require("express");
const bookingMailRouter = express.Router();
const { sendTicketEmail } = require("./mail.controller");

// Route to send ticket details via email
bookingMailRouter.post("/api/booking-email", async (req, res) => {
  const { email, ticketDetails } = req.body;

  try {
    console.log("Received email:", email);
    console.log("Received ticket details:", ticketDetails);

    // Check if ticketDetails is properly structured
    if (
      !ticketDetails ||
      typeof ticketDetails !== "object" ||
      !ticketDetails.bookingID ||
      !ticketDetails.fullNames ||
      !ticketDetails.email ||
      !ticketDetails.tellNumber ||
      !ticketDetails.destination ||
      !ticketDetails.chosenBus ||
      !ticketDetails.station ||
      !ticketDetails.selectedDate ||
      !ticketDetails.shippingTime ||
      !ticketDetails.selectedSeat
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

module.exports = bookingMailRouter;
