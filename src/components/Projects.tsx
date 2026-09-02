"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { HiExternalLink, HiCode, HiSparkles, HiArrowRight } from "react-icons/hi";
import { mainProjects } from "@/data/projectsData";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerEl = headerRef.current;
      if (headerEl) {
        gsap.set(headerEl, { opacity: 0 });
        const tl = gsap.timeline({
          scrollTrigger: { trigger: headerEl, start: "top 88%", toggleActions: "play none none none" },
        });
        tl.to(headerEl, { opacity: 1, duration: 0 })
          .fromTo(headerEl.querySelector("p"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0)
          .fromTo(headerEl.querySelector("h2"), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3");
      }
      const gridEl = gridRef.current;
      if (gridEl) {
        gsap.set(gridEl.children, { opacity: 0, y: 55, scale: 0.94 });
        gsap.to(gridEl.children, {
          opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: gridEl, start: "top 88%", toggleActions: "play none none none" },
        });
      }
      const ctaEl = ctaRef.current;
      if (ctaEl) {
        gsap.set(ctaEl, { opacity: 0, y: 25 });
        gsap.to(ctaEl, {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: ctaEl, start: "top 92%", toggleActions: "play none none none" },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <p className="font-magiera text-3xl text-[#7C3AED] mb-1">Production-Ready Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Featured <span className="text-[#7C3AED] neon-purple">Projects</span>
          </h2>
        </div>

        {/* 3 Main Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainProjects.map((project) => (
            <GlassCard
              key={project.title}
              hover
              delay={0}
              className={`p-5 border border-[#585A68]/30 hover:border-[#7C3AED]/50 flex flex-col justify-between overflow-hidden group ${
                project.featured ? "border-[#7C3AED]/40 bg-[#7C3AED]/5" : ""
              }`}
            >
              <div>
                {/* Project Badge & Header */}
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

                {/* Project Image Preview */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 border border-[#585A68]/20 bg-[#100D22]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0B0914]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-text-main mb-2 group-hover:text-[#7C3AED] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#585A68]/15 text-text-main font-medium border border-[#585A68]/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#7C3AED]/10 text-[#7C3AED] font-medium">
                      +{project.tags.length - 4}
                    </span>
                  )}
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

        {/* See More Projects CTA Button */}
        <div ref={ctaRef} className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full cta-purple font-bold text-sm tracking-wide shadow-lg shadow-[#7C3AED]/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span>Explore All Projects</span>
            <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
