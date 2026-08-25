"use client";

import { ArrowRight, BookOpen, Check, Crown, FileCode2, GraduationCap, Sparkles, Target } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const plans = [
  {
    id: "e8-przygotowanie",
    icon: Target,
    label: "Egzamin Ósmoklasisty",
    sub: "Matematyka lub Język Angielski · Klasa 8",
    price: "60",
    unit: "zł / 60 min",
    discountNote: "50 zł / 60 min przy zajęciach 2× w tygodniu",
    badge: "Klasa 8",
    color: "brand",
  },
  {
    id: "matura-podstawa",
    icon: BookOpen,
    label: "Matura Podstawowa",
    sub: "Matematyka lub Język Angielski · Poziom podstawowy",
    price: "70",
    unit: "zł / 60 min",
    discountNote: "60 zł / 60 min przy zajęciach 2× w tygodniu",
    badge: "Poziom podstawowy",
    color: "brand",
  },
  {
    id: "matura-rozszerzona",
    icon: GraduationCap,
    label: "Matura Rozszerzona",
    sub: "Matematyka lub Język Angielski · Poziom rozszerzony",
    price: "85",
    unit: "zł / 60 min",
    discountNote: "75 zł / 60 min przy zajęciach 2× w tygodniu",
    badge: "Poziom rozszerzony",
    popular: true,
    color: "accent",
  },
];

export default function Pricing() {
  const reduce = useReducedMotion();

  return (
    <section id="oferta" aria-labelledby="pricing-title" className="relative overflow-x-clip bg-mist">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[20%] h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-accent-100/60 blur-3xl" />
      </div>

      <div id="cennik" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Wybierz formę przygotowania"
          title="Oferta i cennik"
        />

        {/* Darmowa konsultacja — baner */}
        <Reveal>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-brand-50 px-6 py-5 ring-1 ring-brand-200/60 text-center">
            <p className="flex items-center justify-center gap-2 text-sm font-bold text-brand-800">
              <Sparkles className="size-4 text-accent-500" aria-hidden="true" />
              Pierwsza 15-minutowa konsultacja jest{" "}
              <span className="text-brand-600">bezpłatna i niezobowiązująca.</span>
            </p>
            <p className="mt-1 text-sm text-slate-soft">
              Krótko omawiamy potrzeby ucznia, cel przygotowań i ustalamy, jak możemy pracować.
            </p>
          </div>
        </Reveal>

        {/* Rabaty na 3 lekcje próbne — baner promocyjny */}
        <Reveal delay={0.05}>
          <div className="mx-auto mt-4 max-w-2xl rounded-3xl bg-amber-50 px-6 py-4 ring-1 ring-amber-300/80 text-center shadow-soft">
            <p className="flex items-center justify-center gap-2 text-sm font-bold text-amber-950">
              <Sparkles className="size-4 text-amber-600" aria-hidden="true" />
              Na start: <span className="text-amber-700 underline underline-offset-2">25% rabatu na 3 pierwsze lekcje.</span>
            </p>
            <p className="mt-1 text-xs font-medium text-amber-900/90">
              Pierwsze trzy lekcje są opłacane pojedynczo, dzięki czemu możesz najpierw sprawdzić, czy taka forma współpracy Ci odpowiada.
            </p>
          </div>
        </Reveal>

        {/* Karty 3 filarów oferty */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.label} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex h-full flex-col rounded-3xl p-7 ring-1 shadow-card ${
                  plan.popular
                    ? "bg-brand-950 ring-brand-800 text-white"
                    : "bg-white ring-slate-200/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`inline-flex size-12 items-center justify-center rounded-2xl ${
                    plan.popular ? "bg-white/10 text-accent-300" : "bg-brand-50 text-brand-600"
                  }`}>
                    <plan.icon className="size-6" aria-hidden="true" />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    plan.popular ? "bg-white/10 text-slate-300" : "bg-mist text-slate-600 border border-slate-200"
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                <h3 className={`mt-5 text-xl font-bold ${plan.popular ? "text-white" : "text-ink"}`}>
                  {plan.label}
                </h3>
                <p className={`mt-1 text-xs sm:text-sm ${plan.popular ? "text-white/70" : "text-slate-soft"}`}>
                  {plan.sub}
                </p>

                <div className="mt-5 border-y py-3.5 border-slate-100 dark:border-white/10">
                  <div className="flex flex-wrap items-baseline gap-1.5">
                    <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-ink"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm font-semibold ${plan.popular ? "text-white/70" : "text-slate-soft"}`}>
                      {plan.unit}
                    </span>
                  </div>

                  {plan.discountNote && (
                    <div className={`mt-2.5 rounded-xl p-2.5 text-xs font-medium leading-tight ${
                      plan.popular
                        ? "bg-accent-400/20 text-amber-200 ring-1 ring-accent-400/40"
                        : "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200/80"
                    }`}>
                      <span className="font-bold text-emerald-700 dark:text-amber-300">💡 Bardziej opłacalna opcja:</span>{" "}
                      {plan.discountNote}
                    </div>
                  )}
                </div>

                <div className="flex-1" />

                <Button
                  href="#kontakt"
                  variant={plan.popular ? "accent" : "primary"}
                  className="mt-7 w-full justify-center"
                >
                  Umów bezpłatną konsultację
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
