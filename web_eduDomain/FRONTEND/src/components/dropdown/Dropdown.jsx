/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useInView, animated, useSprings } from "@react-spring/web";


export default function Dropdown({ button, drop }) {
  const [ref, springs] = useInView(() => ({
    from: {
      height: 0,
    },
    to: {
      height: 294,
    },

    once: false,
  }));

  // const styles = useSprings(() => ({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   duration: 20,
  // }));

  console.log("Dropdown", { button }, " mounts");
  return (
    <animated.div ref={ref} style={springs} className="dropdown">
      {drop.map(({ dButton, dButtonDesc, icon, route }, index) => {
        return (
          <React.Fragment key={index}>
            <Link to={route}>
              <div  className="mini cage">
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
