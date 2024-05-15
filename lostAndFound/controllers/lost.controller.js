const Lost = require("../lost.model");

// Controller function to create a new lost item
exports.create = async (req, res) => {
  try {
    const { description, company, station, contact, images } = req.body;
    const newLostItem = new Lost({
      description,
      company,
      station,
      contact,
      images, // Parse images array from JSON string
    });

    const savedLostItem = await newLostItem.save(); // Save the new lost item to the database
    res.status(201).send(savedLostItem);
  } catch (error) {
    res.status(500).send({ message: "Error creating new lost item", error });
  }
};
// Controller function to retrieve all lost items
exports.getAllLostItems = async (req, res) => {
  try {
    const lostItems = await Lost.find();
    res.json(lostItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a specific lost item by its ID
exports.deleteLostItem = async (req, res) => {
  try {
    const deletedLostItem = await Lost.findByIdAndDelete(req.params.id);
    if (!deletedLostItem) {
      return res.status(404).json({ message: "Lost item not found" });
    }
    res.json({ message: "Lost item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
