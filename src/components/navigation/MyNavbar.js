import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./navbar.css";
import logo from "../../logo.png";

const MyNavbar = () => {
  const navUrl = [
    { name: null, icon: logo },
    { name: "about", icon: "user-o" },
    { name: "resume", icon: "file-o" },
    { name: "portfolio", icon: "briefcase" },
    { name: "blog", icon: "commenting-o" },
    { name: "contact", icon: "envelope-o" },
  ];

  return (
    <Nav vertical className="text-center h-100">
      {navUrl.map((item, ind) => {
        return item.name === null ? (
          <NavItem
            key={ind}
            className="border-bottom d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            <NavLink
              style={{ color: "#838383" }}
              activeClassName="rounded-circle p-2"
              activeStyle={{ border: "5px solid #ddd" }}
              to="/home"
            >
              <img src={item.icon} alt="" width="30" height="30" />
            </NavLink>
          </NavItem>
        ) : (
          <NavItem
            key={ind}
            className={`${
              navUrl.length - 1 === ind ? "" : "border-bottom"
            } d-flex justify-content-center align-items-center`}
            style={{ height: "100px" }}
          >
            <NavLink
              style={{ color: "#838383" }}
              activeClassName="text-primary font-weight-bold"
              to={`/${item.name}`}
            >
              <span
                className={`fa fa-${item.icon}`}
                style={{ fontSize: "1.5rem" }}
              ></span>
              <br />
              <span
                style={{
                  fontSize: ".9rem",
                  fontFamily: "sans-serif",
                  letterSpacing: "2px",
                }}
              >
                {item.name}
              </span>
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};

export default MyNavbar;
