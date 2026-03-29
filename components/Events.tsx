"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const events = [
    {
        type: "Cérémonie",
        date: "Samedi 14 juin 2025",
        heure: "11h00",
        lieu: "Église Saint-Jean-Baptiste",
        description:
            "Rejoignez-nous pour la bénédiction de notre union dans un cadre intimiste et recueilli, entouré de ceux que nous aimons.",
    },
    {
        type: "Réception",
        date: "Samedi 14 juin 2025",
        heure: "18h30",
        lieu: "Domaine des Roses, Salle Ivoire",
        description:
            "Le soir venu, célébrons ensemble autour d'un dîner festif, de musique et de joie partagée jusqu'au bout de la nuit.",
    },
];

export default function Event() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const cards = cardsRef.current.filter(Boolean);
        gsap.fromTo(
            cards,
            { opacity: 0, y: 48 },
            {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <section
            id="evenement"
            ref={sectionRef}
            className="py-24 px-4 bg-[#faf9f7]"
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#b8966e] mb-3 font-medium">
                        14 Juin 2025
                    </p>
                    <h2
                        className="text-4xl md:text-5xl text-[#2c2c2c]"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    >
                        Le mariage
                    </h2>
                    <div className="mt-5 mx-auto w-12 h-px bg-[#b8966e]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event, i) => (
                        <div
                            key={event.type}
                            ref={(el) => { cardsRef.current[i] = el; }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#ede8e0]"
                        >
                            <div className="h-48 w-full bg-gray-200 animate-pulse" />
                            <div className="p-8">
                                <p className="text-xs tracking-[0.25em] uppercase text-[#b8966e] font-medium mb-3">
                                    {event.type}
                                </p>
                                <h3
                                    className="text-2xl text-[#2c2c2c] mb-5"
                                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                                >
                                    {event.lieu}
                                </h3>
                                <div className="flex flex-col gap-2 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-[#6b6b6b]">
                                        <Calendar size={15} className="text-[#b8966e] shrink-0" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-[#6b6b6b]">
                                        <Clock size={15} className="text-[#b8966e] shrink-0" />
                                        {event.heure}
                                    </div>
                                </div>
                                <p className="text-sm text-[#7a7a7a] leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}