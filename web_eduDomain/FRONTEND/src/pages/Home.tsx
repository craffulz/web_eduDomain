import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


import Hero from "../components/hero/Hero.jsx";
import Solutions from "../components/solutions/Solutions.jsx";
import Features from "../components/features/Features.jsx";
import Footer from "../components/footer/Footer.jsx";
import Clients from "../components/clients/Clients.jsx";
import NavabarPicker from "../components/navbarPicker/NavbarPicker.jsx";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    
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
      <NavabarPicker />
      <Hero />
      <Solutions />
      <Features />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
