import React from "react";
import { personalInfoHeading } from "../../info/about";
import { resumeLink } from "../../info/resume";
export const Info = ({ info }) => {
  return (
    <>
      <h4>{personalInfoHeading}</h4>
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
        href={`${resumeLink}`}
        className="btn btn-outline-info font-weight-bold text-capitalize"
      >
        <span className="fa fa-download mr-2"></span>download resume
      </a>
    </>
  );
};
