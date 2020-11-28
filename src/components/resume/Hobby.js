import React from "react";
import { Col } from "reactstrap";

const Hobby = () => {
  const hobbies = [
    "playing cricket or football",
    "reading literature",
    "get close to nature",
  ];
  return (
    <Col xs={10} className="mt-3 pl-lg-4">
      <h4 className="mb-5  text-center">
        <span className="heading-border c-text">Hobbies</span>
      </h4>
      <ul>
        {hobbies.map((hobby,i) => {
          return <li key={i} className="mt-3">{hobby}</li>;
        })}
      </ul>
    </Col>
  );
};

export default Hobby;
