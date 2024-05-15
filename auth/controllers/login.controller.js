const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const LoginModel = require("../auth.model");

async function getAlllogins(req, res) {
  const { email, password } = req.body;

  try {
    // Find the user based on the email
    const user = await LoginModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // If email and password are correct, generate a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, company: user.company },
      "your_secret_key",
      { expiresIn: "1h" }
    );

    // Return the JWT token and matched user details
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAlllogins,
};
