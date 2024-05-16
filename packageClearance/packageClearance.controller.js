const PackageClearance = require("./packageClearance.model");

const clearPackage = async (req, res) => {
  try {
    const { packageID, email } = req.body;

    // Create a new booking clearance instance
    const newPackageClearance = new PackageClearance({
      packageID,
      email,
    });

    // Save the booking clearance to the database
    await newPackageClearance.save();

    res.status(200).json({ message: "Package cleared successfully." });
  } catch (error) {
    console.error("Error clearing package:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const getClearPackages = async (req, res) => {
  try {
    // Fetch all cleared bookings from the database
    const clearPackages = await PackageClearance.find();

    res.status(200).json(clearPackages);
  } catch (error) {
    console.error("Error fetching cleared packages:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  clearPackage,
  getClearPackages,
};
