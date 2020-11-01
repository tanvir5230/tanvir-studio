import React from "react";
import { Col } from "reactstrap";

const Education = () => {
  const education = [
    {
      degree: "Bsc",
      department: "Electrical & Electronic Engineering",
      institute: "Chittagong University of Engineering & Technology",
      start: "feb,2017",
      end: "current",
    },
    {
      degree: "Hsc",
      department: "Science",
      institute: "Notre Dame College, Dhaka",
      start: "june,2014",
      end: "june,2016",
    },
  ];
  return (
    <Col xs={10} lg={5} className="mt-3">
      <h2 className="mb-5">
        <span className="heading-border text-warning">Education</span>
      </h2>
      {education.map((edu) => {
        return (
          <div>
            <h5>
              <span className="font-weight-bold">{edu.degree}</span> in{" "}
              <span className="font-weight-bold">{edu.department},</span>
            </h5>
            <h5>{edu.institute}</h5>
            <div className="text-black-50">
              <span>{edu.start}</span>
              <span>-</span>
              <span>{edu.end}</span>
            </div>
          </div>
        );
      })}
    </Col>
  );
};

export default Education;
