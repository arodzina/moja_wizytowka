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

        {/* 🛡️ Moduł 100% Zgodności z CKE */}
        <Reveal delay={0.3}>
          <div className="mt-14 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-950 via-brand-900 to-slate-950 p-8 text-white shadow-2xl ring-1 ring-white/10 sm:p-10 lg:p-12 relative">
            <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 -mt-16 -mr-16 size-80 rounded-full bg-accent-400/15 blur-3xl" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-300 ring-1 ring-white/20 backdrop-blur-md">
                  <ShieldCheck className="size-4 text-accent-400" aria-hidden="true" />
                  Kluczowa przewaga edukacyjna
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl leading-[1.2]">
                  Nie marnuję czasu na zbędny materiał.{" "}
                  <span className="text-accent-400">Uczę ściśle pod wymagania CKE.</span>
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  Szkoła musi zrealizować cały opasły podręcznik – ja skupiam się w 100% na tym, co naprawdę pojawia się na arkuszu. Program moich zajęć jest w pełni oparty na <strong className="font-semibold text-white">aktualnych Wytycznych i Informatorach Egzaminacyjnych CKE</strong>. Dzięki temu uczeń uczy się tylko tego, co przynosi punkty na egzaminie.
                </p>

                <div className="pt-1 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-semibold text-white">
                    <CheckCircle2 className="size-4 text-accent-400" /> Zero zbędnej teorii
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-semibold text-white">
                    <CheckCircle2 className="size-4 text-accent-400" /> Moja strategia CKE
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-md space-y-3">
                <div className="flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-2xl bg-accent-400 text-brand-950 font-bold">
                    <Award className="size-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-300">
                      Aktualna struktura egzaminu
                    </span>
                    <h4 className="text-base font-bold text-white">
                      Praca na oficjalnych arkuszach CKE
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Na zajęciach ćwiczymy autentyczne zadania egzaminacyjne. Uczeń uczy się czytać polecenia i wie, za co dokładnie przyznawane są punkty.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
