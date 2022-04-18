import React from "react";
import client2 from "../../../images/client2.png";

const Testimonial = () => {
  return (
    <div className="row mx-4 py-5 g-4">
      <h2 className="text-center mb-5 ">Testimonial</h2>
      <div className="col-12 col-md-6 col-lg-4 text-center testimonial-card border rounded-3 shadow-lg">
        <div className="w-50  mx-auto">
          <img className="img-fluid rounded " src={client2} alt="" />
        </div>
        <h4>Rachel Ferguson</h4>
        <h6>DOCTOR</h6>
        <div className="divider"></div>
        <p>
          Lawyers apply the law to specific cases. They investigate the facts
          and the evidence by conferring with their clients and reviewing
          documents, and they prepare and file the pleadings in court.
        </p>
      </div>
      <div className="col-12 col-md-6 col-lg-4 text-center testimonial-card border rounded-3">
        <div className="w-50  mx-auto">
          <img className="img-fluid rounded " src={client2} alt="" />
        </div>
        <h4>Rachel Ferguson</h4>
        <h6>DOCTOR</h6>
        <div className="divider"></div>
        <p>
          The family lawyers and law clerks of Stephen Durbin and Associates are
          dedicated to your cause. Rest assured that our hearts and souls are
          brought to bear on your individual case.
        </p>
      </div>
      <div className="col-12 col-md-6 col-lg-4 text-center testimonial-card border rounded-3">
        <div className="w-50  mx-auto">
          <img className="img-fluid rounded " src={client2} alt="" />
        </div>
        <h4>Rachel Ferguson</h4>
        <h6>DOCTOR</h6>
        <div className="divider"></div>
        <p>
          The family lawyers and law clerks of Stephen Durbin and Associates are
          dedicated to your cause. Rest assured that our hearts and souls are
          brought to bear on your individual case. Our firm maintains what has
          been referred to as a “culture of excellence” and so your matter will
          always be given full and proper attention. Prompt return of your
          messages is a matter of course for us, as are clear explanations of
          procedure and strategy.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
