const Bus = require("../bus.model");

async function register(req, res) {
  try {
    const {
      company,
      manager,
      contact,
      courrierPrice,
      schedules,
      stations,
      images,
    } = req.body;

    // Create a new bus instance
    const newBus = new Bus({
      company: company,
      manager: manager,
      contact: contact,
      courrierPrice: courrierPrice,
      schedules: schedules,
      stations: stations,
      images: images,
    });

    // Save the new bus to the database
    const savedBus = await newBus.save();

    res.status(200).json(savedBus);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  register,
};
