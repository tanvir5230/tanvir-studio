import React from "react";
import { Col, Container, Row } from "reactstrap";

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
    <Container fluid className="px-5">
      <h1 className="border-bottom d-flex justify-content-between py-3 px-1">
        <span className="text-success">About Me</span>
        <span className="fa fa-user text-success"></span>
      </h1>

      <Row>
        <Col className="py-4" xs={12} lg={7}>
          <h3>MERN Stack Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            minus quis est, ipsam voluptates alias ex et quibusdam mollitia
            exercitationem laborum molestiae odit amet reiciendis? Commodi non
            odit laudantium quos.
          </p>
        </Col>
        <Col xs={12} lg={5}>
          <h3>Personal Information</h3>
          <div className="py-4">
            {info.map((item) => {
              return (
                <p>
                  <span
                    className="text-right mr-2 font-weight-bold"
                    style={{ width: "100px" }}
                  >
                    {item.title}:
                  </span>
                  <span className="text-left text-wrap">{item.text}</span>
                </p>
              );
            })}
          </div>
          <button className="btn btn-outline-success font-weight-bold text-capitalize">
            download resume
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
