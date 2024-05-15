const express = require("express");
const displayBusRouter = express.Router();
const {
  getAllBuses,
  getBusById,
  getBusByName,
} = require("../controllers/displayBus.controller");

// Route for getting all buses
displayBusRouter.get("/api/buses", getAllBuses);

// Route for getting a bus by ID
displayBusRouter.get("/api/bus/:id", getBusById);

// Route for getting a bus by name
displayBusRouter.get("/api/bus/name/:name", getBusByName);

module.exports = displayBusRouter;
