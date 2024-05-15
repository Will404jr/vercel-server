const express = require("express");
const packageRouter = express.Router();
const packageController = require("../controllers/packages.controller");

packageRouter.post("/api/packages", packageController.createPackage);
packageRouter.get("/api/packages", packageController.getAllPackages);
packageRouter.get("/api/packages/:id", packageController.getPackageById);
packageRouter.put("/api/packages/:id", packageController.updatePackageById);
packageRouter.delete("/api/packages/:id", packageController.deletePackageById);

// Update cleared status of a package by ID
packageRouter.patch("/api/packages/:id/clear", async (req, res) => {
  try {
    const package = await packageController.updateClearedStatus(req.params.id);
    res.status(200).json(package);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = packageRouter;
