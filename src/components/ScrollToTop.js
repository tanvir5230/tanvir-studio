import React from "react";

const ScrollToTop = () => {
  return (
    <a href="#home">
      <img
        alt="scroll top"
        style={{
          width: "50px",
          height: "50px",
        }}
        src="data:image/png;base64,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"
      />
    </a>
  );
};

export default ScrollToTop;
