import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./navbar.css";

const MyNavbar = () => {
  const navUrl = [
    { name: "home", icon: "home" },
    { name: "about-me", icon: "user-o" },
    { name: "resume", icon: "file-o" },
    { name: "portfolio", icon: "briefcase" },
    { name: "blog", icon: "commenting-o" },
    { name: "contact-me", icon: "envelope-o" },
  ];

  // const social = [
  //   { link: "https://facebook.com/tanbir.ahmed", icon: "facebook-official" },
  //   {
  //     link: "https://www.linkedin.com/in/tanvir-ibn-touhid-tanvir/",
  //     icon: "linkedin",
  //   },
  //   { link: "https://github.com/tanvir5230", icon: "github" },
  //   { link: "https://twitter.com/ibn_touhid", icon: "twitter" },
  // ];
  return (
    <Nav vertical className="text-center">
      {navUrl.map((item) => {
        return (
          <NavItem className="border-bottom py-3">
            <NavLink
              style={{ color: "#838383" }}
              activeStyle={{ color: "blue", fontWeight: "bold" }}
              to={`/${item.name}`}
            >
              <span
                className={`fa fa-${item.icon}`}
                style={{ fontSize: "2rem" }}
              ></span>
              <br />
              <span>{item.name}</span>
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};

export default MyNavbar;
