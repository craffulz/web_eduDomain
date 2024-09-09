/* eslint-disable react/prop-types */
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import "./InfoPage.scss";
import { Link } from "react-router-dom";

const InfoPage = ({header, supports}) => {
  return (
    <>
      <Navbar />
      <div className="support">
        <div className="document">
          <div className="header">
            <h1>{header.h1}</h1>
            <p>{header.p}</p>
          </div>
          <div className="types">
            {supports.map(({ icon, type, description, route }, index) => {
              return (
                <div className="cage" key={index}>
                  <div className="icon">
                    <img src={icon} />
                  </div>
                  <div className="data">
                    <h3>{type}</h3>
                    <p>{description}</p>
                    {route && (
                      <div className="icon">
                        <Link to={route}>
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoPage;
