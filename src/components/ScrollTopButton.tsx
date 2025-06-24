"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate the stroke-dasharray and stroke-dashoffset for the progress circle
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={scrollToTop}
            className="relative w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {/* Progress Circle */}
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 48 48"
            >
              {/* Background Circle */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                stroke="var(--color-primary-blur)"
                strokeWidth="2"
                fill="none"
              />
              {/* Progress Circle */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300 ease-out"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))",
                }}
              />
            </svg>

            {/* Arrow Icon */}
            <ChevronUp className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-200" />

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
          </button>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Back to top
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
          </div>
        </div>
      )}
    </>
  );
}
