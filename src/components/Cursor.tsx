"use client";
import React, { useEffect, useRef, useState } from "react";

const Cursor: React.FC = () => {
  const crsr = useRef<HTMLDivElement | null>(null);
  const [isCursor, setIsCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (crsr.current) {
        crsr.current.style.left = `${e.clientX}px`;
        crsr.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      console.log("Mouse Enter");
      setIsCursor(true); // Show the cursor
    };

    const handleMouseLeave = () => {
      console.log("Mouse Leave");
      setIsCursor(false); // Hide the cursor
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter); // Use 'mouseover' for entering the document
    document.addEventListener("mouseout", handleMouseLeave); // Use 'mouseout' for leaving the document

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="cursor"
      ref={crsr}
      style={{
        display: isCursor ? "block" : "none",
      }}
    >
        <div className="inner-dot"></div>
    </div>
  );
};

export default Cursor;
