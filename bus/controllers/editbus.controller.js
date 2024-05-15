// controllers/busController.js

const Bus = require("../bus.model");

// Controller to edit bus details
exports.editBusDetails = async (req, res) => {
  const { id } = req.params;
  const {
    company,
    manager,
    contact,
    courrierPrice,
    images,
    schedules,
    stations,
  } = req.body;

  try {
    const updatedBus = await Bus.findByIdAndUpdate(
      id,
      {
        company,
        manager,
        contact,
        courrierPrice,
        images,
        schedules,
        stations,
      },
      { new: true }
    );

    if (!updatedBus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    res.status(200).json(updatedBus);
  } catch (error) {
    console.error("Error updating bus details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
