import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../scss/NavigationBar.css";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="bg-black w-100 fixed-top z-1"
      data-bs-theme="dark"
      // style={{ height: "80px" }}
    >
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="fs-2 text-white text-decoration-none"
            onClick={closeNavbar}
          >
            <span style={{ color: "#7fff00" }}>Afreed</span> Shaik.
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 d-flex justify-content-end fs-4 gap-3">
            <Nav.Link as={Link} to="/" onClick={closeNavbar}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeNavbar}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" onClick={closeNavbar}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={closeNavbar}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={closeNavbar}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

// import { useState } from "react";
// import { Link } from "react-router-dom";

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function NavigationBar() {
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => setExpanded(!expanded);
//   const closeNavbar = () => setExpanded(false);

//   return (
//     <Navbar
//       expand="lg"
//       expanded={expanded}
//       className="bg-primary w-100 fixed-top z-1"
//       data-bs-theme="dark"
//       style={{ height: "90px" }}
//     >
//       <Container>
//         <Navbar.Brand>
//           <Link
//             to="/"
//             className="fs-2 text-white text-decoration-none"
//             onClick={closeNavbar}
//           >
//             <span style={{ color: "#7fff00" }}>Afreed</span> Shaik.
//           </Link>
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           onClick={handleToggle}
//         />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto w-100 d-flex justify-content-end fs-4 gap-3">
//             <Nav.Link as={Link} to="/" onClick={closeNavbar}>
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="/about" onClick={closeNavbar}>
//               About
//             </Nav.Link>
//             <Nav.Link as={Link} to="/skills" onClick={closeNavbar}>
//               Skills
//             </Nav.Link>
//             <Nav.Link as={Link} to="/projects" onClick={closeNavbar}>
//               Projects
//             </Nav.Link>
//             <Nav.Link as={Link} to="/contact" onClick={closeNavbar}>
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;
