import React from "react";
import { Carousel } from "react-bootstrap";
import client1 from "../../../images/client1.png";
import client2 from "../../../images/client2.png";
import client3 from "../../../images/client3.png";
import "./Tesimonial.css";

const Testimonial = () => {
  return (
    <div className="carousel-wrapper mx-4 rounded w-50">
      <div className="">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-75 img-fluid"
              src={client1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={client2} alt="Second slide" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={client3} alt="Third slide" />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
