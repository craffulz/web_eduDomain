/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useTrail, animated, useInView } from "@react-spring/web";
export default function TituloRotador({ children, ...props }) {
  const items = React.Children.toArray(children);

  const [ref, inView] = useInView({
    threshold: 0.5,
    once: true,
  });

  const trail = useTrail(items.length, {
    config: { easing: "easeOut", velocity: 23 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 260,

    from: { opacity: 0, x: 260 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div ref={ref} key={index} style={style}>
          <animated.div>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
}
