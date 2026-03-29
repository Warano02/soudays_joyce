"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RSVP() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    nom: "",
    presence: "",
    personnes: 1,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
        { opacity: 1, y: 0, duration: 0.8 }
      );
    }, 50);
  };

  const inputClass =
    "w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm bg-white placeholder:text-[var(--color-muted)] focus:outline-none";

  return (
    <section
      id="rsvp"
      ref={sectionRef}
      className="py-28 px-6 bg-[var(--color-bg)]"
    >
      <div className="max-w-xl mx-auto text-center">

        {/* Header */}
        <p className="section-tag mb-3">Avec tout notre cœur</p>

        <h2 className="section-title text-4xl md:text-5xl">
          Confirmez votre présence
        </h2>

        <div className="gold-line mx-auto mt-6 mb-14" />

        {/* Card */}
        <div ref={formRef} className="card-wedding p-8 md:p-10 text-left">

          {submitted ? (
            <div ref={successRef} className="text-center py-10">
              <h3 className="section-title text-3xl mb-4">
                Merci infiniment ✨
              </h3>

              <p className="text-[var(--color-muted)] text-sm">
                Votre réponse a été reçue avec joie.  
                Nous avons hâte de partager ce moment précieux avec vous.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Nom */}
              <div>
                <label className="section-tag mb-2 block">
                  Votre nom
                </label>
                <input
                  type="text"
                  name="nom"
                  required
                  placeholder="Entrez votre nom complet"
                  value={form.nom}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Présence */}
              <div>
                <label className="section-tag mb-2 block">
                  Serez-vous des nôtres ?
                </label>
                <select
                  name="presence"
                  required
                  value={form.presence}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Veuillez sélectionner
                  </option>
                  <option value="oui">
                    Oui, avec grand plaisir
                  </option>
                  <option value="non">
                    Avec regret, je ne pourrai être présent(e)
                  </option>
                </select>
              </div>

              {/* Nombre */}
              <div>
                <label className="section-tag mb-2 block">
                  Nombre d’invités
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

              {/* Message */}
              <div>
                <label className="section-tag mb-2 block">
                  Un mot doux
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Laissez-nous un message rempli d’amour..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Button */}
              <div className="pt-4 text-center">
                <button type="submit" disabled={loading} className="btn-primary">
                  {loading ? "Envoi en cours..." : "Je confirme avec joie"}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}