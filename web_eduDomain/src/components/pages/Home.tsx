import React from "react";
import Navbar from "../navbar/Navbar";
import Banner from "../home/Banner.jsx";
import Solutions from "../home/Solutions"; 
import Features from "../home/Features";
import Footer from "../Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Solutions />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
