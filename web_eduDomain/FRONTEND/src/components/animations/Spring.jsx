import { useSpring, animated, useInView } from "@react-spring/web";

import "./Spring.scss";
import { Button } from "react-bootstrap";

const Spring = () => {
  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0,
      y: 100,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: {
      mass: 1,
      tension: 210,
      friction: 12,
    },
    once: false,
    threshold: 0.8,
  }));

  const [hdidan] = useSpring(() => ({
    from: { y: 0 },
    to: { y: 10 },
    loop: true,
    config: {
      mass: 1,
      tension: 210,
      friction: 12,
    },
  }));

  return (
    <animated.div className="final" ref={ref} style={springs}>
      <animated.div className="botona">
        <Button>Solution Precedent</Button>
      </animated.div>
      <div className="mess">
        <p>
          Les fonctionnalités présentées ici ne représentent qu&apos;un aperçu
          des capacités du logiciel. Pour une démonstration complète et
          personnalisée de toutes ses fonctionnalités, nous vous invitons à:
        </p>{" "}
        <animated.div className="demo-but" style={hdidan}>
          <Button>Demandez une demo</Button>
        </animated.div>
      </div>
      <animated.div className="botona">
        <Button>Solution Suivant</Button>
      </animated.div>
    </animated.div>
  );
};

export default Spring;
