import InfoPage from "../components/infoPage/InfoPage.jsx";

import online from "../assets/formation/online.svg";
import repo from "../assets/formation/repo.svg";
import delivery from "../assets/formation/delivery.svg";

const Formation = () => {
  const header = {
    h1: "Plan de Formation",
    p: "Choisissez le plan de formation qui convient le mieux à votre entreprise",
  };

  const formations = [
    {
      icon: online,
      type: "On-Ligne",
      description:
        " Grâce à cette méthode, vos équipes pourront acquérir les compétences" +
        "nécessaires en temps réel, tout en étant situées n'importe où. Le soutien direct " +
        "de l'instructeur garantit une compréhension approfondie du programme et une adaptation" +
        " rapide aux nouvelles compétences requises.",
    },
    {
      icon: delivery,
      type: "Presentielle",
      description:
        "Notre équipe se rendra directement dans vos locaux pour former vos employés à " +
        "l'utilisation du logiciel EduDomain. Cette approche permet un apprentissage direct et interactif, " +
        "avec un soutien immédiat de l'instructeur, garantissant ainsi une compréhension approfondie du programme et une " +
        "intégration rapide des nouvelles compétences requises.",
    },
    {
      icon: repo,
      type: "Documentation",
      description:
        "Cette méthode de formation comprend la fourniture de documentation complète et " +
        "détaillée sur l'utilisation du logiciel EduDomain. Les employés auront accès à des guides, " +
        "des manuels et des ressources pédagogiques pour leur permettre de maîtriser le programme de manière " +
        "autonome. Cette approche assure que vos équipes peuvent apprendre à leur rythme tout en ayant à leur " +
        "disposition des supports clairs et complets pour répondre à leurs besoins de formation.",
    },
  ];

  return (
    <>
      <InfoPage header={header} supports={formations} />
    </>
  );
};

export default Formation;
