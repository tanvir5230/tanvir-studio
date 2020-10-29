import { BrowserRouter, Route, Switch } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/navigation/MyNavbar";
import Homepage from "./components/home/Homepage";
import AboutMe from "./components/about-me/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex" style={{ width: "100vw", height: "100vh" }}>
        <MyNavbar />
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
          <Route path="/resume">resume</Route>
          <Route path="/portfolio">portfolio</Route>
          <Route path="/blog">blog</Route>
          <Route path="/contact-me">contact me</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
