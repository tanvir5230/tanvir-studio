import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./about.css";
import { Info } from "./Info";
import { Description } from "./Description";
import Services from "./Services";

const About = () => {
  const age = new Date().getFullYear() - 1997;
  const info = [
    { title: "name", text: "Tanvir ibn touhid" },
    { title: "age", text: age },
    { title: "Residence", text: "cumilla, Bangladesh" },
    { title: "email", text: "tanvirbintouhid5230@gmail.com" },
    { title: "phone", text: "+8801521407975" },
  ];
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
            style={{ fontFamily: "cursive" }}
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
