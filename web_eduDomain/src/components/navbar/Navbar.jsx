import "./Navbar.scss";

import { useRef, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

import { Link } from "react-router-dom";

/**
 * Este componente representa la barra de navegación de la pagina web
 * En ella aparecerán el logo, el nombre de la marca y los diferentes botones para
 * navegar por la pagina web. Tambien el cambio de tema.
 */
const Navbar = () => {
  console.log("Navbar Mounts");
  /**
   * Creamos un estado para manejar la apertura y cierre de los dropdowns
   */
  const [openDrop, setOpenDrop] = useState(null);
  /**Creamos un useRef para anular el timeOut cuando pasemos al Droopdown y que asi
   * no desaparezca el dropDropdown cuando pasemos el cursor por alguna ubicacion en
   * la que no hay ni boton ni dropDown
   */
  const timeOutRef = useRef(null);
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
          route: '/patrimoine'
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
      button: "Support",
      drop: [{
        dButton: "Presentielle",
        dButtonDesc: "Formation interne",
        icon: "fa-solid fa-person-walking-arrow-right",
      }],
    },
    {
      button: "Formation",
      drop: [
        {
          dButton: "Presentielle",
          dButtonDesc: "Formation interne",
          icon: "fa-solid fa-person-walking-arrow-right",
        },

        {
          dButton: "On-Ligne",
          dButtonDesc: "Formation On-Ligne",
          icon: "fa-solid fa-globe",
        },

        {
          dButton: "Documentation",
          dButtonDesc: "Formation avec notre docu",
          icon: "fa-solid fa-book",
        },
      ],
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
  /**
   * handleDropDown se encarga de referir el index en el que nos encontramos al hacer Click.
   * Si hacemos click se pasa el index del boton sobre el que nos encontramos y actualizamos el
   * estado con ese boton > se vuelve a renderizar el boton > cuando llega a la parte de mostrar
   * > checkeamos que el estado es el mismo que el index a renderizar?mostramos dropDown:no mostramos nada
   * @param {*} index Es para referirnos al boton que se esta manejando en ese momento.
   */
  const handleDropDown = (index) => {
    setOpenDrop(openDrop === index ? null : index);
  };
  /**
   * handleMouseEnter, si tenemos un timeout corriendo lo anulamos porque estaremos de nuevo en el drop
   * @param {*} index
   */
  const handleMouseEnter = (index, drop) => {
    if (timeOutRef.current) clearTimeout(timeOutRef.current);
    if (drop) setOpenDrop(index);
  };
  const handleMouseLeave = () => {
    console.log("Quiero ejecutar el timeOut");
    timeOutRef.current = setTimeout(() => {
      setOpenDrop(null);
    }, 50);
  };
  return (
    <div className="navbar">
      {/**Por ahora pongo el componente, puede que luego lo elimine y ponga aquí el codigo directamente*/}
      {/* <div className="logo">logo</div> */}
      <div className="brandname">
        <Link to="/#hero">EduDomain</Link>
      </div>
      <div className="btns">
        <div className="navigation">
          {navbarButtons.map(({ button, drop }, index) => {
            console.log(button);
            return (
              <div
                className="btn"
                key={index}
                ref={timeOutRef}
                onClick={() => handleDropDown(index)}
                /**
                 * onMouseEnter si esta encima actualizamos el estado al index y renderizamos si es igual
                 * mostramos
                 * onMouseLeave si se va actualizamos el estado a null, no se cumple la logica para visualizar,
                 * no se muestra el dropDopwn
                 */
                onMouseEnter={() => handleMouseEnter(index, drop)}
                onMouseLeave={handleMouseLeave}
              >
                {typeof button === "string" ? (
                  <>
                    {button}
                    {openDrop === index && drop.length > 0 && (
                      <Dropdown
                        className="drop"
                        drop={(button, drop)}
                      ></Dropdown>
                    )}
                  </>
                ) : (
                  <Link to={button.route}>{button.button}</Link>
                )}
                {/* {openDrop === index && drop.length > 0 && (
                  <Dropdown className="drop" drop={(button, drop)}></Dropdown>
                )} */}
              </div>
            );
          })}
        </div>
        <div className="side">
          <a href="/contact" className="btn-demo">
            Demandez une Démo
          </a>

          {/**Aquí puede que introduzcamos otro componente para cambiar el modo de la página web */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
