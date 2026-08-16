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
                  Kluczowa przewaga edukacyjna
                </div>

                <h2 id="cke-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
                  Nie marnuję czasu na zbędny materiał.{" "}
                  <span className="text-accent-400">Uczę ściśle pod wymagania CKE.</span>
                </h2>

                <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                  Szkoła musi zrealizować cały opasły podręcznik – ja skupiam się w 100% na tym, co naprawdę pojawia się na arkuszu egzaminacyjnym.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  Program moich zajęć jest w pełni oparty na <strong className="font-semibold text-white">aktualnych Wytycznych i Informatorach Egzaminacyjnych Centralnej Komisji Egzaminacyjnej</strong>. Dzięki temu uczeń uczy się tylko tego, co przynosi punkty na egzaminie, oszczędzając cenny czas i unikając niepotrzebnego przeciążenia.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-center gap-2.5 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <CheckCircle2 className="size-5 shrink-0 text-accent-400" />
                    <span className="text-xs sm:text-sm font-semibold text-white">Zero zbędnej teorii</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <CheckCircle2 className="size-5 shrink-0 text-accent-400" />
                    <span className="text-xs sm:text-sm font-semibold text-white">Maksymalizacja punktów</span>
                  </div>
                </div>
              </div>

              {/* Prawa strona: Certyfikat Zgodności & Porównanie */}
              <div className="space-y-4">
                {/* Karta Certyfikatu */}
                <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-md shadow-float space-y-4 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-accent-400 text-ink shadow-soft">
                      <Award className="size-9 text-brand-950" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-300">
                        Certyfikat Standardu Egzaminacyjnego
                      </span>
                      <h3 className="mt-1 text-lg sm:text-xl font-bold text-white">
                        Zgodność z wytycznymi CKE 2024/2025/2026
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">
                        Bieżąca aktualizacja zadań pod kątem zmian w aneksach egzaminacyjnych i kluczach odpowiedzi.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini porównanie */}
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <div className="rounded-2xl bg-red-950/40 p-4 ring-1 ring-red-500/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-300">
                      <XCircle className="size-4" />
                      Tradycyjna nauka
                    </div>
                    <p className="mt-1.5 text-xs text-slate-400">
                      Chaotyczne przerabianie setek stron z podręcznika i stres przed nieznaną formą testu.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/40 p-4 ring-1 ring-emerald-500/30">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                      <CheckCircle2 className="size-4" />
                      Moja strategia CKE
                    </div>
                    <p className="mt-1.5 text-xs text-slate-300">
                      Precyzyjne pewniaki, szablony zadań otwartych i wyuczone strategie zarządzania czasem.
                    </p>
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
