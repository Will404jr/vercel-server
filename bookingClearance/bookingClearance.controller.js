const BookingClearance = require("./bookingClearance.model");

const clearBooking = async (req, res) => {
  try {
    const { bookingID, tellNumber, email } = req.body;

    // Create a new booking clearance instance
    const newBookingClearance = new BookingClearance({
      bookingID,
      tellNumber,
      email,
    });

    // Save the booking clearance to the database
    await newBookingClearance.save();

    res.status(200).json({ message: "Booking cleared successfully." });
  } catch (error) {
    console.error("Error clearing booking:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const getClearBookings = async (req, res) => {
  try {
    // Fetch all cleared bookings from the database
    const clearBookings = await BookingClearance.find();

    res.status(200).json(clearBookings);
  } catch (error) {
    console.error("Error fetching cleared bookings:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  clearBooking,
  getClearBookings,
};
