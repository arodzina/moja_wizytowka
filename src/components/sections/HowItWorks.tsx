"use client";

import { FileSearch, HeartHandshake, ListOrdered, Sparkles, Target, Timer } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const methodologySteps = [
  {
    step: "01",
    icon: FileSearch,
    title: "Analiza luk w wiedzy",
    description:
      "Na wstępie precyzyjnie sprawdzam, w których działach i typach zadań uczeń traci punkty. Zamiast powtarzać to, co już umie, skupiam się na eliminacji słabych punktów.",
    badge: "Quiz poziomujący",
  },
  {
    step: "02",
    icon: Target,
    title: "Strategia CKE i myślenie kluczem",
    description:
      "Uczę jak czytać polecenia egzaminatorów i konstruować odpowiedzi pod kryteria oceniania. Pokazuję, jak bezpiecznie zdobywać punkty cząstkowe nawet w trudnych zadaniach.",
    badge: "Maksymalizacja punktów",
  },
  {
    step: "03",
    icon: Timer,
    title: "Praktyka na prawdziwych arkuszach",
    description:
      "Regularny trening na oficjalnych arkuszach CKE. Uczeń trenuje tempo pracy i zarządzanie czasem, dzięki czemu w dniu egzaminu nie ma mowy o zaskoczeniu.",
    badge: "Obycie z egzaminem",
  },
  {
    step: "04",
    icon: HeartHandshake,
    title: "Wsparcie, spokój i redukcja stresu",
    description:
      "Lekcje w bezstresowej, partnerskiej atmosferze. Zdejmuję presję z barków ucznia i rodzica, budując realne poczucie kontroli i pewność siebie.",
    badge: "Pewność psychiczna",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="metodologia"
      aria-labelledby="methodology-title"
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
              Metodologia Nauczania
              <span aria-hidden="true" className="h-px w-6 bg-accent-400/70" />
            </p>
            <h2 id="methodology-title" className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Jak wygląda mój 4-etapowy system nauki?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Nie ma tu miejsca na przypadek. Każdy krok ma na celu zamianę lęku przed testem w opanowaną strategię i wysoki wynik procentowy.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methodologySteps.map((step, i) => (
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
            <Button href="#kontakt" variant="accent" size="lg">
              Umów darmową 15-minutową konsultację
            </Button>
            <Button href="#materialy" variant="outline" size="lg">
              Pobierz darmowy poradnik CKE
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
