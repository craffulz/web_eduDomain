/* eslint-disable react/prop-types */
import "./LiteNavbar.scss";
import Dropdown from "../../dropdown/Dropdown";
import { Link } from "react-router-dom";
import { useState } from "react";

const LiteNavbar = ({ navbarButtons }) => {
  const [openLiteDrop, setLiteOpenDrop] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);

  const handleClickOnLiteDrop = () => {
    setLiteOpenDrop((prev) => !prev);
  };
  const handleClickOnDrop = () => {
    console.log("click", openDrop);
    setOpenDrop((prev) => !prev);
  };

  return (
    <div className="liteNavbar">
      <div className="brandname">
        <Link to="/#hero">EduDomain</Link>
      </div>
      <div className="liteDrop">
        <i
          className="fa-solid fa-caret-down"
          onClick={handleClickOnLiteDrop}
        ></i>
      </div>

      {openLiteDrop && (
        <div className="drop">
          {navbarButtons.map(({ button, drop }, index) => (
            <div key={index} className="butt" onClick={handleClickOnDrop}>
              {typeof button === "string" ? (
                <>
                  <div className="button">
                    {button}
                    {openDrop && (
                      <Dropdown
                        className="dropsolu"
                        button={button}
                        drop={drop}
                        onClick={handleClickOnDrop}
                      />
                    )}
                  </div>
                </>
              ) : (
                <Link to={button.route}>
                  <div className="button">{button.button}</div>
                </Link>
              )}
            </div>
          ))}
          <div className="above">
            <a href="/contact" className="btn-demo">
              Demandez une Démo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiteNavbar;
