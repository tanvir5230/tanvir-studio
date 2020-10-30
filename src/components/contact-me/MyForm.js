import React from "react";
import { Col } from "reactstrap";

const MyForm = () => {
  return (
    <Col xs={9} lg={6} className="px-lg-5 mt-5 mt-lg-0">
      <h3 className="my-3">
        <span className="border-bottom border-success">Ho</span>
        <span className="border-bottom">w Can I Help You?</span>
      </h3>
      <form action="">
        <input
          type="text"
          name="name"
          className="form-control mt-3"
          placeholder="name"
          required
        />
        <input
          type="email"
          name="email"
          className="form-control mt-3"
          placeholder="email"
          required
        />
        <textarea
          name="details"
          cols="30"
          rows="5"
          className="form-control mt-3"
          placeholder="Description"
          required
        ></textarea>
        <button className="btn btn-outline-success rounded-pill mt-3 form-control">
          Send Message
        </button>
      </form>
    </Col>
  );
};

export default MyForm;
