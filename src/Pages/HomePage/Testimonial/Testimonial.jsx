import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import client1 from "../../../images/testimonial4.jpg";
import client2 from "../../../images/testimonial1.jpg";
import client3 from "../../../images/testimonial2.jpg";
import client4 from "../../../images/testimonial3.jpg";
import { Fade } from "react-reveal";

const Testimonial = () => {
  return (
    <div className="mx-4 py-5">
      <Fade bottom>
        <h2 className="text-center primary-color primary-font fs-2 ">
          Testimonial
        </h2>
        <div className="divider  mb-5"></div>
      </Fade>
      <div>
        <CardGroup className="gap-4">
          <Card className="border rounded">
            <div>
              <Card.Img src={client2} />
            </div>
            <Card.Body>
              <h4 className="primary-color primary-font">Rachel Ferguson</h4>
              <small className="fw-bold text-muted">
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
              <h4 className="primary-color primary-font">Elna Goyette</h4>
              <small className="fw-bold text-muted">
                The family lawyers and law clerks of Stephen Durbin and
                Associates are dedicated to your cause. Rest assured that our
                hearts and souls are brought to bear on your individual case.
              </small>
            </Card.Body>
          </Card>
          <Card className="border rounded">
            <Card.Img src={client3} />
            <Card.Body>
              <h4 className="primary-color primary-font">Harvey Brown</h4>
              <small className="fw-bold text-muted">
                The family lawyers and law clerks of Stephen Durbin and
                Associates are dedicated to your cause. Rest assured that our
                hearts and souls are brought to bear on your individual case.
              </small>
            </Card.Body>
          </Card>
          <Card className="border rounded">
            <Card.Img src={client4} />
            <Card.Body>
              <h4 className="primary-color primary-font">Michele Mraz</h4>
              <small className="fw-bold text-muted">
                Lawyers apply the law to specific cases. They investigate the
                facts and the evidence by conferring with their clients and
                reviewing documents, and they prepare and file the pleadings in
                court.
              </small>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Testimonial;
