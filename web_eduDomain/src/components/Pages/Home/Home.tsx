import React from "react";
import Navbar from "../../Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import Solutions from "./Solutions/Solutions.jsx";
import Features from "./Features/Features.jsx";
import Footer from "../../Footer/Footer.js";
import Clients from "./Clients/Clients.jsx";
const Home = () => {
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
