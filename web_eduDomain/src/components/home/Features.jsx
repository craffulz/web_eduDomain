import React from "react";
import Rotate180 from "../Rotate180.jsx";

const Features = () => {
  console.log("Features mounted");
  const [mouseIn, setMouseIn] = React.useState(null);

  const features = [
    {
      h3: "Securité",
      icon: "fa-solid fa-shield-halved",
      p:
        "Protection des données sensibles," +
        " authentification et autorisation securisées," +
        " prévention contre les attaques.",
    },
    {
      h3: "Performance",
      icon: "fa-solid fa-chart-line",
      p:
        "Temps de réponse rapide, optimisation des requêtes," +
        " mise en cache.",
    },
    {
      h3: "Scalabilité",
      icon: "fa-solid fa-stairs",
      p:
        "Capacité à gérer une augmentation du nombre" +
        " d'utilisateurs et de transactions",
    },
    {
      h3: "Fiabilité",
      icon: "fa-solid fa-handshake",
      p: "Disponibilité du système, tolérance aux pannes, une version de réserve.",
    },
    {
      h3: "Ergonomie",
      icon: "fa-solid fa-face-smile",
      p: "Interface utilisateur intuitive et facile à utiliser.",
    },
    {
      h3: "Compatibilité",
      icon: "fa-solid fa-puzzle-piece",
      p:
        "Support des navigateurs web courants et des" +
        " différents appareils(ordinateurs, tablettes, smartphones).",
    },
  ];

  /**
   *Este onMouseEnter es para que cuando el mouse pase por encima de un feature, se muestre el <p> en vez de el <i> y el <h3>
   *
   *
   */

  const handleMouseEnter = (index) => {
    console.log("Mouse Enter");
    setTimeout(() => {
      console.log("Mouse Enter Timeout");
      setMouseIn(index);
    }, 200);
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave");
    setTimeout(() => {
      setMouseIn(null);
    }, 250);
  };

  return (
    <div className="features">
      <div className="head compo">
        <h2>Features</h2>
      </div>
      <div className="background">
        {features.map((feature, index) => {
          return (
            <React.Fragment key={index}>
              <Rotate180>
                <div
                  className="feature"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/**Lo que queremos aquí es que cuando hagamos onMouseEnter, se muestre el <p> en vez de el <i> y el <h3> */}
                  {mouseIn === index ? (
                    <p style={{ transform: "rotateY(180deg)" }}>{feature.p}</p>
                  ) : (
                    <>
                      <i className={feature.icon}></i>
                      <h3>{feature.h3}</h3>
                    </>
                  )}
                </div>
              </Rotate180>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
