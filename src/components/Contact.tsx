"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import {
  HiMail, HiUser, HiChat, HiPaperAirplane,
  HiLocationMarker, HiTranslate, HiSparkles,
  HiPhone, HiDocumentText, HiExternalLink
} from "react-icons/hi";
import { SiGithub, SiFacebook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const softSkills = [
  "Problem Solving",
  "Technical Communication",
  "Team Collaboration",
  "Adaptability & Fast Learning",
  "Teaching & Mentoring",
  "Attention to Detail",
];

const directContacts = [
  {
    icon: HiMail,
    label: "Email",
    value: "mayar201500@gmail.com",
    href: "mailto:mayar201500@gmail.com",
    color: "text-purple-400",
  },
  {
    icon: HiPhone,
    label: "Phone / WhatsApp",
    value: "+20 102 535 0571",
    href: "tel:+201025350571",
    color: "text-emerald-400",
  },
  {
    icon: HiDocumentText,
    label: "CV / Resume",
    value: "View Google Drive CV",
    href: "https://drive.google.com/file/d/138y7nH08ob8c-iGs9CWMR20I4MdsOWoJ/view?usp=drivesdk",
    color: "text-amber-400",
  },
];

const socialMedia = [
  { icon: SiGithub, label: "GitHub", href: "https://github.com/mayarmohamed123" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/mayar-shehab-eldin-453b1a220/" },
  { icon: SiFacebook, label: "Facebook", href: "https://www.facebook.com/mayar.shehab.eldin/" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerEl = headerRef.current;
      if (headerEl) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: headerEl, start: "top 85%", toggleActions: "play none none none" },
        });
        tl.fromTo(headerEl.querySelector("p.font-magiera"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
          .fromTo(headerEl.querySelector("h2"), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
          .fromTo(headerEl.querySelector("p.text-text-muted"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.25");
      }
      const infoEl = infoRef.current;
      if (infoEl) {
        gsap.fromTo(infoEl.children, { opacity: 0, x: -50 }, {
          opacity: 1, x: 0, duration: 0.75, stagger: 0.18, ease: "power3.out",
          scrollTrigger: { trigger: infoEl, start: "top 85%", toggleActions: "play none none none" },
        });
      }
      const formEl = formRef.current;
      if (formEl) {
        gsap.fromTo(formEl, { opacity: 0, x: 50 }, {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: formEl, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Direct mailto trigger to send email directly to mayar201500@gmail.com
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:mayar201500@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => setSubmitted(false), 3500);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <p className="font-magiera text-3xl text-[#7C3AED] mb-1">Let&apos;s Build Together</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Get In <span className="text-[#7C3AED] neon-purple">Touch</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Have a project in mind, full-stack opportunity, or architectural concept? Reach out directly via email, phone, or message below.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div ref={infoRef} className="lg:col-span-1 space-y-6">
            {/* Direct Contact Methods */}
            <div style={{ opacity: 0 }}>
              <GlassCard className="p-6 border border-[#585A68]/30 space-y-4">
                <h3 className="text-lg font-bold text-text-main mb-2 flex items-center gap-2">
                  <HiMail className="text-[#7C3AED]" /> Contact Information
                </h3>
                {directContacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : "_self"}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#7C3AED]/5 border border-[#585A68]/20 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#7C3AED]/15 flex items-center justify-center text-lg text-[#7C3AED] shrink-0">
                      <contact.icon />
                    </div>
                    <div className="overflow-hidden flex-1">
                      <p className="text-[10px] uppercase font-bold text-[#6C6E7E] tracking-wider">{contact.label}</p>
                      <p className="text-xs font-semibold text-text-main group-hover:text-[#7C3AED] transition-colors truncate">
                        {contact.value}
                      </p>
                    </div>
                    <HiExternalLink className="text-xs text-[#6C6E7E] group-hover:text-[#7C3AED] transition-colors" />
                  </a>
                ))}
              </GlassCard>
            </div>

            {/* Social Media Links */}
            <div style={{ opacity: 0 }}>
              <GlassCard className="p-6 border border-[#585A68]/30">
                <h3 className="text-lg font-bold text-text-main mb-4">Connect Online</h3>
                <div className="flex items-center gap-3">
                  {socialMedia.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl glass-card border border-[#585A68]/30 flex flex-col items-center justify-center gap-1.5 text-text-muted hover:text-[#7C3AED] hover:border-[#7C3AED]/50 transition-all duration-300 hover:scale-105"
                    >
                      <social.icon className="text-xl" />
                      <span className="text-[10px] font-semibold">{social.label}</span>
                    </a>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Location & Languages */}
            <div style={{ opacity: 0 }}>
              <GlassCard className="p-6 border border-[#585A68]/30">
                <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                  <HiLocationMarker className="text-[#7C3AED]" /> Location &amp; Languages
                </h3>
                <div className="space-y-3 text-xs text-text-muted">
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-text-main">Location:</span> Egypt (Open to Remote Worldwide)
                  </p>
                  <div className="pt-2 border-t border-[#585A68]/20">
                    <p className="font-bold text-text-main flex items-center gap-1.5 mb-1">
                      <HiTranslate className="text-[#6366F1]" /> Languages:
                    </p>
                    <ul className="space-y-1 text-text-muted pl-4 list-disc">
                      <li>Arabic — Native</li>
                      <li>English — Professional Working Proficiency</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Soft Skills */}
            <div style={{ opacity: 0 }}>
              <GlassCard className="p-6 border border-[#585A68]/30">
                <h3 className="text-lg font-bold text-text-main mb-3 flex items-center gap-2">
                  <HiSparkles className="text-[#7C3AED]" /> Soft Skills
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {softSkills.map((skill) => (
                    <span key={skill} className="text-[11px] px-2.5 py-1 rounded-md bg-[#7C3AED]/12 text-[#7C3AED] dark:text-[#6366F1] font-semibold border border-[#7C3AED]/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 space-y-6 border border-[#585A68]/30 shadow-xl"
              style={{ opacity: 0 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C6E7E] text-lg" />
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent border border-[#585A68]/40 text-text-main placeholder-[#6C6E7E] text-sm focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 outline-none transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C6E7E] text-lg" />
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent border border-[#585A68]/40 text-text-main placeholder-[#6C6E7E] text-sm focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>
              <div className="relative">
                <HiChat className="absolute left-4 top-5 text-[#6C6E7E] text-lg" />
                <textarea
                  name="message" value={formData.message} onChange={handleChange} required rows={5}
                  placeholder="Your Message..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent border border-[#585A68]/40 text-text-main placeholder-[#6C6E7E] text-sm focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 outline-none transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl cta-purple font-semibold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
              >
                {submitted ? (
                  <span>Opening Mail Client to Send Directly... ✓</span>
                ) : (
                  <>
                    Send Email Directly to mayar201500@gmail.com
                    <HiPaperAirplane className="text-lg rotate-90" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
