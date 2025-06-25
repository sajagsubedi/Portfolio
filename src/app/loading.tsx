"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-20 h-20 border-4 border-blue-500/20 rounded-full"></div>
              <div className="absolute inset-0 w-20 h-20 border-4 border-t-blue-500 rounded-full" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Sajag Subedi</h2>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
        </div>
      )}
    </>
  );
}
