"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import {
  HiAcademicCap,
  HiBriefcase,
  HiLocationMarker,
  HiLightningBolt,
  HiCode,
  HiSparkles,
} from "react-icons/hi";
import { FaAws } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiAngular,
  SiVuedotjs,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const highlightCards = [
  { icon: HiAcademicCap, title: "Education", desc: "Faculty of Electronic Engineering — Computer Science Department" },
  { icon: HiBriefcase, title: "Freelance Work", desc: "30+ Completed Web & Full-Stack Projects" },
  { icon: HiLocationMarker, title: "Location", desc: "Egypt — Available for Global Remote Opportunities" },
];

const ecosystemStack = [
  { icon: SiReact, label: "React", category: "Frontend Core" },
  { icon: SiNextdotjs, label: "Next.js 16", category: "App Router / SSR" },
  { icon: SiNodedotjs, label: "Node.js", category: "Backend Runtime" },
  { icon: SiExpress, label: "Express.js", category: "REST APIs" },
  { icon: SiTypescript, label: "TypeScript", category: "Type-Safe Code" },
  { icon: SiPostgresql, label: "PostgreSQL", category: "Relational DB / Prisma" },
  { icon: SiMongodb, label: "MongoDB", category: "Document DB / Mongoose" },
  { icon: SiAngular, label: "Angular", category: "Frontend Framework" },
  { icon: SiVuedotjs, label: "Vue.js", category: "Frontend Framework" },
  { icon: FaAws, label: "AWS", category: "Cognito, EC2, S3, RDS" },
];

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerEl = headerRef.current;
      if (headerEl) {
        gsap.set(headerEl, { opacity: 0 });
        const tl = gsap.timeline({
          scrollTrigger: { trigger: headerEl, start: "top 88%", toggleActions: "play none none none" },
        });
        tl.fromTo(headerEl.querySelector("p"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
          .fromTo(headerEl.querySelector("h2"), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
          .to(headerEl, { opacity: 1, duration: 0 }, 0);
      }
      const cardsEl = cardsRef.current;
      if (cardsEl) {
        gsap.set(cardsEl.children, { opacity: 0, y: 40, scale: 0.95 });
        gsap.to(cardsEl.children, {
          opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: cardsEl, start: "top 88%", toggleActions: "play none none none" },
        });
      }
      const bioEl = bioRef.current;
      if (bioEl) {
        gsap.set(bioEl, { opacity: 0, x: -50 });
        gsap.to(bioEl, {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: bioEl, start: "top 88%", toggleActions: "play none none none" },
        });
      }
      const ecoEl = ecosystemRef.current;
      if (ecoEl) {
        gsap.set(ecoEl, { opacity: 0, x: 50 });
        gsap.to(ecoEl, {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ecoEl, start: "top 88%", toggleActions: "play none none none" },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <p className="font-magiera text-3xl text-[#7C3AED] mb-1 ">Get To Know My Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            About <span className="text-[#7C3AED] neon-purple">Me</span>
          </h2>
        </div>
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-12">
          {highlightCards.map((card, i) => (
            <GlassCard key={card.title} delay={i * 0.1} className="p-6 text-center border border-[#585A68]/25 hover:border-[#7C3AED]/50">
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center mx-auto mb-4 text-2xl">
                <card.icon />
              </div>
              <h3 className="text-lg font-semibold text-text-main mb-2">{card.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{card.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div ref={bioRef}>
            <GlassCard className="h-full p-8 border border-[#585A68]/30 flex flex-col justify-between" delay={0.2}>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <HiCode className="text-2xl text-[#7C3AED]" />
                  <h3 className="text-2xl font-bold text-[#6366F1]">My Professional Story</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  I&apos;m a <strong className="text-[#7C3AED]">Full-Stack Developer</strong> focused on building modern, scalable, and user-centered web applications. I hold a degree from the <strong className="text-text-main">Faculty of Electronic Engineering — Computer Engineering Department</strong> in Egypt.
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  My journey began primarily in the <strong className="text-text-main">Frontend/React</strong> space. Over time, I expanded into full-stack architecture — mastering RESTful APIs, authentication systems (JWT, AWS Cognito), database design (<strong className="text-text-main">PostgreSQL, MongoDB, Prisma</strong>), and cloud deployments.
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  With hands-on experience across multiple frontend ecosystems (<strong className="text-text-main">React, Angular, Vue.js</strong>), I enjoy turning complex designs into reliable, production-ready applications.
                </p>
                <div className="pt-4 border-t border-[#585A68]/30 bg-[#7C3AED]/5 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <HiLightningBolt className="text-[#7C3AED] text-xl shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-text-main uppercase tracking-wider mb-1">Currently Exploring &amp; Developing</h4>
                      <p className="text-xs text-text-muted leading-relaxed">Microservices Architecture, SOLID Principles, Performance Optimization (LCP, CLS, INP), and AI-enhanced web application capabilities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          <div ref={ecosystemRef}>
            <GlassCard className="h-full p-8 border border-[#585A68]/30 flex flex-col justify-between" delay={0.3}>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <HiSparkles className="text-2xl text-[#7C3AED]" />
                  <h3 className="text-2xl font-bold text-[#6366F1]">Full-Stack Ecosystem</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {ecosystemStack.map((tech, i) => (
                    <GlassCard key={tech.label} className="flex items-center gap-3 p-3.5! border border-[#585A68]/20 hover:border-[#7C3AED]/50" hover delay={0.1 + i * 0.04}>
                      <tech.icon className="text-2xl shrink-0 text-[#7C3AED]" />
                      <div className="overflow-hidden">
                        <p className="text-text-main text-xs font-bold truncate">{tech.label}</p>
                        <p className="text-[10px] text-[#6C6E7E] truncate">{tech.category}</p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#585A68]/30 flex items-center justify-between text-xs text-[#6C6E7E]">
                <span>Arabic: Native</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                <span>English: Professional Proficiency</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
