/* eslint-disable no-undef */
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = (data) => {
  const { name, lastName, email, info, schedule } = data;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PWD,
    },
  });

  async function main() {
    // send mail with defined transport object
    const mailToEnterprise = await transporter.sendMail({
      from: `${name + " " + lastName}  <${email}>`, // sender address
      to: "hamzachikriboudraa@gmail.com", // list of receivers
      subject: "Solicitude du demo", // Subject line
      text: `${info} Le solicitant voudrais que vous le contactez dans l'horarie: ${schedule}`, // plain text body
      html: `<b>${info}.<br> Le solicitant voudrais que vous le contactez dans l'horarie: ${schedule}</b>`, // html body
    });

    console.log("Message sent to enterprise: %s", mailToEnterprise.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

    const mailToClient = await transporter.sendMail({
      from: `EduDomain`,
      to: email,
      subject: "Nous avons reçu votre formulaire.",
      text: `Salut! ${
        name + " " + lastName
      }, \n Nous esperons que tout va bien. Nous vous contactera dans le creaneau que vous avez indique.\nA tout a l'heure! \n Cordialement,  \n \n EduDomain.>`,
    });

    console.log("Message transfere au client", mailToClient.messageId);
  }

  main().catch(console.error);
};

export default sendEmail;
