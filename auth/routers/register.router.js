const express = require("express");
const {
  register,
  getAllAccounts,
  changePassword,
} = require("../controllers/register.controller");

const registerRouter = express.Router();

// Register a new user
registerRouter.post("/api/register", register);

// Get all accounts
registerRouter.get("/api/accounts", getAllAccounts);

// Change password
registerRouter.put("/api/change-password", changePassword);

module.exports = registerRouter;
