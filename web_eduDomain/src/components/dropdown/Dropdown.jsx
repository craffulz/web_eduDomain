/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function Dropdown({ button, drop }) {
  console.log("Dropdown", { button }, " mounts");
  return (
    <div className="dropdown">
      {drop.map(({ dButton, dButtonDesc, icon, route }, index) => {
        return (
          <React.Fragment key={index}>
            <Link to={route}>
              <div className="mini cage">
                <div className="icon">
                  <i className={icon}></i>
                </div>
                <div className="button">
                  <span>{dButton}</span>
                </div>

                {/**<span>{dButtonDesc}</span>*/}
              </div>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}
