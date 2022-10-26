import React from "react";
import { Col, Progress } from "reactstrap";
import { backendList, frontEndList, otherSkillsList, otherToolsList } from "../../info/resume";

const Skills = () => {
  const frontEnd = frontEndList;
  const backend = backendList;
  const otherTools = otherToolsList;
  const otherSkills = otherSkillsList;
  return (
    <Col xs={11} className="mt-1">
      <h4 className="mb-5  text-center">
        <span className="heading-border c-text">Skills</span>
      </h4>
      <div>
        <h5 className="font-weight-bolder mt-2">Front End Technologies: </h5>
        {frontEnd.map((fe, i) => {
          return (
            <div key={i} className="mt-1 p-0">
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
        {backend.map((be, i) => {
          return (
            <div key={i} className="mt-1">
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
          {otherTools.map((ot, i) => {
            return (
              <li key={i} className="text-uppercase">
                {ot.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h5 className="font-weight-bolder my-3">Other Skills: </h5>
        {otherSkills.map((os, i) => {
          return (
            <dl key={i} className="mt-1">
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
