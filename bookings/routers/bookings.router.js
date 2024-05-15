const express = require("express");
const bookingsRouter = express.Router();
const bookingController = require("../controllers/bookings.controller");

// Create a new booking
bookingsRouter.post("/api/bookings", bookingController.createBooking);

// Retrieve all bookings
bookingsRouter.get("/api/bookings", bookingController.getAllBookings);

// Retrieve a single booking by ID
bookingsRouter.get("/api/bookings/:id", bookingController.getBookingById);

// Update a booking by ID
bookingsRouter.put("/api/bookings/:id", bookingController.updateBooking);

// Delete a booking by ID
bookingsRouter.delete("/api/bookings/:id", bookingController.deleteBooking);

// Update cleared status of a booking by ID
bookingsRouter.patch(
  "/api/bookings/:id/clear",
  bookingController.updateClearedStatus
);

module.exports = bookingsRouter;
