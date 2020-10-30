import React from "react";
import { Card, CardBody, CardImg, Col, Container, Row } from "reactstrap";
import Topbar from "../navigation/Topbar";
import doctors_portal from "../../photo/projects/doctors-portal.png";
import creative_agency from "../../photo/projects/creative-agency.png";
import hot_onion from "../../photo/projects/hot-onion.png";
import volunteer_network from "../../photo/projects/volunteer-network.png";
import hot_gadgets from "../../photo/projects/hot_gadgets.png";
import "./portfolio.css";
//ok
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
      <Row className="flex-wrap justify-content-center justify-content-md-start align-items-end px-3">
        {projects.map((project) => {
          return (
            <Col xs={10} sm={6} lg={4} xl={3} className="mt-4">
              <Card className="shadow">
                <div
                  className="overflow-hidden"
                  style={{ height: "160px", width: "100%" }}
                >
                  <CardImg top src={project.image} className="rounded" />
                </div>
                <CardBody>
                  <div className="text-capitalize">
                    <h5>{project.title}</h5>
                    <p>{project.shortDes}</p>
                    <div className="d-flex justify-content-start">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.liveSite}
                        className="btn btn-outline-warning rounded-pill px-4 font-weight-bold"
                      >
                        Live site
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.github}
                        className="btn btn-outline-primary ml-3 rounded-pill px-4 font-weight-bold"
                      >
                        github
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Portfolio;
