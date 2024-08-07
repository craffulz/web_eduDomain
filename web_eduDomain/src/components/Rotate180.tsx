import React from "react";
import { animated, useSpring } from "@react-spring/web";
const Rotate180 = ({ children }) => {
  const [styles, api] = useSpring(() => ({
    transform: "rotateY(0deg)", translateX:'0px',
    opacity: 1,
    cursor: "default",
  }));

  const handleMouseEnter = () => {
    api.start({
      transform: "rotateY(180deg)", translateX:'55px',
      cursor: "pointer",
      opacity: 1,
      config: { duration: 500 },
    });
  };
  const handleMouseLeave = () => {
    api.start({
      transform: "rotateY(0deg)", translateX:'0px',
      cursor: "default",
      opacity: 1,
    });
  };

  return (
    <animated.div
      className="rotate180"
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </animated.div>
  );
};

export default Rotate180;
