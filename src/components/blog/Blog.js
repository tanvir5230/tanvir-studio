import React from "react";
import { Container } from "reactstrap";
import Topbar from "../navigation/Topbar";
import Heading from "../shared/Heading";

const Blog = () => {
  return (
    <Container fluid className="p-0 dark-bg h-100 overflow-auto">
      <Topbar />
      <Container>
        <Heading title="blog" icon="rss" />
      </Container>
      <Container>
        <h1 className="text-warning font-weight-bolder text-center text-uppercase">
          Coming soon
        </h1>
      </Container>
    </Container>
  );
};

export default Blog;
