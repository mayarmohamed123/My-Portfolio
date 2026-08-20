"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import {
  HiMail,
  HiUser,
  HiChat,
  HiPaperAirplane,
  HiLocationMarker,
  HiTranslate,
  HiSparkles,
} from "react-icons/hi";

const softSkills = [
  "Problem Solving",
  "Technical Communication",
  "Team Collaboration",
  "Adaptability & Fast Learning",
  "Teaching & Mentoring",
  "Attention to Detail",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Magiera Script */}
        <div className="text-center mb-16">
          <p className="font-magiera text-3xl text-[#7C3AED] mb-1">
            Let&apos;s Build Together
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Get In <span className="text-[#7C3AED] neon-purple">Touch</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Have a project in mind, full-stack opportunity, or architectural concept? Reach out — I&apos;d love to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-1 space-y-6">
            <GlassCard className="p-6 border border-[#585A68]/30">
              <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                <HiLocationMarker className="text-[#7C3AED]" /> Location & Languages
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

            <GlassCard className="p-6 border border-[#585A68]/30">
              <h3 className="text-lg font-bold text-text-main mb-3 flex items-center gap-2">
                <HiSparkles className="text-[#7C3AED]" /> Soft Skills & Strengths
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-[#7C3AED]/12 text-[#7C3AED] dark:text-[#6366F1] font-semibold border border-[#7C3AED]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-10 space-y-6 border border-[#585A68]/30 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C6E7E] text-lg" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent border border-[#585A68]/40 text-text-main placeholder-[#6C6E7E] text-sm focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 outline-none transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C6E7E] text-lg" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent border border-[#585A68]/40 text-text-main placeholder-[#6C6E7E] text-sm focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <HiChat className="absolute left-4 top-5 text-[#6C6E7E] text-lg" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent border border-[#585A68]/40 text-text-main placeholder-[#6C6E7E] text-sm focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl cta-purple font-semibold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitted ? (
                  <span>Message Sent Successfully! ✓</span>
                ) : (
                  <>
                    Send Message
                    <HiPaperAirplane className="text-lg rotate-90" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
