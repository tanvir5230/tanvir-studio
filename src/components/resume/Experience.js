import React from "react";
import { Col } from "reactstrap";
import { experienceHeading, experienceList } from "../../info/resume";

const Experience = () => {
  const experiences = experienceList;
  return (
    <Col xs={11} className="mt-1">
      <h4 className="mb-5 text-center">
        <span className="heading-border c-text">{experienceHeading}</span>
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
                <a href={experience.githubRepo.client} target="_blank" rel="noopener noreferrer">client</a>
                <span className="px-2">|</span>
                <a href={experience.githubRepo.server} target="_blank" rel="noopener noreferrer">server</a>
              </div>
              <div className="d-flex">
                <h5 className="pr-3">Live site:</h5>
                <a href={experience.liveSite} target="_blank" rel="noopener noreferrer">{experience.liveSite}</a>
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
