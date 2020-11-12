import React from "react";
import { Container, Row } from "reactstrap";
import Topbar from "../navigation/Topbar";
import Certificate from "./Certificate";
import Education from "./Education";
import Experience from "./Experience";
import Hobby from "./Hobby";
import Language from "./Language";
import Skills from "./Skills";
import Heading from "../shared/Heading";
import "./resume.css";

const Resume = () => {
  return (
    <Container
      fluid
      className="p-0 dark-bg h-100 c-scrollbar"
      style={{ overflowX: "hidden", overflowY: "auto" }}
    >
      <Topbar />

      <Heading title="Resume" icon="id-badge" />

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
