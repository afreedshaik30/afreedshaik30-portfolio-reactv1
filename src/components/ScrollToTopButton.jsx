import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Function to show the button when the page is scrolled down
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setVisible(true); // Show button if scrolled more than 300px
      } else {
        setVisible(false); // Hide button if less than 300px
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button onClick={scrollToTop} style={styles.scrollButton}>
        ↑ Scroll to Top
      </button>
    )
  );
};

// Button styles
const styles = {
  scrollButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "rgb(127, 255, 0)",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
};

export default ScrollToTopButton;
