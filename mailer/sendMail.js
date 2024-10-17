const nodemailer = require("nodemailer");
const fs = require("fs");
const { allEmails } = require("../template/email");

const EMAIL_LIST_PATH = "./emails.json";
const SMTP_HOST = "server.cloudnest.cfd";
const SMTP_PORT = 587;
const SMTP_USER = "promo@cloudnest.cfd";
const SMTP_PASS = "Dan@6361";
const SENDER_EMAIL = `"CloudNest" <promo@cloudnest.cfd>`;
const SUBJECT = "Affordable Domains, Hosting, SSL & VPS";
const BATCH_SIZE = 500;
const EMAIL_INTERVAL = 2000; // 5 second
const BATCH_WAIT_TIME = 30 * 60 * 1000; // 30 minutes

const emailList = JSON.parse(fs.readFileSync(EMAIL_LIST_PATH, "utf-8"));

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

const sendEmailBatch = async (emails) => {
  for (const email of emails) {
    try {
      await transporter.sendMail({
        from: SENDER_EMAIL,
        to: email,
        subject: SUBJECT,
        html: getTemplate(allEmails.promo),
      });
      console.log(`Email sent to: ${email}`);
    } catch (error) {
      console.error(`Error sending email to ${email}:`, error);
    }
    await new Promise((resolve) => setTimeout(resolve, EMAIL_INTERVAL));
  }
};

const sendEmails = async () => {
  const totalEmails = emailList.length;

  for (let i = 0; i < totalEmails; i += BATCH_SIZE) {
    const batch = emailList.slice(i, i + BATCH_SIZE);
    await sendEmailBatch(batch);

    if (i + BATCH_SIZE < totalEmails) {
      console.log(`Waiting for 30 minutes before sending the next batch...`);
      await new Promise((resolve) => setTimeout(resolve, BATCH_WAIT_TIME));
    }
  }
};

sendEmails()
  .then(() => {
    console.log("All emails have been sent.");
  })
  .catch((error) => {
    console.error("Error sending emails:", error);
  });
