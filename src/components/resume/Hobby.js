import React from "react";
import { Col } from "reactstrap";

const Hobby = () => {
  const hobbies = [
    "playing cricket or football",
    "reading literature",
    "get close to nature",
  ];
  return (
    <Col xs={10} lg={5} className="mt-3 pl-lg-4">
      <h2 className="text-success">
        <span className="border-success border-bottom">Hobbies</span>
      </h2>
      <ul>
        {hobbies.map((hobby) => {
          return <li className="mt-3">{hobby}</li>;
        })}
      </ul>
    </Col>
  );
};

export default Hobby;
