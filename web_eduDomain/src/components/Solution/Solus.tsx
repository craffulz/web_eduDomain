import React, { useEffect } from "react";

import Navbar from "../NavbarPicker/Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Solus.scss";

import { motion } from "framer-motion";
import NavbarPicker from "../NavbarPicker/NavbarPicker.jsx";

const Solus = ({ background, solution }) => {
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <NavbarPicker />
      <div className="solus">
        <div className="background">
          {background.map(({ ...background }) => {
            return (
              <motion.div
                // eslint-disable-next-line react/prop-types
                key={background.alt}
                className="sketch"
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  className="res_sketch"
                  src={background.img}
                  alt={background.alt}
                  loading="lazy"
                />
              </motion.div>
            );
          })}
        </div>
        <div className="ground">
          <div className="document">
            <div className="encabezado" >
              <motion.div
                className="title"
                initial={{ x: 100, scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h1>{solution.title}</h1>
              </motion.div>
              <motion.div
                className="description"
                initial={{ x: -200, scale: 0.6 }}
                whileInView={{ x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <motion.div
                  className="paragrapho"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                >
                  <p>{solution.intro}</p>
                </motion.div>
              </motion.div>
            </div>
            {solution.explanation.map(
              ({ media, description }, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <div className="explaining">
                      <motion.div
                        className="screenshot"
                        initial={{ y: 300, scale: 0.5 }}
                        whileInView={{
                          y: 0,
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                      >
                        {typeof media === "string" ? (
                          <video src={media} muted loop autoPlay={true} />
                        ) : (
                          <img src={media.img} alt={media.alt} />
                        )}
                      </motion.div>

                      <motion.div
                        className="descriptione"
                        initial={{ x: 200, scale: 0.6 }}
                        whileInView={{ x: 0, scale: 1 }}
                        transition={{ duration: 0.9 }}
                      >
                        <div className="paragraph">
                          <h3>{description.h3}</h3>
                          <p>{description.p}</p>
                        </div>
                      </motion.div>
                    </div>
                  </React.Fragment>
                );
              }
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Solus;
