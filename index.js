const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
