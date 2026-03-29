"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = Array.from({ length: 8 });

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemsRef.current.filter(Boolean);
    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="galerie" ref={sectionRef} className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8966e] mb-3 font-medium">
            Nos moments
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#2c2c2c]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Galerie
          </h2>
          <div className="mt-5 mx-auto w-12 h-px bg-[#b8966e]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((_, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="overflow-hidden rounded-xl group"
            >
              <div className="h-72 w-full bg-gray-200 animate-pulse transition-transform duration-500 ease-out group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}