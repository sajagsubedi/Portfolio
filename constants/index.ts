export const navLinks = [
  {
    name: "Home",
    href: "/#",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Skills",
    href: "/#skills",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Go (Golang)",
      "REST APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "Redis",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker"],
  },
];

export const learningTech = [
  "React Native",
  "Web3",
  "Blockchain",
  "Kubernetes",
  "Rust",
  "Next.js",
  "Microservices",
  "Devops",
];

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "PrepCorner",
    description: "Practice platform for entrance exam questions",
    longDescription:
      "A dynamic platform for students to practice and revise past entrance questions from multiple colleges. Includes categorized question sets, performance tracking, and timed practice.",
    image: "/projects/prepcorner.png",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    category: "fullstack",
    githubUrl: "https://github.com/sajagsubedi/prepcorner",
    liveUrl: "https://prepcorner.sajagsubedi.com.np",
  },
  {
    id: 2,
    title: "ProjectHub",
    description: "Your personal project manager",
    longDescription:
      "A productivity-focused project hub to create, manage, and track development projects with status, categories, search, and todos—all in one place.",
    image: "/projects/projecthub.png",
    technologies: ["Next.js", "Node.js", "Graphql", "MongoDB", "Tailwind CSS"],
    category: "fullstack",
    githubUrl: "https://github.com/sajagsubedi/ProjectHub_Frontend",
    liveUrl: "https://projecthub-demo.vercel.app",
  },
  {
    id: 3,
    title: "UnityWorks",
    description: "Cooperative website with admin dashboard",
    longDescription:
      "A robust admin panel for cooperative organizations with modules for news, notices, reports, downloads, and document management.",
    image: "/projects/unityworks.png",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    category: "fullstack",
    githubUrl: "https://github.com/sajagsubedi/unityworks",
    liveUrl: "https://unityworks.vercel.app",
  },
  {
    id: 4,
    title: "FoodieGo",
    description: "Single-restaurant food delivery system",
    longDescription:
      "A food ordering web app with real-time order tracking, admin dashboard, order status updates, and delivery management—all tailored for a single restaurant.",
    image: "/projects/foodiego.png",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "MongoDB"],
    category: "fullstack",
    githubUrl: "https://github.com/sajagsubedi/foodiego",
    liveUrl: "https://foodiego.sajagsubedi.com.np",
  },
  {
    id: 5,
    title: "ClipNest",
    description: "Video streaming and tweet platform backend",
    longDescription:
      "A backend service for a video streaming platform with tweet-like features, including user management, video uploads, and real-time interactions, subscription, comments, and likes.",
    image: "/projects/clipnest.png",
    technologies: ["Node.js", "Express", "Mongodb", "Cloudinary"],
    category: "backend",
    githubUrl: "https://github.com/sajagsubedi/clipnest",
    liveUrl: "https://clipnest.vercel.app",
  },
  {
    id: 6,
    title: "Corezone",
    description: "Gym and fitness center website showcasing brand identity",
    longDescription:
      "A gym and fitness center website showcasing brand identity, services, and contact information with a modern design.",
    image: "/projects/corezone.png",
    technologies: ["Next.js", "Tailwindcss", "GSAP"],
    category: "frontend",
    githubUrl: "https://github.com/sajagsubedi/corezone",
    liveUrl: "https://corezone.vercel.app",
  },
  {
    id: 7,
    title: "Restaurant Management API",
    description: "Restaurant ordering system backend",
    longDescription:
      "A powerful RESTful backend for a restaurant ordering system with support for food items, user management, order flow, and admin operations.",
    image: "/projects/restaurant-api.png",
    technologies: ["Golang", "Gin", "Postgres"],
    category: "backend",
    githubUrl: "https://github.com/sajagsubedi/restaurant-management-api",
    liveUrl: "",
  },
  {
    id: 8,
    title: "Tic Tac Toe",
    description:
      "Classic game with multiplayer and sigle player functionality.",
    longDescription:
      "A fun Tic Tac Toe game built using React with PvP and AI (minimax) modes, interactive design, and local score saving.",
    image: "/projects/tictactoe.png",
    technologies: ["Next.js", "Node.js", "Socket.io", "Tailwind CSS"],
    category: "fullstack",
    githubUrl: "https://github.com/sajagsubedi/TicTacToe_Frontend",
    liveUrl: "https://tictactoesajag.vercel.app/",
  },
];
