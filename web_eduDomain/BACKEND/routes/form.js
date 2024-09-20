import bodyParser from "body-parser";
import { Router } from "express";
import sendEmail from "../helpers/send_mail.js";

const formRouter = Router();
formRouter.use(bodyParser.json());
formRouter.use(bodyParser.urlencoded({ extended: true }));

formRouter.post("/", (req, res) => {
  const data = req.body;

  console.log("Asi llega el body", data);

  if (!data) return res.status(400).send("Data not received");

  //pasarle a la funcion del mail los datos
  try {
    sendEmail(data);
  } catch (err) {
    res.status(401).send("Algo en sendEmail ha ido mal");
  }

  res.sendStatus(200);
});

formRouter.get("/:id", (req, res) => {
  const id = req.params.id;

  res.status(200).send(`El id recibido es: ${id}`);
});

export default formRouter;
