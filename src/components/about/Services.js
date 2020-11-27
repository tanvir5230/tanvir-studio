import React from "react";
import { Col, Row } from "reactstrap";

const Services = () => {
  const services = [
    {
      icon: "laptop",
      title: "full stack development",
      description:
        "I can build full stack project with the help of React, mongoDB, node.js, express.js and other necessary tools.",
    },
    {
      icon: "eye",
      title: "Front End development",
      description:
        "I can build front end web application with the help of html,pure css and vanilla javascript.But am also very much expert in frameworks like: bootstrap, React, material ui etc.",
    },
    {
      icon: "mobile",
      title: "responsive design",
      description:
        "I can build web application responsive to all kinds of screen and those also have cross-browser suppport.",
    },
  ];
  return (
    <>
      <Col xs={12} className="py-5">
        <h2 className="text-center">
          <span className="m-auto heading-border position-relative">
            Services
          </span>
        </h2>
      </Col>
      <Col xs={12}>
        <Row className="justify-content-center">
          {services.map((service) => {
            return (
              <Col xs={10} md={4} className="mt-4">
                <div className="d-flex flex-column align-items-center text-center px-4">
                  <span
                    className={`fa fa-${service.icon} text-warning`}
                    style={{ fontSize: "5rem" }}
                  ></span>
                  <span className="text-uppercase font-weight-bold py-3">
                    {service.title}
                  </span>
                  <p className="py-1">{service.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Col>
    </>
  );
};

export default Services;
