import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import MyNavbar from "./MyNavbar";

const Topbar = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div
        className="d-flex d-md-none justify-content-between align-items-center px-3 py-2 text-white bg-dark"
        style={{ fontSize: "1.5rem" }}
      >
        <span>Tanvir Ibn Touhid</span>
        <button onClick={toggle} className="btn text-white">
          <span className="fa fa-bars" style={{ fontSize: "1.5rem" }}></span>
        </button>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="p-0 m-0 overflow-hidden"
        style={{ width: "200px" }}
        fade={true}
      >
        <ModalBody
          className="p-0 m-0 overflow-hidden"
          style={{ height: "99vh" }}
        >
          <MyNavbar />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Topbar;
