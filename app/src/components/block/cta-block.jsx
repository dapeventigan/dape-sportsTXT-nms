import React from "react";

import "./cta-block.css"

const CtaBlock = ({ title, desc }) => {
  return (
    <div className="cta-container">
      <h1 className="cta-title">{title}</h1>
      <h2 className="cta-desc">{desc}</h2>
    </div>
  );
};

export default CtaBlock;
