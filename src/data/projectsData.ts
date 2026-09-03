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
    tags: ["Next.js 16", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "AWS Cognito"],
    codeUrl: "https://github.com/mayarmohamed123/Graduation-Project",
    liveUrl: "https://github.com/mayarmohamed123/Graduation-Project",
    featured: true,
  },
  {
    title: "Bank Modern App",
    badge: "FinTech App",
    category: "Frontend",
    description:
      "Modern financial application landing and dashboard featuring transaction management, cards overview, interactive charts, and sleek glassmorphic UI.",
    image: "/Bank-app.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Bank-Modern-App",
    liveUrl: "https://bank-modern-app-wheat-theta.vercel.app/",
    featured: true,
  },
  {
    title: "GSAP Interactive Cocktails",
    badge: "Creative Animations",
    category: "Frontend",
    description:
      "An interactive web experience showcasing dynamic cocktail recipes, immersive scroll-triggered animations, fluid typography, and rich visual transitions.",
    image: "/gsap-cocktails.png",
    tags: ["GSAP", "ScrollTrigger", "JavaScript", "HTML5", "CSS3"],
    codeUrl: "https://github.com/mayarmohamed123/gsap-cocktails",
    liveUrl: "https://gsap-cocktails-nu-seven.vercel.app/",
    featured: true,
  },
];

export const allProjects: Project[] = [
  ...mainProjects,
  {
    title: "Task Management Board",
    badge: "Productivity",
    category: "Full-Stack",
    description:
      "Kanban-style task manager with authentication, drag-and-drop mechanics, priority labeling, status progression, and responsive dashboard.",
    image: "/Task-managementpng.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "LocalStorage", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Task-Management",
    liveUrl: "https://task-management-gtyq-r5w3uo7v8-mayarmohamed123s-projects.vercel.app/login",
  },
  {
    title: "Mothmr Ads Platform",
    badge: "React App",
    category: "Frontend",
    description:
      "Modern advertising and agricultural campaign management platform built with React, dynamic filtering, and interactive ad tracking components.",
    image: "/mothmr.png",
    tags: ["React", "JavaScript ES6+", "CSS3", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Mothmr_Task",
    liveUrl: "https://mothmr-task.vercel.app/ads",
  },
  {
    title: "Modern E-Commerce Store (Vue & Vuex)",
    badge: "Vue.js E-Commerce",
    category: "Frontend",
    description:
      "Feature-packed e-commerce web application built with Vue.js, Vuex state management, and Jest testing framework. Features product search, cart management, and checkout workflow.",
    image: "/E-Commerce.png",
    tags: ["Vue.js", "Vuex", "Jest", "JavaScript", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/E-Commerce_Vue",
    liveUrl: "https://e-commerce-vue-nine.vercel.app/",
  },
  {
    title: "React Admin & Analytics Dashboard",
    badge: "Admin & Analytics",
    category: "React / Next.js",
    description:
      "An analytics dashboard for social and business management featuring dynamic data grids, engagement charts, and user management interfaces.",
    image: "/react-admin-dashboard.png",
    tags: ["React", "Tailwind CSS", "Charts", "Syncfusion", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/-React-Admin-Dashboard-App",
    liveUrl: "https://react-admin-dashboard-app-rouge.vercel.app/",
  },
  {
    title: "Recipe & Meal Discovery App",
    badge: "Food & Recipes",
    category: "JavaScript & Apps",
    description:
      "Comprehensive cooking guide and recipe search platform providing ingredients breakdown, instructional steps, dietary tags, and video tutorials.",
    image: "/Recipe-website.png",
    tags: ["JavaScript", "TheMealDB API", "CSS3", "HTML5", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Recipes-Website",
    liveUrl: "https://recipes-website-delta.vercel.app/",
  },
  {
    title: "Interactive Weather Forecast App",
    badge: "Geospatial & Weather",
    category: "JavaScript & Apps",
    description:
      "Real-time weather forecast web app featuring geolocation detection, 3-day temperature projections, atmospheric metrics, and dynamic conditions.",
    image: "/weather-app.png",
    tags: ["Weather API", "JavaScript", "Geolocation API", "CSS3", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Weather",
    liveUrl: "https://weather-nine-sandy.vercel.app/",
  },
  {
    title: "Portfolio Showcase v2",
    badge: "Personal Portfolio",
    category: "Frontend",
    description:
      "Interactive personal portfolio website featuring smooth section transitions, modern layout design, responsive cards, and project showcase.",
    image: "/portfolio-2.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Portfolio_2",
    liveUrl: "https://portfolio-2-xhgd.vercel.app/",
  },
  {
    title: "Bookmark Manager & CRUD Tool",
    badge: "Utility Tool",
    category: "JavaScript & Apps",
    description:
      "Web tool for URL bookmarking, regex validation, search filtering, and complete CRUD operation management with intuitive table view.",
    image: "/Bookmarker.png",
    tags: ["JavaScript ES6+", "Regex Validation", "CRUD", "LocalStorage", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Bookmarker",
    liveUrl: "https://bookmarker-drab.vercel.app/",
  },
  {
    title: "DevFolio Professional Portfolio",
    badge: "Portfolio Theme",
    category: "Frontend",
    description:
      "Sleek developer portfolio showcasing service cards, counter statistics, dynamic filterable portfolio grid, and contact form.",
    image: "/dev-folio.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/DevFolio",
    liveUrl: "https://dev-folio-coral.vercel.app/",
  },
  {
    title: "Kerri Responsive Website",
    badge: "Landing Page",
    category: "Frontend",
    description:
      "Clean and modern personal branding website with smooth scrolling, service highlights, portfolio gallery, and interactive contact layout.",
    image: "/kerri.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/kerri",
    liveUrl: "https://kerri-omega.vercel.app/",
  },
  {
    title: "Classic Portfolio Website",
    badge: "Personal Site",
    category: "Frontend",
    description:
      "Custom responsive developer portfolio featuring clean section structures, work history, skill badges, and direct contact forms.",
    image: "/portfolio.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Portfolio",
    liveUrl: "https://portfolio-three-beta-faziobimgk.vercel.app/",
  },
  {
    title: "Fokir Agency & Portfolio",
    badge: "Agency Website",
    category: "Frontend",
    description:
      "Creative personal and agency portfolio layout with animated typing headers, skill progress indicators, team cards, and contact form.",
    image: "/Fokir.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Fokir",
    liveUrl: "https://fokir-coral-delta.vercel.app/",
  },
  {
    title: "Bakery & Culinary Experience",
    badge: "Culinary Site",
    category: "Frontend",
    description:
      "Warm artisanal bakery web layout showcasing signature pastry menus, baker stories, customer testimonials, and ordering channels.",
    image: "/bakery.png",
    tags: ["HTML5", "CSS3", "Bootstrap", "Responsive Design", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Bakery",
    liveUrl: "https://bakery-mu-seven.vercel.app/",
  },
  {
    title: "Note-Taking React App",
    badge: "React App",
    category: "Frontend",
    description:
      "Streamlined note-taking application built with React featuring live note creation, editing, category tags, search, and local persistence.",
    image: "/Note-app.png",
    tags: ["React", "JavaScript", "LocalStorage", "CSS3", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Note-App-with-React",
    liveUrl: "https://note-app-with-react-2vjj.vercel.app/",
  },
  {
    title: "Game Reviews & Discovery Hub",
    badge: "Gaming DB",
    category: "Frontend",
    description:
      "Interactive game review and discovery hub with live API integration, genre sorting, game details modal, rating system, and dynamic media galleries.",
    image: "/Game-reviews.png",
    tags: ["JavaScript ES6+", "Fetch API", "Bootstrap", "Game DB API", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Game-Reviews",
    liveUrl: "https://game-reviews-syoj.vercel.app/",
  },
  {
    title: "Interactive Quiz Application",
    badge: "Quiz Tool",
    category: "JavaScript & Apps",
    description:
      "Engaging trivia quiz web app with category selection, timed questions, instant scoring analytics, and interactive feedback.",
    image: "/quizz-app.png",
    tags: ["JavaScript", "Trivia API", "Score Calculation", "CSS3", "Vercel"],
    codeUrl: "https://github.com/mayarmohamed123/Quiz-App",
    liveUrl: "https://quiz-app-git-master-mayarmohamed123s-projects.vercel.app/",
  },
  {
    title: "AURA ESTATES — Luxury Real Estate",
    badge: "Luxury Real Estate",
    category: "React / Next.js",
    description:
      "A sophisticated luxury real estate web platform featuring curated property listings, dynamic filtering, and optimized rendering performance.",
    image: "/Real-State.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    codeUrl: "https://github.com/mayarmohamed123/Real-Estate",
    liveUrl: "https://github.com/mayarmohamed123/Real-Estate",
  },
  {
    title: "Tiko — Client Web App",
    badge: "Client Web App",
    category: "Full-Stack",
    description:
      "Modern web application for seamless product browsing, custom order configurations, dynamic catalog filtering, and client web experience.",
    image: "/Tiko.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel"],
    codeUrl: "https://tiko-client.vercel.app/",
    liveUrl: "https://tiko-client.vercel.app/",
  },
];
