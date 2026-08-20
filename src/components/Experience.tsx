"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { HiBriefcase, HiCalendar, HiCheckCircle } from "react-icons/hi";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "MTX Condx",
    type: "Internship",
    bullets: [
      "Developed modern full-stack web applications utilizing React, Node.js, Express, and database integration.",
      "Built RESTful API endpoints, user authentication flows, and dynamic frontend components.",
      "Collaborated on software architecture, code reviews, and database schema optimization.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "SAQAYA",
    type: "Remote Work / Internship",
    bullets: [
      "Engineered clean, responsive user interfaces using Vue.js and modern component architecture.",
      "Implemented pixel-perfect layouts from design prototypes, ensuring cross-browser compatibility.",
      "Worked effectively in a agile remote team environment to deliver frontend features on schedule.",
    ],
  },
  {
    role: "Full-Stack Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    type: "Specialized Training Track",
    bullets: [
      "Completed intensive hands-on full-stack development curriculum focusing on React, Node.js, Express, and MongoDB.",
      "Practiced containerization with Docker, cloud deployment concepts, database management, and TypeScript.",
      "Engaged in soft skills, technical problem solving, and collaborative team project development.",
    ],
  },
  {
    role: "Frontend Trainee",
    company: "Information Technology Institute (ITI)",
    type: "Specialized Training Track",
    bullets: [
      "Participated in Angular-focused frontend engineering track emphasizing component-based architecture.",
      "Mastered TypeScript, RxJS asynchronous state management, and web application design principles.",
    ],
  },
  {
    role: "Coding Instructor",
    company: "eYouth",
    type: "Teaching & Mentoring",
    bullets: [
      "Taught programming fundamentals and Python development to aspiring software enthusiasts.",
      "Explained complex technical concepts in simple, intuitive ways while mentoring student projects.",
      "Fostered strong communication, problem-solving, and technical presentation skills.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    type: "30+ Projects Completed",
    bullets: [
      "Delivered 30+ custom web applications including Tiko, e-commerce stores, admin dashboards, and CRUD systems.",
      "Utilized React, Vue.js, Next.js, and Node.js to solve real client business needs with production-ready code.",
      "Managed client communication, requirements gathering, deployment, and performance optimization.",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Magiera Script */}
        <div className="text-center mb-16">
          <p className="font-magiera text-3xl text-[#7C3AED] mb-1">
            My Journey & Roles
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Professional <span className="text-[#7C3AED] neon-purple">Experience</span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <GlassCard
              key={exp.role + exp.company}
              delay={i * 0.1}
              className="p-6 border border-[#585A68]/30 hover:border-[#7C3AED]/50 flex flex-col justify-between"
              hover
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider block mb-1">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-text-main">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#6366F1]">
                      {exp.company}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#7C3AED]/12 text-[#7C3AED]">
                    <HiBriefcase className="text-xl" />
                  </div>
                </div>

                <ul className="space-y-2.5 my-4">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed">
                      <HiCheckCircle className="text-[#7C3AED] text-base flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
