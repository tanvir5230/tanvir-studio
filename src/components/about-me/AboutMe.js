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
    <Container fluid className="px-5 overflow-auto">
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
        <Col xs={12} lg={5} className="py-4">
          <h3>Personal Information</h3>
          <div className="pb-4">
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1CV4vkOsW461HV9o3ksOTLQvI2kx-hrtA/view?usp=sharing"
            className="btn btn-outline-success font-weight-bold text-capitalize"
          >
            download resume
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Services />
      </Row>
    </Container>
  );
};

const Services = () => {
  const services = [
    {
      icon: "laptop",
      title: "full stack development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae error facere facilis ipsa ducimus architecto.",
    },
    {
      icon: "eye",
      title: "web design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae error facere facilis ipsa ducimus architecto.",
    },
    {
      icon: "mobile",
      title: "responsive design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae error facere facilis ipsa ducimus architecto.",
    },
  ];
  return (
    <>
      <Col xs={12} className="py-5">
        <h2 className="text-center">
          <span className="m-auto" style={{ borderBottom: "2px solid green" }}>
            Services
          </span>
        </h2>
      </Col>
      <Col xs={12}>
        <Row className="justify-content-center">
          {services.map((service) => {
            return (
              <Col xs={10} md={4}>
                <div className="d-flex flex-column align-items-center text-center">
                  <span
                    className={`fa fa-${service.icon} text-success`}
                    style={{ fontSize: "5rem" }}
                  ></span>
                  <span className="text-uppercase font-weight-bold">
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

export default AboutMe;
