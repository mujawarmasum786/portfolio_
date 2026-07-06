"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import EnterScreen from "@/components/EnterScreen";
import Starfield from "@/components/Starfield";
import Nav from "@/components/Nav";
import UniverseHub from "@/components/UniverseHub";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import EducationSection from "@/components/Education";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  return (
    <main className="min-h-screen bg-bg relative">
      <MouseGlow />
      <Starfield />

      {loading && <Loader onDone={() => setLoading(false)} />}
      {!loading && !entered && <EnterScreen onEnter={() => setEntered(true)} />}

      <div
        className={`relative z-10 transition-opacity duration-1000 ${
          entered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Nav />

        <section id="universe" className="pt-36 px-6 pb-10">
          <div className="text-cyan text-xs tracking-[4px] text-center mb-2">
            PORTFOLIO OF
          </div>
          <h1 className="font-orbitron text-3xl font-bold text-center mb-10">
            Masum Mujawar
          </h1>
          <UniverseHub />
        </section>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <ResumeSection />
        <Footer />
      </div>
    </main>
  );
}
