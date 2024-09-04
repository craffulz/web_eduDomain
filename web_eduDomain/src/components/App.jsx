import "../styles/App.scss";


import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home.tsx";
import  Patrimoine  from "./Pages/Patrimoine/Patrimoine.jsx";
import Contact from "./Pages/Contact/Contact.jsx";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patrimoine" element={<Patrimoine />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
