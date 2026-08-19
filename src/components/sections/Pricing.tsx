"use client";

import { ArrowRight, BookOpen, Check, Crown, FileCode2, GraduationCap, ShieldCheck, Sparkles, Target } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const plans = [
  {
    id: "e8-przygotowanie",
    icon: Target,
    label: "Egzamin Ósmoklasisty (E8)",
    sub: "Matematyka lub Język Angielski · Klasa 8 (oraz zaległości kl. 4–7)",
    price: "60",
    unit: "zł / 60 min",
    discountNote: "lub 55 zł / 60 min przy 2x w tygodniu",
    badge: "Ścieżka E8",
    color: "brand",
    includes: [
      "Okres próbny: pierwsze 3 lekcje z rabatem -25% (płatne z lekcji na lekcję)",
      "Zniżka pakietowa: 55 zł / 60 min przy lekcjach 2x w tygodniu",
      "Rozpracowywanie zadań otwartych i zamkniętych CKE z matematyki lub angielskiego",
      "Pewniaki egzaminacyjne: algebra, geometria, szablony wypowiedzi (e-mail)",
      "Darmowa wstępna konsultacja online (15 min)",
      "Przejście na abonament miesięczny z góry po okresie próbnym",
    ],
  },
  {
    id: "matura-podstawa",
    icon: BookOpen,
    label: "Matura Podstawowa (PP)",
    sub: "Matematyka lub Język Angielski · Poziom Podstawowy CKE",
    price: "70",
    unit: "zł / 60 min",
    discountNote: "lub 65 zł / 60 min przy 2x w tygodniu",
    badge: "Matura PP",
    color: "brand",
    includes: [
      "Okres próbny: pierwsze 3 lekcje z rabatem -25% (płatne z lekcji na lekcję)",
      "Zniżka pakietowa: 65 zł / 60 min przy lekcjach 2x w tygodniu",
      "Praca na autentycznych arkuszach CKE (matematyka lub angielski)",
      "Pewniaki maturalne: funkcja kwadratowa, ciągi, szablony pisania, słuchanie",
      "Darmowa wstępna konsultacja online (15 min)",
      "Przejście na abonament miesięczny z góry po okresie próbnym",
    ],
  },
  {
    id: "matura-rozszerzona",
    icon: GraduationCap,
    label: "Matura Rozszerzona (PR)",
    sub: "Matematyka (AGH) lub Język Angielski (C1) · Poziom Rozszerzony",
    price: "85",
    unit: "zł / 60 min",
    discountNote: "lub 80 zł / 60 min przy 2x w tygodniu",
    badge: "Matura PR",
    popular: true,
    badgeHighlight: "Klucz na studia",
    color: "accent",
    includes: [
      "Okres próbny: pierwsze 3 lekcje z rabatem -25% (płatne z lekcji na lekcję)",
      "Zniżka pakietowa: 80 zł / 60 min przy lekcjach 2x w tygodniu",
      "Zaawansowana strategia CKE dla kandydatów na renomowane uczelnie i kierunki ścisłe",
      "Matematyka PR: pochodne, wielomiany, optymalizacja, dowody i tok rozumowania",
      "Angielski PR: Use of English, transformacje, pisanie (rozprawka, list) & matura ustna",
      "Darmowa wstępna konsultacja online (15 min)",
    ],
  },
];

const rules = [
  "Przejrzyste warunki ustalamy na początku, żeby uczeń i rodzic mieli 100% spokoju.",
  "Darmowa rozmowa zapoznawcza (15 min) — omówienie celów i preferencji bez zobowiązań.",
  "Okres próbny (3 pierwsze lekcje) — każda lekcja z rabatem -25%, płatne pojedynczo z lekcji na lekcję. Dopiero potem rozliczenie miesięczne z góry.",
  "Przełożenie lekcji min. 24h wcześniej — bezpłatny nowy termin w tym samym miesiącu.",
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
          eyebrow="Filary oferty & Cennik"
          title="3 dedykowane ścieżki egzaminacyjne"
          lead="Precyzyjnie dopasowane programy nauczania oparte wyłącznie na wytycznych CKE. Przejrzyste stawki bez ukrytych kosztów."
        />

        {/* Darmowa konsultacja — baner */}
        <Reveal>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-brand-50 px-6 py-5 ring-1 ring-brand-200/60 text-center">
            <p className="flex items-center justify-center gap-2 text-sm font-bold text-brand-800">
              <Sparkles className="size-4 text-accent-500" aria-hidden="true" />
              Pierwsza konsultacja wstępna (15 min) jest zawsze{" "}
              <span className="text-brand-600">bezpłatna i niezobowiązująca.</span>
            </p>
            <p className="mt-1 text-sm text-slate-soft">
              Omawiamy dotychczasowe trudności ucznia, cel punktowy i dobieramy strategię.
            </p>
          </div>
        </Reveal>

        {/* Rabaty na 3 lekcje próbne — baner promocyjny */}
        <Reveal delay={0.05}>
          <div className="mx-auto mt-4 max-w-2xl rounded-3xl bg-amber-50 px-6 py-4 ring-1 ring-amber-300/80 text-center shadow-soft">
            <p className="flex items-center justify-center gap-2 text-sm font-bold text-amber-950">
              <Sparkles className="size-4 text-amber-600" aria-hidden="true" />
              Oferta startowa: <span className="text-amber-700 underline underline-offset-2">Pierwsze 3 lekcje próbne aż o 25% tańsze!</span>
            </p>
            <p className="mt-1 text-xs font-medium text-amber-900/90">
              Każda z 3 pierwszych lekcji objęta jest rabatem -25% i płatna pojedynczo z lekcji na lekcję (bez płacenia z góry).
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
                {plan.badgeHighlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-400 px-4 py-1 text-xs font-bold text-ink shadow-soft">
                    {plan.badgeHighlight}
                  </span>
                )}

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

                <div className="mt-5 border-y py-3 border-slate-100 dark:border-white/10">
                  <div className="flex flex-wrap items-baseline gap-1.5">
                    <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-ink"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm font-semibold ${plan.popular ? "text-white/70" : "text-slate-soft"}`}>
                      {plan.unit}
                    </span>
                  </div>
                  {plan.discountNote && (
                    <p className={`mt-1 text-xs font-semibold ${plan.popular ? "text-accent-300" : "text-emerald-700"}`}>
                      ⚡ {plan.discountNote}
                    </p>
                  )}
                </div>

                <ul className="mt-5 space-y-3 flex-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug">
                      <span className={`mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full ${
                        plan.popular ? "bg-accent-400 text-ink" : "bg-emerald-100 text-emerald-700"
                      }`}>
                        <Check className="size-2.5" aria-hidden="true" />
                      </span>
                      <span className={plan.popular ? "text-white/85" : "text-slate-700"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

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

        {/* Wyróżnik: Pakiet Premium Kwartalny */}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-gradient-to-r from-amber-500/10 via-brand-50 to-brand-100/50 p-6 sm:p-8 ring-1 ring-amber-300/60 shadow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold">
                <Crown className="size-3.5" />
                Opcja dla maksymalnych rezultatów
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-ink">
                Pakiet Kwartalny z Pełnymi Notatkami z Lekcji
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Dla uczniów chcących stałego, zarezerwowanego terminu w grafiku oraz pełnych, szczegółowych notatek cyfrowych po każdych zajęciach wraz z dedykowanymi zestawami powtórkowymi do domu.
              </p>
            </div>
            <Button href="#kontakt" variant="secondary" size="md" className="shrink-0">
              Zapytaj o pakiet
            </Button>
          </div>
        </Reveal>

        {/* 🛡️ Przejrzyste zasady współpracy */}
        <Reveal delay={0.25}>
          <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-slate-900 p-7 sm:p-8 text-white shadow-xl ring-1 ring-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 size-40 rounded-full bg-brand-500/10 blur-2xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 relative z-10">
              <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-500/20 text-brand-300 ring-1 ring-brand-500/30">
                <ShieldCheck className="size-8 text-accent-400" aria-hidden="true" />
              </div>

              <div className="space-y-3 flex-1">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-400">
                    Gwarancja spokoju
                  </span>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Przejrzyste zasady współpracy
                  </h3>
                </div>

                <ul className="space-y-2">
                  {rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand-500/30 text-accent-400 text-xs">
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
      </div>
    </section>
  );
}
