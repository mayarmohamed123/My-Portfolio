"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {
  HiExternalLink,
  HiCode,
  HiArrowLeft,
  HiSparkles,
  HiSearch,
  HiFilter,
} from "react-icons/hi";
import GlassCard from "@/components/GlassCard";
import { allProjects } from "@/data/projectsData";

type FilterCategory = "All" | "Full-Stack" | "React / Next.js" | "Frontend" | "JavaScript & Apps";

const categories: FilterCategory[] = [
  "All",
  "Full-Stack",
  "React / Next.js",
  "Frontend",
  "JavaScript & Apps",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const headerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Initial page load GSAP animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerEl = headerRef.current;
      if (headerEl) {
        gsap.fromTo(
          headerEl.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" }
        );
      }
      const controlsEl = controlsRef.current;
      if (controlsEl) {
        gsap.fromTo(
          controlsEl,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: "power2.out" }
        );
      }
      const gridEl = gridRef.current;
      if (gridEl) {
        gsap.fromTo(
          gridEl.children,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.4,
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  // Animate grid items whenever category or search filter updates
  useEffect(() => {
    const gridEl = gridRef.current;
    if (gridEl && gridEl.children.length > 0) {
      gsap.fromTo(
        gridEl.children,
        { opacity: 0, y: 20, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.04,
          ease: "power2.out",
        }
      );
    }
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted hover:text-[#7C3AED] transition-colors py-2 px-4 rounded-full glass-card border border-[#585A68]/30 group"
          >
            <HiArrowLeft className="text-sm transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Page Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-magiera text-3xl md:text-4xl text-[#7C3AED] mb-1">
            Complete Showcase
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-main tracking-tight mb-4">
            All <span className="text-[#7C3AED] neon-purple">Projects</span> &amp; Work
          </h1>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Explore my complete portfolio of graduation achievements, client platforms,
            commercial systems, full-stack applications, and interactive web tools.
          </p>
        </div>

        {/* Controls: Category Filter + Search Bar */}
        <div
          ref={controlsRef}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-linear-to-r from-[#7C3AED] to-[#6366F1] text-white shadow-md shadow-[#7C3AED]/30 scale-105"
                    : "glass-card text-text-muted hover:text-[#7C3AED] border border-[#585A68]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6C6E7E] text-base" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or name..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-transparent glass-card border border-[#585A68]/35 text-xs text-text-main placeholder-[#6C6E7E] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 outline-none transition-all duration-300"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div
            ref={gridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <GlassCard
                key={project.title}
                hover
                delay={0}
                className={`p-5 border border-[#585A68]/30 hover:border-[#7C3AED]/50 flex flex-col justify-between overflow-hidden group ${
                  project.featured ? "border-[#7C3AED]/40 bg-[#7C3AED]/5" : ""
                }`}
              >
                <div>
                  {/* Badge & Highlight Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#7C3AED]/15 text-[#7C3AED] dark:text-[#6366F1] border border-[#7C3AED]/25">
                      {project.badge}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-xs text-[#7C3AED] font-bold">
                        <HiSparkles className="text-sm" /> Highlight
                      </span>
                    )}
                  </div>

                  {/* Project Screenshot */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-[#585A68]/20 bg-[#100D22]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0B0914]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-lg font-bold text-text-main mb-2 group-hover:text-[#7C3AED] transition-colors duration-200">
                    {project.title}
                  </h2>
                  <p className="text-xs text-text-muted leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Action Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#585A68]/15 text-text-main font-medium border border-[#585A68]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-3 border-t border-[#585A68]/25">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#7C3AED] hover:text-[#6366F1] transition-colors font-semibold"
                      >
                        <HiExternalLink className="text-sm" /> Live Demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#6C6E7E] hover:text-[#7C3AED] transition-colors font-medium"
                      >
                        <HiCode className="text-sm" /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-card border border-[#585A68]/30 max-w-md mx-auto">
            <HiFilter className="text-4xl text-[#7C3AED] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-text-main mb-1">No Projects Found</h3>
            <p className="text-xs text-text-muted">
              Try adjusting your search query or selecting a different category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
