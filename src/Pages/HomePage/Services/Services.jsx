import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
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
    <div className="mx-4 py-5">
      <div className="services-wrap pt-5 rounded-3">
        <div className="services-title-wrap mx-4 d-flex justify-content-between align-items-center">
          <div className="py-2 ms-3">
            <Fade right>
              <h2 className="primary-font text-white">Services</h2>
              <div className="divider mb-4 ms-0"></div>
            </Fade>
          </div>
          <Fade left>
            <button className="rounded services-title-btn text-white fw-bold me-3">
              View All
            </button>
          </Fade>
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
