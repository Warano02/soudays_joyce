"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <footer ref={ref} className="bg-[#FDF6F0] py-8 px-4 text-center">
      <div className="max-w-lg mx-auto flex flex-col items-center gap-2">
        <h2
          className="text-2xl text-[#2c2c2c]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Soudays & Joyce
        </h2>
        <p className="text-xs text-[#9a8a7a] italic">« Deux âmes qui se reconnaissent, une vie qui commence. »</p>
        <p className="text-xs tracking-[0.25em] uppercase text-[#b8966e] font-medium">14 Juin 2025</p>
        <p className="text-xs text-[#b0a89e]">Avec amour ❤️</p>
      </div>
    </footer>
  );
}