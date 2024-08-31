import { useState, useEffect } from "react";

import { XyzTransition } from "@animxyz/react";
import "./Feat.scss";

// eslint-disable-next-line react/prop-types
const Feat = () => {
  const [hola, setHola] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHola(true);
      console.log("hola");
    }, 2000);

    // Limpia el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, [])
  return (
    <div className="example-wrap">
      <XyzTransition duration={500} xyz="fade small-100%">
        <div className="example-grid example-grid-2 xyz-none">
          {hola &&
            [...Array(4)].map((_, index) => (
              <div className="square xyz-nested" key={index} />
            ))}
        </div>
      </XyzTransition>
    </div>
  );
};

export default Feat;
