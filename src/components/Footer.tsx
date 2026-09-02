"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiHeart } from "react-icons/hi";
import Link from "next/link";
import MayarLogo from "./MayarLogo";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/", label: "X (Twitter)" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, y: 30 });
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 98%", toggleActions: "play none none none" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative py-10 px-6 border-t border-[#585A68]/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="group hover:opacity-90 transition-opacity">
            <MayarLogo iconSize={30} />
          </Link>
          <p className="text-xs text-text-muted flex items-center gap-1.5 mt-1">
            Designed &amp; Built with <HiHeart className="text-[#7C3AED] text-sm animate-pulse" /> by{" "}
            <span className="font-semibold text-[#7C3AED]">Mayar Mohamed</span>
          </p>
          <p className="text-[11px] text-[#6C6E7E]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#6C6E7E] hover:text-[#7C3AED] hover:border-[#7C3AED]/50 transition-all duration-300 hover:scale-110 border border-[#585A68]/30"
            >
              <social.icon className="text-lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
