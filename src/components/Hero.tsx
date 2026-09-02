"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HiArrowDown } from "react-icons/hi";
import Image from "next/image";
import ThreeHeroCanvas from "./ThreeHeroCanvas";

const primaryPills = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const greetRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(greetRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(nameRef.current, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.65 }, "-=0.35")
        .fromTo(titleRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.4")
        .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.4")
        .fromTo(
          pillsRef.current?.children ?? [],
          { opacity: 0, y: 12, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.06 },
          "-=0.3"
        )
        .fromTo(ctaRef.current?.children ?? [], { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.1 }, "-=0.25")
        .fromTo(
          portraitRef.current,
          { opacity: 0, scale: 0.85, x: 40 },
          { opacity: 1, scale: 1, x: 0, duration: 0.9, ease: "back.out(1.3)" },
          0.2
        )
        .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.1");

      // Floating loop on portrait
      gsap.to(portraitRef.current, {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });

      // Scroll indicator bob
      gsap.to(".hero-scroll-dot", {
        y: 8,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#7C3AED]/12 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#6366F1]/12 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        {/* Left Column */}
        <div className="flex-1 text-center lg:text-left">
          <div ref={greetRef} className="mb-2" style={{ opacity: 0 }}>
            <span className="font-magiera text-3xl md:text-4xl text-[#7C3AED] block leading-relaxed">
              Hello, I am
            </span>
          </div>

          <h1
            ref={nameRef}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
            style={{ opacity: 0 }}
          >
            <span className="text-text-main">Mayar</span>{" "}
            <span className="bg-linear-to-r from-[#7C3AED] via-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-sm">
              Mohamed
            </span>
          </h1>

          <h2
            ref={titleRef}
            className="text-2xl md:text-3xl font-semibold text-[#7C3AED] mb-4"
            style={{ opacity: 0 }}
          >
            Full-Stack Developer
          </h2>

          <p
            ref={descRef}
            className="text-base md:text-lg text-text-muted max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            style={{ opacity: 0 }}
          >
            I build modern, scalable web applications from intuitive interfaces to robust backend systems.
            Specializing in React, Next.js, Node.js, Express, TypeScript, MongoDB, PostgreSQL, and cloud services.
          </p>

          <div
            ref={pillsRef}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8 max-w-lg"
            style={{ opacity: 0 }}
          >
            {primaryPills.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full bg-[#7C3AED]/12 text-[#7C3AED] dark:text-[#6366F1] border border-[#7C3AED]/25 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            style={{ opacity: 0 }}
          >
            <a
              href="#projects"
              className="cta-purple inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide"
            >
              View Featured Work
              <HiArrowDown className="text-lg animate-bounce" />
            </a>
            <a
              href="#contact"
              className="cta-outline inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Column — Portrait */}
        <div
          ref={portraitRef}
          className="shrink-0 relative flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <ThreeHeroCanvas />
          </div>
          <div className="relative z-10 w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full p-1 bg-linear-to-tr from-[#7C3AED] via-[#6366F1] to-[#585A68] shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white/20">
              <Image
                src="/me.jpeg"
                alt="Mayar Mohamed — Full-Stack Developer"
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollRef} className="absolute bottom-6 left-1/2 -translate-x-1/2" style={{ opacity: 0 }}>
        <div className="w-6 h-10 rounded-full border-2 border-[#7C3AED]/40 flex items-start justify-center pt-2">
          <div className="hero-scroll-dot w-1.5 h-2.5 rounded-full bg-[#7C3AED]" />
        </div>
      </div>
    </section>
  );
}


