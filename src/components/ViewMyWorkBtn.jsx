import React, { useState } from "react";

function ViewMyWorkBtn() {
  const [hover, setHover] = useState(false);

  const baseStyle = {
    backgroundColor: hover ? "black" : "#7fff00",
    color: hover ? "#fff" : "#000",
    border: "none",
    transition: "all 0.3s ease",

    width: "180px",
    height: "55px",
    fontSize: "22px",
  };

  return (
    <a href="#projects">
      <button
        className="btn shadow text-capitalize"
        style={baseStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        View my work
      </button>
    </a>
  );
}

export default ViewMyWorkBtn;
