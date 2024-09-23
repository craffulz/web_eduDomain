import Solus from "../components/solution/Solus.tsx";
import { motion } from "framer-motion";

import res_sketch from "../assets/solutions/res_sketch.webp";
import res_fucsia_sketch from "../assets/solutions/res_sketch_little.webp";
import res_blue_sketch from "../assets/solutions/res_sketch_little2.webp";

import hierarchie_patrimoine from "../assets/solutions/video_patrimoine.mp4";
import filtres_patrimoine from "../assets/solutions/filtres_patrimoine.mp4";
import screen_patrimoine from "../assets/solutions/screen_patrimoine.webp";

const Patrimoine = () => {
  const background = [
    { img: res_sketch, alt: "sketch dune residence" },
    { img: res_fucsia_sketch, alt: "sketch in fucsia dune residence" },
    { img: res_blue_sketch, alt: "blue sketch dune residence" },
  ];

  const solution = {
    title: "Patrimoine",
    intro: `Le module
                    ${(
                      <motion.div className="patrimoine">
                        {" "}
                        Patrimoine{" "}
                      </motion.div>
                    )}
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

    explanation: [
      {
        media: hierarchie_patrimoine,
        description: {
          h3: "Hiérarchie Résidentielle ",
          p: `Le module Patrimoine offre un système de vues hiérarchiques
                        pour l'organisation des résidences. Cela permet une
                        meilleure gestion et visualisation de la structure
                        organisationnelle des propriétés, facilitant
                        l'identification et l'accès aux informations
                        relatives à chaque résidence. Grâce à ces vues
                        hiérarchiques, les utilisateurs peuvent naviguer facilement
                        entre les différentes catégories, niveaux ou regroupements
                        de résidences, ce qui optimise la gestion du patrimoine et
                        améliore l'efficacité dans la prise de décisions.`,
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
                        modifications ou mises à jour au sein de l'inventaire
                        des résidences, contribuant ainsi à une meilleure
                        organisation et à une planification stratégique optimisée.`,
        },
      },
      {
        media: {
          img: screen_patrimoine,
          alt: "screenshot de module patrimoine",
        },
        description: {
          h3: "Transfert de Données ",
          p: `La fonctionnalité d'importation et d'exportation
                        permet aux administrateurs de gérer les données en masse,
                        facilitant les mises à jour périodiques et le transfert de
                        données entre systèmes. Le système supporte plusieurs
                        formats tels que CSV, PDF, et Excel, assurant une
                        compatibilité étendue.`,
        },
      },
    ],
  };
  return <Solus background={background} solution={solution} />;
};

export default Patrimoine;
