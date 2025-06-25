import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { learningTech, skillCategories } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

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

    tl.fromTo(
      ".skill-category",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <section id="skills" className="section py-20">
      <div className="skills-container container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated stack of powerful technologies and tools I use to craft
            performant, modern, and delightful web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category glass rounded-xl p-8 hover-lift"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-start items-center mb-2">
                      <span className="px-3 py-1 text-sm bg-gradient-to-r from-primary/20 to-accent/20 border border-blue-500/30 rounded-full text-blue-300">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-white mb-8">Always Learning</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {learningTech.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 glass rounded-full text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
