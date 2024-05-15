const express = require("express");
const { getAlllogins } = require("../controllers/login.controller");

const loginRouter = express.Router();

loginRouter.post("/api/login", getAlllogins);

module.exports = loginRouter;
