/* eslint-disable no-undef */

import dotenv from "dotenv";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
dotenv.config();

// Configura AWS SES
const sesClient = new SESClient({
  region: "eu-north-1", 
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Función para enviar un correo electrónico usando SES
const sendEmail = async (data) => {
  const { name, lastName, email, schedule, info } = data;

  const params = {
    Destination: {
      ToAddresses: [email, "reports@hamzachikri.online"],
    },
    Message: {
      Body: {
        Text: {
          Data: `Hey ${name} ${lastName},
          \n Merci beaucoup d'avoir rempli le formulaire de contact.
          \nNotre département de support vous contactera à l'heure indiquée [${schedule}].
          \nCordialement, l'équipe d'EduDomain.`,
        },
      },
      Subject: { Data: info ? info : "Demande de démonstration" },
    },
    Source: "reports@hamzachikri.online", // Verifica esta dirección en Amazon SES
  };

  try {
    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);
    console.log("Correo enviado con éxito:", result);
  } catch (err) {
    console.error("Error al enviar el correo:", err);
  }
};

export default sendEmail;
