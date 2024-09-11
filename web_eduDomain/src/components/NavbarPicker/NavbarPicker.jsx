import {  useState } from "react";

import "./LiteNavbar/LiteNavbar.scss";
import "./Navbar/Navbar.scss";

import Navbar from "./Navbar/Navbar";
import LiteNavbar from "./LiteNavbar/LiteNavbar";
/**
 * This component sets the optimized Navbar. If width
 * is under 920px sets the 'Lite' one, if its above
 * sets the default one.
 */
const NavbarPicker = () => {
  /**
   * useState to get the window width
   */
  const [width, setWidth] = useState(window.innerWidth);

  /**
   * Definimos aqui los botones que tendrá nuestra navbar.
   * A parte de los nombres, debemos de indicar que es lo que se mostrara dentro de cada
   * dropdown.
   */
  const navbarButtons = [
    {
      button: "Solutions",
      drop: [
        {
          dButton: "Patrimoine",
          dButtonDesc: "Gestion du patrimoine immobilier",
          icon: "fa-solid fa-building",
          route: "/patrimoine",
        },
        {
          dButton: "Clients",
          dButtonDesc: "Gestion des clients et des contrats",
          icon: "fa-solid fa-people-arrows",
        },
        {
          dButton: "Reclamations",
          dButtonDesc: "Gestion des réclamations",
          icon: "fa-solid fa-building-circle-exclamation",
        },
        {
          dButton: "Demande Longement",
          dButtonDesc: "Interface de demande de logement pour étudiants",
          icon: "fa-solid fa-check",
        },
        {
          dButton: "Reports",
          dButtonDesc: "Tableau de bord et reporting",
          icon: "fa-solid fa-chart-line",
        },
        {
          dButton: "Consomation",
          dButtonDesc: "Gestion des index de consommation",
          icon: "fa-solid fa-hand-holding-dollar",
        },
      ],
    },
    {
      button: { button: "Support", route: "/support" },
      drop: null,
    },
    {
      button: { button: "Formation", route: "/formation" },
      drop: null,
    },
    {
      button: { button: "Clients", route: "/#clients" },
      drop: null,
    },
    {
      button: { button: "Contactez-nous", route: "/contact" },
      drop: null,
    },
  ];

  function handleResize() {
    setWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleResize);

  return width < 920 ? (
    <LiteNavbar navbarButtons={navbarButtons} />
  ) : (
    <Navbar navbarButtons={navbarButtons} />
  );
};

export default NavbarPicker;
