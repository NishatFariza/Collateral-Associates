import React from "react";
import client2 from "../../../images/client2.png";

const Testimonial = () => {
  return (
    <div className="row mx-4">
      <div className="col-12 col-md-6 col-lg-4 text-center testimonial-card">
        <div className="w-50  mx-auto">
          <img className="img-fluid rounded " src={client2} alt="" />
        </div>
        <h4>Rachel Ferguson</h4>
        <h6>DOCTOR</h6>
        <div className="divider"></div>
        <p>hhhhhhhhh</p>
      </div>
    </div>
  );
};

export default Testimonial;
