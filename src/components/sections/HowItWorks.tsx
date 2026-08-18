"use client";

import { Calendar, Sparkles, CreditCard, TrendingUp, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const collaborationSteps = [
  {
    step: "01",
    icon: Calendar,
    title: "15 min rozmowy zapoznawczej",
    description:
      "Łączymy się na bezpłatną 15-minutową rozmowę online. Poznajemy się, omawiamy cele egzaminacyjne i ubiegamy się o pierwsze próbne terminy bez żadnych zobowiązań.",
    badge: "100% Bezpłatnie",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "3 Lekcje próbne na start",
    description:
      "Pierwsze 3 spotkania są płatne pojedynczo przed zajęciami (do 24h przed konkretną lekcją, bez płacenia z góry za cały miesiąc). Uczeń i rodzic testują atmosferę i styl pracy.",
    badge: "Pakiet próbny",
  },
  {
    step: "03",
    icon: CreditCard,
    title: "Stały grafik i rozliczenie",
    description:
      "Gdy uczeń czuje się dobrze i chce kontynuować, rezerwujemy stałe miejsce w tygodniowym grafiku i przechodzimy na wygodne płatności z góry za dany miesiąc.",
    badge: "Płatność z góry za miesiąc",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Systematyka i raport postępów",
    description:
      "Uczymy się regularnie pod wymogi CKE. Rodzic ma stały wgląd w przerabiany materiał i postępy, a uczeń zyskuje realną pewność siebie przed egzaminem.",
    badge: "Stały kontakt z rodzicem",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="metodologia"
      aria-labelledby="how-it-works-title"
      className="relative overflow-x-clip bg-brand-950 text-white"
    >
      {/* Ozdobne światła */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[10%] h-80 w-80 rounded-full bg-brand-700/40 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-[5%] h-80 w-80 rounded-full bg-accent-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
              <span aria-hidden="true" className="h-px w-6 bg-accent-400/70" />
              Zasady Współpracy
              <span aria-hidden="true" className="h-px w-6 bg-accent-400/70" />
            </p>
            <h2 id="how-it-works-title" className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Jak wygląda rozpoczęcie nauki?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Przejrzysta ścieżka od pierwszego bezpłatnego spotkania, przez lekcje próbne, aż po stałą współpracę i pewność na egzaminie.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collaborationSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="h-full">
              <div className="relative flex h-full flex-col justify-between rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent-400 text-ink shadow-soft">
                      <step.icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="font-display text-4xl font-extrabold text-white/15" aria-hidden="true">
                      {step.step}
                    </span>
                  </div>

                  <span className="mt-5 inline-block text-[11px] font-bold uppercase tracking-wider text-accent-300">
                    {step.badge}
                  </span>

                  <h3 className="mt-1 text-lg font-bold text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-14 text-center">
          <div className="inline-flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/poziom" variant="accent" size="lg">
              Umów rozmowę zapoznawczą <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button href="#poradniki" variant="outline" size="lg">
              Pobierz darmowe poradniki CKE
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
