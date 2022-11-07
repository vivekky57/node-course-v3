const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const sendgridAPIKey = "";

// sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "andrew@mead.io",
    subject: "Thanks for joining in ",
    text: `Welcome to the app, ${name}. Let me know you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "vivekky57@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I have to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
