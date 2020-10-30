import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";
import photo from "../../photo/myphoto.png";
import "./navbar.css";

const MyNavbar = () => {
  const navUrl = [
    { name: "home", icon: "home" },
    { name: "about-me", icon: "info" },
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
    { link: "https://twitter.com", icon: "twitter" },
  ];
  return (
    <div
      className="p-0 m-0"
      style={{
        height: "100%",
        width: "200px",
        backgroundColor: "rgb(42,43,48)",
      }}
    >
      <img src={photo} alt="me" width="200px" height="200px" />
      <h5
        className="text-center bg-warning py-2 text-white"
        style={{ opacity: ".9", transform: "translateY(-40px)" }}
      >
        Tanvir Ibn Touhid
      </h5>
      <div
        className="text-center text-uppercase fat-nav justify-content-between"
        style={{ transform: "translateY(-48px)" }}
      >
        <div>
          {navUrl.map((item) => {
            return (
              <NavItem>
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

        <div style={{ transform: "translateY(80px)" }}>
          <div className="d-flex justify-content-around social">
            {social.map((sc) => {
              return (
                <a className="m-0 p-0" href={`${sc.link}`}>
                  <span className={`fa fa-${sc.icon}`}></span>
                </a>
              );
            })}
          </div>
          <p className="p-0 m-0 text-center text-white text-capitalize">
            all rights reserved by <br /> Tanvir Ibn Touhid
          </p>
          <p className="text-white">
            <span className="fa fa-copyright">
              <span className="ml-2">{new Date().getFullYear()}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
