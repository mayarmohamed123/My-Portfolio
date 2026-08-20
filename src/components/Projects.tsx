"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { HiExternalLink, HiCode, HiSparkles, HiCube } from "react-icons/hi";

const projects = [
  {
    title: "Healing / Sehha / E-Pharma Hub",
    badge: "Featured Graduation Project",
    description:
      "A comprehensive healthcare & e-pharmacy platform connecting patients, doctors, and pharmacies. Features doctor appointment booking, medicine ordering, real-time consultation messaging, and secure patient history management.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "SignalR",
      "AWS Cognito",
    ],
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    title: "AURA ESTATES",
    badge: "Luxury Real Estate",
    description:
      "A sophisticated luxury real estate platform designed with a nude/neutral aesthetic, property filtering, and optimized rendering performance (LCP, CLS, INP) for smooth browsing.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "shadcn/ui",
    ],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
  },
  {
    title: "3D Interactive Web Experience",
    badge: "Three.js & WebGL",
    description:
      "An immersive WebGL portfolio showcase featuring 3D particle constellations, dynamic lighting shaders, interactive wireframe geometries, and light/dark theme reactivity.",
    tags: ["Three.js", "WebGL", "Next.js 16", "React", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
  },
  {
    title: "Vue E-Commerce Platform",
    badge: "Vue.js Ecosystem",
    description:
      "A modern online store built with Vue.js, featuring product category filtering, cart management, state persistence, and responsive UI components.",
    tags: ["Vue.js", "Pinia", "Vuex", "Sass", "REST APIs"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
  },
  {
    title: "React Admin & Analytics Dashboard",
    badge: "Data Visualization",
    description:
      "An analytics dashboard for social and business management featuring dynamic data grids, engagement charts, and user management interfaces.",
    tags: ["React", "Syncfusion EJ2", "Tailwind CSS", "REST API"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
  },
  {
    title: "Mapbox Location & Filter App",
    badge: "Geospatial & Filtering",
    description:
      "An interactive mapping application with location geocoding, coordinate search, filter URL encoding, and dynamic imports for optimal bundle loading.",
    tags: ["React", "Next.js", "Mapbox GL", "Redux Toolkit", "TypeScript"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Magiera Script */}
        <div className="text-center mb-16">
          <p className="font-magiera text-3xl text-[#7C3AED] mb-1">
            Production-Ready Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Featured <span className="text-[#7C3AED] neon-purple">Projects</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <GlassCard
              key={project.title}
              hover
              delay={i * 0.1}
              className={`p-6 border border-[#585A68]/30 flex flex-col justify-between ${
                project.featured ? "sm:col-span-2 lg:col-span-2 border-[#7C3AED]/50 bg-[#7C3AED]/5" : ""
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#7C3AED]/15 text-[#7C3AED] dark:text-[#6366F1] border border-[#7C3AED]/25">
                    {project.badge}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-xs text-[#7C3AED] font-bold">
                      <HiSparkles className="text-sm" /> Highlight
                    </span>
                  )}
                </div>

                {/* Project Visual Icon Container */}
                <div className="relative h-36 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#7C3AED]/15 via-[#6366F1]/10 to-[#585A68]/10 flex items-center justify-center border border-[#7C3AED]/20 group">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    className="text-center relative z-10"
                  >
                    <div className="text-4xl text-[#7C3AED] mb-1 flex justify-center">
                      {project.featured ? <HiCube className="animate-spin-slow text-5xl" /> : <HiCode />}
                    </div>
                    <p className="text-xs text-[#6C6E7E] font-medium">
                      {project.tags[0]}
                    </p>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-text-main mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#585A68]/15 text-text-main font-medium border border-[#585A68]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-3 border-t border-[#585A68]/25">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1.5 text-xs text-[#7C3AED] hover:text-[#6366F1] transition-colors font-semibold"
                  >
                    <HiExternalLink className="text-sm" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center gap-1.5 text-xs text-[#6C6E7E] hover:text-[#7C3AED] transition-colors font-medium"
                  >
                    <HiCode className="text-sm" />
                    Source Code
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
