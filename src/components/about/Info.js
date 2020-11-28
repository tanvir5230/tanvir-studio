import React from "react";
export const Info = ({ info }) => {
  return (
    <>
      <h4>Personal Information</h4>
      <div className="py-3">
        {info.map((item, i) => {
          return (
            <p key={i} className="m-0 pb-1">
              <span
                className="text-right mr-2 font-weight-bold"
                style={{ width: "100px" }}
              >
                {item.title}:
              </span>
              <span className="text-left text-wrap">{item.text}</span>
            </p>
          );
        })}
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1CV4vkOsW461HV9o3ksOTLQvI2kx-hrtA/view?usp=sharing"
        className="btn btn-outline-info font-weight-bold text-capitalize"
      >
        <span className="fa fa-download mr-2"></span>download resume
      </a>
    </>
  );
};
