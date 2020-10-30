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
      githubRepo: { client: "", server: "" },
      liveSite: "https://facebook.com",
    },
    {
      title: "Doctor's portal",
      features: [
        "The patients can give appointment and those will be saved in our database.",
      ],
      technologiesUsed: "react,reactstrap",
      githubRepo: { client: "", server: "" },
      liveSite: "https://facebook.com",
    },
    {
      title: "Doctor's portal",
      features: [
        "The patients can give appointment and those will be saved in our database.",
      ],
      technologiesUsed: "react,reactstrap",
      githubRepo: { client: "", server: "" },
      liveSite: "https://facebook.com",
    },
  ];
  return (
    <Col xs={10} lg={5} className="mt-3">
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
