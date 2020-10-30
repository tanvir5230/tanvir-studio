import { BrowserRouter, Route, Switch } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/navigation/MyNavbar";
import Homepage from "./components/home/Homepage";
import AboutMe from "./components/about-me/AboutMe";
import Resume from "./components/resume/Resume";
import Blog from "./components/blog/Blog";
import ContactMe from "./components/contact-me/ContactMe";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex" style={{ width: "100vw", height: "100vh" }}>
        <div className="d-none d-md-block">
          <MyNavbar />
        </div>

        <Switch>
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
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route pathd="/contact-me">
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
