"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Fade + slide up from below on scroll into view. */
export function useFadeUp(
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    stagger?: number;
    childSelector?: string;
  } = {}
) {
  const ref = useRef<HTMLElement | null>(null);
  const { delay = 0, duration = 0.8, y = 50, stagger = 0, childSelector } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = childSelector ? el.querySelectorAll(childSelector) : [el];
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1, y: 0, duration, delay, stagger, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [delay, duration, y, stagger, childSelector]);

  return ref;
}

/** Fade + slide in from the left. */
export function useFadeLeft(options: { delay?: number; duration?: number; x?: number } = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const { delay = 0, duration = 0.8, x = -60 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x },
        {
          opacity: 1, x: 0, duration, delay, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [delay, duration, x]);

  return ref;
}

/** Fade + slide in from the right. */
export function useFadeRight(options: { delay?: number; duration?: number; x?: number } = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const { delay = 0, duration = 0.8, x = 60 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x },
        {
          opacity: 1, x: 0, duration, delay, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [delay, duration, x]);

  return ref;
}

/** Staggered children reveal — attach to a container, pass a child selector. */
export function useStaggerReveal(
  childSelector: string,
  options: { stagger?: number; duration?: number; y?: number; delay?: number } = {}
) {
  const ref = useRef<HTMLElement | null>(null);
  const { stagger = 0.1, duration = 0.65, y = 40, delay = 0 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(childSelector),
        { opacity: 0, y },
        {
          opacity: 1, y: 0, duration, stagger, delay, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [childSelector, stagger, duration, y, delay]);

  return ref;
}

/** Scale + fade in — great for cards and images. */
export function useScaleFade(options: { delay?: number; duration?: number; from?: number } = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const { delay = 0, duration = 0.7, from = 0.85 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: from },
        {
          opacity: 1, scale: 1, duration, delay, ease: "back.out(1.4)",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [delay, duration, from]);

  return ref;
}

/** Timeline-based section header animation (script line + heading). */
export function useSectionHeader() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const script = el.querySelector(".gsap-script");
    const heading = el.querySelector(".gsap-heading");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      });
      if (script) tl.fromTo(script, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
      if (heading) tl.fromTo(heading, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3");
    }, el);
    return () => ctx.revert();
  }, []);

  return ref;
}
