import React, { useState } from "react";
import { useEffect } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import "./blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tanvirbintouhid"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setBlogs(data.items);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <Container
      fluid
      className="bg-white overflow-auto"
      style={{ height: "600px", overflowX: "hidden", overflowY: "auto" }}
    >
      <Row className="justify-content-center justify-content-md-start align-items-baseline p-3">
        <Col xs={12} className="p-0">
          <h3
            className="text-center border-bottom text-uppercase py-2"
          >
            blog
          </h3>
        </Col>
        {blogs === null && (
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "500px" }}
          >
            <span className="text-primary fa fa-spinner fa-pulse fa-2x"></span>
          </Col>
        )}
        {blogs &&
          blogs.map((blog, index) => {
            return blog.categories.length > 0 ? (
              <Col key={index} xs={11} lg={6} className="mt-4 mt-md-0">
                <Card className="text-dark blog">
                  <CardImg
                    top
                    width="100%"
                    src={blog.thumbnail}
                    alt={blog.title}
                  />
                  <CardBody>
                    <CardTitle tag="h5">{blog.title}</CardTitle>
                    <CardText>
                      <span className="text-dark">written by </span>
                      {blog.author}
                    </CardText>
                    <CardText>
                      <small className="text-muted">{blog.pubDate}</small>
                    </CardText>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-info"
                    >
                      Read the blog
                      <span className="fa fa-arrow-right ml-2"></span>
                    </a>
                  </CardBody>
                </Card>
              </Col>
            ) : (
              ""
            );
          })}
      </Row>
    </Container>
  );
};

export default Blog;
