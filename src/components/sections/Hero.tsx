"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

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
            Spokojne i skuteczne przygotowanie do{" "}
            <span className="relative inline-block rounded-2xl bg-accent-200 px-2.5 pb-1 text-ink">
              Egzaminów CKE
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-soft"
          >
            Wspieram uczniów w przygotowaniach z <strong className="font-semibold text-ink">Matematyki i Języka Angielskiego</strong>. Pomagam poukładać wiedzę, rozpracować wytyczne CKE i spokojnie zdobyć wysoki wynik na Egzaminie Ósmoklasisty oraz Maturze.
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
        </motion.div>

        {/* Kokpit Strategii Egzaminacyjnej */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Główna karta oferty i zakresu */}
          <div className="relative rounded-[2.25rem] bg-white p-6 shadow-float ring-1 ring-slate-100 sm:p-7 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="size-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold text-ink">Zakres przygotowań</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                <ShieldCheck className="size-3.5" aria-hidden="true" />
                Zgodnie z wytycznymi CKE
              </span>
            </div>

            <div className="space-y-2.5 pt-1">
              {/* Karta 1: Matematyka E8 */}
              <div className="flex items-start gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70">
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-brand-600 text-white text-sm">
                  📐
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink">Egzamin Ósmoklasisty — Matematyka</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Rozkładanie skomplikowanych zadań CKE na proste kroki, algebra, geometria i sprawdzony plan powtórek.
                  </p>
                </div>
              </div>

              {/* Karta 2: Angielski E8 */}
              <div className="flex items-start gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70">
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-brand-600 text-white text-sm">
                  🇬🇧
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink">Egzamin Ósmoklasisty — Język Angielski</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Niezawodne szablony e-maila, pewniaki gramatyczne, słownictwo i praktyczne zwroty egzaminacyjne.
                  </p>
                </div>
              </div>

              {/* Karta 3: Matura Matematyka */}
              <div className="flex items-start gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70">
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-amber-400 text-ink text-sm font-bold">
                  📐
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink">Matura z Matematyki (Podstawa & Rozszerzenie)</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Logiczne schematy zadań — praca z Kartą Wzorów CKE, funkcja kwadratowa, pochodne i optymalizacja.
                  </p>
                </div>
              </div>

              {/* Karta 4: Matura Angielski */}
              <div className="flex items-start gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70">
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-amber-400 text-ink text-sm font-bold">
                  🎓
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink">Matura z Angielskiego (Podstawa & Rozszerzenie)</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Gramatyka, transformacje zdań, pisanie (rozprawka, list) oraz pewność siebie na maturze ustnej.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
