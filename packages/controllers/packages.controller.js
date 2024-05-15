const Package = require("../packages.model");

// Create a new package
const createPackage = async (req, res) => {
  try {
    const newPackage = new Package({
      ...req.body,
    });
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all packages
const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single package by ID
const getPackageById = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id);
    if (!package) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.status(200).json(package);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a package by ID
const updatePackageById = async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.status(200).json(updatedPackage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a package by ID
const deletePackageById = async (req, res) => {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    if (!deletedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.status(200).json({ message: "Package deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateClearedStatus = async (id) => {
  try {
    const package = await Package.findByIdAndUpdate(
      id,
      { cleared: true },
      { new: true }
    );
    if (!package) {
      throw new Error(`Package with ID ${id} not found`);
    }
    return package;
  } catch (error) {
    throw error;
  }
};

// Export the functions as methods on an object
module.exports = {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackageById,
  deletePackageById,
  updateClearedStatus,
};
