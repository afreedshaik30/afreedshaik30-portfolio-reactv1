import { useState } from "react";
import { VscLinkExternal } from "react-icons/vsc";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  const [hover, setHover] = useState(false);

  const imageContainerStyle = {
    position: "relative",
    overflow: "hidden",
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    display: hover ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: "0.5rem",
    borderBottomLeftRadius: "0.5rem",
    transition: "opacity 0.3s ease",
    zIndex: 2,
  };

  // const viewProjectStyle = {
  //   backgroundColor: "black",
  //   color: "white",
  //   border: "1px solid white",
  // };

  const handleViewProject = () => {
    window.open(props.projectLink, "_blank");
  };

  return (
    <div className="col-12">
      <Card className="h-100 shadow-lg rounded-2 border-0">
        <div className="row g-0 align-items-center">
          {/* Left - Image with Hover */}
          <div
            className="col-md-5 h-100"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div style={imageContainerStyle}>
              <Card.Img
                variant="top"
                src={props.projectImage}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.5rem",
                  borderBottomLeftRadius: "0.5rem",
                  transform: hover ? "scale(1.5)" : "scale(1)",
                  transition: "transform 0.5s ease-in-out",
                }}
              />
              <div style={overlayStyle}>
                <Button
                  variant="light"
                  onClick={handleViewProject}
                  // style={viewProjectStyle}
                >
                  View Project
                </Button>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="col-md-7">
            <Card.Body className="p-4">
              <Card.Title className="fw-bold text-uppercase mb-3 fs-4">
                <span
                  className="text-decoration-underline text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={handleViewProject}
                >
                  {props.projectName}{" "}
                  <VscLinkExternal size={24} style={{ marginLeft: "6px" }} />
                </span>
              </Card.Title>

              <Card.Text className="mb-4">{props.projectDesc}</Card.Text>

              <div className="d-flex flex-wrap gap-2">
                {props.projectTechnologies.map((tech, index) => (
                  <Button
                    key={index}
                    className="text-capitalize shadow-sm"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      border: "1px solid transparent",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "white";
                      e.target.style.color = "black";
                      e.target.style.border = "1px solid black";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "black";
                      e.target.style.color = "white";
                      e.target.style.border = "1px solid transparent";
                    }}
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProjectCard;
