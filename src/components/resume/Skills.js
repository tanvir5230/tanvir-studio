import React from "react";
import { Col, Progress } from "reactstrap";

const Skills = () => {
  const frontEnd = [
    { name: "html", value: 85 },
    { name: "css", value: 80 },
    { name: "javascript", value: 80 },
    { name: "react", value: 85 },
    { name: "redux", value: 80 },
    { name: "bootstrap", value: 90 },
  ];
  const backend = [
    { name: "Node js", value: 50 },
    { name: "express", value: 60 },
    { name: "mongodb", value: 90 },
    { name: "mongoose", value: 85 },
    { name: "REST api", value: 80 },
    { name: "GraphQL", value: 85 },
  ];
  const otherTools = [
    { name: "vs code" },
    { name: "chrome dev tools" },
    { name: "firebase" },
    { name: "heroku" },
    { name: "git" },
    { name: "netlify" },
  ];
  const otherSkills = [
    {
      name: "leadership",
      experience: "Treasurer,IEEE CUET student branch",
    },
  ];
  return (
    <Col xs={11} className="mt-1">
      <h4 className="mb-5  text-center">
        <span className="heading-border c-text">Skills</span>
      </h4>
      <div>
        <h5 className="font-weight-bolder mt-2">Front End Technologies: </h5>
        {frontEnd.map((fe) => {
          return (
            <div className="mt-1 p-0">
              <span className="text-uppercase">{fe.name}</span>
              <Progress
                color="success"
                value={fe.value}
                style={{ height: "10px" }}
              >
                {fe.value}%
              </Progress>
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        <h5 className="font-weight-bolder my-3">Back End Technologies: </h5>
        {backend.map((be) => {
          return (
            <div className="mt-1">
              <span className="text-uppercase">{be.name}</span>
              <Progress
                color="success"
                value={be.value}
                style={{ height: "10px" }}
              >
                {be.value}%
              </Progress>
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        <h5 className="font-weight-bolder my-3">Other Tools: </h5>
        <ul className="mt-1">
          {otherTools.map((ot) => {
            return <li className="text-uppercase">{ot.name}</li>;
          })}
        </ul>
      </div>
      <div>
        <h5 className="font-weight-bolder my-3">Other Skills: </h5>
        {otherSkills.map((os) => {
          return (
            <dl className="mt-1">
              <dt className="text-uppercase">{os.name}</dt>
              <dd>{os.experience}</dd>
            </dl>
          );
        })}
      </div>
    </Col>
  );
};

export default Skills;
