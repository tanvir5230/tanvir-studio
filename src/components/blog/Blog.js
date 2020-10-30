import React from "react";
import { Container } from "reactstrap";
import Topbar from "../navigation/Topbar";

const Blog = () => {
  return (
    <Container fluid className="p-0">
      <Topbar />
      <h1 className="text-success font-weight-bolder text-center text-uppercase">
        Coming soon
      </h1>
    </Container>
  );
};

export default Blog;
