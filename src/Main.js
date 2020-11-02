import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import MyNavbar from "./components/navigation/MyNavbar";
import Homepage from "./components/home/Homepage";
import AboutMe from "./components/about-me/AboutMe";
import Resume from "./components/resume/Resume";
import Blog from "./components/blog/Blog";
import ContactMe from "./components/contact-me/ContactMe";
import Portfolio from "./components/portfolio/Portfolio";
import { CSSTransition, TransitionGroup } from "react-transition-group";
function Main({ location }) {
  return (
    <div className="d-flex" style={{ width: "100vw", height: "100vh" }}>
      <div className="d-none d-md-block">
        <MyNavbar />
      </div>

      <TransitionGroup className="w-100 overflow-hidden">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/home">
              <Homepage />
            </Route>
            <Route path="/about-me">
              <AboutMe />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact-me">
              <ContactMe />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
export default withRouter(Main);
