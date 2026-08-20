"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import Image from "next/image";
import ThreeHeroCanvas from "./ThreeHeroCanvas";

const ease: Easing = [0.25, 0.1, 0.25, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

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
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient background glows in #7C3AED & #6366F1 */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#7C3AED]/12 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#6366F1]/12 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        {/* Left Column — Text & Positioning */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          {/* Greeting in Magiera Script */}
          <motion.div variants={itemVariants} className="mb-2">
            <span className="font-magiera text-3xl md:text-4xl text-[#7C3AED] block leading-relaxed">
              Hello, I am
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
          >
            <span className="text-text-main">Mayar</span>{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-sm">
              Mohamed
            </span>
          </motion.h1>

          {/* Professional Positioning */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-[#7C3AED] mb-4"
          >
            Full-Stack Developer
          </motion.h2>

          {/* Summary Quote */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-text-muted max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
          >
            I build modern, scalable web applications from intuitive interfaces to robust backend systems.
            Specializing in React, Next.js, Node.js, Express, TypeScript, MongoDB, PostgreSQL, and cloud services.
          </motion.p>

          {/* Primary Stack Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8 max-w-lg"
          >
            {primaryPills.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full bg-[#7C3AED]/12 text-[#7C3AED] dark:text-[#6366F1] border border-[#7C3AED]/25 font-semibold"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
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
          </motion.div>
        </motion.div>

        {/* Right Column — 3D Three.js Hero Canvas & Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          className="flex-shrink-0 relative flex items-center justify-center"
        >
          {/* 3D Three.js Hero Canvas background wrapper */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <ThreeHeroCanvas />
          </div>

          {/* Portrait Image floating inside 3D environment */}
          <div className="relative z-10 w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full p-1 bg-gradient-to-tr from-[#7C3AED] via-[#6366F1] to-[#585A68] shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white/20">
              <Image
                src="/My Photo.jpeg"
                alt="Mayar Mohamed — Full-Stack Developer"
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[#7C3AED]/40 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-[#7C3AED]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
