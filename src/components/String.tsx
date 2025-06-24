import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const String = () => {
  const stringRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [width, setWidth] = useState(1500); // default fallback
  const height = 300;
  const midY = 150;

  const getInitialPath = (w: number) =>
    `M 10 ${midY} Q ${w / 2} ${midY} ${w - 10} ${midY}`;

  useEffect(() => {
    const stringEl = stringRef.current;
    if (!stringEl) return;

    // Update width on mount and resize
    const updateWidth = () => {
      const newWidth = stringEl.offsetWidth;
      setWidth(newWidth);
      gsap.set(pathRef.current, {
        attr: { d: getInitialPath(newWidth) },
      });
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = stringEl.getBoundingClientRect();
      const relativeX = e.clientX - bounds.left;
      const relativeY = e.clientY - bounds.top;

      const newPath = `M 10 ${midY} Q ${relativeX} ${relativeY} ${
        width - 10
      } ${midY}`;

      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: getInitialPath(width) },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };

    stringEl.addEventListener("mousemove", handleMouseMove);
    stringEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", updateWidth);
      stringEl.removeEventListener("mousemove", handleMouseMove);
      stringEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [width]);

  return (
    <div ref={stringRef} className="w-full overflow-hidden text-primary">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d={getInitialPath(width)}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default String;
