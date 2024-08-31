import "../styles/App.scss";
import Home from "./Pages/Home.tsx";
import { Routes, Route } from "react-router-dom";
import Solus from "./Pages/Solus.tsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solus />} />
      </Routes>
    </>
  );
};

export default App;
