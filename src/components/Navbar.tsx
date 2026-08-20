"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "@/context/ThemeContext";
import MayarLogo from "./MayarLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card border-none rounded-none py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
      style={{
        backgroundColor: scrolled
          ? theme === "dark"
            ? "rgba(11, 9, 20, 0.88)"
            : "rgba(248, 250, 252, 0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Custom Mayar Logo Emblem */}
        <a href="#home" className="group">
          <MayarLogo iconSize={36} />
        </a>

        {/* Desktop Links & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-[#7C3AED] text-xs font-semibold tracking-wide transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#6366F1] group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className="p-2 rounded-full glass-card border border-[#7C3AED]/20 text-[#7C3AED] hover:text-[#6366F1] hover:border-[#7C3AED]/50 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            {theme === "dark" ? (
              <HiSun className="text-lg text-amber-400 animate-pulse" />
            ) : (
              <HiMoon className="text-lg text-[#7C3AED]" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className="p-2 rounded-full glass-card border border-[#7C3AED]/20 text-[#7C3AED]"
          >
            {theme === "dark" ? (
              <HiSun className="text-lg text-amber-400" />
            ) : (
              <HiMoon className="text-lg text-[#7C3AED]" />
            )}
          </button>

          <button
            className="text-text-main text-2xl p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-card border-none rounded-none overflow-hidden"
          >
            <div className="flex flex-col items-center gap-5 py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-text-muted hover:text-[#7C3AED] text-base font-medium transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
