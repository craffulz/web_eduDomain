/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useSpring, useInView, animated } from "@react-spring/web";

export default function FromX({ children }) {
  const [ref, inView] = useInView({
    once: false,
    threshold: 0.5,
  });

  const styles = useSpring({
    from: {
      opacity: 0.8,
      transform: "translateX(-70px)",
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0px)" : "translateX(-70px)",
    },
    config: {
      tension: 200,
      friction: 50,
      mass: 4,
      easing: "ease-in-out",
    },
  });
  console.log("In view: ", inView);

  return (
    <animated.div className="animated" ref={ref} style={styles}>
      {children}
    </animated.div>
  );
}
