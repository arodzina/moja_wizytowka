"use client";

import { Award, CheckCircle2, FileCheck2, ShieldCheck, Target, Zap, XCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CkeAlignment() {
  return (
    <section id="cke" aria-labelledby="cke-title" className="relative overflow-x-clip bg-mist">
      <div className="relative mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:py-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-950 via-brand-900 to-slate-950 p-6 text-white shadow-xl ring-1 ring-white/10 sm:p-8 lg:p-9">
            {/* Ozdobne poświaty w tle */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 size-64 rounded-full bg-accent-400/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 size-64 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
              {/* Lewa strona: Nagłówek i treść */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-300 ring-1 ring-white/20 backdrop-blur-md">
                  <ShieldCheck className="size-3.5 text-accent-400" aria-hidden="true" />
                  Nie uczymy się wszystkiego po kolei. Skupiamy się na tym, co ma znaczenie.
                </div>

                <h2 id="cke-title" className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl leading-snug">
                  Przygotowanie pod konkretny egzamin
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  Każdy egzamin ma swoje wymagania i charakterystyczne typy zadań. Dlatego podczas zajęć skupiam się na aktualnych wymaganiach CKE, najważniejszych zagadnieniach i pracy z arkuszami egzaminacyjnymi. Dzięki temu czas poświęcony na naukę jest dobrze wykorzystany.
                </p>

                <div className="pt-1 flex flex-col sm:flex-row flex-wrap gap-2.5">
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 text-xs sm:text-sm font-semibold text-white">
                    <CheckCircle2 className="size-4 shrink-0 text-accent-400" />
                    <span>Aktualne wymagania CKE</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 text-xs sm:text-sm font-semibold text-white">
                    <CheckCircle2 className="size-4 shrink-0 text-accent-400" />
                    <span>Zadania z oficjalnych arkuszy</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 text-xs sm:text-sm font-semibold text-white">
                    <CheckCircle2 className="size-4 shrink-0 text-accent-400" />
                    <span>Nauka rozwiązywania zadań krok po kroku</span>
                  </div>
                </div>
              </div>

              {/* Prawa strona: Praca z arkuszami CKE */}
              <div>
                <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-md shadow-card">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 text-center sm:text-left">
                    <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-400 text-ink shadow-soft">
                      <FileCheck2 className="size-6 text-brand-950" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-accent-300">
                        Rozwiązywanie zadań pod klucz punktowania
                      </span>
                      <h3 className="mt-0.5 text-base sm:text-lg font-bold text-white">
                        Praca z oficjalnymi arkuszami CKE
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
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
