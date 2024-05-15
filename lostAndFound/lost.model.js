const mongoose = require("mongoose");

const lostSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  station: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
});

const Lost = mongoose.model("Lost", lostSchema);

module.exports = Lost;
