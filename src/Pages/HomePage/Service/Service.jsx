import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  console.log(service);
  const { img, name, price, discription } = service;

  return (
    <div className="service-card mx-auto d-flex justify-content-center align-items-center flex-column">
      <div className="img-wrap rounded-circle bg-light">
        <img src={img} alt="" />
      </div>
      <h5 className="text-white">{name}</h5>
      <p>{discription}</p>
      <button>Booking Now</button>
    </div>
  );
};

export default Service;
