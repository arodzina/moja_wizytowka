"use client";

import Image from "next/image";
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
            Przygotowanie do E8 i matury według{" "}
            <span className="relative inline-block rounded-2xl bg-accent-200 px-2.5 pb-1 text-ink">
              wymagań CKE
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-soft"
          >
            Pomagam uczniom uporządkować materiał, uzupełnić braki i nauczyć się rozwiązywać zadania dokładnie w taki sposób, jak wymaga tego egzamin.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#kontakt" size="lg">
              Umów bezpłatną konsultację
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href="#stawka-egzaminu" variant="secondary" size="lg">
              Zobacz, jak pracujemy
            </Button>
          </motion.div>

          {/* Pasek zaufania (Trust badges) */}
          <motion.div variants={item} className="mt-8 border-t border-slate-200/80 pt-5 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-ink">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-brand-900 ring-1 ring-brand-200/60">
                <span className="text-emerald-600 font-bold">✓</span> 100% z matury podstawowej z matematyki i angielskiego
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-amber-900 ring-1 ring-amber-200/60">
                <span className="text-emerald-600 font-bold">✓</span> AGH — Informatyka i Ekonometria
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-900 ring-1 ring-emerald-200/60">
                <span className="text-emerald-600 font-bold">✓</span> Doświadczenie w lekcjach online
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium pt-0.5">
              Doświadczenie w prowadzeniu zajęć online i pracy z uczniami.
            </p>
          </motion.div>
        </motion.div>

        {/* Prawa kolumna: Karta z zakresem przygotowań (Z awatarem Oli) */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* Główna karta oferty i zakresu */}
          <div className="relative rounded-[2.25rem] bg-white p-6 shadow-float ring-1 ring-slate-100 sm:p-7 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <Image
                    src="/images/ola-avatar.jpg"
                    alt="Ola — korepetytorka"
                    width={80}
                    height={80}
                    unoptimized
                    className="size-16 sm:size-20 rounded-full object-cover ring-4 ring-brand-500/20 shadow-md"
                  />
                  <div className="absolute bottom-0 right-0 size-4.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Z kim pracujesz?</span>
                  <span className="block text-base sm:text-lg font-extrabold text-ink leading-tight">Ola — Korepetycje E8 & Matura</span>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold text-brand-700 shrink-0">
                <ShieldCheck className="size-4" aria-hidden="true" />
                Wymagania CKE
              </span>
            </div>

            {/* Siatka 2x2: Kafelki przedmiotów */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Karta 1: Egzamin Ósmoklasisty - Matematyka (Góra lewa) */}
              <div className="flex items-center gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-100/90 border border-brand-200/80 shadow-xs">
                  <Calculator className="size-5 text-brand-700" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink leading-snug">
                  Egzamin Ósmoklasisty z matematyki
                </span>
              </div>

              {/* Karta 2: Egzamin Ósmoklasisty - Angielski (Góra prawa) */}
              <div className="flex items-center gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-100/90 border border-brand-200/80 shadow-xs">
                  <Languages className="size-5 text-brand-700" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink leading-snug">
                  Egzamin Ósmoklasisty z języka angielskiego
                </span>
              </div>

              {/* Karta 3: Matura z Matematyki (Dół lewa) */}
              <div className="flex items-center gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-amber-100/90 border border-amber-200/80 shadow-xs">
                  <BookOpenCheck className="size-5 text-amber-800" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink leading-snug">
                  Matura z matematyki (podstawowa i rozszerzona)
                </span>
              </div>

              {/* Karta 4: Matura z Angielskiego (Dół prawa) */}
              <div className="flex items-center gap-3 rounded-2xl bg-mist p-3.5 ring-1 ring-brand-100/70 transition-all hover:bg-white hover:shadow-xs">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-amber-100/90 border border-amber-200/80 shadow-xs">
                  <GraduationCap className="size-5 text-amber-800" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink leading-snug">
                  Matura z angielskiego (podstawowa i rozszerzona)
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
