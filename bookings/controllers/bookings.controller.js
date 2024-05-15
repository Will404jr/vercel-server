const Booking = require("../bookings.model");

// Controller methods
const bookingController = {
  // Create a new booking
  createBooking: async (req, res) => {
    try {
      const {
        bookingID,
        fullNames,
        email,
        tellNumber,
        destination,
        chosenBus,
        station,
        selectedDate,
        shippingTime,
        selectedSeat,
      } = req.body;
      const newBooking = new Booking({
        bookingID,
        fullNames,
        email,
        tellNumber,
        destination,
        chosenBus,
        station,
        selectedDate,
        shippingTime,
        selectedSeat,
      });
      const savedBooking = await newBooking.save();
      res.status(201).json(savedBooking);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Retrieve all bookings
  getAllBookings: async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Retrieve a single booking by ID
  getBookingById: async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      if (booking) {
        res.json(booking);
      } else {
        res.status(404).json({ message: "Booking not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Update a booking by ID
  updateBooking: async (req, res) => {
    try {
      const {
        fullNames,
        email,
        tellNumber,
        destination,
        chosenBus,
        station,
        selectedDate,
        shippingTime,
        selectedSeat,
      } = req.body;
      const booking = await Booking.findById(req.params.id);
      if (booking) {
        booking.fullNames = fullNames;
        booking.email = email;
        booking.tellNumber = tellNumber;
        booking.destination = destination;
        booking.chosenBus = chosenBus;
        booking.station = station;
        booking.selectedDate = selectedDate;
        booking.shippingTime = shippingTime;
        booking.selectedSeat = selectedSeat;
        const updatedBooking = await booking.save();
        res.json(updatedBooking);
      } else {
        res.status(404).json({ message: "Booking not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Delete a booking by ID
  deleteBooking: async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      if (booking) {
        await booking.remove();
        res.json({ message: "Booking deleted" });
      } else {
        res.status(404).json({ message: "Booking not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Update cleared status by ID
  updateClearedStatus: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedBooking = await updateClearedStatus(id);
      res.json(updatedBooking);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

const updateClearedStatus = async (id) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      id,
      { cleared: true },
      { new: true }
    );
    if (!booking) {
      throw new Error(`Booking with ID ${id} not found`);
    }
    return booking;
  } catch (error) {
    throw error;
  }
};

module.exports = bookingController;
