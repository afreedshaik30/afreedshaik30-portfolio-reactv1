import Project1Img from "./project/project1.jpg";
import Project2Img from "./project/project2.1.jpg";
import Project3Img from "./project/project3.jpg";
import Project4Img from "./project/project4.jpg";

const ProjectsItems = [
  {
    id: 1,
    projectImg: Project1Img,
    projectTitle: "Blue Orbit Website",
    projectDescription:
      "Developed a responsive, React-based corporate website with dynamic sections, form validation, and integrated WhatsApp messaging. Delivered a streamlined, efficient build with routing, smooth transitions, and deployment.",
    projectTechnologies: [
      "React v19",
      "React Router v7",
      "JavaScript",
      "Bootstrap",
      "CSS",
      "Vite",
      "Netlify",
    ],
    projectLink: "https://blueorbitio.netlify.app/",
  },
  {
    id: 2,
    projectImg: Project2Img,
    projectTitle: "Beauty Nation",
    projectDescription:
      "Developed a sleek, modern static website for a salon, integrating the WhatsApp Web API to enable direct bookings.This site is tailored for service-based businesses, offering seamless appointment scheduling and an elegant online presence.",
    projectTechnologies: [
      "React v19",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Netlify",
    ],
    projectLink: "https://beautynation.netlify.app/",
  },
  {
    id: 3,
    projectImg: Project3Img,
    projectTitle: "One More Bite",
    projectDescription:
      "Developed a responsive website that allows users to explore a menu of food items, filter by type and price. The site features an interactive navbar, a mobile-friendly menu, and intuitive filtering options for users to explore food categories.",
    projectTechnologies: [
      "React v19",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Netlify",
    ],
    projectLink: "https://onemorebite.netlify.app/",
  },
  {
    id: 4,
    projectImg: Project4Img,
    projectTitle: "Email Reply Writer",
    projectDescription:
      "Built an AI-powered email assistant integrating Spring Boot with Google's Gemini API for features like auto responses. The React frontend offers a user-friendly interface for managing emails efficiently. This project enhances productivity.",

    projectTechnologies: ["Java", "Spring boot", "JavaScript", "React"],
    projectLink: "https://replywriter.netlify.app/",
  },
  // {
  //   id: 5,
  //   projectImg: Project2Img,
  //   projectTitle: "Task Manager",
  //   projectDescription:
  //     "A task management tool that helps users create, update, and track their tasks.",
  //   projectTechnologies: ["HTML", "CSS", "JavaScript", "React"],
  //   projectLink: "https://onemorebite.netlify.app/",
  // },
  // {
  //   id: 6,
  //   projectImg: Project3Img,
  //   projectTitle: "Weather Dashboard",
  //   projectDescription:
  //     "A weather app that shows current and forecasted weather data for any location.",
  //   projectTechnologies: ["HTML", "CSS", "JavaScript", "React"],
  //   projectLink: "https://beautynation.netlify.app/",
  // },
];

export default ProjectsItems;
