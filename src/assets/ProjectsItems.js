import W2W from "./project/w2w.jpg";
import EazyStore from "./project/eazystore.jpg";
import AnimeArt from "./project/animeart.jpeg";
import Security from "./project/security.jpg";
import Crypto360 from "./project/crypto360.jpeg";
import PrimeCare from "./project/primecare.jpeg";
import Project1Img from "./project/project1.jpg";
import Project3Img from "./project/project3.jpg";
import Project4Img from "./project/project4.jpg";

const ProjectsItems = [
  {
    id: 1,
    projectImg: W2W,
    projectTitle: "What2Watch",
    projectDescription: `A full-stack, user-authenticated movie and TV show watchlist app with secure JWT-based login, poster uploads to ImgBB, and seamless client-side routing and search via TMDb API.
Deployed frontend (Netlify) and backend (Docker on Render), integrating Axios, Aiven-hosted remote database.`,
    projectTechnologies: [
      "Spring boot",
      "MySQL - Avien DB",
      "ImgBB CDN",
      "Postman",
      "Spring Security - JWT",
      "Docker",
      "Render",
      "React",
      "React Router",
      "Tailwind CSS",
      "Axios",
      "TMDb API",
      "GitHub",
      "Netlify",
    ],
    projectLink: "https://w2wio.netlify.app/",
  },
  {
    id: 2,
    projectImg: EazyStore,
    projectTitle: "EazyStore",
    projectDescription: `A web-based POS system for a clothing store with user, product, sales, and inventory management, along with real-time report generation.
Implemented secure role-based authentication (admin/staff), password hashing, and a responsive single-page interface with seamless routing.`,
    projectTechnologies: [
      "Spring boot",
      "MySQL",
      "Postman",
      "Spring Security - JWT",
      "GitHub",
      "React",
      "Axios",
      "Context API",
      "React Router",
      "Tailwind CSS",
    ],
    projectLink: "https://github.com/afreedshaik30/pos-web-app",
  },
  {
    id: 3,
    projectImg: AnimeArt,
    projectTitle: "AnimeArt.io",
    projectDescription: `AnimeArt.io is an AI-powered platform that transforms your imagination into stunning anime-style art from text prompts or images.
Simply upload an image or type your idea—our engine turns it into high-quality anime visuals instantly.`,
    projectTechnologies: [
      "Spring boot",
      "OpenFeign",
      "Stability Ai API",
      "Docker",
      "Render",
      "React",
      "React-Router",
      "Tailwind CSS",
      "Axios",
      "Netlify",
    ],
    projectLink: "https://animeartio.netlify.app/",
  },
  {
    id: 4,
    projectImg: Project4Img,
    projectTitle: "Email Reply Writer",
    projectDescription:
      "Built an AI-powered email assistant integrating Spring Boot with Google's Gemini API for features like auto responses. The React frontend offers a user-friendly interface for managing emails efficiently. This project enhances productivity.",

    projectTechnologies: [
      "Spring boot",
      "Gemini AI API",
      "Docker",
      "Render",
      "React",
      "GitHub",
      "Netlify",
    ],
    projectLink: "https://replywriter.netlify.app/",
  },
  {
    id: 5,
    projectImg: Security,
    projectTitle:
      "Advanced Data Security Using Hybrid Cryptography and Steganography",
    projectDescription: `A hybrid cryptographic system combining Blowfish, AES, and RSA to secure messages and keys, with digital signatures for integrity.
Embedded the encrypted data within images using LSB steganography, leveraging NumPy, OpenCV, and cryptography libraries`,
    projectTechnologies: [
      "React v19",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Netlify",
    ],
    projectLink: "https://ijrpr.com/uploads/V5ISSUE3/IJRPR23442.pdf",
  },
  {
    id: 6,
    projectImg: Crypto360,
    projectTitle: "Crypto360.",
    projectDescription: `Crypto360io is a modern React + Redux web app for tracking cryptocurrencies in real-time. It showcases top 100 coins, trending coins (24h to 1y), interactive coin charts, USD/INR toggle, and a fully responsive UI — all styled with Tailwind CSS and deployed on Netlify.`,
    projectTechnologies: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Chart.js",
      "CoinGecko API",
      "React-Select, React-Alice-Carousel, React-Icons",
      "Netlify",
    ],
    projectLink: "https://crypto360io.netlify.app/",
  },
  {
    id: 7,
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
    id: 8,
    projectImg: PrimeCare,
    projectTitle: "PrimeCare Hospital",
    projectDescription: `PrimeCare Hospital is a modern, responsive healthcare website built with React and Tailwind CSS, offering seamless navigation through Home, About, Services, Doctors, Blogs, and Appointment booking. It features smooth scrolling, toast notifications, email integration via EmailJS, and a sleek carousel to highlight expert care and facilities.`,
    projectTechnologies: [
      "React",
      "Email.js",
      "Tailwind CSS",
      "React-icons, React-scroll, React-slick, React-toastify",
      "Netlify",
    ],
    projectLink: "https://primecareweb.netlify.app/",
  },
  {
    id: 9,
    projectImg: Project3Img,
    projectTitle: "One More Bite",
    projectDescription:
      "Developed a responsive website that allows users to explore a menu of food items, filter by type and price. The site features an interactive navbar, a mobile-friendly menu, and intuitive filtering options for users to explore food categories.",
    projectTechnologies: [
      "React v19",
      "React-icons, React-slick(slick-carousel)",
      "Tailwind CSS",
      // "Vite",
      "Netlify",
    ],
    projectLink: "https://onemorebite.netlify.app/",
  },
];

export default ProjectsItems;
