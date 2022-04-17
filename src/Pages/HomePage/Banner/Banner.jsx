import React from "react";
import "./Banner.css";
import bannerImg from "../../../images/hero-lawyer-image.png";

const Banner = () => {
  return (
    <div className="banner d-flex flex-column flex-md-row justify-content-center align-items-center">
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
          <button className="py-3 px-4 border-0 rounded banner-btn text-white fw-bold me-3">
            get a free quote
          </button>
          <button className="py-3 px-4 bg-0 rounded banner-btn-2 text-white fw-bold">
            legal services
          </button>
        </div>
      </div>
      <div className="banner-img-wrap d-flex justify-content-center align-items-center">
        <img className="w-100" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
