import { 
  Film, 
  ShoppingCart, 
  Camera, 
  Package, 
  CheckSquare, 
  Laptop, 
  MessageSquare,
  List,
  Activity,
  Database,
  Globe,
  Lock,
  BarChart,
  Server
} from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'java' | 'mern' | 'react';
  technologies: string[];
  icon: typeof Film;
  color: string;
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  // Java Projects
  {
    id: 1,
    title: "Film Booking System",
    description: "A comprehensive cinema ticket booking system with real-time seat selection and payment processing.",
    category: "java",
    technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "RESTful API"],
    icon: Film,
    color: "#ffffff",
    github: "https://github.com/esakky",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "COVID-19 API",
    description: "Real-time COVID-19 statistics tracker with data visualization and country-wise analytics.",
    category: "java",
    technologies: ["Java", "Spring Boot", "MongoDB", "Docker", "Microservices"],
    icon: Activity,
    color: "#ffffff",
    github: "https://github.com/esakky",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1632&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Insta Clone API",
    description: "Backend API for Instagram-like social media application with user authentication and image sharing.",
    category: "java",
    technologies: ["Java", "Spring Security", "PostgreSQL", "AWS S3", "JWT"],
    icon: Camera,
    color: "#ffffff",
    github: "https://github.com/esakky",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Courier Management System",
    description: "End-to-end logistics tracking system for packages with real-time delivery updates.",
    category: "java",
    technologies: ["Java", "Spring Boot", "MySQL", "RabbitMQ", "Redis"],
    icon: Package,
    color: "#ffffff",
    github: "https://github.com/esakky",
    image: "https://images.unsplash.com/photo-1579618228984-1ea40afe761e?q=80&w=1486&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "E-commerce API",
    description: "Full-featured e-commerce backend with product management, cart functionality, and order processing.",
    category: "java",
    technologies: ["Java", "Spring Boot", "MongoDB", "Elasticsearch", "Payment Gateway Integration"],
    icon: ShoppingCart,
    color: "#ffffff",
    github: "https://github.com/esakky",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop"
  },
  
  // MERN Stack Projects
  {
    id: 6,
    title: "Task Management System",
    description: "Collaborative task management platform with real-time updates and team workflow optimization.",
    category: "mern",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
    icon: CheckSquare,
    color: "#ffffff",
    github: "https://github.com/esakky",
    link: "https://task-management-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Asset Management System",
    description: "Enterprise asset tracking system for hardware and software inventory management.",
    category: "mern",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Material UI"],
    icon: Laptop,
    color: "#ffffff",
    github: "https://github.com/esakky",
    link: "https://asset-management-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Real-time Chat Application",
    description: "Instant messaging platform with real-time notifications and media sharing capabilities.",
    category: "mern",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Redis"],
    icon: MessageSquare,
    color: "#ffffff",
    github: "https://github.com/esakky",
    link: "https://chat-app-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Finance Dashboard",
    description: "Comprehensive financial analytics dashboard with interactive charts and expense tracking.",
    category: "mern",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Chart.js", "Redux"],
    icon: BarChart,
    color: "#ffffff",
    github: "https://github.com/esakky",
    link: "https://finance-dashboard-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1470&auto=format&fit=crop"
  },
  
  // React Projects
  {
    id: 10,
    title: "Instagram Clone",
    description: "Feature-rich Instagram clone with image uploading, feeds, likes, and comments functionality.",
    category: "react",
    technologies: ["React.js", "Firebase", "Redux", "Styled-Components", "Progressive Web App"],
    icon: Camera,
    color: "#ffffff",
    github: "https://github.com/esakky",
    link: "https://instagram-clone-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Netflix Clone",
    description: "Netflix UI clone with movie recommendations, trailer playback, and responsive design.",
    category: "react",
    technologies: ["React.js", "Firebase Auth", "TMDB API", "CSS3", "Context API"],
    icon: Film,
    color: "#ffffff",
    github: "https://github.com/esakky",
    link: "https://netflix-clone-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1469&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Weather Dashboard",
    description: "Interactive weather application with location-based forecasts and animated weather indicators.",
    category: "react",
    technologies: ["React.js", "OpenWeather API", "Geolocation API", "Framer Motion", "Tailwind CSS"],
    icon: Globe,
    color: "#ffffff",
    github: "https://github.com/esakky",
    link: "https://weather-app-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 13,
    title: "Todo App",
    description: "Sleek, minimalist to-do application with drag-and-drop task organization and deadline reminders.",
    category: "react",
    technologies: ["React.js", "Local Storage", "Framer Motion", "CSS3", "Progressive Web App"],
    icon: List,
    color: "#ffffff",
    github: "https://github.com/esakky",
    link: "https://todo-app-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1632&auto=format&fit=crop"
  },
];

export const skills = [
  { name: "Java", percentage: 90 },
  { name: "Spring Boot", percentage: 85 },
  { name: "React.js", percentage: 90 },
  { name: "Node.js", percentage: 80 },
  { name: "MongoDB", percentage: 85 },
  { name: "Express.js", percentage: 85 },
  { name: "MySQL", percentage: 80 },
  { name: "JavaScript", percentage: 95 },
  { name: "TypeScript", percentage: 85 },
  { name: "HTML/CSS", percentage: 90 },
  { name: "Git", percentage: 85 },
  { name: "Docker", percentage: 75 },
  { name: "AWS", percentage: 70 },
  { name: "PostgreSQL", percentage: 80 },
  { name: "Redis", percentage: 70 },
  { name: "GraphQL", percentage: 75 },
  { name: "Tailwind CSS", percentage: 85 },
  { name: "Next.js", percentage: 80 },
  { name: "Redux", percentage: 80 },
  { name: "Kubernetes", percentage: 65 },
];

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "java", name: "Java" },
  { id: "mern", name: "MERN Stack" },
  { id: "react", name: "React" },
];
