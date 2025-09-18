import { text } from "express";
import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagelink.com",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHTML = mailGenerator.generate(options.mailgenContent);

  var transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@examplmail.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHTML,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed silently. Make sure you have provided your MAILTAP credentials in the .env file",
    );
    console.error("Error:", error);
  }
};

const emailVerificationContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our app, We are excited to have you on board.",
      action: {
        instructions: "To verify your email please click on this button",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help or have any queries? Just reply to this email, we would love to help.",
    },
  };
};

const forgotPasswordEmailContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "Request to reset the password of your account.",
      action: {
        instructions: "To reset your password click on this button",
        button: {
          color: "#1e6994ff",
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help or have any queries? Just reply to this email, we'd love to help.",
    },
  };
};

export { emailVerificationContent, forgotPasswordEmailContent, sendEmail };
