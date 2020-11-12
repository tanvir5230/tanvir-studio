import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";
import photo from "../../photo/myphoto.png";
import "./navbar.css";

const MyNavbar = () => {
  const navUrl = [
    { name: "home", icon: "home" },
    { name: "about-me", icon: "info-circle" },
    { name: "resume", icon: "file" },
    { name: "portfolio", icon: "briefcase" },
    { name: "blog", icon: "rss" },
    { name: "contact-me", icon: "envelope" },
  ];

  const social = [
    { link: "https://facebook.com/tanbir.ahmed", icon: "facebook-official" },
    {
      link: "https://www.linkedin.com/in/tanvir-ibn-touhid-tanvir/",
      icon: "linkedin",
    },
    { link: "https://github.com/tanvir5230", icon: "github" },
    { link: "https://twitter.com/ibn_touhid", icon: "twitter" },
  ];
  return (
    <div
      className="p-0 m-0 left-side"
      style={{
        height: "100%",
        width: "200px",
        color: "black",
        position: "relative",
      }}
    >
      <div>
        <img src={photo} alt="me" width="200px" height="200px" />
        <h5
          className="text-center bg-warning py-2 text-white"
          style={{ opacity: ".9", transform: "translateY(-40px)" }}
        >
          Tanvir Ibn Touhid
        </h5>
      </div>
      <div className="text-center text-uppercase fat-nav justify-content-between">
        <div>
          {navUrl.map((item) => {
            return (
              <NavItem className="py-2">
                <NavLink
                  activeStyle={{ color: "white", fontWeight: "bold" }}
                  to={`/${item.name}`}
                >
                  <p>
                    <span className={`fa fa-${item.icon}`}></span>
                  </p>
                  <p>{item.name}</p>
                </NavLink>
              </NavItem>
            );
          })}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "0", left: "0", right: "0" }}>
        <div className="d-flex justify-content-around social">
          {social.map((sc) => {
            return (
              <a className="m-0 p-0" href={`${sc.link}`}>
                <span className={`fa fa-${sc.icon}`}></span>
              </a>
            );
          })}
        </div>
        <p
          className="p-0 m-0 text-center text-white text-capitalize"
          style={{ fontSize: ".9rem" }}
        >
          all rights reserved by <br /> Tanvir Ibn Touhid
        </p>
        <p className="text-white text-center">
          <span className="fa fa-copyright">
            <span className="ml-2">{new Date().getFullYear()}</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default MyNavbar;
