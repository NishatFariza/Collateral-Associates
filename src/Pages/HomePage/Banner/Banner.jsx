import React from "react";
import "./Banner.css";
import bannerImg from "../../../images/hero-lawyer-image.png";
import { Fade } from "react-reveal";

const Banner = () => {
  return (
    <div className="banner d-flex flex-column flex-md-column flex-lg-row justify-content-center align-items-center">
      <Fade right>
        <div className="banner-content-wrap text-center text-white mb-5">
          <p className="banner-caption text-uppercase">
            skipping bail - since 2020
          </p>
          <h1 className="primary-font mb-3">
            In The Halls Of Justice
            <span className="primary-color">The Only Justice</span>
            Is In The Halls.
          </h1>
          <div className="divider"></div>
          <div className="btn-wrap mt-4">
            <button className="border-0 rounded banner-btn text-white fw-bold">
              Get Free Quote
            </button>
            <button className="rounded banner-btn-2 text-white fw-bold">
              Legal Services
            </button>
          </div>
        </div>
      </Fade>
      <Fade left>
        <div className="banner-img-wrap d-flex justify-content-center align-items-center">
          <img className="banner-img" src={bannerImg} alt="" />
        </div>
      </Fade>
    </div>
  );
};

export default Banner;
