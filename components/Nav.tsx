"use client";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "#histoire", label: "Notre Histoire" },
    { href: "#evenement", label: "Événement" },
    { href: "#galerie", label: "Galerie" },
    { href: "#rsvp", label: "RSVP" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#FDF8F5]/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <a
                    href="#"
                    className="font-serif italic text-xl tracking-wide"
                    style={{ color: scrolled ? "var(--color-text)" : "#fff" }}
                >
                    S & J
                </a>
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-sans text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
                            style={{ color: scrolled ? "var(--color-muted)" : "rgba(255,255,255,0.85)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "var(--color-muted)" : "rgba(255,255,255,0.85)")}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <a
                    href="#rsvp"
                    className="hidden md:inline-block font-sans text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 border transition-all duration-500"
                    style={{ borderColor: scrolled ? "var(--color-gold)" : "rgba(255,255,255,0.6)", color: scrolled ? "var(--color-gold)" : "#fff", background: "transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-gold)"; e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = scrolled ? "var(--color-gold)" : "rgba(255,255,255,0.6)"; e.currentTarget.style.color = scrolled ? "var(--color-gold)" : "#fff"; }}
                >
                    RSVP
                </a>
                <button
                    className="md:hidden flex flex-col justify-center gap-1.25 w-8 h-8"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span className="block h-px w-6 transition-all duration-300 origin-center" style={{ background: scrolled ? "var(--color-text)" : "#fff", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
                    <span className="block h-px w-6 transition-all duration-300" style={{ background: scrolled ? "var(--color-text)" : "#fff", opacity: menuOpen ? 0 : 1 }} />
                    <span className="block h-px w-6 transition-all duration-300 origin-center" style={{ background: scrolled ? "var(--color-text)" : "#fff", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden px-6 pt-4 pb-6 flex flex-col gap-5 border-t" style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-sans text-[10px] tracking-[0.2em] uppercase"
                            style={{ color: "var(--color-muted)" }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#rsvp"
                        onClick={() => setMenuOpen(false)}
                        className="font-sans text-[10px] tracking-[0.2em] uppercase px-6 py-3 border text-center mt-2"
                        style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
                    >
                        RSVP
                    </a>
                </div>
            )}
        </header>
    );
}