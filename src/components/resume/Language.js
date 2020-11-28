import React from "react";
import { Col } from "reactstrap";

const Language = () => {
  const language = [
    { level: "native", name: "bangla" },
    { level: "proficient", name: "english" },
  ];
  return (
    <Col xs={10} className="mt-3 pl-lg-4">
      <h4 className="mb-5  text-center">
        <span className="heading-border c-text">Language</span>
      </h4>
      {language.map((lng,i) => {
        return (
          <div key={i} className="border-bottom my-4">
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
