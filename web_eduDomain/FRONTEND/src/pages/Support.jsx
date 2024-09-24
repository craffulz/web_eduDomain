

import faq from "../assets/support/faq.svg";
import inTime from "../assets/support/entempsreel.svg";
import teamWork from "../assets/support/teamwork.svg";
import InfoPage from "../components/infoPage/InfoPage";

const Support = () => {
  const header = {
    h1: "Besoin d'aide?",
    p: "Voici les différents types de support que nous offrons à nos clients.",
  };
  const supports = [
    {
      icon: faq,
      type: "FAQ",
      description:
        "Les FAQ fournissent des réponses rapides aux questions courantes, " +
        "aidant les utilisateurs à résoudre des problèmes sans contacter le support client. " +
        "Elles sont organisées en format question-réponse pour une navigation facile.",
      route: "/faqs",
    },
    {
      icon: inTime,
      type: "Support en temps réel",
      description:
        "Le support en temps réel offre une assistance immédiate aux utilisateurs," +
        " via chat, appel ou autres moyens interactifs, pour résoudre des problèmes instantanément.",
    },
    {
      icon: teamWork,
      type: "Support technique avancé",
      description:
        "Le support technique avancé fournit une aide spécialisée pour des problèmes " +
        "complexes, gérée par des experts ou développeurs.",
    },
  ];

  return (
    <>
      <InfoPage header={header} supports = {supports}/>
    </>
  );
};

export default Support;
