import React, { useRef, useState, useEffect } from "react";
import { Col, Alert } from "reactstrap";
import emailjs from "emailjs-com";

const MyForm = () => {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const name = useRef();
  const email = useRef();
  const message = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "83c84cc72521bbad41a69dbb",
        "contact_form",
        e.target,
        "user_ngSB8kPE7VUJE8KYnmtkB"
      )
      .then(
        (result) => {
          if (result.text) {
            setSuccess(true);
            name.current.value = "";
            email.current.value = "";
            message.current.value = "";
          }
        },
        (error) => {
          setFailed(true);
        }
      );
  }
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    if (failed) {
      setTimeout(() => {
        setFailed(false);
      }, 2000);
    }
  }, [success, failed]);

  return (
    <Col xs={11}>
      <h4 className="mt-3 mb-5">
        <span
          style={{
            borderBottom: "5px solid #107896",
            borderRadius: "50px 20px",
          }}
        >
          Ho
        </span>
        <span style={{ borderBottom: "5px solid #ddd" }}>
          w Can I Help You?
        </span>
      </h4>
      <form onSubmit={sendEmail}>
        <input type="hidden" name="contact_form" />
        <input
          type="text"
          name="user_name"
          className="form-control mt-3"
          placeholder="name"
          ref={name}
          required
        />
        <input
          type="email"
          name="user_email"
          className="form-control mt-3"
          placeholder="email"
          ref={email}
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="5"
          className="form-control mt-3"
          placeholder="Description"
          ref={message}
          required
        ></textarea>
        <button className="btn btn-outline-info mt-3 form-control">
          Send Message
        </button>
      </form>
      {success && (
        <Alert color="success" className="mt-3 rounded">
          Your message was sent successfully.
        </Alert>
      )}
      {failed && (
        <Alert color="danger" className="mt-3 rounded">
          your message was not sent. Try again.
        </Alert>
      )}
    </Col>
  );
};

export default MyForm;
