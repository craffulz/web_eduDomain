/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import estudiantes_cafe from "../../assets/hero/estudiantes_cafe.jpg";
import estudiantes_graduacion from "../../assets/hero/estudiantes_graduacion.jpg";
import residencia_exterior from "../../assets/hero/residencia_exterior.jpg";
import residencia_interior from "../../assets/hero/residencia_interior.jpg";

//import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

import { useRef, useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const SampleNextArrow = ({ onClick }) => (
  <button
    className="slick-arrow slick-next"
    onClick={onClick}
    aria-label="Next Slide"
    type="button"
  >
    <span>&#9654;</span>
  </button>
);

const SamplePrevArrow = ({ onClick }) => (
  <button
    className="slick-arrow slick-prev"
    onClick={onClick}
    aria-label="Previous Slide"
    type="button"
  >
    <span>&#9664;</span>
  </button>
);

const Hero = () => {
  console.log("Hero render");
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);
  const settings = {
    dots: true,

    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
    accessibility: true,
  };

  const play = () => {
    if (sliderRef.current) {
      if (isPlaying) {
        setIsPlaying(false);
        sliderRef.current.slickPause();
      } else {
        setIsPlaying(true);
        sliderRef.current.slickPlay();
      }
    }
  };

  return (
    <section className="hero">
      <Container fluid>
        <Row className="justify-content-center">
          <Col>
            <Slider {...settings} ref={sliderRef}>
              <div className="hero-slide">
                <img
                  src={estudiantes_cafe}
                  alt="Estudiantes en un café"
                  loading="lazy"
                />
                <div className="hero-text">
                  <h1>Transforma la Gestión de Tu Residencia Universitaria</h1>
                  <p>
                    La solución definitiva para la gestión de reservas,
                    incidencias y consumos en un solo lugar.
                  </p>

                  <a href="#get-started" className="btn-demo">
                    Demandez une Démo
                  </a>
                </div>
                <div className="slide-controls">
                  <Button className="play" onClick={play}>
                    {isPlaying ? (
                      <FontAwesomeIcon icon={faPause} />
                    ) : (
                      <FontAwesomeIcon icon={faPlay} />
                    )}
                  </Button>
                </div>
              </div>
              <div className="hero-slide">
                <img
                  src={estudiantes_graduacion}
                  alt="Estudiantes en graduación"
                  loading="lazy"
                />
                <div className="hero-text">
                  <h1>Organiza Tu Vida Universitaria</h1>
                  <p>
                    Con nuestra aplicación, simplifica la gestión de tu
                    residencia universitaria.
                  </p>

                  <a href="#get-started" className="btn-demo">
                    Demandez une Démo
                  </a>
                </div>
                <div className="slide-controls">
                  <Button className="play">
                    {isPlaying ? (
                      <FontAwesomeIcon icon={faPause} onClick={play} />
                    ) : (
                      <FontAwesomeIcon icon={faPlay} onClick={play} />
                    )}
                  </Button>
                </div>
              </div>
              <div className="hero-slide">
                <img
                  src={residencia_exterior}
                  alt="Residencia universitaria exterior"
                  loading="lazy"
                />
                <div className="hero-text">
                  <h1>Tu Residencia en el Exterior</h1>
                  <p>
                    Vive la experiencia de estudiar en el extranjero con
                    comodidad.
                  </p>

                  <a href="#get-started" className="btn-demo">
                    Demandez une Démo
                  </a>
                </div>
                <div className="slide-controls">
                  <Button className="play" onClick={play}>
                    {isPlaying ? (
                      <FontAwesomeIcon icon={faPause} />
                    ) : (
                      <FontAwesomeIcon icon={faPlay} />
                    )}
                  </Button>
                </div>
              </div>
              <div className="hero-slide">
                <img
                  src={residencia_interior}
                  alt="Residencia universitaria interior"
                  loading="lazy"
                />
                <div className="hero-text">
                  <h1>Comodidad en el Interior</h1>
                  <p>
                    Disfruta de espacios diseñados para tu confort y éxito
                    académico.
                  </p>

                  <a href="#get-started" className="btn-demo">
                    Demandez une Démo
                  </a>
                </div>
                <div className="slide-controls">
                  <Button className="play" onClick={play}>
                    {isPlaying ? (
                      <FontAwesomeIcon icon={faPause} />
                    ) : (
                      <FontAwesomeIcon icon={faPlay} />
                    )}
                  </Button>
                </div>
              </div>
              {/* Agrega más slides aquí */}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
