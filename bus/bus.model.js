const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  courrierPrice: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  schedules: [
    {
      type: String,
    },
  ],
  stations: [
    {
      stationName: {
        type: String,
        required: true,
      },
      destinations: [
        {
          name: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
});

const Bus = mongoose.model("Bus", BusSchema);

module.exports = Bus;
