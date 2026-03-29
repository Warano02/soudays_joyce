"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RSVP() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ nom: "", presence: "", personnes: 1, message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      gsap.fromTo(
        successRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
    }, 50);
  };

  const inputClass =
    "w-full border border-[#ddd5c8] rounded-lg px-4 py-3 text-sm text-[#2c2c2c] bg-white placeholder:text-[#b0a89e] focus:outline-none focus:border-[#b8966e] transition-colors duration-200";

  return (
    <section id="rsvp" ref={sectionRef} className="py-24 px-4 bg-[#faf9f7]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8966e] mb-3 font-medium">
            Faites-nous signe
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#2c2c2c]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Confirmez votre présence
          </h2>
          <div className="mt-5 mx-auto w-12 h-px bg-[#b8966e]" />
        </div>
        <div ref={formRef}>
          {submitted ? (
            <div ref={successRef} className="text-center py-16">
              <p
                className="text-3xl text-[#2c2c2c] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                Merci pour votre réponse ❤️
              </p>
              <p className="text-sm text-[#7a7a7a]">Nous avons hâte de vous retrouver.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#b8966e] mb-2 font-medium">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="nom"
                  required
                  placeholder="Jean Dupont"
                  value={form.nom}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#b8966e] mb-2 font-medium">
                  Serez-vous présent(e) ?
                </label>
                <select
                  name="presence"
                  required
                  value={form.presence}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Choisir une réponse</option>
                  <option value="oui">Oui, avec plaisir !</option>
                  <option value="non">Non, je ne pourrai pas</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#b8966e] mb-2 font-medium">
                  Nombre de personnes
                </label>
                <input
                  type="number"
                  name="personnes"
                  min={1}
                  max={10}
                  value={form.personnes}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#b8966e] mb-2 font-medium">
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Un mot pour les mariés..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full py-4 rounded-lg bg-[#2c2c2c] text-white text-sm tracking-widest uppercase transition-opacity duration-200 hover:opacity-80 disabled:opacity-50"
              >
                {loading ? "Envoi en cours..." : "Confirmer ma présence"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}