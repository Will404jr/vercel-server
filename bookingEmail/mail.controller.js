const nodemailer = require("nodemailer");

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "wjr46269@gmail.com", // Your email address
    pass: "gkpfylwfovacmedy", // Your email password
  },
});

// Function to send email
async function sendTicketEmail(data) {
  try {
    // Extract data from the JSON object
    const {
      bookingID,
      fullNames,
      email,
      tellNumber,
      destination,
      chosenBus,
      station,
      selectedDate,
      shippingTime,
      selectedSeat,
    } = data;

    // Compose email message
    const mailOptions = {
      from: "wjr46269@gmail.com", // Sender address
      to: email, // Recipient address
      subject: "Bus Ticket Details", // Subject line
      html: `
        <h1>Bus Ticket Details</h1>
        <p>Dear ${fullNames},</p>
        <p>Your journey with ticket ID ${bookingID} has been booked.</p>
        <p>Destination: ${destination}</p>
        <p>Chosen Bus Company: ${chosenBus}</p>
        <p>Station: ${station}</p>
        <p>Travel date: ${selectedDate}</p>
        <p>Travel Time: ${shippingTime}</p>
        <p>Seat: ${selectedSeat}</p>
        <p>If you have any questions, please send us an email.</p>
        <p>Best regards,</p>
        <p>Tripify.com</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    throw error;
  }
}

module.exports = { sendTicketEmail };
