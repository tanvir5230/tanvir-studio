import React from "react";
import { Col, Container, Row } from "reactstrap";
import Topbar from "../navigation/Topbar";
import "./aboutme.css";
import { Info } from "./Info";
import { Description } from "./Description";
import Services from "./Services";
import Heading from "../shared/Heading";

const AboutMe = () => {
  const age = new Date().getFullYear() - 1997;
  const info = [
    { title: "name", text: "Tanvir ibn touhid" },
    { title: "age", text: age },
    { title: "Residence", text: "cumilla, Bangladesh" },
    { title: "email", text: "tanvirbintouhid5230@gmail.com" },
    { title: "phone", text: "+8801521407975" },
  ];
  return (
    <>
      <div
        className="dark-bg w-100 h-100 c-scrollbar"
        style={{ overflowX: "hidden", overflowY: "auto" }}
      >
        <Container className="position-relative">
          <Topbar />
          <Heading title="about-me" icon="user" />
          <Row className="justify-content-md-between justify-content-center">
            <Col className="py-4" xs={10} lg={5}>
              <Description />
            </Col>
            <Col xs={10} lg={5} className="py-4">
              <Info info={info} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Services />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutMe;
