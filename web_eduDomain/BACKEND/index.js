/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import formRouter from "./routes/form.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const expressApp = express();

expressApp.use(express.static(path.join(__dirname, "public")));

expressApp.use("/api/form", formRouter);

/**El siguiente metodo es para redirigir todas las rutas no API al frontend */
expressApp.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

expressApp.listen(process.env.PORT, () => {
  console.log("Server is ON, port:", process.env.PORT);
});
