import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound-wrapper d-flex justify-content-center align-items-center">
      <div className="text-center">
        <small className="small-text text-uppercase fw-bold">ERROR 404</small>
        <p className="primary-font">Page is Not Found</p>
        <div className="divider mb-5"></div>
        <Link
          to="/"
          className="border-0 rounded notFound-btn text-white fw-bold"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
