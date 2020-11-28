import React from "react";
import { Container, Row, Col } from "reactstrap";
import Certificate from "./Certificate";
import Education from "./Education";
import Experience from "./Experience";
import Hobby from "./Hobby";
import Language from "./Language";
import Skills from "./Skills";
import "./resume.css";

const Resume = () => {
  return (
    <Container
      fluid
      className="p-0 m-0"
      style={{ height: "600px", overflowY: "auto", overflowX: "hidden" }}
    >
      <Row className="p-0 m-0 bg-white justify-content-center">
        <Col className="p-0">
          <h3
            className="text-center border-bottom text-uppercase py-2"
            style={{ fontFamily: "cursive" }}
          >
            resume
          </h3>
        </Col>
        <Experience />
        <Skills />
        <Education />
        <Language />
        <Certificate />
        <Hobby />
      </Row>
    </Container>
  );
};

export default Resume;
