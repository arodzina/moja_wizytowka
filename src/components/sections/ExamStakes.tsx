"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, BookOpen, Pencil, FileText, TrendingUp } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const processSteps = [
  {
    step: "01",
    icon: Target,
    title: "1. Ustalamy plan",
    description: "Poziom, cel, priorytety i czas do egzaminu.",
    accentColor: "border-brand-500/40 text-brand-700 bg-brand-50",
  },
  {
    step: "02",
    icon: BookOpen,
    title: "2. Uzupełniamy braki",
    description: "Tłumaczę trudne zagadnienia i pracujemy nad tym, czego jeszcze nie rozumiesz.",
    accentColor: "border-brand-500/40 text-brand-700 bg-brand-50",
  },
  {
    step: "03",
    icon: Pencil,
    title: "3. Ćwiczymy zadania",
    description: "Rozwiązujemy zadania i uczymy się sposobu myślenia potrzebnego do ich samodzielnego rozwiązywania.",
    accentColor: "border-brand-500/40 text-brand-700 bg-brand-50",
  },
  {
    step: "04",
    icon: FileText,
    title: "4. Pracujemy z arkuszami CKE",
    description: "Oswajamy się z formatem egzaminu i typami zadań, które mogą się pojawić.",
    accentColor: "border-amber-500/40 text-amber-800 bg-amber-50",
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "5. Monitorujemy postępy",
    description: "Na bieżąco sprawdzam, co już potrafisz, a co trzeba jeszcze przećwiczyć, i odpowiednio modyfikujemy plan.",
    accentColor: "border-emerald-500/40 text-emerald-800 bg-emerald-50",
  },
];

export default function ExamStakes() {
  const reduce = useReducedMotion();

  return (
    <section id="stawka-egzaminu" aria-labelledby="stakes-title" className="relative overflow-x-clip bg-mist">
      {/* Tło ozdobne */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-[-10%] h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute bottom-10 right-[-10%] h-96 w-96 rounded-full bg-accent-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-8 pb-20 sm:px-8 lg:pt-12 lg:pb-28">
        <SectionHeading
          eyebrow="Jak pracujemy?"
          title="Jak wygląda proces przygotowania do egzaminu?"
          lead="Najpierw ustalamy, gdzie jesteś i dokąd chcesz dojść. Potem wspólnie realizujemy konkretny plan przygotowań — od uzupełnienia braków, przez ćwiczenie zadań, aż po pracę z arkuszami egzaminacyjnymi."
        />

        {/* Siatka 5 kroków (3 na górze, 2 na dole wyśrodkowane) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {processSteps.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.08} className={idx >= 3 ? "sm:col-span-1 lg:col-span-1" : ""}>
              <motion.div
                whileHover={reduce ? undefined : { y: -5 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex h-full flex-col justify-between rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-200/80 border-t-4 ${step.accentColor.split(' ')[0]}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className={`grid size-12 place-items-center rounded-2xl ${step.accentColor}`}>
                      <step.icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="font-display text-3xl font-extrabold text-slate-200" aria-hidden="true">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-ink sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-soft">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
