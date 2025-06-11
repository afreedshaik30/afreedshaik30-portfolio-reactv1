import React from "react";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <div className="bg-dark text-light py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1
              style={{
                color: "#7fff00",
              }}
            >
              Get In Touch
            </h1>
            {/* <hr className="w-50 mx-auto" /> */}
            <ul className="list-unstyled d-flex justify-content-start align-items-center gap-3">
              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/in/afreed-shaik30/"
                  style={{
                    display: "inline-block",
                    padding: "4px",
                    borderRadius: "6px",
                    color: "inherit",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                  }}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:afreedshaik560@gmail.com"
                  style={{
                    display: "inline-block",
                    padding: "4px",
                    borderRadius: "6px",
                    color: "inherit",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                  }}
                  aria-label="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M510.678 112.275a67.905 67.905 0 0 0-14.662-31.054 71.116 71.116 0 0 0-4.823-5.345c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557 0-37.395 7.996-50.21 20.814a71.93 71.93 0 0 0-4.823 5.345A67.892 67.892 0 0 0 1.386 112.275 75.325 75.325 0 0 0 0 126.087V385.92a71.955 71.955 0 0 0 20.81 50.204 71.953 71.953 0 0 0 4.892 4.494c12.286 10.175 28.145 16.32 45.319 16.32h369.958c17.18 0 33.108-6.145 45.323-16.384a71.92 71.92 0 0 0 4.891-4.43 72.005 72.005 0 0 0 14.994-22.001v-.064a75.03 75.03 0 0 0 5.812-28.138V126.087a75.283 75.283 0 0 0-.822-13.812zM46.509 101.571a35.835 35.835 0 0 1 24.512-10.175h369.958a35.831 35.831 0 0 1 24.512 10.175c1.122 1.129 2.179 2.387 3.112 3.637L274.696 274.203c-5.348 4.687-11.954 7.002-18.696 7.002-6.674 0-13.276-2.315-18.695-7.002L43.472 105.136a35.87 35.87 0 0 1 3.037-3.565zM36.334 385.92V142.735L176.658 265.15 36.405 387.435a42.625 42.625 0 0 1-.071-1.515zM440.979 420.597H71.021a35.84 35.84 0 0 1-17.174-4.552l147.978-128.959 13.815 12.018c11.561 10.046 26.028 15.134 40.36 15.134 14.406 0 28.872-5.088 40.432-15.134l13.808-12.018 147.92 128.959a35.847 35.847 0 0 1-17.181 4.552zM475.666 385.92a42.523 42.523 0 0 1-.068 1.515L335.346 265.221 475.666 142.8V385.92z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6" style={{ marginTop: "45px" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
