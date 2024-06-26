const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const registerRouter = require("./auth/routers/register.router");
const loginRouter = require("./auth/routers/login.router");
const busRouter = require("./bus/routers/bus.router");
const displayBusRouter = require("./bus/routers/displayBus.router");
const editBusRouter = require("./bus/routers/editbus.router");
const bookingsRouter = require("./bookings/routers/bookings.router");
const packageRouter = require("./packages/routers/packages.router");
const lostRouter = require("./lostAndFound/routers/lost.router");
const otpRouter = require("./OTP/otp.router");
const adminEmailRouter = require("./adminEmail/mail.router");
const bookingClearanceRouter = require("./bookingClearance/bookingClearance.router");
const packageClearanceRouter = require("./packageClearance/packageClearance.router");
const bookingMailRouter = require("./bookingEmail/mail.router");
const packageMailRouter = require("./packageEmail/mail.router");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" }));
const corsConfig = {
  origin: ["http://localhost:3000", "https://tripify-com.vercel.app"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

app.options("", cors(corsConfig));
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

//Authentication
app.use(registerRouter);
app.use(loginRouter);

//Buses
app.use(busRouter);
app.use(displayBusRouter);
app.use(editBusRouter);

//Bookings
app.use(bookingsRouter);

//Packages
app.use(packageRouter);

//LostandFound
app.use(lostRouter);

//OTP
app.use(otpRouter);

//Send credentials to new admin
app.use(adminEmailRouter);

//Bookings and packages clearance
app.use(bookingClearanceRouter);
app.use(packageClearanceRouter);

//Ticket emails
app.use(bookingMailRouter);
app.use(packageMailRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
