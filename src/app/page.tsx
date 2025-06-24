"use client";

import AboutSection from "@/components/About";
import { ContactSection } from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects";
import Skills from "@/components/Skills";
import String from "@/components/String";
import gsap from "gsap";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    // Initialize smooth scrolling
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0,
    });

    // Animate sections on scroll
    const sections = gsap.utils.toArray(".section");
    sections.forEach((section) => {
      gsap.fromTo(
        section as Element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section as Element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  return (
    <main>
      <Hero />
      <String />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Page;
