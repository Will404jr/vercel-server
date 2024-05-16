const express = require("express");
const bookingClearanceRouter = express.Router();
const bookingClearanceController = require("./bookingClearance.controller");

// POST /api/bookingClearance
bookingClearanceRouter.post(
  "/api/bookingClearance",
  bookingClearanceController.clearBooking
);

bookingClearanceRouter.get(
  "/api/bookingClearance",
  bookingClearanceController.getClearBookings
);

module.exports = bookingClearanceRouter;
