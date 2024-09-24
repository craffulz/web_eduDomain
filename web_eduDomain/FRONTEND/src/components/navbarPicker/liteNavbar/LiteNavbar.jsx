/* eslint-disable react/prop-types */
import "./LiteNavbar.scss";
import Dropdown from "../../dropdown/Dropdown";
import { Link } from "react-router-dom";
import { useState } from "react";

const LiteNavbar = ({ navbarButtons }) => {
  const [openLiteDrop, setLiteOpenDrop] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [indexer, setIndexer] = useState(null);
  const handleClickOnLiteDrop = () => {
    setLiteOpenDrop((prev) => !prev);
  };
  const handleClickOnDrop = (index) => {
    console.log("click", openDrop);
    setIndexer(index);
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
            <div
              key={index}
              className="butt"
              onClick={() => {
                handleClickOnDrop(index);
              }}
            >
              {typeof button === "string" ? (
                <>
                  <div className="button">
                    {button}
                    {(index === indexer) && openDrop && (
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
