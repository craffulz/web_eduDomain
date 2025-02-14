import Slider from "react-slick";

import "./Clients.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import chaabi from "../../assets/clients/chaabi.webp";
import ehc from "../../assets/clients/ehc.webp";
import fendary from "../../assets/clients/fendary.webp";
import maarifa from "../../assets/clients/maarifa.webp";
import ru from "../../assets/clients/ru.webp";

const Clients = () => {
  const logos = [
    {
      route: chaabi,
      alt: "chaabi logo",
    },

    {
      route: ehc,
      alt: "ehc logo",
    },

    {
      route: fendary,
      alt: "fendary logo",
    },

    {
      route: maarifa,
      alt: "maarifa logo",
    },

    {
      route: ru,
      alt: "ru logo",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    swipe: false,
    arrows: false,
  };

  return (
    <>
      <div className="clients" id="clients">
        <div className="head compo" style={{}}>
          <h2>Clients</h2>
        </div>
        <div className="clients container">
          <Slider className="slider" {...settings}>
            {logos.map((logo, index) => {
              return (
                <div key={index} className="logo">
                  <img src={logo.route} alt={logo.alt} loading="lazy" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Clients;
