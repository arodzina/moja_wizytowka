"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, BookOpen, Pencil, FileText, TrendingUp, Calendar, Sparkles, CreditCard, ArrowRight, Video, BookMarked, MessageSquareText } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const processSteps = [
  {
    step: "01",
    icon: Target,
    title: "1. Opracowujemy plan",
    description: "Po bezpłatnej konsultacji przedstawiam rodzicowi i uczniowi jasny plan nauki z konkretnymi zagadnieniami.",
    accentColor: "border-brand-500/40 text-brand-700 bg-brand-50",
  },
  {
    step: "02",
    icon: BookOpen,
    title: "2. Przygotowuję materiały",
    description: "Przed każdą lekcją dobieram wyselekcjonowane zadania z repetytoriów i wytycznych CKE.",
    accentColor: "border-brand-500/40 text-brand-700 bg-brand-50",
  },
  {
    step: "03",
    icon: Pencil,
    title: "3. Lekcja 60 minut 1:1",
    description: "Pracujemy nad gramatyką, słownictwem, e-mailami i nadrabianiem zaległości bez stresu.",
    accentColor: "border-brand-500/40 text-brand-700 bg-brand-50",
  },
  {
    step: "04",
    icon: FileText,
    title: "4. Notatki & Zadanie domowe",
    description: "Wszystkie notatki lądują w cyfrowym zeszycie w Canvie, a uczeń dostaje spersonalizowane zadanie.",
    accentColor: "border-amber-500/40 text-amber-800 bg-amber-50",
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "5. Feedback dla rodzica",
    description: "Rodzic wie dokładnie, nad czym pracowaliśmy i jakie postępy robi uczeń.",
    accentColor: "border-emerald-500/40 text-emerald-800 bg-emerald-50",
  },
];

const onlineFeatures = [
  {
    icon: Video,
    title: "🎥 Google Meet (60 min)",
    description: "Wygodne lekcje online bez tracenia czasu na dojazdy, w bezpiecznym środowisku domowym.",
  },
  {
    icon: BookMarked,
    title: "📖 Cyfrowy zeszyt w Canvie",
    description: "Uczeń i rodzic mają stały dostęp do uporządkowanych notatek, zasad gramatyki i szablonów e-maili w jednym miejscu.",
  },
  {
    icon: MessageSquareText,
    title: "💬 Dedykowany plan & wsparcie",
    description: "Na każdą lekcję szykuję autorski materiał. Jeśli między zajęciami uczeń ma pytanie — z łatwością odpowiadam i pomagam.",
  },
];

const collaborationSteps = [
  {
    step: "01",
    icon: Calendar,
    title: "Bezpłatna rozmowa zapoznawcza",
    badge: "15 minut na poznanie się",
    description: "Omawiamy potrzeby ucznia, cel z angielskiego i sposób pracy. Bez żadnych zobowiązań.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "3 lekcje z rabatem -25%",
    badge: "56 zł / 60 min (płatne pojedynczo)",
    description: "Czas na sprawdzenie dedykowanego planu i atmosfery na zajęciach. Płatność z lekcji na lekcję.",
  },
  {
    step: "03",
    icon: CreditCard,
    title: "Stała współpraca",
    badge: "Stały termin & pełna opieka",
    description: "Rezerwujemy stały termin w tygodniu (1× lub 2× w tygodniu) i bezpiecznie rozliczamy zajęcia.",
  },
];

export default function ExamStakes() {
  const reduce = useReducedMotion();

  return (
    <section id="jak-pracujemy" aria-labelledby="stakes-title" className="relative overflow-x-clip bg-mist">
      {/* Tło ozdobne */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-[-10%] h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute bottom-10 right-[-10%] h-96 w-96 rounded-full bg-accent-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-8 pb-20 sm:px-8 lg:pt-12 lg:pb-24 space-y-20">
        {/* MODUŁ 1: Jak wygląda proces przygotowania z angielskiego? */}
        <div>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 id="stakes-title" className="text-2xl font-bold text-ink sm:text-3xl">
                Jak wygląda przygotowanie do Egzaminu Ósmoklasisty z angielskiego?
              </h2>
            </Reveal>
          </div>

          {/* 5 kroków w JEDNYM rzędzie na desktopie */}
          <div className="mt-10 grid gap-3.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 0.06} className="h-full">
                <motion.div
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex h-full flex-col justify-between rounded-2xl bg-white p-5 shadow-xs ring-1 ring-slate-200/80 border-t-4 ${step.accentColor.split(' ')[0]}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className={`grid size-10 place-items-center rounded-xl ${step.accentColor}`}>
                        <step.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="font-display text-2xl font-extrabold text-slate-200" aria-hidden="true">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-ink leading-snug">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-soft">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* MODUŁ 2: Jak pracujemy online? */}
        <div className="border-t border-slate-200/70 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h3 className="text-2xl font-bold text-ink sm:text-3xl">
                Jak wygląda współpraca w formie online?
              </h3>
            </Reveal>
          </div>

          {/* 3 kafelki nauki online */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
            {onlineFeatures.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="h-full">
                <div className="relative flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200/80">
                  <div>
                    <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <item.icon className="size-5.5" aria-hidden="true" />
                    </span>
                    <h4 className="mt-4 text-base font-bold text-ink leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-soft">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* MODUŁ 3: Współpraca krok po kroku */}
        <div className="border-t border-slate-200/70 pt-16">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h3 className="text-2xl font-bold text-ink sm:text-3xl">
                Jak zaczynamy współpracę?
              </h3>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {collaborationSteps.map((collab, i) => (
              <Reveal key={collab.title} delay={i * 0.08} className="h-full">
                <div className="relative flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200/80">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-xl bg-brand-100/90 text-brand-800">
                        <collab.icon className="size-5.5" aria-hidden="true" />
                      </span>
                      <span className="font-display text-3xl font-extrabold text-slate-200" aria-hidden="true">
                        {collab.step}
                      </span>
                    </div>

                    <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200/60">
                      {collab.badge}
                    </span>

                    <h4 className="mt-2 text-base font-bold text-ink leading-snug">
                      {collab.title}
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-soft">
                      {collab.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 text-center">
            <Button href="#kontakt" size="lg">
              Umów bezpłatną konsultację <ArrowRight className="ml-2 size-4" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
