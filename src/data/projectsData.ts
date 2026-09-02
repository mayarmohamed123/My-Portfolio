export interface Project {
  title: string;
  badge: string;
  category: "Full-Stack" | "Frontend" | "React / Next.js" | "JavaScript & Apps";
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export const mainProjects: Project[] = [
  {
    title: "Healing / HealthCare Platform",
    badge: "Graduation Project",
    category: "Full-Stack",
    description:
      "A comprehensive healthcare & e-pharmacy platform connecting patients, doctors, and pharmacies. Features doctor appointment booking, medicine ordering, real-time consultation messaging, and secure patient history management.",
    image: "/Healing.png",
    tags: ["Next.js 16", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "AWS Cognito", "Tailwind CSS"],
    codeUrl: "https://github.com/mayarmohamed123/Graduation-Project",
    liveUrl: "https://github.com/mayarmohamed123/Graduation-Project",
    featured: true,
  },
  {
    title: "AURA ESTATES — Luxury Real Estate",
    badge: "Luxury Real Estate",
    category: "React / Next.js",
    description:
      "A sophisticated luxury real estate web platform featuring curated property listings, dynamic filtering, and optimized rendering performance (LCP, CLS, INP) for smooth client browsing.",
    image: "/Real-State.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query", "shadcn/ui"],
    codeUrl: "https://github.com/mayarmohamed123/Real-Estate",
    liveUrl: "https://github.com/mayarmohamed123/Real-Estate",
    featured: false,
  },
  {
    title: "Tiko — Web Platform",
    badge: "Client Web App",
    category: "Full-Stack",
    description:
      "Modern web application for seamless product browsing, custom order configurations, dynamic catalog filtering, and a high-performance responsive client experience.",
    image: "/Tiko.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel"],
    codeUrl: "https://tiko-client.vercel.app/",
    liveUrl: "https://tiko-client.vercel.app/",
    featured: false,
  },
];

export const allProjects: Project[] = [
  ...mainProjects,
  {
    title: "React Admin & Analytics Dashboard",
    badge: "Data Visualization",
    category: "React / Next.js",
    description:
      "An analytics dashboard for social and business management featuring dynamic data grids, engagement charts, and user management interfaces.",
    image: "/react-admin-dashboard.png",
    tags: ["React", "Syncfusion EJ2", "Tailwind CSS", "REST API", "Charts"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "Modern E-Commerce Store",
    badge: "E-Commerce",
    category: "Full-Stack",
    description:
      "Feature-packed e-commerce web application with product search, category filtration, shopping cart state management, checkout workflow, and payment gateway integration.",
    image: "/E-Commerce.png",
    tags: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Stripe API"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "GSAP Interactive Cocktails Showcase",
    badge: "Creative Animations",
    category: "Frontend",
    description:
      "An interactive web experience showcasing dynamic cocktail recipes, immersive scroll-triggered animations, fluid typography, and rich visual transitions.",
    image: "/gsap-cocktails.png",
    tags: ["GSAP", "ScrollTrigger", "JavaScript", "HTML5", "CSS3 Animation"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "Modern Banking App",
    badge: "FinTech UI",
    category: "Frontend",
    description:
      "Modern financial application landing and dashboard featuring transaction management, cards overview, interactive charts, and sleek glassmorphic UI.",
    image: "/Bank-app.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Figma to Code"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "Game Reviews & Database Portal",
    badge: "Gaming Portal",
    category: "JavaScript & Apps",
    description:
      "Interactive game review and discovery hub with live API integration, genre sorting, game details modal, rating system, and dynamic media galleries.",
    image: "/Game-reviews.png",
    tags: ["JavaScript ES6+", "Fetch API", "Bootstrap", "Game DB API"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "Recipe & Meal Discovery App",
    badge: "Food & Recipes",
    category: "JavaScript & Apps",
    description:
      "Comprehensive cooking guide and recipe search platform providing ingredients breakdown, instructional steps, dietary tags, and video tutorials.",
    image: "/Recipe-website.png",
    tags: ["JavaScript ES6+", "TheMealDB API", "CSS3", "Responsive UI"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "Task Management & Board",
    badge: "Productivity",
    category: "JavaScript & Apps",
    description:
      "Kanban-style task manager with drag-and-drop mechanics, priority labeling, local persistence, category filtering, and status progression.",
    image: "/Task-managementpng.png",
    tags: ["JavaScript", "HTML5 Drag & Drop", "LocalStorage", "CSS3"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "Interactive Weather App",
    badge: "Geospatial & Weather",
    category: "JavaScript & Apps",
    description:
      "Real-time weather forecast web app featuring geolocation detection, 3-day temperature projections, atmospheric metrics, and dynamic weather conditions.",
    image: "/weather-app.png",
    tags: ["WeatherAPI", "JavaScript", "Geolocation API", "CSS3"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "Note-Taking & Markdown Workspace",
    badge: "Productivity",
    category: "JavaScript & Apps",
    description:
      "Streamlined notes application with categorization, search, tags, quick editing, and instant local storage synchronization.",
    image: "/Note-app.png",
    tags: ["JavaScript", "LocalStorage", "Responsive Design", "CSS3"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "Bookmark Manager & CRUD Operations",
    badge: "Utility Tool",
    category: "JavaScript & Apps",
    description:
      "Web tool for URL bookmarking, regex validation, search filtering, and complete CRUD operation management with intuitive table view.",
    image: "/Bookmarker.png",
    tags: ["JavaScript ES6+", "Regex Validation", "CRUD", "LocalStorage"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "Mothmr Agricultural Platform",
    badge: "Client Showcase",
    category: "Frontend",
    description:
      "Clean corporate and agricultural platform presentation showcasing products, harvesting methods, and company mission.",
    image: "/mothmr.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "Bakery & Culinary Experience",
    badge: "Brand Website",
    category: "Frontend",
    description:
      "Warm artisanal bakery web layout showcasing signature pastry menus, baker stories, customer testimonials, and ordering channels.",
    image: "/bakery.png",
    tags: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "Interactive Quiz Application",
    badge: "Trivia & Quiz",
    category: "JavaScript & Apps",
    description:
      "Engaging trivia quiz web app with category selection, timed questions, instant scoring analytics, and sound/visual effects.",
    image: "/quizz-app.png",
    tags: ["JavaScript", "Trivia API", "Score Calculation", "CSS3"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
  {
    title: "DevFolio Professional Portfolio",
    badge: "Portfolio Theme",
    category: "Frontend",
    description:
      "Sleek developer portfolio showcasing service cards, counter statistics, dynamic filterable portfolio grid, and contact form.",
    image: "/dev-folio.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    codeUrl: "https://github.com/mayarmohamed123",
    liveUrl: "https://github.com/mayarmohamed123",
  },
];
