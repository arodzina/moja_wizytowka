"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Calculator, Languages, BookOpenCheck, GraduationCap } from "lucide-react";
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
    transition: reduce
      ? undefined
      : { duration, repeat: Infinity, ease: "easeInOut", delay },
  });

  return (
    <section id="start" className="relative overflow-x-clip bg-mist pt-14 pb-24 lg:pt-20 lg:pb-32">
      {/* Tło ozdobne */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] h-[40rem] w-[40rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[35rem] w-[35rem] rounded-full bg-accent-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        {/* Lewa kolumna: Tekst i CTA */}
        <motion.div
          variants={container}
          initial="hidden"
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

        {/* Prawa kolumna: Karta z zakresem przygotowań (50/50 szerokość) */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
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

            <div className="space-y-3 pt-1">
              {/* Karta 1: Matematyka E8 (Niebieska) */}
              <div className="flex items-center gap-3.5 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-100/90 border border-brand-200/80 shadow-xs">
                  <Calculator className="size-5 text-brand-700" />
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink">Egzamin Ósmoklasisty — Matematyka</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Rozkładanie skomplikowanych zadań CKE na proste kroki, algebra, geometria i sprawdzony plan powtórek.
                  </p>
                </div>
              </div>

              {/* Karta 2: Angielski E8 (Niebieska) */}
              <div className="flex items-center gap-3.5 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-100/90 border border-brand-200/80 shadow-xs">
                  <Languages className="size-5 text-brand-700" />
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink">Egzamin Ósmoklasisty — Język Angielski</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Niezawodne szablony e-maila, pewniaki gramatyczne, słownictwo i praktyczne zwroty egzaminacyjne.
                  </p>
                </div>
              </div>

              {/* Karta 3: Matura Matematyka (Żółta/Bursztynowa) */}
              <div className="flex items-center gap-3.5 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-amber-100/90 border border-amber-200/80 shadow-xs">
                  <BookOpenCheck className="size-5 text-amber-800" />
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink">Matura z Matematyki (Podstawa & Rozszerzenie)</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Logiczne schematy zadań — praca z Kartą Wzorów CKE, funkcja kwadratowa, pochodne i optymalizacja.
                  </p>
                </div>
              </div>

              {/* Karta 4: Matura Angielski (Żółta/Bursztynowa) */}
              <div className="flex items-center gap-3.5 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-amber-100/90 border border-amber-200/80 shadow-xs">
                  <GraduationCap className="size-5 text-amber-800" />
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
