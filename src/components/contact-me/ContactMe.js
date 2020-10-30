import React from "react";
import { Col, Container, Row } from "reactstrap";
import Topbar from "../navigation/Topbar";

const ContactMe = () => {
  return (
    <Container
      fluid
      className="p-0"
      style={{ boxSizing: "border-box", overflowX: "hidden" }}
    >
      <Topbar />
      <h1 className="text-center mt-4">
        <span className="border-success border-bottom text-success">
          Contact Me
        </span>
      </h1>
      <Row className="justify-content-center my-3">
        <MyInfo />
        <Col xs={9} lg={6} className="px-lg-5 mt-5 mt-lg-0">
          <h3 className="my-3">
            <span className="border-bottom border-success">Ho</span>
            <span className="border-bottom">w Can I Help You?</span>
          </h3>
          <form action="">
            <input
              type="text"
              name="name"
              className="form-control mt-3"
              placeholder="name"
              required
            />
            <input
              type="email"
              name="email"
              className="form-control mt-3"
              placeholder="email"
              required
            />
            <textarea
              name="details"
              cols="30"
              rows="5"
              className="form-control mt-3"
              placeholder="Description"
              required
            ></textarea>
            <button className="btn btn-outline-success rounded-pill mt-3 form-control">
              Send Message
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

const MyInfo = () => {
  const myInfo = [
    {
      icon: "phone",
      title: "+8801521407975",
      subtitle: "I will be available from 10 a.m. to 8 p.m.",
    },
    {
      icon: "map-marker",
      title: "Bangladesh",
      subtitle:
        "I live in Cumilla which is one of the most important town of bangladesh",
    },
    {
      icon: "envelope",
      title: "tanvirbintouhid5230@gmail.com",
      subtitle:
        "you can send email and I will try to reply as soon as possible.",
    },
  ];
  return (
    <Col xs={9} lg={4}>
      {myInfo.map((info) => {
        return (
          <Row className="mt-3 justify-content-center align-items-center ">
            <Col xs={1} className="mt-3">
              {info.icon === "envelope" && (
                <span
                  className={`text-success fa fa-${info.icon}`}
                  style={{ fontSize: "30px" }}
                ></span>
              )}
              {info.icon !== "envelope" && (
                <span
                  className={`text-success fa fa-${info.icon}`}
                  style={{ fontSize: "40px" }}
                ></span>
              )}
            </Col>
            <Col xs={11} className="mt-3 px-4">
              <h6 className="mt-1">{info.title}</h6>
              <p className="text-secondary card-subtitle pt-2">
                {info.subtitle}
              </p>
            </Col>
          </Row>
        );
      })}
    </Col>
  );
};

export default ContactMe;
