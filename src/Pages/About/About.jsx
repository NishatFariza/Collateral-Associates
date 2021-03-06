import React from "react";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <Fade bottom>
      <div className="py-lg-5 py-3 w-75 mx-auto">
        <h2 className="text-center primary-color primary-font fs-1">
          About Me
        </h2>
        <div className="divider"></div>
        <p className="text-muted py-3 text-center">
          Hello There, Welcome! This is{" "}
          <span className="primary-color primary-font"> Nishat Fariza</span>.
          I'm Frontend, MERN Stack Developer! I am an enthusiastic and dedicated
          learner. with a deep interest in JavaScript. To work in the Software
          industry with modern web technologies web 3.0 and To pursue a
          challenging job in a dynamic and esteemed organization, where I will
          be able to perform in any kind of situation with full effort to
          utilize my knowledge, skill, and experience for professional career
          development..
        </p>
      </div>
    </Fade>
  );
};

export default About;
