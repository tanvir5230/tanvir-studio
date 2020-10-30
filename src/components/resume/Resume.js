import React from "react";
import { Container, Row } from "reactstrap";
import Topbar from "../navigation/Topbar";
import Certificate from "./Certificate";
import Education from "./Education";
import Experience from "./Experience";
import Hobby from "./Hobby";
import Language from "./Language";
import Skills from "./Skills";

const Resume = () => {
  return (
    <Container
      fluid
      className="p-0"
      style={{ overflowX: "hidden", overflowY: "auto" }}
    >
      <Topbar />
      <h1
        className="px-5 text-success d-flex justify-content-between border-bottom py-3"
        style={{ fontSize: "40px" }}
      >
        <span>Resume</span>
        <span className="fa fa-id-badge"></span>
      </h1>
      <Row className="justify-content-center align-content-center">
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
