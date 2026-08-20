import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider max-w-4xl mx-auto" />
      <About />
      <div className="section-divider max-w-4xl mx-auto" />
      <Skills />
      <div className="section-divider max-w-4xl mx-auto" />
      <Experience />
      <div className="section-divider max-w-4xl mx-auto" />
      <Projects />
      <div className="section-divider max-w-4xl mx-auto" />
      <Education />
      <div className="section-divider max-w-4xl mx-auto" />
      <Contact />
    </>
  );
}
