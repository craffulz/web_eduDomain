import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { motion } from "framer-motion";
import "./Solus.scss";

import res_sketch from "../../assets/solutions/res_sketch.jpg";
import res_fucsia_sketch from "../../assets/solutions/res_sketch_little.png";
import res_blue_sketch from "../../assets/solutions/res_sketch_little2.png";

import hierarchie_patrimoine from "../../assets/solutions/video_patrimoine.mp4";
import filtres_patrimoine from "../../assets/solutions/filtres_patrimoine.mp4";
import screen_patrimoine from "../../assets/solutions/screen_patrimoine.png";

const Solus = () => {
  const background = [
    { img: res_sketch, alt: "sketch dune residence" },
    { img: res_fucsia_sketch, alt: "sketch in fucsia dune residence" },
    { img: res_blue_sketch, alt: "blue sketch dune residence" },
  ];

  const patrimoine = {
    title: "Patrimoine",
    intro: `Le module
                <motion.div className="patrimoine"> Patrimoine </motion.div>
                offre une solution intégrale et efficace pour la gestion des
                différentes résidences que nous gérons, permettant un
                contrôle centralisé et simplifié de toutes les propriétés.
                Conçu avec une structure organisée, ce module facilite
                l'administration et le contrôle des résidences,
                permettant de localiser et de gérer chaque bâtiment,
                pavillon, couloir, chambre et unité de location de manière
                précise et efficace. Grâce à sa conception structurée, la
                gestion des espaces est optimisée, garantissant un accès
                rapide et une vue claire de l'état et de
                l'emplacement de chaque élément du patrimoine
                immobilier.`,

    explanations: [
      {
        media: hierarchie_patrimoine,
        description: {
          h3: "Hiérarchie Résidentielle ",
          p: `Le module Patrimoine offre un système de vues hiérarchiques
                    pour l&apos;organisation des résidences. Cela permet une
                    meilleure gestion et visualisation de la structure
                    organisationnelle des propriétés, facilitant
                    l&apos;identification et l&apos;accès aux informations
                    relatives à chaque résidence. Grâce à ces vues
                    hiérarchiques, les utilisateurs peuvent naviguer facilement
                    entre les différentes catégories, niveaux ou regroupements
                    de résidences, ce qui optimise la gestion du patrimoine et
                    améliore l&apos;efficacité dans la prise de décisions.`,
        },
      },
      {
        media: filtres_patrimoine,
        description: {
          h3: " Filtres Avancés",
          p: `Le système inclut des fonctionnalités telles que des
                    filtres, des recherches avancées et des visualisations
                    détaillées de chaque résidence, permettant un contrôle plus
                    précis sur les actifs et leur état. De plus, il facilite la
                    génération de rapports personnalisés et le suivi des
                    modifications ou mises à jour au sein de l&apos;inventaire
                    des résidences, contribuant ainsi à une meilleure
                    organisation et à une planification stratégique optimisée.`,
        },
      },
      {
        media: screen_patrimoine,
        description: {
          h3: "Transfert de Données ",
          p: `La fonctionnalité d&apos;importation et d&apos;exportation
                    permet aux administrateurs de gérer les données en masse,
                    facilitant les mises à jour périodiques et le transfert de
                    données entre systèmes. Le système supporte plusieurs
                    formats tels que CSV, PDF, et Excel, assurant une
                    compatibilité étendue.`,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="solus">
        <div className="background">
          <motion.div
            className="sketch"
            initial={{ opacity: 0, scale: 0.3, height: 0 }}
            whileInView={{ opacity: 1, scale: 1, height: "auto" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              className="res_sketch"
              src={res_sketch}
              alt="sketch dune residence"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="sketch-2"
            initial={{ opacity: 0, scale: 0.3, x: 700 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ threshold: 0.9, once: true }}
          >
            <img
              className="people_sketch"
              src={res_fucsia_sketch}
              alt="sketch dune residence"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="sketch-2"
            initial={{ opacity: 0, scale: 0.3, height: 0 }}
            whileInView={{ opacity: 1, scale: 1, height: "auto" }}
            transition={{ duration: 0.8 }}
            viewport={{ threshold: 0.6, once: true }}
          >
            <img
              className="people_sketch"
              src={res_blue_sketch}
              alt="sketch dune residence"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="ground">
          <div className="document">
            <div className="header">
              <motion.div
                className="title"
                initial={{ x: 100, scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h1>Patrimoine</h1>
              </motion.div>
              <motion.div
                className="description"
                initial={{ x: -1200, height: 0, scale: 0.6 }}
                whileInView={{ x: 0, height: "160px", scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <motion.div
                  className="paragraph"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                >
                  <p></p>
                </motion.div>
              </motion.div>
            </div>
            <div className="explaining">
              <motion.div
                className="screenshot"
                initial={{ y: 300, scale: 0.5 }}
                whileInView={{
                  y: 0,
                  scale: 1,
                }}
                viewport={{ threshold: 0.7, once: true }}
                transition={{ duration: 1.2 }}
              >
                <video src={hierarchie_patrimoine} muted loop autoPlay="true" />
              </motion.div>

              <motion.div
                className="description"
                initial={{ x: 200, height: 0, scale: 0.6 }}
                whileInView={{ x: 0, scale: 1 }}
                viewport={{ threshold: 0.5 }}
                transition={{ duration: 0.9 }}
              >
                <div className="paragraph">
                  <h3>Hiérarchie Résidentielle</h3>
                  <p>
                    Le module Patrimoine offre un système de vues hiérarchiques
                    pour l&apos;organisation des résidences. Cela permet une
                    meilleure gestion et visualisation de la structure
                    organisationnelle des propriétés, facilitant
                    l&apos;identification et l&apos;accès aux informations
                    relatives à chaque résidence. Grâce à ces vues
                    hiérarchiques, les utilisateurs peuvent naviguer facilement
                    entre les différentes catégories, niveaux ou regroupements
                    de résidences, ce qui optimise la gestion du patrimoine et
                    améliore l&apos;efficacité dans la prise de décisions.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="explaining">
              <motion.div
                className="screenshot"
                initial={{ y: 300, scale: 0.5 }}
                whileInView={{
                  y: 0,
                  scale: 1,
                }}
                viewport={{ threshold: 0.7, once: true }}
                transition={{ duration: 1.2 }}
              >
                <video src={filtres_patrimoine} muted loop autoPlay="true" />
              </motion.div>

              <motion.div
                className="description"
                initial={{ x: 200, height: 0, scale: 0.6 }}
                whileInView={{ x: 0, scale: 1 }}
                viewport={{ threshold: 0.5 }}
                transition={{ duration: 0.9 }}
              >
                <div className="paragraph">
                  <h3>Filtres Avancés</h3>
                  <p>
                    Le système inclut des fonctionnalités telles que des
                    filtres, des recherches avancées et des visualisations
                    détaillées de chaque résidence, permettant un contrôle plus
                    précis sur les actifs et leur état. De plus, il facilite la
                    génération de rapports personnalisés et le suivi des
                    modifications ou mises à jour au sein de l&apos;inventaire
                    des résidences, contribuant ainsi à une meilleure
                    organisation et à une planification stratégique optimisée.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="explaining">
              <motion.div
                className="screenshot"
                initial={{ y: 300, scale: 0.5 }}
                whileInView={{
                  y: 0,
                  scale: 1,
                }}
                viewport={{ threshold: 0.7, once: true }}
                transition={{ duration: 1.2 }}
              >
                <img src={screen_patrimoine} alt="Screen du module patrmoine" />
              </motion.div>

              <motion.div
                className="description"
                initial={{ x: 200, height: 0, scale: 0.6 }}
                whileInView={{ x: 0, scale: 1 }}
                viewport={{ threshold: 0.5 }}
                transition={{ duration: 0.9 }}
              >
                <div className="paragraph">
                  <h3>Transfert de Données</h3>
                  <p>
                    La fonctionnalité d&apos;importation et d&apos;exportation
                    permet aux administrateurs de gérer les données en masse,
                    facilitant les mises à jour périodiques et le transfert de
                    données entre systèmes. Le système supporte plusieurs
                    formats tels que CSV, PDF, et Excel, assurant une
                    compatibilité étendue.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Solus;
