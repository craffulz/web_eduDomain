/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import { animated, useSpring } from "@react-spring/web";

export default function Dropdown({ drop }) {
  console.log("Dropdowns mounts");

  const [springs] = useSpring(() => ({
    from: {opacity: 0 },
    to: {opacity: 0.9},
  }));
  // const styles = useSprings(() => ({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   duration: 20,
  // }));

  return (
    <animated.div style={springs} className="dropdown">
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
    </animated.div>
  );
}
