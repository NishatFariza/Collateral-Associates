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
    <div className="py-4 bg-dark mt-5 mx-4 rounded">
      <div className="w-75 mx-auto p-4 footer-wrapper d-flex justify-content-center align-items-center">
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
      <div>
        <p className="w-75 mx-auto p-3 text-muted">Copyright &copy; {year}</p>
      </div>
    </div>
  );
};

export default Footer;
