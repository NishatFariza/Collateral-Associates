import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="py-lg-3  py-2 bg-dark m-4 rounded text-center">
      <div className="mx-5 p-4 footer-wrapper d-flex justify-content-center align-items-center">
        <div className="footer-icon me-1 me-lg-4 d-flex justify-content-center  align-items-center ">
          <Link to="/">
            {<FaFacebookF className="text-white"></FaFacebookF>}
          </Link>
        </div>
        <div className="footer-icon me-1 me-lg-4 d-flex justify-content-center  align-items-center ">
          <Link to="/">{<BsTwitter className="text-white"></BsTwitter>}</Link>
        </div>
        <div className="footer-icon me-1 me-lg-4 d-flex justify-content-center  align-items-center ">
          <Link to="/">
            {<FaLinkedinIn className="text-white"></FaLinkedinIn>}
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mx-5 py-3">
        <small className="text-light ms-lg-3 ms-0 small-font">
          Copyright &copy; {year}
        </small>
        <small className="text-light me-0 me-lg-3 small-font">
          Made By
          <a
            className="text-decoration-none primary-color ms-1 ms-lg-2 fw-bold footer-link"
            href="https://github.com/NishatFariza"
          >
            Nishat Fariza
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
