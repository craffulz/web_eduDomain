import InfoPage from "../components/infoPage/InfoPage";
const Faqs = () => {
  const header = {
    h1: "FAQs",
    p: "Questions fréquentes, réponses claires",
  };

  const questions = [
    {
      type: "Quelles sont les principales fonctionnalités de l'application pour la gestion de la résidence ?",
      description:
        "L'application permet de gérer les réservations de chambres, les relevés d'eau et d'électricité, les incidents, l'administration du personnel et de fournir des informations sur les installations de la résidence.",
    },
    {
      type: "Comment puis-je ajouter ou modifier les informations des résidents ?",
      description:
        "Vous pouvez ajouter ou modifier les informations des résidents depuis la section de gestion des utilisateurs dans l'application, où vous pourrez accéder à toutes les données pertinentes de chaque résident.",
    },
    {
      type: "Que faire si un résident signale un problème ?",
      description:
        "L'application dispose d'une section pour signaler des incidents, où vous pouvez enregistrer le problème et l'assigner au personnel de maintenance pour une résolution rapide.",
    },
    {
      type: "Puis-je gérer plusieurs résidences avec le même compte ?",
      description:
        "Oui, l'application vous permet de gérer plusieurs résidences à partir d'un seul compte, facilitant ainsi l'administration de différents emplacements.",
    },
    {
      type: "L'application fournit-elle des rapports sur la consommation d'eau et d'électricité ?",
      description:
        "Oui, vous pouvez générer des rapports détaillés sur la consommation d'eau et d'électricité pour chaque chambre et pour l'ensemble de la résidence, facilitant ainsi la planification et le contrôle des dépenses.",
    },
    {
      type: "Comment se gèrent les réservations de chambres ?",
      description:
        "Vous pouvez voir la disponibilité des chambres en temps réel et gérer les réservations via l'application, ce qui permet un contrôle efficace de l'occupation.",
    },
    {
      type: "Est-il possible d'assigner des tâches au personnel de maintenance ?",
      description:
        "Oui, vous pouvez assigner des tâches directement aux membres du personnel de maintenance et suivre l'avancement via l'application.",
    },
    {
      type: "Quelles mesures de sécurité sont mises en place pour protéger les données ?",
      description:
        "L'application utilise des protocoles de sécurité avancés pour protéger les données sensibles des résidents et de la résidence, garantissant que les informations restent sécurisées.",
    },
    {
      type: "Puis-je personnaliser l'application pour l'adapter aux besoins spécifiques de ma résidence ?",
      description:
        "Oui, nous proposons des options de personnalisation pour que l'application s'adapte aux particularités et exigences spécifiques de votre résidence universitaire.",
    },
    {
      type: "Comment puis-je obtenir une assistance technique si j'ai des problèmes avec l'application ?",
      description:
        "Vous pouvez contacter notre équipe d'assistance technique via la section d'aide de l'application ou par e-mail, et nous serons ravis de vous aider.",
    },
    {
      type: "Comment puis-je gérer les plaintes et suggestions des résidents ?",
      description:
        "L'application comprend une section pour enregistrer les plaintes et suggestions des résidents, vous permettant de faire le suivi et de prendre des mesures appropriées pour améliorer l'expérience des résidents.",
    },
    {
      type: "Puis-je programmer des rappels pour les tâches administratives ?",
      description:
        "Oui, l'application permet de programmer des rappels pour les tâches administratives et de maintenance, garantissant que rien ne soit oublié.",
    },
    {
      type: "L'application inclut-elle un calendrier d'activités et d'événements pour les résidents ?",
      description:
        "Oui, vous pouvez gérer et programmer des activités et événements dans un calendrier que les résidents peuvent consulter, facilitant la communication et la planification.",
    },
    {
      type: "Quel type de rapports peut-on générer depuis l'application ?",
      description:
        "Vous pouvez générer des rapports sur l'occupation des chambres, la consommation de ressources (eau, électricité), les incidents signalés et l'activité du personnel, entre autres.",
    },
    {
      type: "Est-il possible d'intégrer l'application à d'autres systèmes de gestion ?",
      description:
        "Oui, notre application peut être intégrée à d'autres systèmes de gestion que vous utilisez déjà, facilitant ainsi la synchronisation des données et des processus.",
    },
    {
      type: "Que se passe-t-il si un résident a besoin de changer sa réservation ?",
      description:
        "Les gestionnaires peuvent effectuer des changements dans les réservations des résidents via l'application, permettant des ajustements selon les besoins des utilisateurs.",
    },
    {
      type: "L'application offre-t-elle un support en plusieurs langues ?",
      description:
        "Oui, l'application est disponible en plusieurs langues, ce qui facilite son utilisation dans des environnements multiculturels.",
    },
    {
      type: "Puis-je accéder à l'application depuis des appareils mobiles ?",
      description:
        "Oui, l'application est entièrement compatible avec les appareils mobiles et les tablettes, ce qui permet de gérer la résidence en déplacement.",
    },
    {
      type: "Y a-t-il une limite au nombre d'utilisateurs qui peuvent accéder à l'application ?",
      description:
        "Non, vous pouvez ajouter autant d'utilisateurs que nécessaire, permettant à toute votre équipe d'accéder aux fonctionnalités nécessaires à la gestion.",
    },
    {
      type: "L'application comprend-elle des formations ou des tutoriels pour les nouveaux utilisateurs ?",
      description:
        "Oui, nous proposons des tutoriels et des guides dans l'application pour aider les nouveaux utilisateurs à se familiariser avec toutes les fonctionnalités disponibles.",
    },
  ];

  return <InfoPage header={header} supports={questions} />;
};

export default Faqs;
