"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { HiMenuAlt3, HiX, HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "@/context/ThemeContext";
import MayarLogo from "./MayarLogo";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
        );
        gsap.fromTo(
          mobileMenuRef.current.querySelectorAll(".mobile-link"),
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: "power2.out", delay: 0.1 }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
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
        {/* Custom Mayar Logo Emblem -> Navigates to Home */}
        <Link href="/" className="group" onClick={() => setIsOpen(false)}>
          <MayarLogo iconSize={36} />
        </Link>

        {/* Desktop Links & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isProjectsPageLink = link.label === "Projects" && pathname === "/projects";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-wide transition-colors duration-300 relative group ${
                  isProjectsPageLink
                    ? "text-[#7C3AED]"
                    : "text-text-muted hover:text-[#7C3AED]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-[#7C3AED] to-[#6366F1] transition-all duration-300 ${
                    isProjectsPageLink ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

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
      <div
        ref={mobileMenuRef}
        className="lg:hidden glass-card border-none rounded-none overflow-hidden h-0 opacity-0"
      >
        <div className="flex flex-col items-center gap-5 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-link text-text-muted hover:text-[#7C3AED] text-base font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
