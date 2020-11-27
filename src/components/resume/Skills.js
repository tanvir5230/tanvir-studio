import React from "react";
import { Col, Progress } from "reactstrap";

const Skills = () => {
  const frontEnd = [
    { name: "html", value: 85 },
    { name: "css", value: 75 },
    { name: "javascript", value: 80 },
    { name: "react", value: 85 },
  ];
  const backend = [
    { name: "Node js", value: 50 },
    { name: "express", value: 60 },
    { name: "mongodb", value: 90 },
    { name: "mongoose", value: 85 },
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
      experience: "web master,IEEE CUET student branch",
    },
  ];
  return (
    <Col xs={11} className="mt-1">
      <div>
        <h5 className="font-weight-bolder mt-2">Front End Technologies: </h5>
        {frontEnd.map((fe) => {
          return (
            <div className="mt-1">
              <span className="text-uppercase">{fe.name}</span>
              <Progress color="success" value={fe.value}>
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
              <Progress color="success" value={be.value}>
                {be.value}%
              </Progress>
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        <h5 className="font-weight-bolder my-3">Other Skills: </h5>
        {otherSkills.map((ot) => {
          return (
            <dl className="mt-1">
              <dt className="text-uppercase">{ot.name}</dt>
              <dd>{ot.experience}</dd>
            </dl>
          );
        })}
      </div>
    </Col>
  );
};

export default Skills;
