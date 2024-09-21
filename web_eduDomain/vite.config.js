import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //Lo que sigue sirve para redirigir las peticiones que se hagan desde el frontend
  server: {
    proxy: {
      "/api": {
        target: "https://hamzachikri.online", // Dirección de tu backend Express
        changeOrigin: true,
         // Quitar el prefijo "/api" en las peticiones
      },
    },
  },
});
