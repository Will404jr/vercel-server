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
      packageID,
      fullNames,
      email,
      tellNumber,
      recipientsNames,
      recipientsNumber,
      destination,
      chosenBus,
      shippingDate,
      shippingTime,
    } = data;

    // Compose email message
    const mailOptions = {
      from: "wjr46269@gmail.com", // Sender address
      to: email, // Recipient address
      subject: "Package Shipment Details", // Subject line
      html: `
        <h1>Package Shipment Details</h1>
        <p>Dear ${fullNames},</p>
        <p>Your package with ID ${packageID} is scheduled for shipment.</p>
        <p>Recipient: ${recipientsNames}</p>
        <p>Destination: ${destination}</p>
        <p>Chosen Bus Company: ${chosenBus}</p>
        <p>Shipping Date: ${shippingDate}</p>
        <p>Shipping Time: ${shippingTime}</p>
        <p>If you have any questions, please contact us at ${tellNumber}.</p>
        <p>Best regards,</p>
        <p>Your Shipping Team</p>
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
