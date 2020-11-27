import React from "react";
import { Container, Row } from "reactstrap";
import MyForm from "./MyForm";
import MyInfo from "./MyInfo";

const Contact = () => {
  return (
    <Container
      fluid
      className="bg-white h-100"
      style={{
        boxSizing: "border-box",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Row className="justify-content-center my-3">
        <MyForm />
        <MyInfo />
      </Row>
    </Container>
  );
};

export default Contact;
