"use client";
export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-150 overflow-hidden">
            <div className="absolute inset-0 bg-gray-300 animate-pulse" aria-hidden="true" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.55) 100%)" }} />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <p className="font-sans text-[10px] tracking-[0.35em] uppercase mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Vous êtes cordialement invités au mariage de
                </p>
                <h1 className="font-serif italic font-light leading-none mb-4" style={{ color: "#fff", fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
                    Soudays
                </h1>
                <p className="font-serif font-light tracking-[0.3em] my-2" style={{ color: "var(--color-gold)", fontSize: "clamp(1.2rem, 3vw, 2rem)" }}>
                    &amp;
                </p>
                <h1 className="font-serif italic font-light leading-none mb-10" style={{ color: "#fff", fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
                    Joyce
                </h1>
                <div className="w-24 h-px mb-8" style={{ background: "linear-gradient(to right, transparent, var(--color-gold), transparent)" }} />
                <p className="font-serif italic mb-2" style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}>
                    Le 14 juin 2025
                </p>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase mb-12" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Yaoundé, Cameroun
                </p>
                <a
                    href="#rsvp"
                    className="btn-primary"
                    style={{ background: "transparent", borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-gold)"; e.currentTarget.style.borderColor = "var(--color-gold)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; }}
                >
                    Confirmer ma présence
                </a>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <span className="font-sans text-[9px] tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Défiler
                </span>
                <div className="w-px h-10 animate-pulse" style={{ background: "linear-gradient(to bottom, var(--color-gold), transparent)" }} />
            </div>
        </section>
    );
}