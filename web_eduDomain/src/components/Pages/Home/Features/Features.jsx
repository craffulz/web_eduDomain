/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars


const Features = () => {
  console.log("Features mounted");

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

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className="features">
      <div className="head compo">
        <h2>Features</h2>
      </div>
      <div className="background">
        {features.map((feature, index) => (
          <motion.div
            className="feature"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ position: "relative" }}
          >
            {/* Icono y título */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{
                opacity: hoveredIndex === index ? 0 : 1,
                scale: hoveredIndex === index ? 0.3 : 1,
              }}
              transition={{ duration: 0.5 }}
              style={{
                display: hoveredIndex === index ? "none" : "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <i className={feature.icon}></i>
              <h3>{feature.h3}</h3>
            </motion.div>

            {/* Párrafo oculto que se muestra al hacer hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 0.3,
              }}
              transition={{ duration: 0.5 }}
              style={{
                display: hoveredIndex === index ? "block" : "none",
                position: "absolute",
                
                transform: "translate(-50%, -50%)",
              }}
            >
              <p>{feature.p}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
  // return (
  //   <div className="features">
  //     <div className="head compo">
  //       <h2>Features</h2>
  //     </div>
  //     <div className="background">
  //       {features.map((feature, index) => {
  //         return (
  //           <React.Fragment key={index}>
  //             <div
  //               style={{ position: "relative", zIndex: "0", opacity: "1" }}
  //               className="feature"
  //             >
  //               <p>{feature.p}</p>
  //             </div>
  //             <div
  //               style={{ position: "absolute", zIndex: "2", opacity: "1" }}
  //               className="feature"
  //             >
  //               <i className={feature.icon}></i>
  //               <h3>{feature.h3}</h3>
  //             </div>

  //             {/**1-Queremos que el titulo de la feature y el parrafo esten uno encima de otro.
  //              *    Estando el titulo por encima.
  //              * 2-Cuando pasemos el raton por encima se ejecute la animacion Spring y haga desaparecer
  //              *    el titulo.
  //              * 3-Cuando saquemos el raton:
  //              *                      1-Animacion marcha atras?
  //              *                      2-Simplemente vuelva el titulo?
  //              */}
  //           </React.Fragment>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};

export default Features;
