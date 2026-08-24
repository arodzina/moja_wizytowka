"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CkeAlignment() {
  return (
    <section id="cke" aria-labelledby="cke-title" className="relative overflow-x-clip bg-mist">
      <div className="relative mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:py-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-950 via-brand-900 to-slate-950 p-6 sm:p-8 lg:p-9 text-white shadow-xl ring-1 ring-white/10 max-w-4xl mx-auto text-center space-y-5">
            {/* Ozdobne poświaty w tle */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 size-64 rounded-full bg-accent-400/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 size-64 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-300 ring-1 ring-white/20 backdrop-blur-md">
                <ShieldCheck className="size-3.5 text-accent-400" aria-hidden="true" />
                Strategiczne przygotowanie CKE
              </div>

              <h2 id="cke-title" className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl leading-snug">
                Skupiamy się na tym, co naprawdę potrzebne
              </h2>

              <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-slate-300">
                Pracujemy zgodnie z wymaganiami CKE, korzystając z oficjalnych arkuszy i zadań egzaminacyjnych. Uczeń krok po kroku uczy się rozwiązywać zadania i wie, na co zwrócić uwagę podczas egzaminu.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 ring-1 ring-white/15 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="size-4 shrink-0 text-accent-400" />
                  <span>Wymagania CKE</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 ring-1 ring-white/15 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="size-4 shrink-0 text-accent-400" />
                  <span>Oficjalne arkusze</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 ring-1 ring-white/15 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="size-4 shrink-0 text-accent-400" />
                  <span>Zadania krok po kroku</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
