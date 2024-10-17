const nodemailer = require("nodemailer");
const { allEmails } = require("../template/email");
const { getTemplate } = require("../template/template");

const SMTP_HOST = "server.cloudnest.cfd";
const SMTP_PORT = 587;
const SMTP_USER = "promo@cloudnest.cfd";
const SMTP_PASS = "Dan@6361";
const SENDER_EMAIL = `"CloudNest" <promo@cloudnest.cfd>`;
const SUBJECT = "Affordable Domains, Hosting, SSL & VPS";
const EMAIL = "srikanth.k.prince@gmail.com";
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmailBatch = async () => {
  try {
    await transporter.sendMail({
      from: SENDER_EMAIL,
      to: EMAIL,
      subject: SUBJECT + 233,
      html: getTemplate(allEmails.promo),
    });
    console.log(`Email sent to: ${EMAIL}`);
  } catch (error) {
    console.error(`Error sending email to ${EMAIL}:`, error);
  }
};

sendEmailBatch();
