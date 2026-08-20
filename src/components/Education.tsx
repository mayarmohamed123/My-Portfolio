"use client";

import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { HiAcademicCap, HiBadgeCheck, HiBookmarkAlt } from "react-icons/hi";

const educationDetails = [
  {
    institution: "Faculty of Electronic Engineering",
    degree: "Computer Science Department",
    type: "Academic Degree",
    description:
      "Comprehensive computer science degree covering software engineering, data structures, algorithms, database systems, computer networks, and web architecture.",
  },
];

const trainingPrograms = [
  {
    title: "Digital Egypt Pioneers Initiative (DEPI)",
    organization: "Ministry of Communications & Information Technology (MCIT)",
    track: "Full-Stack Web Development Track",
    focus: "React, Node.js, Express.js, MongoDB, TypeScript, Docker, Cloud Concepts, Soft Skills & Professional English",
  },
  {
    title: "Information Technology Institute (ITI)",
    organization: "ITI Training Program",
    track: "Frontend Angular Track",
    focus: "Angular, TypeScript, RxJS, Component-based Architecture, Modern Web Development Standards",
  },
  {
    title: "IEEE Web Team",
    organization: "IEEE Student Branch",
    track: "Frontend Engineering Track",
    focus: "React, JavaScript ES6+, Web Engineering Fundamentals, Responsive Interface Design",
  },
  {
    title: "MCIT / Creative Hub Menofia",
    organization: "MCIT Creative Hub",
    track: "Web Development Initiative",
    focus: "Frontend & Web Technologies, Practical Project Implementation",
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Magiera Script */}
        <div className="text-center mb-16">
          <p className="font-magiera text-3xl text-[#7C3AED] mb-1">
            Academic & Professional Growth
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Education & <span className="text-[#7C3AED] neon-purple">Training</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Degree Section */}
          <div className="lg:col-span-1">
            <GlassCard className="p-6 border border-[#7C3AED]/40 h-full flex flex-col justify-between bg-[#7C3AED]/5">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center mb-4 text-2xl">
                  <HiAcademicCap />
                </div>
                <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider block mb-1">
                  {educationDetails[0].type}
                </span>
                <h3 className="text-xl font-bold text-text-main mb-1">
                  {educationDetails[0].institution}
                </h3>
                <p className="text-sm font-semibold text-[#6366F1] mb-4">
                  {educationDetails[0].degree}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  {educationDetails[0].description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#7C3AED]/20 flex items-center gap-2 text-xs text-[#7C3AED] font-semibold">
                <HiBadgeCheck className="text-base" /> Degree Verified
              </div>
            </GlassCard>
          </div>

          {/* Training Programs */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-text-main flex items-center gap-2 mb-4">
              <HiBookmarkAlt className="text-[#7C3AED]" /> Specialized Training & Programs
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {trainingPrograms.map((prog, i) => (
                <GlassCard
                  key={prog.title}
                  delay={i * 0.08}
                  className="p-5 border border-[#585A68]/25 hover:border-[#7C3AED]/50 flex flex-col justify-between"
                  hover
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#6366F1] uppercase tracking-wider block mb-1">
                      {prog.track}
                    </span>
                    <h4 className="text-base font-bold text-text-main mb-1">
                      {prog.title}
                    </h4>
                    <p className="text-xs font-medium text-[#6C6E7E] mb-3">
                      {prog.organization}
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {prog.focus}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
