const express = require("express");
const packageClearanceRouter = express.Router();
const packageClearanceController = require("./packageClearance.controller");

// POST /api/bookingClearance
packageClearanceRouter.post(
  "/api/packageClearance",
  packageClearanceController.clearPackage
);

packageClearanceRouter.get(
  "/api/packageClearance",
  packageClearanceController.getClearPackages
);

module.exports = packageClearanceRouter;
