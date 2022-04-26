import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import client1 from "../../../images/testimonial4.jpg";
import client2 from "../../../images/testimonial1.jpg";
import client3 from "../../../images/testimonial2.jpg";
import client4 from "../../../images/testimonial3.jpg";

// import client1 from "../../../images/testimonial0.png";
// import client2 from "../../../images/testimonial1.jpg";
// import client3 from "../../../images/testimonial2.png";
// import client4 from "../../../images/testimonial3.jpg";

const Testimonial = () => {
  return (
    <div className="mx-4 py-5">
      <h2 className="text-center primary-color primary-font fs-2 ">
        Testimonial
      </h2>
      <div className="divider  mb-5"></div>
      <div>
        <CardGroup className="gap-4">
          <Card className="border rounded">
            <div>
              <Card.Img src={client2} />
            </div>
            <Card.Body>
              <h4 className="primary-color">Rachel Ferguson</h4>
              <small>
                Lawyers apply the law to specific cases. They investigate the
                facts and the evidence by conferring with their clients and
                reviewing documents, and they prepare and file the pleadings in
                court.
              </small>
            </Card.Body>
          </Card>
          <Card className="border rounded">
            <div>
              <Card.Img src={client1} />
            </div>
            <Card.Body>
              <h4 className="primary-color">Rachel Ferguson</h4>
              <small>
                The family lawyers and law clerks of Stephen Durbin and
                Associates are dedicated to your cause. Rest assured that our
                hearts and souls are brought to bear on your individual case.
              </small>
            </Card.Body>
          </Card>
          <Card className="border rounded">
            <Card.Img src={client3} />
            <Card.Body>
              <h4 className="primary-color">Rachel Ferguson</h4>
              <small>
                The family lawyers and law clerks of Stephen Durbin and
                Associates are dedicated to your cause. Rest assured that our
                hearts and souls are brought to bear on your individual case.
              </small>
            </Card.Body>
          </Card>
          <Card className="border rounded">
            <Card.Img src={client4} />
            <Card.Body>
              <h4 className="primary-color">Rachel Ferguson</h4>
              <small>
                Lawyers apply the law to specific cases. They investigate the
                facts and the evidence by conferring with their clients and
                reviewing documents, and they prepare and file the pleadings in
                court.
              </small>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>

      {/* <CardGroup className="gap-4">
        <Card>
          <Card.Img variant="top" src={client2} />
          <Card.Body>
            <h4 className="primary-color">Rachel Ferguson</h4>
            <Card.Text>
              Lawyers apply the law to specific cases. They investigate the
              facts and the evidence by conferring with their clients and
              reviewing documents, and they prepare and file the pleadings in
              court.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={client3} />
          <Card.Body>
            <h4 className="primary-color">Rachel Ferguson</h4>
            <Card.Text>
              The family lawyers and law clerks of Stephen Durbin and Associates
              are dedicated to your cause. Rest assured that our hearts and
              souls are brought to bear on your individual case.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={client3} />
          <Card.Body>
            <h4 className="primary-color">Rachel Ferguson</h4>
            <Card.Text>
              The family lawyers and law clerks of Stephen Durbin and Associates
              are dedicated to your cause. Rest assured that our hearts and
              souls are brought to bear on your individual case.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup> */}

      {/* <div className="container row gap-2">
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
            The family lawyers and law clerks of Stephen Durbin and Associates
            are dedicated to your cause. Rest assured that our hearts and souls
            are brought to bear on your individual case.
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
            The family lawyers and law clerks of Stephen Durbin and Associates
            are dedicated to your cause. Rest assured that our hearts and souls
            are brought to bear on your individual case. 
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Testimonial;
