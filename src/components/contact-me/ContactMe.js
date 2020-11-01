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
      className="p-0 dark-bg"
      style={{ boxSizing: "border-box", overflowX: "hidden" }}
    >
      <Topbar />
      <Container>
        <Heading title="Contact me" icon="envelope" />
      </Container>
      <Row className="justify-content-center my-3">
        <MyInfo />
        <MyForm />
      </Row>
    </Container>
  );
};

export default ContactMe;
