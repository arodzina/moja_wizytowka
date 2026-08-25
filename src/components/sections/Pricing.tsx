"use client";

import { ArrowRight, BookOpen, Crown, GraduationCap, Sparkles, Target } from "lucide-react";
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
    trialPrice: "45 zł / 60 min (3 pierwsze lekcje -25%)",
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
    trialPrice: "52.50 zł / 60 min (3 pierwsze lekcje -25%)",
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
    trialPrice: "63.75 zł / 60 min (3 pierwsze lekcje -25%)",
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

        {/* Karty 3 filarów oferty */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.label} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex h-full flex-col justify-between rounded-3xl p-7 ring-1 shadow-card ${
                  plan.popular
                    ? "bg-brand-950 ring-brand-800 text-white"
                    : "bg-white ring-slate-200/80"
                }`}
              >
                <div>
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

                  <div className="mt-5 border-y py-4 border-slate-100 dark:border-white/10 space-y-2.5">
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-ink"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm font-semibold ${plan.popular ? "text-white/70" : "text-slate-soft"}`}>
                        {plan.unit}
                      </span>
                    </div>

                    {/* Wariant na start: 3 lekcje próbne z rabatem 25% */}
                    <div className={`rounded-xl p-2.5 text-xs font-medium leading-snug ${
                      plan.popular
                        ? "bg-amber-400/20 text-amber-200 ring-1 ring-amber-400/30"
                        : "bg-amber-50 text-amber-950 ring-1 ring-amber-200/80"
                    }`}>
                      <span className="font-bold text-amber-900 dark:text-amber-300">🎁 Na start (-25%):</span>{" "}
                      {plan.trialPrice}
                    </div>

                    {/* Wariant przy 2x tygodniowo */}
                    {plan.discountNote && (
                      <div className={`rounded-xl p-2.5 text-xs font-medium leading-snug ${
                        plan.popular
                          ? "bg-accent-400/20 text-emerald-200 ring-1 ring-accent-400/40"
                          : "bg-emerald-50 text-emerald-950 ring-1 ring-emerald-200/80"
                      }`}>
                        <span className="font-bold text-emerald-700 dark:text-emerald-300">💡 Przy zajęciach 2×/tydzień:</span>{" "}
                        {plan.discountNote}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-7">
                  <Button
                    href="#kontakt"
                    variant={plan.popular ? "accent" : "primary"}
                    className="w-full justify-center"
                  >
                    Umów bezpłatną konsultację
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </Button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
