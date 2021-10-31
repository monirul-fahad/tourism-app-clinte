import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 text-white text-start banner-text">
            <h1 className="fw-bold mb-4">Visit With Tour Dust.</h1>
            <p className="fs-4">
              We've spent 25 years finding, visiting and choosing brilliant
              places to stay, visit for special people like you.
            </p>
            <button className="btn btn-warning px-5 fw-bold py-3" id="doctors">
              Book A Package{" "}
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
