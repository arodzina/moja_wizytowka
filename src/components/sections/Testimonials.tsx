"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    author: "Mama Basi",
    role: "mama ósmoklasistki",
    tag: "Egzamin Ósmoklasisty",
    text: "Współpraca przebiegała bez problemów, a wszystkie zagadnienia z angielskiego były świetnie tłumaczone. Córka zdała bardzo wysoko Egzamin Ósmoklasisty!",
    color: "border-emerald-500/40 text-emerald-950 bg-emerald-50/80",
  },
  {
    author: "Krzysiek",
    role: "uczeń 8. klasy",
    tag: "Angielski E8",
    text: "Przez kilka miesięcy przygotowań z Olą zyskałem pewność siebie w gramatyce i pisaniu e-maili na E8. Lekcje były bardzo konkretne, a notatki w Canvie pozwalały mi szybko powtarzać materiał.",
    color: "border-brand-500/40 text-brand-900 bg-brand-50/80",
  },
  {
    author: "Kuba",
    role: "uczeń 6. klasy",
    tag: "Nadrabianie zaległości",
    text: "Najbardziej podobał mi się sposób, w jaki Ola tłumaczyła trudne zagadnienia z angielskiego. Wszystko krok po kroku, w miłej atmosferze. Szybko zacząłem dostawać lepsze oceny i przestałem bać się mówienia.",
    color: "border-amber-500/40 text-amber-950 bg-amber-50/80",
  },
];

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section id="opinie" aria-labelledby="testimonials-title" className="relative overflow-x-clip bg-white py-20 sm:py-28">
      {/* Tło ozdobne */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-[-10%] h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="absolute bottom-10 right-[-10%] h-80 w-80 rounded-full bg-accent-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Opinie"
          title="Opinie uczniów i rodziców"
          lead="Zobacz, jak współpracę i przygotowania do Egzaminu Ósmoklasisty wspominają moi uczniowie oraz ich rodzice."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <Reveal key={t.author} delay={idx * 0.1} className="h-full">
              <motion.div
                whileHover={reduce ? undefined : { y: -5 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full flex-col justify-between rounded-3xl bg-mist p-7 ring-1 ring-slate-200/80 shadow-card transition-all hover:bg-white hover:shadow-float"
              >
                <div>
                  {/* Głowica karty: Gwiazdki i tag */}
                  <div className="flex items-center justify-between gap-3 border-b border-slate-200/60 pb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 stroke-amber-400" aria-hidden="true" />
                      ))}
                    </div>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${t.color}`}>
                      {t.tag}
                    </span>
                  </div>

                  {/* Cytat */}
                  <div className="relative pt-5">
                    <Quote className="absolute top-3 left-0 size-8 text-brand-200/50 -z-0" />
                    <p className="relative z-10 text-sm sm:text-base leading-relaxed font-medium text-slate-700 italic">
                      „{t.text}”
                    </p>
                  </div>
                </div>

                {/* Autor */}
                <div className="mt-6 border-t border-slate-200/60 pt-4 flex items-center justify-between">
                  <div>
                    <span className="block text-base font-extrabold text-ink">{t.author}</span>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.role}</span>
                  </div>
                  <div className="grid size-9 place-items-center rounded-full bg-brand-100/80 text-brand-700 font-bold text-xs">
                    {t.author.charAt(0)}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
