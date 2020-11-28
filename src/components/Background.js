import React from "react";
import ParticleBg from "./Home/ParticleBg";
import { Col, Container, Row } from "reactstrap";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import Home from "./Home/Home";
import MyNavbar from "./navigation/MyNavbar";
import About from "./about/About";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Background = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <div className="w-100 h-100 p-0 m-0 overflow-hidden position-relative">
        <div className="homepage w-100 h-100 overflow-hidden"></div>
        <div className="w-100 h-100 particle-container overflow-hidden">
          <ParticleBg />
        </div>
      </div>

      <Container
        className="h-100 overflow-auto"
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          top: "0",
          zIndex: "100",
        }}
      >
        <Row className="h-100 justify-content-center align-items-center p-0 rounded">
          {/* desktop view */}
          <Col
            className="p-0 d-none d-md-block"
            xs={12}
            md={10}
            lg={8}
            style={{ height: "80vh" }}
          >
            <Row className="h-100 w-100 m-0 p-0">
              <Col
                className="m-0 p-0 rounded-lg"
                xs={2}
                style={{ backgroundColor: "#f6f5f6", height: "600px" }}
              >
                <MyNavbar />
              </Col>
              <Col
                className="p-0 m-0 rounded-lg"
                xs={10}
                style={{
                  height: "600px",
                  overflow: "hidden",
                }}
              >
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={600}
                  >
                    <Switch location={location}>
                      <Route path="/about">
                        <About />
                      </Route>
                      <Route path="/resume">
                        <Resume />
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
                  </CSSTransition>
                </TransitionGroup>
              </Col>
            </Row>
          </Col>
          {/* desktop view */}

          <Col xs={11} className="d-md-none p-0 m-0 overflow-auto">
            <div className="mt-3">
              <Home />
            </div>
            <div className="my-3">
              <About />
            </div>
            <div className="my-3">
              <Resume />
            </div>
            <div className="mt-3">
              <Blog />
            </div>
            <div className="my-3">
              <Contact />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Background;
