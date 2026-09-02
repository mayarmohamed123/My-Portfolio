"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { FaAws } from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiAngular, SiVuedotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiBootstrap, SiSass, SiShadcnui, SiNodedotjs, SiExpress,
  SiJsonwebtokens, SiPostgresql, SiMongodb, SiPrisma, SiRedux, SiDocker,
  SiGit, SiGithub, SiPostman, SiVercel, SiMapbox,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

type Category = "frontend" | "backend" | "databases" | "state" | "cloud" | "tools";

const categories: { id: Category; label: string }[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "state", label: "State Management" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "tools", label: "Tools & Optimization" },
];

const skillData: Record<Category, { name: string; detail: string; icon: any }[]> = {
  frontend: [
    { name: "React.js", detail: "Hooks, Context API, Custom Hooks", icon: SiReact },
    { name: "Next.js 16", detail: "App Router, Server Components, SSR, Dynamic Imports", icon: SiNextdotjs },
    { name: "Angular", detail: "Component Architecture, TypeScript, RxJS", icon: SiAngular },
    { name: "Vue.js", detail: "Composition API, Directives, Ecosystem", icon: SiVuedotjs },
    { name: "TypeScript", detail: "Strict Typing, Interfaces, Generics", icon: SiTypescript },
    { name: "JavaScript", detail: "ES6+, Async/Await, DOM, APIs", icon: SiJavascript },
    { name: "Tailwind CSS 4", detail: "Custom Themes, Responsive Layouts", icon: SiTailwindcss },
    { name: "Bootstrap", detail: "Grid System, UI Components", icon: SiBootstrap },
    { name: "Sass / SCSS", detail: "Mixins, Variables, Modular Styles", icon: SiSass },
    { name: "shadcn/ui", detail: "Accessible UI Components", icon: SiShadcnui },
  ],
  backend: [
    { name: "Node.js", detail: "Event Loop, Async Architecture", icon: SiNodedotjs },
    { name: "Express.js", detail: "RESTful API Architecture, Middleware", icon: SiExpress },
    { name: "REST APIs", detail: "CRUD, Endpoint Design, Error Handling", icon: SiExpress },
    { name: "JWT Auth", detail: "Token Signing, Verification, Protected Routes", icon: SiJsonwebtokens },
    { name: "AWS Cognito", detail: "User Pools, Authentication Flows", icon: FaAws },
    { name: "Security & Hash", detail: "bcrypt, Environment Variables, CORS", icon: SiJsonwebtokens },
  ],
  databases: [
    { name: "PostgreSQL", detail: "Relational Schema, Migrations, Indexing", icon: SiPostgresql },
    { name: "MongoDB", detail: "NoSQL Schemas, Aggregations, Atlas", icon: SiMongodb },
    { name: "Prisma ORM", detail: "Prisma Client, Schema Design, Seeding", icon: SiPrisma },
    { name: "Mongoose", detail: "Schemas, Models, Middleware validation", icon: SiMongodb },
    { name: "Sequelize", detail: "Relational Mapping, Model Relationships", icon: SiPostgresql },
  ],
  state: [
    { name: "Redux Toolkit", detail: "Slices, Async Thunks, Store Config", icon: SiRedux },
    { name: "RTK Query", detail: "Cache Management, API Endpoints", icon: SiRedux },
    { name: "TanStack Query", detail: "React Query, Server State Caching", icon: SiReact },
    { name: "Zustand", detail: "Lightweight Client State", icon: SiReact },
    { name: "Pinia & Vuex", detail: "Vue State Management Ecosystem", icon: SiVuedotjs },
  ],
  cloud: [
    { name: "AWS Services", detail: "Cognito, Amplify, EC2, RDS, S3", icon: FaAws },
    { name: "Vercel", detail: "Next.js Deployment, Edge Network", icon: SiVercel },
    { name: "Render", detail: "Node.js & Express Cloud Hosting", icon: SiNodedotjs },
    { name: "MongoDB Atlas", detail: "Cloud Database Clusters", icon: SiMongodb },
    { name: "Docker", detail: "Containerization Concepts", icon: SiDocker },
  ],
  tools: [
    { name: "Git & GitHub", detail: "Version Control, Branching Workflows", icon: SiGit },
    { name: "Mapbox GL", detail: "Interactive Maps, Geocoding, Coordinates", icon: SiMapbox },
    { name: "Postman", detail: "API Testing, Environment Configs", icon: SiPostman },
    { name: "Web Performance", detail: "LCP, CLS, INP, Image Optimization", icon: SiNextdotjs },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Category>("frontend");
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerEl = headerRef.current;
      if (headerEl) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: headerEl, start: "top 85%", toggleActions: "play none none none" },
        });
        tl.fromTo(headerEl.querySelector("p"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
          .fromTo(headerEl.querySelector("h2"), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3");
      }
      const tabsEl = tabsRef.current;
      if (tabsEl) {
        gsap.fromTo(tabsEl.children, { opacity: 0, y: 18, scale: 0.9 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.07, ease: "back.out(1.5)",
          scrollTrigger: { trigger: tabsEl, start: "top 88%", toggleActions: "play none none none" },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  // Animate grid cards when tab changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const gridEl = gridRef.current;
    if (gridEl) {
      gsap.fromTo(
        gridEl.children,
        { opacity: 0, y: 15, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.04, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-12" style={{ opacity: 0 }}>
          <p className="font-magiera text-3xl text-[#7C3AED] mb-1">Technical Stack & Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            My <span className="text-[#7C3AED] neon-purple">Skills</span> Matrix
          </h2>
        </div>
        <div ref={tabsRef} className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#6366F1] text-white shadow-lg shadow-[#7C3AED]/25 scale-105"
                  : "glass-card text-text-muted hover:text-[#7C3AED] border border-[#585A68]/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillData[activeTab].map((skill, i) => (
            <GlassCard key={skill.name} delay={i * 0.04} className="p-5 border border-[#585A68]/25 hover:border-[#7C3AED]/50 flex items-start gap-4" hover>
              <div className="p-3 rounded-xl bg-[#7C3AED]/12 text-[#7C3AED] dark:text-[#6366F1] text-2xl shrink-0">
                <skill.icon />
              </div>
              <div>
                <h3 className="text-sm font-bold text-text-main mb-1">{skill.name}</h3>
                <p className="text-xs text-[#6C6E7E] leading-relaxed">{skill.detail}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
