/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Dropdown({ button, drop }) {
  console.log("Dropdown", { button }, " mounts");
  return (
    <div className="dropdown">
      {drop.map(({ dButton, dButtonDesc, icon }, index) => {
        return (
          <React.Fragment key={index}>
            <div className="mini cage">
              <div className="icon">
                <i className={icon}></i>
              </div>
              <div className="button">
                <span>{dButton}</span>
              </div>

              {/**<span>{dButtonDesc}</span>*/}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
