const express = require("express");
const lostRouter = express.Router();
const lostController = require("../controllers/lost.controller");

// Route to create a new lost item
lostRouter.post("/api/lost", lostController.create);

// Route to retrieve all lost items
lostRouter.get("/api/lost", lostController.getAllLostItems);

// Route to delete a specific lost item by its ID
lostRouter.delete("/api/lost/:id", lostController.deleteLostItem);

module.exports = lostRouter;
