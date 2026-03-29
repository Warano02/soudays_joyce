"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
    {
        title: "La rencontre",
        text: "Tout a commencé par un regard, un sourire timide, et une conversation qui n'a jamais vraiment pris fin. Ce soir-là, sans le savoir, nos deux histoires n'en formaient déjà plus qu'une.",
        side: "left",
    },
    {
        title: "L'évolution",
        text: "Au fil des saisons, nous avons appris à nous connaître, à grandir l'un avec l'autre. Chaque moment partagé, même les plus simples, est devenu précieux. Nous avons construit quelque chose de rare : une complicité profonde et un amour qui se renforce chaque jour.",
        side: "right",
    },
    {
        title: "L'engagement",
        text: "Un soir d'émotion et de lumière dorée, la question a été posée. Les larmes et le rire mêlés, la réponse est venue du cœur. Aujourd'hui, nous choisissons de nous promettre l'un à l'autre, pour toujours.",
        side: "left",
    },
];

export default function Histoire() {
    const sectionRef = useRef<HTMLElement>(null);
    const blocksRef = useRef<(HTMLDivElement | null)[]>([]);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        blocksRef.current.forEach((block, i) => {
            if (!block) return;
            const isLeft = steps[i].side === "left";
            gsap.fromTo(
                block,
                { opacity: 0, x: isLeft ? -40 : 40, y: 20 },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: block,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);
    return (
        <section id="histoire" ref={sectionRef} className="py-28 px-6" style={{ background: "var(--color-bg)" }}>
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <p className="section-tag mb-4">Notre histoire</p>
                    <h2 className="section-title text-5xl md:text-6xl">Les chapitres de notre amour</h2>
                    <div className="gold-divider max-w-[120px] mx-auto mt-6" />
                </div>
                <div className="flex flex-col gap-20">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            ref={(el) => { blocksRef.current[i] = el; }}
                            className={`flex flex-col ${step.side === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}
                        >
                            <div className="w-full md:w-1/2 h-64 bg-gray-300 animate-pulse rounded-sm flex-shrink-0" />
                            <div className="w-full md:w-1/2 flex flex-col items-start">
                                <span className="font-serif italic text-[3rem] leading-none mb-1" style={{ color: "var(--color-gold)", opacity: 0.3 }}>
                                    0{i + 1}
                                </span>
                                <div className="gold-line mb-4" />
                                <h3 className="font-serif italic text-3xl mb-4" style={{ color: "var(--color-text)" }}>
                                    {step.title}
                                </h3>
                                <p className="font-sans text-sm leading-relaxed font-light" style={{ color: "var(--color-muted)" }}>
                                    {step.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}