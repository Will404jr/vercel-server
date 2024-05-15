const Bus = require("../bus.model");

async function getAllBuses(req, res) {
  try {
    // Fetch all buses from the database
    const buses = await Bus.find();
    res.status(200).json(buses);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

async function getBusById(req, res) {
  try {
    const busId = req.params.id;

    // Find the bus by ID in the database
    const bus = await Bus.findById(busId);

    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    res.status(200).json(bus);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

async function getBusByName(req, res) {
  try {
    const busName = req.params.name;

    // Find the bus by name in the database
    const bus = await Bus.findOne({ company: busName });

    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    res.status(200).json(bus);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllBuses,
  getBusById,
  getBusByName,
};
