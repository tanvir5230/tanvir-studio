import React from "react";
import { Col, Container, Row } from "reactstrap";
import doctors_portal from "../../photo/projects/doctors-portal.png";
import creative_agency from "../../photo/projects/creative-agency.png";
import hot_onion from "../../photo/projects/hot-onion.png";
import volunteer_network from "../../photo/projects/volunteer-network.png";
import hot_gadgets from "../../photo/projects/hot_gadgets.PNG";
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      image: doctors_portal,
      title: "doctors-portal",
      shortDes: "this is a medical service oriented web app.",
      liveSite: "https://doctors-portal-t.web.app/",
      github: "https://github.com/tanvir5230/doctor-s-portal-client",
    },
    {
      image: creative_agency,
      title: "creative-agency",
      shortDes: "this a technical service provider web app.",
      liveSite: "https://creative-agency-t.web.app/",
      github: "https://github.com/tanvir5230/creative-agency-client",
    },
    {
      image: volunteer_network,
      title: "volunteer-network",
      shortDes: "this is a voluntary work.",
      liveSite: "https://volunteer-network-t.web.app/",
      github: "https://github.com/tanvir5230/volunteer-network-client",
    },
    {
      image: hot_onion,
      title: "hot-onion",
      shortDes: "this is a food service web app.",
      liveSite: "https://hot-onion-adb51.web.app/",
      github: "https://github.com/tanvir5230/hot-onion",
    },
    {
      image: hot_gadgets,
      title: "hot-gadgets",
      shortDes: "this is a e-commerce SITE(view only).",
      liveSite: "https://tanvir5230.github.io/hot-gadgets/",
      github: "https://github.com/tanvir5230/hot-gadgets",
    },
  ];
  return (
    <Container
      fluid
      className="p-0 m-0"
      style={{ height: "600px", overflowX: "hidden", overflowY: "auto" }}
    >
      <Row className="p-0 m-0 bg-white justify-content-start">
        <Col xs={12} className="p-0">
          <h3
            className="text-center border-bottom text-uppercase py-2"
            style={{ fontFamily: "cursive" }}
          >
            Portfolio
          </h3>
        </Col>
        {projects.map((project) => {
          return (
            <Col xs={6} className="mt-4 position-relative">
              <img
                src={project.image}
                width="100%"
                height="250"
                alt={project.title}
                className="rounded border shadow"
              />
              <div
                className="text-center text-white d-flex flex-column justify-content-center align-items-center overflow-hidden project"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "250px",
                  opacity: "0",
                  backgroundColor: "#107896",
                }}
              >
                <h5>{project.title}</h5>
                <p>{project.shortDes}</p>
                <div className="d-flex justify-content-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.liveSite}
                    className="btn-sm btn-primary rounded-pill border"
                  >
                    Live site
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.github}
                    className="btn-sm btn-primary rounded-pill border ml-2"
                  >
                    github
                  </a>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Portfolio;
