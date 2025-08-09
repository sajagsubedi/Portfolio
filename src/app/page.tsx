"use client";

import AboutSection from "@/components/About";
import { ContactSection } from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects";
import Skills from "@/components/Skills";
import String from "@/components/String";
import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  // Hover cursor logic
  useEffect(() => {
    const cursorActivateLinks = document.querySelectorAll(".cursor-activate");
    const crsr = document.querySelector("#cursor");

    const handleMouseMove = (e: MouseEvent) => {
      let insideCount = 0;
      cursorActivateLinks.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const inside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        if (inside) {
          insideCount += 1;
        }
      });
      if (insideCount > 0) {
        crsr?.classList.add("hoverCursor");
      } else {
        crsr?.classList.remove("hoverCursor");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
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
