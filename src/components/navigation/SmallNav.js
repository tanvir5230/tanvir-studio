import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import logo from "../../logo.png";
import mNav from "../../photo/m-nav.png";

const SmallNav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <img
        src={mNav}
        alt="mobile nav"
        width="50"
        height="50"
        className="d-md-none"
        style={{
          zIndex: "1000",
          cursor: "pointer",
        }}
        onClick={() => {
          setToggle(!toggle);
        }}
      />

      {toggle && <UrlContainer />}
    </>
  );
};

const UrlContainer = () => {
  const navUrl = [
    { name: null, icon: logo },
    { name: "about", icon: "user-o" },
    { name: "resume", icon: "file-o" },
    { name: "portfolio", icon: "briefcase" },
    { name: "blog", icon: "commenting-o" },
    { name: "contact", icon: "envelope-o" },
  ];
  return (
    <Nav
      vertical
      style={{
        width: "75px",
        height: "auto",
        position: "fixed",
        bottom: "110px",
        right: "10px",
        zIndex: "1000",
        backgroundColor: "whitesmoke",
        borderRadius: "10px",
      }}
    >
      {navUrl.map((item) => {
        return (
          <NavItem>
            <NavLink
              className="border-bottom text-center p-2 m-0"
              href={`#${item.name ? item.name : "home"}`}
            >
              {item.icon !== logo && (
                <span className={`fa fa-${item.icon}`}></span>
              )}
              {item.icon === logo && (
                <img src={logo} alt={item.name} width="30px" height="30px" />
              )}
              <br />
              <small>{item.name}</small>
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};

export default SmallNav;
