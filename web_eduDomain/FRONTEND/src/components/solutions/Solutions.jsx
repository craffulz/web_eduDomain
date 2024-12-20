import React from "react";
import FromX from "../animations/From-X";

import "./Solutions.scss";
import fondo_soluciones from "../../assets/fondos/fondo_soluciones.png";

import { useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
const Solutions = () => {
  /**
   * Array con los datos que contienen cada una de las soluciones
   * que hay en esta seccion
   */
  const solutions = [
    {
      h3: "Gestion du patrimoine immobilier",
      p:
        "La gestion du patrimoine immobilier dans EduDomain est conçue pour offrir une vue" +
        " hiérarchique et intégrée des résidences universitaires.",
    },
    {
      h3: "Gestion des clients et des contrats",
      p:
        "Le tableau de bord de gestion des clients et des contrats est conçu pour centraliser et optimiser" +
        " les tâches administratives liées aux clients, aux contrats et aux dossiers de location",
    },
    {
      h3: "Gestion des réclamations",
      p:
        "Le module de gestion des réclamations se concentre sur la répartition des différents types de" +
        " plaintes en capturant et en adressant les problèmes liés aux installations, aux matériels...",
    },
    {
      h3: "Demande de logement pour étudiants",
      p:
        "Ce module offre une interface interactive pour guider les étudiants à travers les étapes de" +
        " demande de logement, depuis l'inscription jusqu'à la sélection d'une unité.",
    },
    {
      h3: "Tableau de bord et reporting",
      p:
        "EduDomain est concus pour être compris d'un seul coup" +
        " d’œil, en offrirant une visualisation en temps réel des KPIs définies pour superviser les" +
        "résidences universitaires.",
    },
    {
      h3: "Gestion des index de consommation",
      p:
        "Le module de gestion des consommations d'eau et d'électricité est principalement conçu pour" +
        " surveiller et gérer la consommation des utilités de chaque unité locative",
    },
  ];
  /**
   * Creamos un state un momento para una cosa luego vemos si se queda o no
   */
  // const [savoir, setSavoir] = React.useState(0);

  /**
   * Creamos el useSpring para el efecto de la animacion para que nos salga un link etc
   * cuando pasamos el mouse por encima de la caja
   */

  const [styles, api] = useSpring(() => ({
    from: { opacity: 0 },
  }));

  const handleMouseEnter = () => {
    // setSavoir(index);
    console.log("mouse enter");
    console.log(styles.opacity);
    api.start({ opacity: 0.5, ease: "easeIn" });
  };

  const handleMouseLeave = () => {
    console.log("mouse leave");
    api.start({ opacity: 0 });
    console.log(styles.opacity);
  };

  return (
    <div className="solutions">
      <div className="head compo">
        <h2>Solutions</h2>
      </div>

      <div className="grid">
        {solutions.map((solution, index) => {
          return (
            <React.Fragment key={index}>
              <FromX>
                <Link
                  to="/patrimoine"
                  style={{
                    color: "$brand-color",
                  }}
                >
                  <div
                    className="cage"
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="animated-cage">
                      <div className="img">
                        <img
                          src={fondo_soluciones}
                          alt="screenshot of module patrimoin"
                        />
                      </div>

                      {/* {savoir === index && (
                        <animated.div className="ensavoir" style={styles}>
                          <h3>En Savoir Plus</h3>
                        </animated.div>
                      )} */}
                    </div>

                    <div className="description">
                      <h3>{solution.h3}</h3>
                      <p className="dfk">{solution.p}</p>
                    </div>
                  </div>
                </Link>
              </FromX>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Solutions;
