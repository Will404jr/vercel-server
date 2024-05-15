const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const registerRouter = require("./auth/routers/register.router");
const loginRouter = require("./auth/routers/login.router");
const app = express();
const port = process.env.PORT || 5000;

const corsConfig = {
  origin: "*",
  Credential: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};
app.use(cors(corsConfig));

mongoose
  .connect(
    "mongodb+srv://Junior:test01@cluster0.46lb860.mongodb.net/Tripify?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.error("Database connection failed:", e);
  });

// Endpoint 1: Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

// Endpoint 2: Sample endpoint
app.get("/api/sample", (req, res) => {
  const data = {
    message: "This is a sample endpoint.",
    date: new Date(),
  };
  res.json(data);
});

// Endpoint 3: Hello endpoint
app.get("/api/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.use(registerRouter);
app.use(loginRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
