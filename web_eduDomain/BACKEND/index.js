import express from "express";
import dotenv from "dotenv";
import formRouter from "./routes/form.js";
import cors from "cors";

dotenv.config();

const expressApp = express();
expressApp.use(
  cors({
    origin: "http://localhost:5173", // Cambia a tu origen permitido
    methods: ["GET", "POST"], // Métodos permitidos
    credentials: true, // Permitir envío de cookies o autenticación si es necesario
  })
);
expressApp.use("/form", formRouter);

expressApp.listen(3000, () => {
  console.log("Server is ON, port:", 3000);
});
