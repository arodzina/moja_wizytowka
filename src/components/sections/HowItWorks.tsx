"use client";

import { CalendarDays, CheckCircle2, Goal, Video } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const steps = [
  {
    icon: CalendarDays,
    title: "1. Formularz zgłoszeniowy i rozmowa zapoznawcza (15 min)",
    description:
      "Wypełniasz krótki formularz, a potem łączymy się na 15-minutowe bezpłatne spotkanie online. Ustalamy cele, oczekiwania i plan współpracy. Cały ten etap jest darmowy.",
  },
  {
    icon: Goal,
    title: "2. Pakiet startowy — 3 lekcje próbne",
    description:
      "Trzy pierwsze lekcje, podczas których sprawdzamy, czy dobrze nam się współpracuje. Lekcje próbne są odpłatne (płatność przed każdą lekcją), ale niezobowiązujące — po każdej z nich możesz zrezygnować bez żadnych konsekwencji.",
  },
  {
    icon: CheckCircle2,
    title: "3. Stała współpraca — płatność miesięczna z góry",
    description:
      "Po udanym okresie próbnym przechodzimy na regularne lekcje z płatnością za cały miesiąc z góry. Częstotliwość i czas trwania lekcji (60 lub 45 min) ustalamy razem, dopasowując się do potrzeb ucznia.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="jak-to-dziala"
      aria-labelledby="how-title"
      className="relative overflow-x-clip bg-brand-950"
    >
      {/* Dekoracje */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[10%] h-80 w-80 rounded-full bg-brand-700/40 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-[5%] h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
              <span aria-hidden="true" className="h-px w-6 bg-accent-400/70" />
              Jak to działa
              <span aria-hidden="true" className="h-px w-6 bg-accent-400/70" />
            </p>
            <h2 id="how-title" className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Trzy proste kroki do lepszych ocen
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Spokojnie i bez chaosu — od pierwszego kontaktu do regularnych lekcji.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12} className="h-full">
              <div className="relative h-full rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm">
                <span className="absolute top-6 right-7 font-display text-5xl font-bold text-white/10" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent-400 text-ink">
                  <step.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#kontakt" variant="accent" size="lg">
              Umów darmową rozmowę
            </Button>
            <a
              href="#faq"
              className="text-sm font-semibold text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Masz pytania? Sprawdź FAQ
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
