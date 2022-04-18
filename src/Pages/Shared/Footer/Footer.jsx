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
    <div className="py-3 bg-dark m-4 rounded text-center">
      <div className="mx-5 p-4 footer-wrapper d-flex justify-content-center align-items-center">
        <div className="footer-icon me-4 d-flex justify-content-center  align-items-center ">
          <Link to="/">
            {<FaFacebookF className="text-white"></FaFacebookF>}
          </Link>
        </div>
        <div className="footer-icon me-4 d-flex justify-content-center  align-items-center ">
          <Link to="/">{<BsTwitter className="text-white"></BsTwitter>}</Link>
        </div>
        <div className="footer-icon me-4 d-flex justify-content-center  align-items-center ">
          <Link to="/">
            {<FaLinkedinIn className="text-white"></FaLinkedinIn>}
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mx-5 py-3">
        <small className="text-light ms-3">Copyright &copy; {year}</small>
        <small className="text-light me-3">
          Made By
          <a
            className="text-decoration-none primary-color ms-2 fw-bold footer-link"
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
