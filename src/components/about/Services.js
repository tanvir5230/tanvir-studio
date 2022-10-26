import React from "react";
import { Col, Row } from "reactstrap";
import { serviceList } from "../../info/about";

const Services = () => {
  const services = serviceList;
  return (
    <>
      <Col xs={12} className="py-5">
        <h4 className="text-center">
          <span className="m-auto heading-border position-relative">
            Services
          </span>
        </h4>
      </Col>
      <Col xs={12}>
        <Row className="justify-content-center">
          {services.map((service, i) => {
            return (
              <Col key={i} xs={10} md={4} className="mt-4">
                <div className="d-flex flex-column align-items-center text-center">
                  <span
                    className={`fa fa-${service.icon} c-text`}
                    style={{ fontSize: "5rem" }}
                  ></span>
                  <span className="text-uppercase font-weight-bold py-3">
                    {service.title}
                  </span>
                  <p className="p-1">{service.description}</p>
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
