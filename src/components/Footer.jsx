import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-light py-4">
      <div className="container">
        {/* Top row: Quick Links (left) and Contact Info (right) */}
        <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
          {/* Contact Info */}
          <div className="text-center text-md-start mt-4 mt-md-0">
            <h3 className="text-uppercase mb-3" style={{ color: "#7fff00" }}>
              Contact Info
            </h3>
            <p className="mb-1">+91 9014782986</p>
            <p className="mb-1">
              <a
                href="mailto:afreedshaik560@gmail.com"
                className="text-light text-decoration-none"
              >
                afreedshaik560@gmail.com
              </a>
            </p>
            <p className="mb-1" style={{ color: "#7fff00" }}>
              <a
                href="https://www.linkedin.com/in/afreed-shaik30/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                LinkedIn Profile
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/afreedshaik30"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                GitHub Profile
              </a>
            </p>
          </div>
          {/* Quick Links */}
          <div className="text-center text-md-start">
            <h5 className="text-uppercase mb-3" style={{ color: "#7fff00" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled">
              {["About", "Skills", "Projects"].map((link) => (
                <li key={link} className="mb-2">
                  <Link
                    to={link.toLowerCase()}
                    className="text-light text-decoration-none"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom: centered */}
        <hr className="border-light w-50 mx-auto" />
        <p className="mb-0 small text-center" style={{ color: "#7fff00" }}>
          © {new Date().getFullYear()} Shaik Afreed | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
