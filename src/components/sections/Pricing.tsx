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
    trialPrice: "45 zł / 60 min",
    discountNote: "50 zł / 60 min",
    badge: "Klasa 8",
  },
  {
    id: "matura-podstawa",
    icon: BookOpen,
    label: "Matura Podstawowa",
    sub: "Matematyka lub Język Angielski · Poziom podstawowy",
    price: "70",
    unit: "zł / 60 min",
    trialPrice: "52.50 zł / 60 min",
    discountNote: "60 zł / 60 min",
    badge: "Poziom podstawowy",
  },
  {
    id: "matura-rozszerzona",
    icon: GraduationCap,
    label: "Matura Rozszerzona",
    sub: "Matematyka lub Język Angielski · Poziom rozszerzony",
    price: "85",
    unit: "zł / 60 min",
    trialPrice: "63.75 zł / 60 min",
    discountNote: "75 zł / 60 min",
    badge: "Poziom rozszerzony",
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
                className="relative flex h-full flex-col justify-between rounded-3xl bg-white p-7 ring-1 ring-slate-200/80 shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <plan.icon className="size-6" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-mist text-slate-600 border border-slate-200">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-ink">
                    {plan.label}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-soft">
                    {plan.sub}
                  </p>

                  <div className="mt-5 border-y py-4 border-slate-100 space-y-2.5">
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="text-4xl font-extrabold text-ink">
                        {plan.price}
                      </span>
                      <span className="text-sm font-semibold text-slate-soft">
                        {plan.unit}
                      </span>
                    </div>

                    {/* Wariant na start: 3 lekcje próbne z rabatem 25% */}
                    <div className="rounded-xl p-2.5 text-xs font-bold leading-snug bg-amber-100/90 text-amber-950 ring-1 ring-amber-300/80 shadow-2xs">
                      <span className="text-amber-900">🎁 3 pierwsze lekcje (-25%):</span>{" "}
                      {plan.trialPrice}
                    </div>

                    {/* Wariant przy 2x tygodniowo */}
                    {plan.discountNote && (
                      <div className="rounded-xl p-2.5 text-xs font-bold leading-snug bg-emerald-100/90 text-emerald-950 ring-1 ring-emerald-300/80 shadow-2xs">
                        <span className="text-emerald-900">💡 Przy zajęciach 2×/tydzień:</span>{" "}
                        {plan.discountNote}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-7">
                  <Button
                    href="#kontakt"
                    variant="primary"
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
