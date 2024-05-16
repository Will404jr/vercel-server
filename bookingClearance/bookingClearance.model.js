const mongoose = require("mongoose");

const BookingClearanceSchema = new mongoose.Schema({
  bookingID: {
    type: String,
    required: true,
  },
  tellNumber: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  clearedAt: {
    type: Date,
    default: Date.now,
  },
});

const BookingClearance = mongoose.model(
  "BookingClearance",
  BookingClearanceSchema
);

module.exports = BookingClearance;
