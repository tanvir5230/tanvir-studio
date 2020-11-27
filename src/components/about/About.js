import React from "react";
import { Col, Container, Row } from "reactstrap";
import Topbar from "../navigation/Topbar";
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
    <Container fluid className="m-0 p-0 bg-white">
      <Row className="justify-content-center">
        <Col className="py-4" xs={11}>
          <Description />
        </Col>
        <Col xs={11} className="py-4">
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
