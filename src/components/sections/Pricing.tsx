"use client";

import { ArrowRight, BookOpen, Check, GraduationCap, Sparkles, ShieldCheck, Crown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const plans = [
  {
    icon: BookOpen,
    label: "Szkoła Podstawowa (angielski i matematyka)",
    sub: "Klasy 4–8 · Egzamin Ósmoklasisty (E8)",
    price: "50",
    unit: "zł / 60 min",
    color: "brand",
    promo: "Cena promocyjna na start nowego semestru",
    includes: [
      "Angielski · klasy 4–8 i Egzamin Ósmoklasisty",
      "Matematyka · klasy 4–8 i Egzamin Ósmoklasisty",
      "Darmowa rozmowa zapoznawcza (15 min)",
      "Pakiet startowy 3 lekcji próbnych (odpłatnych, niezobowiązujących)",
      "Podsumowanie po każdej lekcji (co zrobiliśmy, nad czym warto popracować)",
      "Praca na arkuszach CKE · regularna kontrola postępów",
    ],
  },
  {
    icon: GraduationCap,
    label: "Liceum / Matura (język angielski)",
    sub: "Matura podstawowa i rozszerzona",
    price: "60",
    unit: "zł / 60 min",
    color: "accent",
    promo: "Cena promocyjna na start nowego semestru",
    includes: [
      "Angielski · matura podstawowa",
      "Angielski · matura rozszerzona",
      "Przygotowanie do matury pisemnej i ustnej",
      "Darmowa rozmowa zapoznawcza (15 min)",
      "Pakiet startowy 3 lekcji próbnych (odpłatnych, niezobowiązujących)",
      "Praca na autentycznych arkuszach CKE",
      "Podsumowanie po każdej lekcji (co zrobiliśmy, nad czym warto popracować)",
    ],
  },
  {
    icon: Crown,
    label: "Pakiet Premium (płatność kwartalna)",
    sub: "Płatność z góry za 3 miesiące. W zamian otrzymujesz dodatkowe wsparcie między lekcjami.",
    price: "50 / 60",
    unit: "zł / 60 min",
    priceNote: "(w zależności od poziomu)",
    color: "premium",
    popular: true,
    badge: "Polecany",
    includes: [
      "Wszystko z pakietu standardowego",
      "Pełna notatka z każdej lekcji (nie tylko podsumowanie, ale szczegółowy zapis tego, co przerobiliśmy)",
      "Indywidualnie dobrane materiały do pracy własnej między lekcjami",
      "Priorytet w grafiku — stały, zarezerwowany termin",
      "Możliwość przejścia z/na pakiet standardowy pod koniec miesiąca",
    ],
  },
];

const rules = [
  "Przejrzyste warunki ustalamy na początku, żeby obie strony wiedziały, czego się spodziewać.",
  "3 lekcje próbne — odpłatne, ale niezobowiązujące. Po każdej można zrezygnować.",
  "Odwołanie lekcji min. 24h wcześniej — bezpłatne przełożenie na inny termin.",
  "Rezygnacja ze współpracy — zgłaszasz do końca miesiąca, od kolejnego miesiąca kończymy.",
];

export default function Pricing() {
  const reduce = useReducedMotion();

  return (
    <section id="cennik" aria-labelledby="pricing-title" className="relative overflow-x-clip bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[20%] h-80 w-80 rounded-full bg-brand-50/80 blur-3xl" />
        <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-accent-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Cennik"
          title="Przejrzyste stawki, bez niespodzianek"
          lead="Widzisz dokładnie, za co płacisz. Bez ukrytych kosztów — materiały i notatki po lekcji są wliczone w cenę."
        />

        {/* Darmowa rozmowa zapoznawcza — baner */}
        <Reveal>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-brand-50 px-6 py-5 ring-1 ring-brand-200/60 text-center">
            <p className="flex items-center justify-center gap-2 text-sm font-bold text-brand-800">
              <Sparkles className="size-4 text-accent-500" aria-hidden="true" />
              Pierwsza rozmowa zapoznawcza (15 min) jest zawsze{" "}
              <span className="text-brand-600">bezpłatna i niezobowiązująca.</span>
            </p>
            <p className="mt-1 text-sm text-slate-soft">
              Zanim zaczniesz płacić — poznajmy się i sprawdźmy, czy dobrze się dogadamy.
            </p>
          </div>
        </Reveal>

        {/* Karty cenowe */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.label} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex h-full flex-col rounded-3xl p-7 ring-1 shadow-card ${
                  plan.popular
                    ? "bg-brand-950 ring-brand-800 text-white"
                    : "bg-mist ring-slate-200/70"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-400 px-4 py-1 text-xs font-bold text-ink shadow-soft">
                    {plan.badge || "Polecany"}
                  </span>
                )}

                <div className={`inline-flex size-12 items-center justify-center rounded-2xl ${
                  plan.popular ? "bg-white/10 text-accent-300" : "bg-brand-50 text-brand-600"
                }`}>
                  <plan.icon className="size-6" aria-hidden="true" />
                </div>

                <h3 className={`mt-5 text-xl font-semibold ${plan.popular ? "text-white" : "text-ink"}`}>
                  {plan.label}
                </h3>
                <p className={`mt-1 text-sm ${plan.popular ? "text-white/70" : "text-slate-soft"}`}>
                  {plan.sub}
                </p>

                {/* PROMO BADGE */}
                {plan.promo && (
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200 self-start">
                    {plan.promo}
                  </div>
                )}

                <div className="mt-3 flex flex-wrap items-baseline gap-1.5">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-ink"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm font-medium ${plan.popular ? "text-white/70" : "text-slate-soft"}`}>
                    {plan.unit}
                  </span>
                  {plan.priceNote && (
                    <span className={`text-xs ${plan.popular ? "text-white/60" : "text-slate-500"} block w-full mt-0.5`}>
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <span className={`mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full ${
                        plan.popular ? "bg-accent-400 text-ink" : "bg-brand-100 text-brand-600"
                      }`}>
                        <Check className="size-2.5" aria-hidden="true" />
                      </span>
                      <span className={plan.popular ? "text-white/85" : "text-slate-600"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#kontakt"
                  variant={plan.popular ? "accent" : "primary"}
                  className="mt-8 w-full justify-center"
                >
                  Umów darmową rozmowę
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* 🛡️ Przejrzyste zasady współpracy */}
        <Reveal delay={0.25}>
          <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-slate-900 p-8 text-white shadow-xl ring-1 ring-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 size-40 rounded-full bg-brand-500/10 blur-2xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 relative z-10">
              <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-500/20 text-brand-300 ring-1 ring-brand-500/30">
                <ShieldCheck className="size-8 text-accent-400" aria-hidden="true" />
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-400">
                    Zasady
                  </span>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Przejrzyste zasady współpracy
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                      <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-brand-500/30 text-accent-400 text-xs">
                        ✓
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Drobne info pod kartami */}
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-slate-400">
            Standardowy czas lekcji: <strong className="text-slate-600">60 minut</strong>. Na prośbę możliwe również lekcje 45-minutowe — napisz do mnie, ustalamy indywidualnie.{" "}
            <a href="#kontakt" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              Masz pytanie o cenę?
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
