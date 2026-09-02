"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { HiBriefcase, HiCheckCircle, HiCalendar } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2024 — Present",
    type: "30+ Projects Completed",
    bullets: [
      "Delivered 30+ custom web applications including e-commerce stores, admin dashboards, and CRUD systems.",
      "Utilized React, Vue.js, Next.js, and Node.js to solve real client business needs with production-ready code.",
      "Managed client communication, requirements gathering, deployment, and performance optimization.",
    ],
  },
  {
    role: "Coding Instructor",
    company: "eYouth",
    period: "Jun 2026 — Present",
    type: "Teaching & Mentoring",
    bullets: [
      "Taught programming fundamentals and Python development to aspiring software enthusiasts.",
      "Explained complex technical concepts in simple, intuitive ways while mentoring student projects.",
      "Fostered strong communication, problem-solving, and technical presentation skills.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "MTA Codex",
    period: "Feb 2026 — May 2026",
    type: "Internship",
    bullets: [
      "Developed modern full-stack web applications utilizing React, Node.js, Express, and database integration.",
      "Built RESTful API endpoints, user authentication flows, and dynamic frontend components.",
      "Collaborated on software architecture, code reviews, and database schema optimization.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "SAQAYA",
    period: "May 2026 — Jul 2026",
    type: "Remote Internship",
    bullets: [
      "Engineered clean, responsive user interfaces using Vue.js and modern component architecture.",
      "Implemented pixel-perfect layouts from design prototypes, ensuring cross-browser compatibility.",
      "Worked effectively in an agile remote team environment to deliver frontend features on schedule.",
    ],
  },
  {
    role: "Web Development using Angular",
    company: "Information Technology Institute (ITI)",
    period: "Jun 2025 — Aug 2025",
    type: "Specialized Training Track",
    bullets: [
      "Participated in Angular-focused frontend engineering track emphasizing component-based architecture.",
      "Mastered TypeScript, RxJS asynchronous state management, and web application design principles.",
    ],
  },
  {
    role: "Frontend Development Diploma – Route IT Training Center",
    company: "Route Academy",
    period: "Apr 2025 — Sep 2025",
    type: "Training Program",
    bullets: [
      "Completed an intensive full-stack web development curriculum covering React, Node.js, and MongoDB.",
      "Built hands-on projects applying real-world architectural patterns and best practices.",
      "Strengthened fundamentals in JavaScript, API integration, and state management.",
    ],
  },
  {
    role: "Full-Stack Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Apr 2024 — Oct 2024",
    type: "MCIT Sponsored Track",
    bullets: [
      "Completed intensive hands-on full-stack development curriculum focusing on React, Node.js, Express, and MongoDB.",
      "Practiced containerization with Docker, cloud deployment concepts, database management, and TypeScript.",
      "Engaged in soft skills, technical problem solving, and collaborative team project development.",
    ],
  },
];

export default function Experience() {
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerEl = headerRef.current;
      if (headerEl) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: headerEl, start: "top 85%", toggleActions: "play none none none" },
        });
        tl.fromTo(headerEl.querySelector("p"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
          .fromTo(headerEl.querySelector("h2"), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3");
      }

      // Alternating left/right card animations
      const cards = timelineRef.current?.querySelectorAll<HTMLElement>(".exp-card");
      cards?.forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        gsap.fromTo(
          card,
          { opacity: 0, x: fromLeft ? -80 : 80, scale: 0.95 },
          {
            opacity: 1, x: 0, scale: 1, duration: 0.75, ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Animate the timeline line
      const line = timelineRef.current?.querySelector<HTMLElement>(".timeline-line");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1, duration: 2, ease: "power2.out",
            scrollTrigger: { trigger: timelineRef.current, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      }

      // Animate dots
      const dots = timelineRef.current?.querySelectorAll<HTMLElement>(".timeline-dot");
      dots?.forEach((dot, i) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)",
            scrollTrigger: { trigger: dot, start: "top 88%", toggleActions: "play none none none" },
            delay: i * 0.05,
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="experience">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <p className="font-magiera text-3xl text-[#7C3AED] mb-1">My Journey &amp; Roles</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Professional <span className="text-[#7C3AED] neon-purple">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center vertical line */}
          <div className="timeline-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7C3AED] via-[#6366F1] to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const fromLeft = i % 2 === 0;
              return (
                <div
                  key={exp.role + exp.company}
                  className={`exp-card relative flex items-center gap-0 md:gap-8 ${
                    fromLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                  style={{ opacity: 0 }}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${fromLeft ? "md:text-right" : "md:text-left"}`}>
                    <GlassCard
                      delay={0}
                      hover
                      className="p-6 border border-[#585A68]/30 hover:border-[#7C3AED]/50 flex flex-col"
                    >
                      <div className={`flex items-start gap-3 mb-3 ${fromLeft ? "md:flex-row-reverse" : "flex-row"}`}>
                        <div className="p-2.5 rounded-xl bg-[#7C3AED]/12 text-[#7C3AED] shrink-0">
                          <HiBriefcase className="text-xl" />
                        </div>
                        <div className={fromLeft ? "md:text-right" : "text-left"}>
                          <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider block mb-0.5">{exp.type}</span>
                          <h3 className="text-lg font-bold text-text-main leading-tight">{exp.role}</h3>
                          <p className="text-sm font-semibold text-[#6366F1]">{exp.company}</p>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1.5 text-xs text-[#6C6E7E] font-medium mb-3 ${fromLeft ? "md:justify-end" : "justify-start"}`}>
                        <HiCalendar className="text-[#7C3AED] text-sm shrink-0" />
                        {exp.period}
                      </div>
                      <ul className={`space-y-2 ${fromLeft ? "md:items-end" : "items-start"} flex flex-col`}>
                        {exp.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2 text-xs text-text-muted leading-relaxed ${
                              fromLeft ? "md:flex-row-reverse md:text-right" : "flex-row"
                            }`}
                          >
                            <HiCheckCircle className="text-[#7C3AED] text-sm shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>

                  {/* Center dot */}
                  <div className="timeline-dot hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#6366F1] border-2 border-[#0B0914] shadow-lg shadow-[#7C3AED]/40 items-center justify-center z-10" style={{ opacity: 0 }}>
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Empty spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
