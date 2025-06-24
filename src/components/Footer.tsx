"use client";

import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/sajagsubedi", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sajagsubedi",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/sajag_subedi",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:sajagsubedi03@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Sajag Subedi</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer crafting practical digital solutions with
              great UI, modern tools, and real-world impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover-lift transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Pokhara, Nepal</p>
              <p>sajagsubedi03@gmail.com</p>
              <p>+977 9769495964</p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => scrollToSection("#contact")}
                className="primaryButton hover-lift px-5 py-2 neon-glow"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Sajag Subedi. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-current" /> and lots of
            curiosity.
          </p>
          <p className="text-gray-500 text-sm">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
