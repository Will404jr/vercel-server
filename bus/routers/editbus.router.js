const express = require("express");
const editBusRouter = express.Router();
const busController = require("../controllers/editbus.controller");

// Route to edit bus details
editBusRouter.put("/api/editBus/:id", busController.editBusDetails);

module.exports = editBusRouter;
