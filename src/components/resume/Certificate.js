import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, Col, Row } from "reactstrap";
import { certificateList } from "../../info/resume";

const Certificate = () => {
  const certificates = certificateList;

  const [indexOfCer, setIndex] = useState(0);
  const limit = certificates.length - 1;
  const increase = () => {
    if (indexOfCer === limit) {
      setIndex(0);
      return;
    } else {
      setIndex(indexOfCer + 1);
      return;
    }
  };
  const decrease = () => {
    if (indexOfCer === 0) {
      setIndex(limit);
      return;
    } else {
      setIndex(indexOfCer - 1);
      return;
    }
  };

  return (
    <Col xs={10} className="mt-3">
      <h4 className="mb-5  text-center">
        <span className="heading-border c-text">Certificate</span>
      </h4>
      <Row className="py-3">
        <Col
          xs={1}
          className="d-flex justify-content-center align-items-center"
        >
          <button className="btn" onClick={decrease}>
            <span className="fa fa-caret-left fa-2x text-warning"></span>
          </button>
        </Col>
        <Col xs={10}>
          <RenderCertificate certificates={certificates} i={indexOfCer} />
        </Col>
        <Col
          xs={1}
          className="d-flex justify-content-center align-items-center"
        >
          <button className="btn" onClick={increase}>
            <span className="fa fa-caret-right fa-2x text-warning"></span>
          </button>
        </Col>
      </Row>
    </Col>
  );
};

const RenderCertificate = ({ certificates, i }) => {
  const cf = certificates[i];
  return (
    <a href={cf.link} target="_blank" rel="noreferrer" className="d-block">
      <Card>
        <CardImg top src={cf.img} height="250px" />
        <CardImgOverlay style={{ backgroundColor: "black", opacity: ".7" }}>
          <div className="text-white d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <p>
              <span className="text-warning font-weight-bolder text-uppercase">
                course name:{" "}
              </span>
              <span>{cf.name}</span>
            </p>
            <p>
              <span className="text-warning font-weight-bolder text-uppercase">
                Instructor:{" "}
              </span>
              <span>{cf.instructor}</span>
            </p>
            <p>
              <span className="text-warning font-weight-bolder text-uppercase">
                platform:{" "}
              </span>
              <span>{cf.platform}</span>
            </p>
          </div>
        </CardImgOverlay>
      </Card>
    </a>
  );
};
export default Certificate;
