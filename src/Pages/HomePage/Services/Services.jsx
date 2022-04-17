import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div className="p-5">
      <div className="services-wrap pt-5 rounded-3">
        <div className="services-title-wrap mx-4">
          <h2 className="primary-font text-white p-4">Services</h2>
        </div>
        <div className="services-grid-container mx-4 pb-5">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
