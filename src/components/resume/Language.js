import React from "react";
import { Col } from "reactstrap";

const Language = () => {
  const language = [
    { level: "native", name: "bangla" },
    { level: "proficient", name: "english" },
  ];
  return (
    <Col xs={10} lg={5} className="mt-3 pl-lg-4">
      <h2 className="text-success">
        <span className="border-success border-bottom">Language</span>
      </h2>
      {language.map((lng) => {
        return (
          <div className="border-bottom my-4">
            <p className="p-0 m-0 font-weight-bolder text-uppercase">
              {lng.name}
            </p>
            <p className="text-black-50 p-0 m-0">{lng.level}</p>
          </div>
        );
      })}
    </Col>
  );
};

export default Language;
