import React from "react";
import { Container, Row } from "reactstrap";
import Topbar from "../navigation/Topbar";
import MyForm from "./MyForm";
import MyInfo from "./MyInfo";
import Heading from "../shared/Heading";

const ContactMe = () => {
  return (
    <Container
      fluid
      className="dark-bg h-100"
      style={{
        boxSizing: "border-box",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Topbar />

      <Heading title="Contact me" icon="envelope" />

      <Row className="justify-content-center my-3">
        <MyInfo />
        <MyForm />
      </Row>
    </Container>
  );
};

export default ContactMe;
