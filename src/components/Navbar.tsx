"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "@/app/globals.css";
import { navLinks } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const mm = gsap.matchMedia();

  useGSAP(() => {
    // Nav scroll and load animation
    gsap.fromTo(
      "#nav #logo",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".navLinkItem",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    gsap.to("#nav", {
      duration: 0.5,
      background: "rgba(30, 41, 59, 0.3)",
      backdropFilter: " blur(10px)",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
      },
    });

    mm.add("(max-width: 800px)", () => {
      // Sidebar menu timeline setup
      tl.current = gsap.timeline({ paused: true });

      tl.current.fromTo(
        menuRef.current,
        { x: "100%" },
        {
          x: "0%",
          duration: 0.4,
          ease: "power2.out",
        }
      );
    });
  }, []);

  // Hover cursor logic
  useEffect(() => {
    const navLinks =
      document.querySelectorAll<HTMLAnchorElement>("#nav #menu li a");
    const crsr = document.querySelector("#cursor");

    navLinks.forEach((navLink) => {
      navLink.addEventListener("mouseenter", () => {
        crsr?.classList.add("hoverCursor");
      });
      navLink.addEventListener("mouseout", () => {
        crsr?.classList.remove("hoverCursor");
      });
    });

    return () => {
      navLinks.forEach((navLink) => {
        navLink.removeEventListener("mouseenter", () => {
          crsr?.classList.add("hoverCursor");
        });
        navLink.removeEventListener("mouseout", () => {
          crsr?.classList.remove("hoverCursor");
        });
      });
    };
  }, []);

  const openMenu = () => {
    tl.current?.play();
  };

  const closeMenu = () => {
    tl.current?.reverse();
  };

  return (
    <nav id="nav" ref={navRef}>
      <div id="phoneVisible">
        <div id="logo">
          <h2 className="gradient-text">Sajag Subedi</h2>
        </div>
        <div id="openMenu" className="menuToggle" onClick={openMenu}>
          <Menu />
        </div>
      </div>

      <ul id="menu" ref={menuRef}>
        <div className="crossIcon">
          <div id="closeMenu" className="menuToggle" onClick={closeMenu}>
            <X />
          </div>
        </div>
        <div className="navLinks">
          {navLinks.map((item, ind) => (
            <li className="navLinkItem" key={ind}>
              <Link href={item.href} className="navLink">
                {item.name}
              </Link>
              <Link href={item.href} className="hoverLink">
                {item.name}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
