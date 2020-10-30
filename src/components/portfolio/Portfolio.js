import React from "react";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { Col, Container, Nav, NavItem, Row } from "reactstrap";
import Topbar from "../navigation/Topbar";

const Portfolio = () => {
  return (
    <Container
      fluid
      className="p-0"
      style={{ overflowX: "hidden", overflowY: "auto" }}
    >
      <Topbar />
      <h1
        className="px-5 text-success d-flex justify-content-between py-3"
        style={{ fontSize: "30px" }}
      >
        <span>Portfolio</span>
        <span className="fa fa-briefcase"></span>
      </h1>
      <Row>
        <Col xs={12}>
          <TabNavs />
        </Col>
      </Row>
    </Container>
  );
};

const TabNavs = () => {
  const { url, path } = useRouteMatch();
  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink
            className="nav-link"
            activeClassName="active"
            to={url + "/front-end"}
          >
            front end
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to={url + "/react"}>
            React app
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to={url + "/mern-stack"}>
            mern stack
          </NavLink>
        </NavItem>
      </Nav>
      <Switch>
        <Route path={path + "/front-end"}>
          <FrontEnd />
        </Route>
        <Route path={path + "/react"}>
          <ReactApp />
        </Route>
        <Route path={path + "/mern-stack"}>
          <MernStack />
        </Route>
        <Redirect to={path + "/front-end"} />
      </Switch>
    </>
  );
};

const FrontEnd = () => {
  return <h1>hello</h1>;
};

const MernStack = () => {
  return <h1>metn stack</h1>;
};
const ReactApp = () => {
  return <h1>resact</h1>;
};

export default Portfolio;
