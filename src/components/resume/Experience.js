import React from "react";
import { Col } from "reactstrap";

const Experience = () => {
  const experiences = [
    {
      title: "Doctor's portal",
      features: [
        "The patients can give appointment and those will be saved in our database.",
      ],
      technologiesUsed: "react,reactstrap",
      githubRepo: {
        client: "https://github.com/tanvir5230/doctor-s-portal-client",
        server: "https://github.com/tanvir5230/doctor-s-portal-server",
      },
      liveSite: "https://doctors-portal-t.web.app/",
    },
    {
      title: "Doctor's portal",
      features: [
        "Responsive and Single page web application",
        "Creative agency group can take client's order through this site",
        "They can inform the clients of their order status",
        "Specific data will be shown to specific user",
        "None can see others data",
        "Only admin can add,remove and modify service.",
        "clients can give feedback.",
        "clients have no access to admin section.",
      ],
      technologiesUsed: [
        "React",
        "reactstrap",
        "react-router",
        "firebase(for authentication && deployment of client side)",
      ],
      githubRepo: {
        client: "https://github.com/tanvir5230/creative-agency-client",
        server: "https://github.com/tanvir5230/creative-agency-server",
      },
      liveSite: "creative-agency-t.web.app/",
    },
    {
      title: "Volunteer Network",
      features: [
        "save user's registration on specific event",
        "send the registered event info to admin",
        "add, delete and modify the events(only for admin)",
        "can delete user(only for admin)",
      ],
      technologiesUsed: [
        "node js",
        "express js",
        "mongodb",
        "heroku(to deploy the server)",
      ],
      githubRepo: {
        client: "https://github.com/tanvir5230/volunteer-network-client",
        server: "https://github.com/tanvir5230/volunteer-network-server",
      },
      liveSite: "volunteer-network-t.web.app/",
    },
  ];
  return (
    <Col xs={10} lg={5} className="mt-3 experience">
      <h2 className="text-success">
        <span className="border-success border-bottom">Experience</span>
      </h2>
      {experiences.map((experience) => {
        return (
          <>
            <div className="mt-3">
              <h4>{experience.title}</h4>
              <h5>Features</h5>
              <ul>
                {experience.features.map((feature) => {
                  return <li>{feature}</li>;
                })}
              </ul>
              <h5>
                technologies Used: <span>{experience.technologiesUsed}</span>
              </h5>
              <div className="d-flex">
                <h5 className="pr-2">Github Repo: </h5>
                <a href={experience.githubRepo.client}>client</a>
                <span className="px-2">|</span>
                <a href={experience.githubRepo.server}>server</a>
              </div>
              <div className="d-flex">
                <h5 className="pr-3">Live site:</h5>
                <a href={experience.liveSite}>{experience.liveSite}</a>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </Col>
  );
};

export default Experience;
