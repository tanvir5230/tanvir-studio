import React from "react";

const Heading = ({ title, icon }) => {
  return (
    <h1 className="border-bottom d-flex justify-content-between py-3 px-1 text-warning">
      <span>{title}</span>
      <span className={`fa fa-${icon}`}></span>
    </h1>
  );
};

export default Heading;
