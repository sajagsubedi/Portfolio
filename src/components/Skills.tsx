import React, { useEffect } from "react";
import { gsap } from "gsap";

const Skills: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-container",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section id="skills" className="section py-20">
      <div className="skills-container container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I
            use to build exceptional digital experiences and solve complex
            problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
