const express = require("express");
const busRouter = express.Router();
const busController = require("../controllers/bus.controller");

// Route for registering a new bus
busRouter.post("/api/busRegister", busController.register);

module.exports = busRouter;
