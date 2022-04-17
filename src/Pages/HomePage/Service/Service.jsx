import React from "react";

const Service = ({ service }) => {
  console.log(service);
  const { img, name, price, discription } = service;

  return (
    <div>
      <h2>ffffffffffffff</h2>
      <img src={img} alt="" />
      <h4>{name}</h4>
    </div>
  );
};

export default Service;
