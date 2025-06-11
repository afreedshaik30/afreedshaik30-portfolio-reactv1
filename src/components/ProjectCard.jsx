import { useState } from "react";
import { VscLinkExternal } from "react-icons/vsc";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    backgroundColor: hover ? "black" : "white",
    color: hover ? "white" : "black",
    border: hover ? "2.8px solid white" : "1.8px solid black",
    transition: "all 1.5s ease",
    opacity: hover ? 1 : 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  };

  const imageContainerStyle = {
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div className="col-lg-4 col-md-6">
      <Card className="h-100 shadow">
        {/* Image Container with Hover Logic */}
        <div
          style={imageContainerStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Card.Img
            variant="top"
            src={props.projectImage}
            style={{
              height: "300px",
              objectFit: "cover", // Ensures the whole image fits inside without cropping
            }}
          />

          {/* Hover Button */}
          <Button
            as="a"
            href={props.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow text-capitalize"
            variant="outline-primary"
            style={{
              ...buttonStyle,
            }}
          >
            View project
          </Button>
        </div>

        {/* Card Body */}
        <Card.Body className="p-5">
          <Card.Title className="fw-bold text-uppercase mb-4 fs-4">
            <a
              href={props.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-underline text-dark"
            >
              {props.projectName}{" "}
              <VscLinkExternal
                size={33}
                style={{ marginLeft: "6px", padding: "4px" }}
              />
            </a>
          </Card.Title>

          <Card.Text>{props.projectDesc}</Card.Text>

          {props.projectTechnologies.map((tech, index) => (
            <Button
              key={index}
              className="shadow text-capitalize me-2 mb-2"
              style={{
                backgroundColor: "black",
                color: "white",
                borderColor: "black",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "black";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "black";
                e.target.style.color = "white";
              }}
            >
              {tech}
            </Button>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;

// import { useState } from "react";
// import { VscLinkExternal } from "react-icons/vsc";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// function ProjectCard(props) {
//   const [hover, setHover] = useState(false);
//   const baseStyle = {
//     backgroundColor: hover ? "#7fff00" : "white",
//     color: hover ? "black" : "#000",
//     border: hover ? "1.8px solid black" : "1.8px solid #7fff00",
//     transition: "all 0.8s ease",
//   };

//   return (
//     <div className="col-lg-4 col-md-6">
//       <Card className="h-100 shadow">
//         <Card.Img variant="top" src={props.projectImage} />
//         <Card.Body className="p-5">
//           <Card.Title className="fw-bold text-uppercase mb-4 fs-4">
//             <a
//               href={props.projectLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-decoration-underline text-dark"
//             >
//               {props.projectName}{" "}
//               <VscLinkExternal
//                 size={33}
//                 style={{ marginLeft: "6px", padding: "4px" }}
//               />
//             </a>
//           </Card.Title>

//           <Card.Text>{props.projectDesc}</Card.Text>
//           {props.projectTechnologies.map((tech, index) => (
//             <Button
//               key={index}
//               className="shadow text-capitalize me-2 mb-2"
//               variant="outline-primary"
//             >
//               {tech}
//             </Button>
//           ))}
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default ProjectCard;
