import React from "react";
import { Col, Nav, NavItem, Row } from "reactstrap";
import Certificate from "./Certificate";
import Education from "./Education";
import Experience from "./Experience";
import Hobby from "./Hobby";
import Language from "./Language";
import Skills from "./Skills";
import "./resume.css";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

const Resume = () => {
  const { url } = useRouteMatch();
  const navItems = [
    { icon: "history", link: "experience" },
    { icon: "cogs", link: "skill" },
    { icon: "graduation-cap", link: "education" },
    { icon: "language", link: "language" },
    { icon: "certificate", link: "certificate" },
    { icon: "magic", link: "hobby" },
  ];
  return (
    <>
      <Row className="justify-content-center align-content-center bg-white">
        <Col
          xs={12}
          className="p-0 m-0 d-flex justify-content-center align-items-center"
        >
          <Nav className="px-3 px-md-0">
            {navItems.map((item) => {
              return (
                <NavItem className="my-md-1 my-1 border">
                  <NavLink
                    to={`${url}/${item.link}`}
                    className="text-dark px-2"
                    activeClassName="shadow"
                  >
                    <span className={`fa fa-${item.icon} mr-1`}></span>
                    <span>{item.link}</span>
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Col>
        <hr />
      </Row>
      <Row className="p-0 m-0 bg-white">
        <Switch>
          <Route path="/resume/experience">
            <Experience />
          </Route>
          <Route path="/resume/skill">
            <Skills />
          </Route>
          <Route path="/resume/education">
            <Education />
          </Route>
          <Route path="/resume/language">
            <Language />
          </Route>
          <Route path="/resume/certificate">
            <Certificate />
          </Route>
          <Route path="/resume/hobby">
            <Hobby />
          </Route>
          <Redirect to="/resume/experience" />
        </Switch>
      </Row>
    </>
  );
};

export default Resume;
