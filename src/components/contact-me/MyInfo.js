import React from "react";
import { Col, Row } from "reactstrap";

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

export default MyInfo;
