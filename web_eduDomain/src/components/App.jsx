/* eslint-disable no-unused-vars */
import "../styles/App.scss";
import React from "react";
import Navbar from "./navbar/Navbar";
import Solutions from "./home/Solutions";
import Features from "./home/Features";
import Support from "./home/Support";
import Learning from "./home/Learning";
import Banner from "./home/Banner";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Solutions />
      <Features />
      <Footer/>
    </>
  );
};

export default App;
