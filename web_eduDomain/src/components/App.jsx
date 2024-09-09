import "../styles/App.scss";


import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home.tsx";
import  Patrimoine  from "./Pages/Patrimoine/Patrimoine.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Support from "./Pages/Support/Support.jsx";
import Formation from "./Pages/Formation/Formation.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patrimoine" element={<Patrimoine />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support/>} />
        <Route path="/formation" element={<Formation/>} />
      </Routes>
    </>
  );
};

export default App;
