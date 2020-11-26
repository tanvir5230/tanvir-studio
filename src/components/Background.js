import React from "react";
import ParticleBg from "../components2/home/ParticleBg";
import { Col, Container, Row } from "reactstrap";
import MyNavbar from "./navigation/MyNavbar";
import { Route, Switch } from "react-router-dom";
const Background = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <div className="w-100 h-100 p-0 m-0 overflow-hidden position-relative">
        <div className="homepage w-100 h-100 overflow-hidden"></div>
        <div className="w-100 h-100 particle-container overflow-hidden">
          <ParticleBg />
        </div>
      </div>

      <Container
        className="h-100"
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          top: "0",
          zIndex: "100",
        }}
      >
        <Row className="h-100 justify-content-center align-items-center p-0">
          <Col
            className="p-0"
            xs={12}
            md={10}
            lg={8}
            style={{ height: "80vh" }}
          >
            <Row className="h-100 w-100 m-0 p-0">
              <Col
                className="h-100 p-0 m-0"
                xs={2}
                style={{ backgroundColor: "#f6f5f6" }}
              >
                <MyNavbar />
              </Col>
              <Col className="h-100" xs={10}>
                <Switch>
                  <Route path="/"></Route>
                </Switch>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Background;
