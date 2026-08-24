"use client";

import { Award, CheckCircle2, FileCheck2, ShieldCheck, Target, Zap, XCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CkeAlignment() {
  return (
    <section id="cke" aria-labelledby="cke-title" className="relative overflow-x-clip bg-white">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-950 via-brand-900 to-slate-950 p-8 text-white shadow-2xl ring-1 ring-white/10 sm:p-12 lg:p-16">
            {/* Ozdobne poświaty w tle */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 size-80 rounded-full bg-accent-400/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 size-80 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
              {/* Lewa strona: Nagłówek i treść */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-300 ring-1 ring-white/20 backdrop-blur-md">
                  <ShieldCheck className="size-4 text-accent-400" aria-hidden="true" />
                  Nie uczymy się wszystkiego po kolei. Skupiamy się na tym, co ma znaczenie.
                </div>

                <h2 id="cke-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
                  Przygotowanie pod konkretny egzamin
                </h2>

                <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                  Każdy egzamin ma swoje wymagania i charakterystyczne typy zadań. Dlatego podczas zajęć skupiam się na aktualnych wymaganiach CKE, najważniejszych zagadnieniach i pracy z arkuszami egzaminacyjnymi. Dzięki temu czas poświęcony na naukę jest dobrze wykorzystany.
                </p>

                <div className="pt-2 flex flex-col gap-3">
                  <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <CheckCircle2 className="size-5 shrink-0 text-accent-400" />
                    <span className="text-sm font-semibold text-white">Aktualne wymagania CKE</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <CheckCircle2 className="size-5 shrink-0 text-accent-400" />
                    <span className="text-sm font-semibold text-white">Zadania z oficjalnych arkuszy</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <CheckCircle2 className="size-5 shrink-0 text-accent-400" />
                    <span className="text-sm font-semibold text-white">Nauka rozwiązywania zadań krok po kroku</span>
                  </div>
                </div>
              </div>

              {/* Prawa strona: Praca z arkuszami CKE */}
              <div className="space-y-4">
                <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/15 backdrop-blur-md shadow-float space-y-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-accent-400 text-ink shadow-soft">
                      <FileCheck2 className="size-9 text-brand-950" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-300">
                        Rozwiązywanie zadań pod klucz punktowania
                      </span>
                      <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                        Praca z oficjalnymi arkuszami CKE
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        Ćwiczymy na rzeczywistych zadaniach egzaminacyjnych. Analizujemy sposób ich rozwiązywania, uczymy się czytać polecenia i sprawdzamy, jak zdobywać punkty zgodnie z zasadami oceniania.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
