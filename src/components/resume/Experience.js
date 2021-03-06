import React from "react";
import { Col } from "reactstrap";

const Experience = () => {
  const experiences = [
    {
      title: "Doctor's portal",
      features: [
        "Single page application.",
        "clients can give appointment by choosing a specific date and doctor.",
        "doctors can check which petients gave appointments on which date.",
        "doctors can approve and cancel appointment.",
        "The petients don't have access to the doctors panel.",
        "this is a responsive website.",
      ],
      githubRepo: {
        client: "https://github.com/tanvir5230/doctor-s-portal-client",
        server: "https://github.com/tanvir5230/doctor-s-portal-server",
      },
      liveSite: "https://doctors-portal-t.web.app/",
    },
    {
      title: "Creative Agency",
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

      githubRepo: {
        client: "https://github.com/tanvir5230/volunteer-network-client",
        server: "https://github.com/tanvir5230/volunteer-network-server",
      },
      liveSite: "volunteer-network-t.web.app/",
    },
  ];
  return (
    <Col xs={11} className="mt-1">
      <h4 className="mb-5 text-center">
        <span className="heading-border c-text">Education</span>
      </h4>
      {experiences.map((experience, i) => {
        return (
          <>
            <div key={i} className="mt-1">
              <h4>{experience.title}</h4>
              <h5>Features:</h5>
              <ul>
                {experience.features.map((feature, i2) => {
                  return <li key={i2}>{feature}</li>;
                })}
              </ul>

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
