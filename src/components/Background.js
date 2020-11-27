import React from "react";
import ParticleBg from "./Home/ParticleBg";
import { Col, Container, Row } from "reactstrap";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import MyNavbar from "./navigation/MyNavbar";
import About from "./about/About";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";

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
                className="m-0 p-0"
                xs={2}
                style={{ backgroundColor: "#f6f5f6", height: "600px" }}
              >
                <MyNavbar />
              </Col>
              <Col
                className="p-0 m-0"
                xs={10}
                style={{
                  height: "600px",
                  overflowY: "auto",
                  msOverflowY: "auto",
                  overflowX: "hidden",
                  msOverflowX: "hidden",
                }}
              >
                <Switch>
                  <Route path="/about">
                    <div className="animate_animate animate__fadeInLeft">
                      <About />
                    </div>
                  </Route>
                  <Route path="/resume">
                    <div className="animate_animate animate__fadeInLeft">
                      <Resume />
                    </div>
                  </Route>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/blog">
                    <Blog />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/home">
                    <Home />
                  </Route>
                  <Redirect to="/home" />
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
