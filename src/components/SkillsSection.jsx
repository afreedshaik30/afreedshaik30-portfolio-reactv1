import { useState } from "react";

import icon11 from "../assets/icon/icon11.png";
import icon12 from "../assets/icon/icon12.png";
import icon13 from "../assets/icon/icon13.png";
import icon14 from "../assets/icon/icon14.png";
import icon15 from "../assets/icon/icon15.png";
import icon16 from "../assets/icon/icon16.png";

import icon21 from "../assets/icon/icon21.png";
import icon22 from "../assets/icon/icon22.png";
import icon23 from "../assets/icon/icon23.png";
import icon24 from "../assets/icon/icon24.png";
import icon25 from "../assets/icon/icon25.png";

import icon31 from "../assets/icon/icon31.png";
import icon32 from "../assets/icon/icon32.png";
import icon33 from "../assets/icon/icon33.png";
import icon34 from "../assets/icon/icon34.png";
import icon35 from "../assets/icon/icon35.png";

import icon41 from "../assets/icon/icon41.png";
import icon42 from "../assets/icon/icon42.png";
import icon43 from "../assets/icon/icon43.png";
import icon44 from "../assets/icon/icon44.png";

const skills = [
  {
    title: "Backend",
    items: [
      {
        name: "Java (Core & Advanced), J2EE",
        icon: icon11,
      },
      {
        name: "Spring Boot",
        icon: icon12,
      },
      {
        name: "JDBC, JPA (Hibernate)",
        icon: icon13,
      },
      {
        name: "MySQL",
        icon: icon14,
      },
      {
        name: "REST Web Services",
        icon: icon15,
      },
      {
        name: "JSON",
        icon: icon16,
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        name: "HTML",
        icon: icon21,
      },
      {
        name: "CSS",
        icon: icon22,
      },
      {
        name: "JavaScript",
        icon: icon23,
      },
      {
        name: "React.js / React v19",
        icon: icon24,
      },
      {
        name: "Node.js",
        icon: icon25,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Git/GitHub",
        icon: icon31,
      },
      {
        name: "Postman",
        icon: icon32,
      },
      {
        name: "Maven",
        icon: icon33,
      },
      {
        name: "VS Code",
        icon: icon34,
      },
      {
        name: "IntelliJ IDEA",
        icon: icon35,
      },
    ],
  },
  {
    title: "Areas of Interest",
    items: [
      {
        name: "Object-Oriented Programming (OOP)",
        icon: icon41,
      },
      {
        name: "Software Development Life Cycle (SDLC)",
        icon: icon42,
      },
      {
        name: "Agile Methodologies",
        icon: icon43,
      },
      {
        name: "Data structures and Algorithms ",
        icon: icon44,
      },
    ],
  },
];

const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div
      className="py-5 mt-5"
      id="skills"
      style={{ backgroundColor: "#0e0e0e", color: "#f1f1f1" }}
    >
      <div className="container">
        <h1
          className="fw-bold mb-5 display-5"
          style={{
            color: "#7fff00",
          }}
        >
          My Skills
        </h1>
        <div className="row g-4 skill-cards">
          {skills.map((category, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div className="col-12 col-md-6" key={index}>
                <div
                  className="p-4 rounded-4 h-100"
                  style={{
                    background: "white",
                    border: isHovered ? "6px solid #7fff00" : "4px solid gray",
                    transform: isHovered ? "translateY(-6px)" : "none",
                    boxShadow: isHovered
                      ? "0 10px 20px rgba(0, 0, 0, 0.1)"
                      : "none",
                    transition:
                      "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h3 className="fw-bold mb-3 text-black">{category.title}</h3>
                  <ul className="list-unstyled ps-1 mb-0">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="d-flex align-items-center mb-3"
                        style={{ fontSize: "1rem", lineHeight: "1.5" }}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          width="34"
                          height="34"
                          style={{
                            marginRight: "12px",
                            flexShrink: 0,
                            borderRadius: "4px",
                            border: "2px solid black",
                            padding: "2px",
                            backgroundColor: "white",
                          }}
                        />
                        <span className="text-black">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
