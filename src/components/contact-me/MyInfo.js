import React from "react";
import { Col, Row } from "reactstrap";

const MyInfo = () => {
  const myInfo = [
    {
      icon: "mobile",
      title: "+8801521407975",
      subtitle: "I will be available from 10 a.m. to 8 p.m.",
    },
    {
      icon: "map-marker",
      title: "Bangladesh",
      subtitle:
        "I live in Cumilla which is one of the most important towns of bangladesh",
    },
    {
      icon: "envelope",
      title: "tanvirbintouhid5230@gmail.com",
      subtitle:
        "you can send email and I will try to reply as soon as possible.",
    },
  ];
  return (
    <Col xs={11} lg={4}>
      {myInfo.map((info) => {
        return (
          <Row className="mt-3 justify-content-center align-items-center ">
            <Col xs={1}>
              {info.icon === "envelope" && (
                <span
                  className={`text-warning fa fa-${info.icon} fa-2x`}
                ></span>
              )}
              {info.icon !== "envelope" && (
                <span
                  className={`text-warning fa fa-${info.icon} fa-2x`}
                ></span>
              )}
            </Col>
            <Col xs={11} className="mt-3 px-4">
              <h6 className="mt-1">{info.title}</h6>
              <p style={{ color: "silver", fontSize: "1rem" }}>
                {info.subtitle}
              </p>
            </Col>
          </Row>
        );
      })}
    </Col>
  );
};

export default MyInfo;
