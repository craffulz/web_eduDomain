import TituloRotador from "../TituloRotador";

import cafe from "../../assets/portada/cafe.jpg";
import cocina from "../../assets/portada/cocina.jpg";
import mdb from "../../assets/portada/MDB_SRBL1010954_©_Aldo_Amoretti-3265384470.jpg";
import promo from "../../assets/portada/promo.jpg";
import resi from "../../assets/portada/resi triste.jpg";

import riendo from "../../assets/portada/riendo.jpg";
import { useEffect, useState } from "react";
const Banner = () => {
  /**
   * Lo que vamos a hacer es un banner con un background que va cambiando cada 3 se-
   * -gundos. Para ello necesitamos un array con las diferentes imágenes.  */
  const [imageIndex, setImage] = useState(0);
  const bannerImages = [cafe, cocina, mdb, promo, resi, riendo];

  /**Funcion para que vaya cambiando el index y se muestren las imagenes del array */

  useEffect(() => {
    setInterval(() => {
      setImage((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);
  }, [bannerImages.length]);

  return (
    <div className="banner">
      <div
        className="animated background"
        style={{
          backgroundImage: `url(${bannerImages[imageIndex]})`,
        }}
      >
        <TituloRotador>
          <div className="title container">
            <div className="title">
              <TituloRotador>
                <span className="first">Simplifiez,</span>
                <span className="second"> organisez</span>
                <span className="third"> et communiquez efficacement.</span>
              </TituloRotador>
              <div className="resume">
                <TituloRotador>
                  <span>
                    Une solution intégrale pour gérer les résidences
                    universitaires,
                  </span>
                  <span>
                    en optimisant les processus administratifs et en améliorant
                    la
                  </span>
                  <span>communication avec les clients.</span>
                </TituloRotador>
              </div>
            </div>
          </div>
        </TituloRotador>
      </div>
    </div>
  );
};

export default Banner;
