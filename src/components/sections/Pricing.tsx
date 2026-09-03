"use client";

import { ArrowRight, Languages, Sparkles, BookOpenCheck, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const plans = [
  {
    id: "e8-angielski",
    icon: Languages,
    label: "Egzamin Ósmoklasisty (E8)",
    sub: "Język Angielski · Klasa 8",
    price: "75",
    unit: "zł / 60 min",
    trialPrice: "56 zł / 60 min",
    badge: "Główny cel",
    popular: true,
    features: [
      "Praca na wytycznych CKE & oficjalnych arkuszach",
      "Pewniaki: e-maile, wpisy na bloga, Use of English",
      "Autorski plan zajęć przedstawiony po konsultacji",
      "Materiały przygotowywane przeze mnie przed lekcją",
      "Cyfrowy zeszyt w Canvie + spersonalizowana praca domowa",
    ],
  },
  {
    id: "klasy-6-8-angielski",
    icon: BookOpenCheck,
    label: "Klasy 6–8 & Bieżący materiał",
    sub: "Nadrabianie zaległości & Mówienie",
    price: "75",
    unit: "zł / 60 min",
    trialPrice: "56 zł / 60 min",
    badge: "Klasy 6–8",
    popular: false,
    features: [
      "Pomoc w sprawdzianach, kartkówkach i nadrabianiu braków",
      "Budowanie swobody w mówieniu i bogatego słownictwa",
      "Systematyczne utrwalanie zasad gramatycznych",
      "Materiały przygotowywane przeze mnie przed lekcją",
      "Cyfrowy zeszyt w Canvie + feedback dla rodzica",
    ],
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

      <div id="cennik" className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Język Angielski • E8 & Klasy 6–8"
          title="Cennik i warunki współpracy"
        />

        {/* Karty oferty */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
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

                    {/* Wariant na start: 3 lekcje z rabatem 25% */}
                    <div className={`rounded-xl p-2.5 text-xs font-bold leading-snug ${
                      plan.popular
                        ? "bg-amber-400/20 text-amber-100 ring-1 ring-amber-400/40"
                        : "bg-amber-100/90 text-amber-950 ring-1 ring-amber-300/80 shadow-2xs"
                    }`}>
                      <span className={plan.popular ? "text-amber-300" : "text-amber-900"}>🎁 3 pierwsze lekcje (-25%):</span>{" "}
                      {plan.trialPrice}
                    </div>
                  </div>

                  {/* Lista korzyści w cenie */}
                  <div className="mt-5 space-y-2">
                    <span className={`block text-xs font-bold uppercase tracking-wider ${plan.popular ? "text-slate-300" : "text-slate-400"}`}>
                      Co dostajesz w cenie lekcji?
                    </span>
                    <ul className="space-y-2 pt-1">
                      {plan.features.map((feat) => (
                        <li key={feat} className={`flex items-start gap-2 text-xs sm:text-sm leading-snug ${plan.popular ? "text-white/90" : "text-slate-700"}`}>
                          <CheckCircle2 className={`size-4 shrink-0 mt-0.5 ${plan.popular ? "text-accent-400" : "text-emerald-500"}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
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

        {/* Baner informacyjny o autorskim planie i czasie pracy */}
        <Reveal delay={0.25} className="mt-10 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200/80 text-center sm:text-left flex flex-col sm:flex-row items-center gap-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">
              <Sparkles className="size-6 text-accent-500" />
            </span>
            <div>
              <h4 className="text-base font-bold text-ink">
                Dlaczego warto inwestować w te zajęcia?
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-soft leading-relaxed">
                Stawka <strong className="text-ink">75 zł / 60 min</strong> obejmuje nie tylko 60 minut intensywnej lekcji 1:1 online. Obejmuje również mój czas poświęcony przed lekcją na opracowanie spersonalizowanego planu, dobór zadań z repetytoriów, stworzenie cyfrowych notatek w Canvie oraz sprawdzanie prac domowych.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
