import React from "react";
import ParticleBg from "../home/ParticleBg";
import "./homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="w-100 h-100 p-0 m-0 overflow-hidden position-relative">
        <div className="homepage w-100 h-100 overflow-hidden"></div>
        <div className="w-100 h-100 particle-container overflow-hidden">
          <ParticleBg />
        </div>
        <div className="w-100 h-100 content d-flex justify-content-center align-items-center bg-transparent">
          <div className="w-100">
            <h1
              className="text-center text-white text-uppercase font-weight-bold"
              style={{
                fontSize: "62px",
                fontFamily: "serif",
                letterSpacing: "2px",
              }}
            >
              <span>Tanvir</span>{" "}
              <span className="text-success">Ibn Touhid</span>
            </h1>
            <h4
              className="text-center text-white font-weight-light"
              style={{ fontSize: "40px" }}
            >
              I am a{" "}
              <span
                className="font-weight-bold"
                style={{ borderBottom: "2px solid green" }}
              >
                web developer
              </span>
            </h4>
            <div className="d-flex justify-content-center mt-5">
              <button
                type="button"
                className="btn btn-success text-capitalize font-weight-bold text-white"
              >
                download my resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
