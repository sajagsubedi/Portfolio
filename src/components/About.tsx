import React, { useEffect } from "react";
import { BookOpen, Code, GitCommit, Zap } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";

const About: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".about-image",
      { opacity: 0, scale: 0.8, rotation: -5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }
    )
      .fromTo(
        ".about-text",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ".about-stat",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );
  }, []);

  const stats = [
    { icon: Code, label: "Projects Completed", value: "25+" },
    { icon: BookOpen, label: "Technologies Learned", value: "20+" },
    { icon: GitCommit, label: "Commit Pushed", value: "750+" },
    { icon: Zap, label: "Years of Experience", value: "3+" },
  ];

  return (
    <section id="about" className="section py-20">
      <div className="about-container container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover my journey as a passionate developer and lifelong learner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="about-image">
            <div className="relative">
              <div className="w-96 h-96 mx-auto">
                <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                  <Image
                    className="rounded-full h-96 w-96 object-cover bg-gradient-to-br from-primary to-accent p-1"
                    src={"/user.jpg"}
                    alt="user"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-600/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
          <div className="about-text">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Passionate Developer & Student
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I&apos;m Sajag Subedi, a dedicated full-stack web developer with a
              deep interest in building meaningful digital products. My journey
              in tech began out of curiosity and quickly grew into a
              purpose-driven mission to create intuitive and impactful user
              experiences.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Currently honing my skills while working on real-world projects, I
              focus on modern web technologies and love exploring new tools,
              frameworks, and libraries. Whether it&apos;s crafting smooth UI/UX
              with animations or architecting efficient backends, I thrive in
              turning ideas into reality through code.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="about-stat text-center glass rounded-lg p-6 hover-lift"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
