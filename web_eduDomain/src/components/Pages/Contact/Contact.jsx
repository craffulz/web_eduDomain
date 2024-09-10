import { useState } from "react";

import "./Contact.scss";

import Form from "../../Form/Form.jsx";

import Footer from "../../Footer/Footer.jsx";
import NavbarPicker from "../../NavbarPicker/NavbarPicker.jsx";

const Contact = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleWidth);

  const contact = {
    adress: {
      st: "Rue Mohammed V, 28, CP 90235",
      city: "Casablanca, Morocco",
    },
    tel: "956 456 235",
    email: "Bayanesolution@bayane.com",
  };

  const form = (
    <div className="forms">
      <Form />
    </div>
  );

  const infos = (
    <div className="infos">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13298.250168383873!2d-7.614875673512249!3d33.56474057528353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd53149ee2ad%3A0x30dfb28ccc4a8539!2s46%20Rue%20Sidi%20Maarouf%2C%20Dar-el-Beida%2020250%2C%20Maroc!5e0!3m2!1sfr!2ses!4v1725298048075!5m2!1sfr!2ses"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>

      <div className="data">
        <span>{contact.adress.st}</span>
        <span>{contact.adress.city}</span>
        <span>{contact.email}</span>
      </div>
    </div>
  );
  return (
    <>
      <NavbarPicker />
      <div className="documento">
        <div className="title">
          <h1>INNOVONS ENSEMBLE !</h1>
          <h3>-Nous sommes à votre écoute pour concrétiser vos projets-</h3>
          <p>
            Remplissez ce formulaire et notre équipe de support vous contactera
            dans les plus brefs délais
          </p>
        </div>
        <div className="main">
          {width <= 1024 ? (
            <>
              {form}
              {infos}
            </>
          ) : (
            <>
              {infos}
              {form}
            </>
          )}
        </div>
        <div className="socials"></div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
