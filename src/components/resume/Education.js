import React from "react";
import { Col } from "reactstrap";
import { educationHeading, educationList } from "../../info/resume";

const Education = () => {
  const education = educationList;
  return (
    <Col xs={10} className="mt-3">
      <h4 className="mb-5  text-center">
        <span className="heading-border c-text">{educationHeading}</span>
      </h4>
      {education.map((edu,i) => {
        return (
          <div key={i}>
            <h5>
              <span className="font-weight-bold">{edu.degree}</span> in{" "}
              <span className="font-weight-bold">{edu.department},</span>
            </h5>
            <h5>{edu.institute}</h5>
            <div className="text-black-50">
              <span>{edu.start}</span>
              <span>-</span>
              <span>{edu.end}</span><br/>
              {edu.degree === "Bsc" ? <><span>CGPA: </span><span>{edu.CGPA}</span></>:<><span>GPA: </span><span>{edu.GPA}</span></>}
            </div>
          </div>
        );
      })}
    </Col>
  );
};

export default Education;
