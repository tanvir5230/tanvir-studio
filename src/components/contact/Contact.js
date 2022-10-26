import React from "react";
import { Col, Container, Row } from "reactstrap";
import MyForm from "./MyForm";

const Contact = () => {
  return (
    <Container
      fluid
      className="bg-white p-0 m-0"
      style={{
        height: "600px",
        boxSizing: "border-box",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Row className="justify-content-center px-0 py-3 m-0">
        <Col className="p-0">
          <h3
            className="text-center border-bottom text-uppercase py-2"
          >
            contact me
          </h3>
        </Col>
        <MyForm />
      </Row>
    </Container>
  );
};

export default Contact;
