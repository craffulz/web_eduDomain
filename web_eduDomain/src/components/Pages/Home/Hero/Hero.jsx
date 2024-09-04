/* eslint-disable react/prop-types */
import estudiantes_cafe from "../../../../assets/hero/estudiantes_cafe.jpg";
import estudiantes_graduacion from "../../../../assets/hero/estudiantes_graduacion.jpg";
import residencia_exterior from "../../../../assets/hero/residencia_exterior.jpg";
import residencia_interior from "../../../../assets/hero/residencia_interior.jpg";

//import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.scss";

import { useRef, useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
const slides = [
  {
    img: estudiantes_cafe,
    alt: "etudiantes dans un cafe",
    h1: "Tout-en-Un pour Résidences Universitaires",
    p: "Organisez, Réservez et Résolvez avec Efficacité.",
  },

  {
    img: estudiantes_graduacion,
    alt: "graduation etudiantes",
    h1: "Réservations Simplifiées",
    p: "Facilitez le Logement de Vos Étudiants en Un Clic",
  },
  {
    img: residencia_exterior,
    alt: "exterieur dune residence",
    h1: "Administrez Votre Équipe avec Facilité",
    p: "Rôles et Tâches Clairs pour une Gestion Optimale",
  },
  {
    img: residencia_interior,
    alt: "interieur dune residence",
    h1: "Gestion des Incidents Sans Stress",
    p: "De En Attente à Résolu en Un Temps Record",
  },
];
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
    <section className="hero" id="hero">
      <Container fluid>
        <Row className="justify-content-center">
          <Col>
            <Slider {...settings} ref={sliderRef}>
              {slides.map((slide, index) => {
                return (
                  <div className="hero-slide" key={index}>
                    <img src={slide.img} alt={slide.alt} loading="lazy" />

                    <div className="hero-text">
                      <h1>{slide.h1}</h1>
                      <p>{slide.p}</p>

                      <Link to="/contact" className="btn-demo">
                        Demandez une Démo
                      </Link>
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
                );
              })}

              {/* Agrega más slides aquí */}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
