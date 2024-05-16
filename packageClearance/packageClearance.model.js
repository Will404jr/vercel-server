const mongoose = require("mongoose");

const PackageClearanceSchema = new mongoose.Schema({
  packageID: {
    type: String,
    required: true,
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

const PackageClearance = mongoose.model(
  "PackageClearance",
  PackageClearanceSchema
);

module.exports = PackageClearance;
