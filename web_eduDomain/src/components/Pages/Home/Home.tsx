import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../../Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import Solutions from "./Solutions/Solutions.jsx";
import Features from "./Features/Features.jsx";
import Footer from "../../Footer/Footer.js";
import Clients from "./Clients/Clients.jsx";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Detectar y manejar el desplazamiento cuando la URL cambia
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <Features />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
