import "../styles/App.scss";
import Home from "./Pages/Home.tsx";
import { Routes, Route } from "react-router-dom";
import  Patrimoine  from "../components/Solutions/Patrimoine.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patrimoine" element={<Patrimoine />} />
      </Routes>
    </>
  );
};

export default App;
