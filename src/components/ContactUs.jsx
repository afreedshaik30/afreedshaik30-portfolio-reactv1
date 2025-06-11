import React, { useState } from "react";

const ContactUs = () => {
  const [hover, setHover] = useState(false);

  const baseStyle = {
    backgroundColor: hover ? "#7fff00" : "white",
    color: hover ? "black" : "#000",
    transition: "all 0.8s ease",
  };

  return (
    <a href="#contact">
      <button
        className="btn shadow text-capitalize"
        style={baseStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Connect With Me
      </button>
    </a>
  );
};

export default ContactUs;
