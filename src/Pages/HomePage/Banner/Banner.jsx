import React from "react";
import "./Banner.css";
import bannerImg from "../../../images/hero-lawyer-image.png";

const Banner = () => {
  return (
    <div className="banner d-flex justify-content-center align-items-center">
      <div className="banner-content-wrap text-center text-white">
        <p className="banner-caption primary-font text-uppercase">
          skipping bail - since 2020
        </p>
        <h1 className="primary-font">
          In The Halls Of Justice
          <span className="primary-color">
               The <br /> Only Justice
          </span>
          Is In The <br /> Halls.
        </h1>
      </div>
      <div className="banner-img-wrap d-flex justify-content-center align-items-center">
        <img className="w-100" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
