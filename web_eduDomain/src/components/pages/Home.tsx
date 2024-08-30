import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "../Hero/Hero.jsx"
import Banner from "../home/Banner.jsx";
import Solutions from "../home/Solutions"; 
import Features from "../home/Features";
import Footer from "../Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      
      <Hero />
      <Solutions />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
