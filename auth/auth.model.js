const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Enforce uniqueness for email
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true, // Default account type is "user"
  },
  company: {
    type: String,
    required: false, // Default account type is "user"
  },
});

const collection = new mongoose.model("Auth", AuthSchema);

module.exports = collection;
