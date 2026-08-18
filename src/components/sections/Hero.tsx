"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import Button from "@/components/ui/Button";

const trustPoints = [
  "100% zgodności z wytycznymi CKE",
  "Sprawdzony materiał i jasny plan",
  "E8 Matematyka & Angielski",
  "Matura Angielski (Podst. & Rozsz.)",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  const float = (duration = 5, delay = 0) => ({
    animate: reduce ? undefined : { y: [0, -8, 0] },
    transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
  });

  return (
    <section id="start" className="relative overflow-x-clip bg-white">
      {/* Dekoracyjne tło */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute top-1/2 left-[-12%] h-[26rem] w-[26rem] rounded-full bg-accent-100/70 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[25%] h-80 w-80 rounded-full bg-brand-50 blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:pt-36 lg:pb-24">
        {/* Tekst Hero */}
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate="show"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl lg:text-[3.25rem]"
          >
            Solidna wiedza i strategia na{" "}
            <span className="relative inline-block rounded-2xl bg-accent-200 px-2.5 pb-1 text-ink">
              Twój najlepszy wynik
            </span>{" "}
            z egzaminu.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-soft"
          >
            Przekazuję sprawdzony materiał, motywację i wytyczne CKE z <strong className="font-semibold text-ink">Matematyki i Angielskiego</strong>. Pomagam przygotować się do E8 i Matury z Angielskiego mądrze i bez chaotycznego kucia.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#kontakt" size="lg">
              Zapisz się na bezpłatną konsultację
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href="#stawka-egzaminu" variant="secondary" size="lg">
              Sprawdź jak pomagam
            </Button>
          </motion.div>

          <motion.ul variants={item} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Kokpit Strategii Egzaminacyjnej */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md pb-12 lg:max-w-none"
        >
          {/* Główna karta oferty i zakresu */}
          <div className="relative rounded-[2.25rem] bg-white p-6 shadow-float ring-1 ring-slate-100 sm:p-7 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="size-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold text-ink">Zakres przygotowania:</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                <ShieldCheck className="size-3.5" aria-hidden="true" />
                Zgodnie z wytycznymi CKE
              </span>
            </div>

            <div className="space-y-3 pt-1">
              {/* Karta 1: Matematyka E8 */}
              <div className="flex items-start gap-3.5 rounded-2xl bg-mist p-4 ring-1 ring-brand-100/70">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-600 text-white text-base">
                  📐
                </span>
                <div>
                  <h4 className="text-sm font-bold text-ink">Egzamin Ósmoklasisty: Matematyka</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Rozkładanie zadań CKE na proste kroki, algebra, geometria i pewniaki egzaminacyjne.
                  </p>
                </div>
              </div>

              {/* Karta 2: Angielski E8 */}
              <div className="flex items-start gap-3.5 rounded-2xl bg-mist p-4 ring-1 ring-brand-100/70">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-600 text-white text-base">
                  🇬🇧
                </span>
                <div>
                  <h4 className="text-sm font-bold text-ink">Egzamin Ósmoklasisty: Język Angielski</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Niezawodne szablony e-maila, pewniaki gramatyczne, słownictwo i reakcje językowe CKE.
                  </p>
                </div>
              </div>

              {/* Karta 3: Matura Angielski */}
              <div className="flex items-start gap-3.5 rounded-2xl bg-mist p-4 ring-1 ring-brand-100/70">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-400 text-ink text-base font-bold">
                  🎓
                </span>
                <div>
                  <h4 className="text-sm font-bold text-ink">Matura z Angielskiego (Podstawa & Rozszerzenie)</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Use of English, pisanie (rozprawka, list), transformacje oraz bezstresowa matura ustna.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dymki pływające */}
          <motion.div
            {...float(5.2, 0.3)}
            className="absolute -top-5 -right-3 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-soft ring-1 ring-slate-100 sm:-right-5"
          >
            <Sparkles className="size-4 text-accent-500" />
            <span className="text-xs font-bold text-ink">Cel: Maksymalny Wynik Ucznia</span>
          </motion.div>

          <motion.div
            {...float(5.8, 0.7)}
            className="absolute -bottom-3 left-4 max-w-[18rem] rounded-2xl bg-accent-200 px-4 py-3 text-xs font-bold text-ink shadow-soft sm:left-8"
          >
            🎯 15 min bezpłatnej konsultacji na start
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
