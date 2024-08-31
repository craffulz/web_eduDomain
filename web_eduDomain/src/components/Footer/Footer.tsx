import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="first">
          <div className="contact-info">
            <div className="brandname">EduDomain</div>
            <div className="adress">
              <span>Rue Mohammed V, 28, CP 90235</span>
              <span> Casablanca, Morocco</span>
            </div>
            <div className="tel">956 456 235</div>
            <div className="email">Bayanesolution@bayane.com</div>
            <a href="#">Contactez-nous</a>
          </div>
          <div className="fast-links">
            <h3>Liens rapides</h3>
            <a href="#">Solutions</a>
            <a href="#">Support</a>
            <a href="#">Formation</a>
            <a href="#">Nos Clients</a>
            <a href="#">Qui sommes-nous</a>
          </div>
          <div className="legal">
            <h3>Legal</h3>
            <a href="#">Confidentialité</a>
            <a href="#">Conditions d'utilisation</a>
            <a href="#">Mentions légales</a>
            <a href="#">Copyright</a>
            <a href="#">Marque</a>
            <a href="#">Préférence de cookie</a>
          </div>
        </div>
        <div className="second">
          <div className="copy-right">
            <span>© 2024 Bayane Solutions. Tous droits réservés.</span>
          </div>
          <div className="social-media">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
4;
