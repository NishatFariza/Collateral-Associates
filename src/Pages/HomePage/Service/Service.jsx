import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  console.log(service);
  const { img, name, price, discription } = service;

  return (
    <div className="service-card mx-auto d-flex justify-content-center align-items-center flex-column">
      <div className="img-wrap rounded-circle overflow-hidden d-flex justify-content-center align-items-center">
        <img className="w-50 h-50 rounded-circle " src={img} alt="" />
      </div>
      <h5 className="text-white">{name}</h5>
      <p title={discription} className="text-light">
        {discription.length >= 150
          ? `${discription.slice(0, 150)}...`
          : discription}
      </p>
      <span className="text-light">${price}</span>
      <button>Booking Now</button>
    </div>
  );
};

export default Service;
