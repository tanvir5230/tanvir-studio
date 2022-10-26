import React from "react";
import { description, descriptionHeading } from "../../info/about";
export const Description = () => {
  return (
    <>
      <h4>{descriptionHeading}</h4>
      <p className="py-3 text-justify">
        {description}
      </p>
    </>
  );
};
