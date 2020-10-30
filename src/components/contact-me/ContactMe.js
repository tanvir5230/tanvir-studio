import React from "react";
import { Container, Row } from "reactstrap";
import Topbar from "../navigation/Topbar";
import MyForm from "./MyForm";
import MyInfo from "./MyInfo";

const ContactMe = () => {
  return (
    <Container
      fluid
      className="p-0"
      style={{ boxSizing: "border-box", overflowX: "hidden" }}
    >
      <Topbar />
      <h1 className="text-center mt-4">
        <span className="border-success border-bottom text-success">
          Contact Me
        </span>
      </h1>
      <Row className="justify-content-center my-3">
        <MyInfo />
        <MyForm />
      </Row>
    </Container>
  );
};

export default ContactMe;
