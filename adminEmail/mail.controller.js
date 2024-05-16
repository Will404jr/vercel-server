const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "wjr46269@gmail.com",
    pass: "gkpfylwfovacmedy",
  },
});

// Function to send email with generated password
const sendEmailWithPassword = (email, password) => {
  const mailOptions = {
    from: "wjr46269@gmail.com",
    to: email,
    subject: "Your New Admin Password",
    text: `Your new password is: ${password}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = { sendEmailWithPassword };
