import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./about.css";
import { Info } from "./Info";
import { Description } from "./Description";
import Services from "./Services";
import { personalInfo } from "../../info/about";

const About = () => {
  const info = personalInfo;
  return (
    <Container
      fluid
      className="m-0 p-0 bg-white"
      style={{ height: "600px", overflowY: "auto", overflowX: "hidden" }}
    >
      <Row className="justify-content-center">
        <Col className="p-0">
          <h3
            className="text-center border-bottom text-uppercase py-2"
          >
            about me
          </h3>
        </Col>
        <Col className="pt-4" xs={11}>
          <Description />
        </Col>
        <Col xs={11} className="pt-4">
          <Info info={info} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Services />
      </Row>
    </Container>
  );
};

export default About;
