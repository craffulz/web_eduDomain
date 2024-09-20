import nodemailer from "nodemailer";

const sendEmail = (data) => {
  const { name, lastName, email, info, schedule } = data;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "hamzachikriboudraa@gmail.com",
      pass: "eelb dfcd dwvh nuws",
    },
  });

  async function main() {
    // send mail with defined transport object
    const infoA = await transporter.sendMail({
      from: `${name + " " + lastName}  <${email}>`, // sender address
      to: "hamzachikriboudraa@gmail.com", // list of receivers
      subject: "Solicitude du demo", // Subject line
      text: `${info} Le solicitant voudrais que vous le contactez dans l'horarie: ${schedule}`, // plain text body
      html: `<b>${info}.<br> Le solicitant voudrais que vous le contactez dans l'horarie: ${schedule}</b>`, // html body
    });

    console.log("Message sent: %s", infoA.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  main().catch(console.error);
};

export default sendEmail;
