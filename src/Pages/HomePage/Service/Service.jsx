import React from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  // console.log(service);
  const navigate = useNavigate();
  const { img, name, price, discription } = service;

  return (
    <Fade top>
      <div className="service-card mx-auto d-flex justify-content-center align-items-center flex-column px-3 py-5 rounded">
        <div className="img-wrap rounded-circle overflow-hidden d-flex justify-content-center align-items-center">
          <img className="w-50 h-50 rounded-circle " src={img} alt="" />
        </div>
        <h5 className="card-title primary-font mt-4">{name}</h5>
        <p title={discription} className="text-light text-center mb-2">
          {discription.length >= 150
            ? `${discription.slice(0, 150)}...`
            : discription}
        </p>
        <span className="primary-color fs-5 fw-bold mb-5">{price}</span>
        <button
          onClick={() => navigate("/checkout")}
          className="rounded service-card-btn text-white fw-bold"
        >
          Booking Now
        </button>
      </div>
    </Fade>
  );
};

export default Service;
