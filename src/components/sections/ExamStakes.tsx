"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, CheckCircle2, Compass, GraduationCap, School, ShieldAlert, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const stakes = [
  {
    icon: School,
    badge: "Dla ósmoklasisty i rodziców",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    title: "Większa szansa na dostanie się do wybranej szkoły",
    description:
      "Na egzaminie liczy się każdy punkt, który może mieć znaczenie przy rekrutacji do liceum lub technikum. Pomagam uporządkować materiał, uzupełnić braki i krok po kroku przygotować się do zadań egzaminacyjnych.",
    takeaway: "Jasny plan nauki i regularne wsparcie.",
    accentColor: "border-amber-400/40",
  },
  {
    icon: GraduationCap,
    badge: "Dla maturzysty",
    badgeColor: "bg-brand-100 text-brand-900 border-brand-200",
    title: "Lepsze przygotowanie do matury",
    description:
      "Wynik z matury ma duże znaczenie przy rekrutacji na studia. Pomagam dobrze przygotować się zarówno do poziomu podstawowego, jak i rozszerzonego, tak aby uczeń mógł podejść do egzaminu z większym spokojem i osiągnąć wynik odpowiadający jego możliwościom.",
    takeaway: "Lepsze przygotowanie i większa pewność przed maturą.",
    accentColor: "border-brand-400/40",
  },
  {
    icon: Compass,
    badge: "Umiejętności na przyszłość",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    title: "Wiedza, która przydaje się także poza szkołą",
    description:
      "Nie chodzi tylko o zapamiętanie materiału na egzamin. Matematyka rozwija logiczne i analityczne myślenie, a angielski pozwala swobodniej komunikować się w nauce, pracy i codziennym życiu. Zależy mi na tym, żeby zdobyta wiedza została z uczniem na dłużej.",
    takeaway: "Logiczne myślenie i większa swoboda w języku angielskim.",
    accentColor: "border-emerald-400/40",
  },
];

export default function ExamStakes() {
  const reduce = useReducedMotion();

  return (
    <section id="stawka-egzaminu" aria-labelledby="stakes-title" className="relative overflow-x-clip bg-mist">
      {/* Tło */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-[-10%] h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute bottom-10 right-[-10%] h-96 w-96 rounded-full bg-accent-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-8 pb-20 sm:px-8 lg:pt-12 lg:pb-28">
        <SectionHeading
          eyebrow="Dobre przygotowanie to coś więcej niż wynik"
          title="Dlaczego warto się dobrze przygotować?"
          lead="Egzamin to nie tylko sprawdzenie wiedzy. To także umiejętność rozwiązywania zadań, wykorzystania zdobytej wiedzy w praktyce i radzenia sobie z presją czasu. Dobre przygotowanie pomaga osiągnąć lepszy wynik, ale też daje uczniowi większą pewność siebie i solidne podstawy na przyszłość."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {stakes.map((stake, idx) => (
            <Reveal key={stake.title} delay={idx * 0.12} className="h-full">
              <motion.div
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex h-full flex-col justify-between rounded-3xl bg-white p-7 sm:p-8 shadow-card ring-1 ring-slate-200/80 border-t-4 ${stake.accentColor}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                      <stake.icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${stake.badgeColor}`}>
                      {stake.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-snug text-ink sm:text-2xl">
                    {stake.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-soft">
                    {stake.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <Sparkles className="size-4 shrink-0 text-amber-500 mt-0.5" />
                    <span>{stake.takeaway}</span>
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
