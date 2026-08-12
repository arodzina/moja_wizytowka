"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Star, Video } from "lucide-react";
import Button from "@/components/ui/Button";

const trustPoints = [
  "Mówienie & aktywne lekcje",
  "Angielski na poziomie C1",
  "Klasy 4–8 i liceum",
  "Lekcje 100% online",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  const float = (duration = 5, delay = 0) => ({
    animate: reduce ? undefined : { y: [0, -10, 0] },
    transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
  });

  return (
    <section id="start" className="relative overflow-x-clip bg-white">
      {/* Dekoracyjne tło */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-100/70 blur-3xl" />
        <div className="absolute top-1/2 left-[-12%] h-[24rem] w-[24rem] rounded-full bg-accent-100/80 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[20%] h-72 w-72 rounded-full bg-brand-50 blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:pt-36 lg:pb-24">
        {/* Tekst */}
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate="show"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-700 ring-1 ring-brand-100"
          >
            <Sparkles className="size-3.5 text-accent-500" aria-hidden="true" />
            Korepetycje online · klasy 4–8 i liceum
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Angielski i matematyka online{" "}
            <span className="relative inline-block rounded-2xl bg-accent-200 px-2 pb-1">
              bez stresu.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-soft"
          >
            Lubię uczyć i lubię tłumaczyć — najlepiej, gdy widzę, że coś nagle{" "}
            <span className="font-semibold text-ink">„zaskoczyło"</span>. Tłumaczę tyle razy, ile trzeba, bez pośpiechu i bez oceniania. Bo angielski i matematyka naprawdę nie muszą być straszne.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#kontakt" size="lg">
              Umów darmową rozmowę
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href="#o-mnie" variant="secondary" size="lg">
              Poznajmy się
            </Button>
          </motion.div>

          <motion.ul variants={item} className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="grid size-5 place-items-center rounded-full bg-accent-100 text-accent-600">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Wizytówka Lekcji z Olą */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md pb-14 lg:max-w-none"
        >
          {/* Główna karta */}
          <div className="relative rounded-[2.25rem] bg-white p-6 shadow-float ring-1 ring-slate-100 sm:p-7 space-y-4">
            {/* Nagłówek karty */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-brand-500" />
                <span className="text-sm font-bold text-ink">Jak wygląda lekcja online?</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                <Video className="size-3.5" aria-hidden="true" />
                Darmowe 30 min na start
              </span>
            </div>

            {/* Elementy lekcji */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 rounded-2xl bg-mist p-4 ring-1 ring-brand-100/70">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-600 text-white text-base">
                  🧮
                </span>
                <div>
                  <h4 className="text-sm font-bold text-ink">Matematyka krok po kroku</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Tłumaczę od podstaw i prostym językiem. Przerabiamy przykłady krok po kroku, aż wszystko stanie się jasne.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-mist p-4 ring-1 ring-brand-100/70">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent-400 text-ink text-base">
                  🗣️
                </span>
                <div>
                  <h4 className="text-sm font-bold text-ink">Angielski w praktyce & gry</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Przełamujemy barierę w mówieniu od 1. lekcji, a słownictwo utrwalamy grami (wisielec, quizy).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-mist p-4 ring-1 ring-brand-100/70">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700 text-base">
                  📝
                </span>
                <div>
                  <h4 className="text-sm font-bold text-ink">Dedykowana notatka po lekcji</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-soft">
                    Po każdych zajęciach dostajesz przejrzyste podsumowanie z notatką — zawsze wiesz, na czym stoisz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dymki pływające */}
          <motion.div
            {...float(5.5, 0.4)}
            className="absolute -top-6 -right-3 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-soft ring-1 ring-slate-100 sm:-right-6"
          >
            <span className="text-lg" aria-hidden="true">✨</span>
            <span className="text-xs font-bold text-ink">Zero nudy & 100% wsparcia</span>
          </motion.div>

          <motion.div
            {...float(5, 0)}
            className="absolute -bottom-2 left-6 max-w-[17rem] -rotate-1 rounded-2xl bg-accent-200 px-4 py-3 text-xs font-semibold text-ink shadow-soft sm:left-10"
          >
            „Spokojnie, wytłumaczę Ci to krok po kroku 😊”
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
