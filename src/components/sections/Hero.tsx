"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Languages, PenTool, BookOpenCheck, Sparkles } from "lucide-react";
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

  return (
    <section id="start" className="relative overflow-x-clip bg-mist pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
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
            Skuteczne przygotowanie do Egzaminu Ósmoklasisty z{" "}
            <span className="relative inline-block rounded-2xl bg-accent-200 px-2.5 pb-1 text-ink">
              Języka Angielskiego
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-soft"
          >
            Uczymy się dokładnie pod wytyczne CKE, ale w miłej i bezstresowej atmosferze. Na każdą lekcję opracowuję dedykowany plan, wybieram zadania z repetytoriów i przesyłam prace domowe, żeby uczeń czuł pełne wsparcie i pewność siebie.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#kontakt" size="lg">
              Umów bezpłatną konsultację
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href="#jak-pracujemy" variant="secondary" size="lg">
              Zobacz, jak pracujemy
            </Button>
          </motion.div>
        </motion.div>

        {/* Prawa kolumna: Karta z zakresem przygotowań (Język Angielski) */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* Główna karta oferty i zakresu */}
          <div className="relative rounded-[2.25rem] bg-white p-6 shadow-float ring-1 ring-slate-100 sm:p-7 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <Image
                    src="/images/ola-avatar.jpg"
                    alt="Ola — korepetytorka z angielskiego"
                    width={80}
                    height={80}
                    unoptimized
                    className="size-16 sm:size-20 rounded-full object-cover ring-4 ring-brand-500/20 shadow-md"
                  />
                  <div className="absolute bottom-0 right-0 size-4.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Z kim pracujesz?</span>
                  <span className="block text-base sm:text-lg font-extrabold text-ink leading-tight">Ola — Angielski E8 & Klasy 6–8</span>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold text-brand-700 shrink-0">
                <ShieldCheck className="size-4" aria-hidden="true" />
                Wymagania CKE
              </span>
            </div>

            {/* Nagłówek sekcji z zakresem */}
            <div className="pt-0.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">W czym pomagam uczniom?</span>
            </div>

            {/* Siatka 2x2: Kafelki przygotowań z angielskiego */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Karta 1: Egzamin Ósmoklasisty E8 */}
              <div className="flex items-center gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-100/90 border border-brand-200/80 shadow-xs">
                  <Languages className="size-5 text-brand-700" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink leading-snug">
                  Egzamin Ósmoklasisty (E8 z angielskiego)
                </span>
              </div>

              {/* Karta 2: Bieżący materiał klasy 6-8 */}
              <div className="flex items-center gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-100/90 border border-brand-200/80 shadow-xs">
                  <BookOpenCheck className="size-5 text-brand-700" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink leading-snug">
                  Bieżący materiał i nadrabianie zaległości (klasy 6–8)
                </span>
              </div>

              {/* Karta 3: Pisanie e-maili i Use of English */}
              <div className="flex items-center gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-amber-100/90 border border-amber-200/80 shadow-xs">
                  <PenTool className="size-5 text-amber-800" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink leading-snug">
                  Pewniaki CKE: e-maile, wpisy, transformacje
                </span>
              </div>

              {/* Karta 4: Dedykowany plan i materiały */}
              <div className="flex items-center gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-amber-100/90 border border-amber-200/80 shadow-xs">
                  <Sparkles className="size-5 text-amber-800" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink leading-snug">
                  Autorski plan zajęć, notatki w Canvie & praca domowa
                </span>
              </div>
            </div>

            {/* Pasek zaufania (Dlaczego ja?) */}
            <div className="border-t border-slate-100 pt-4 space-y-2.5">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Dlaczego ja?</span>
              <div className="space-y-2 pt-0.5">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-ink">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                  <span>100% z matury z angielskiego (podstawowa i rozszerzona)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-ink">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                  <span>Jasny plan nauki przedstawiany rodzicowi i uczniowi po bezpłatnej konsultacji (15 min)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-ink">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                  <span>Materiały z repetytoriów przygotowywane przeze mnie przed każdą lekcją</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-ink">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                  <span>Cyfrowy zeszyt w Canvie, spersonalizowane zadania domowe & feedback dla rodzica</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
