const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  bookingID: {
    type: String,
    required: true,
    unique: true,
  },
  fullNames: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tellNumber: {
    type: String, // Assuming phone numbers are stored as strings
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  chosenBus: {
    type: String,
    required: true,
  },
  station: {
    type: String,
    required: true,
  },
  selectedDate: {
    type: Date,
    required: true,
  },
  shippingTime: {
    type: String,
    required: true,
  },
  selectedSeat: {
    type: String,
    required: true,
  },
  cleared: {
    type: Boolean,
    default: false, // Set default value to false
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
