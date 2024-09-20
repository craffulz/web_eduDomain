import express from "express";
import dotenv from "dotenv";
import formRouter from "./routes/form.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const expressApp = express();

expressApp.use(express.static(path.join(__dirname, "public")));

expressApp.use(
  cors({
    origin: "http://localhost:5173", // Cambia a tu origen permitido
    methods: ["GET", "POST"], // Métodos permitidos
    credentials: true, // Permitir envío de cookies o autenticación si es necesario
  })
);
expressApp.use("/api/form", formRouter);


/**El siguiente metodo es para redirigir todas las rutas no API al frontend */
expressApp.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

expressApp.listen(3000, () => {
  console.log("Server is ON, port:", 3000);
});
