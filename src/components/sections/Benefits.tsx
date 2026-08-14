"use client";

import { ArrowRight, BookOpenCheck, Gamepad2, HeartHandshake, MessageCircle, NotebookPen, TrendingUp, Clock, Globe, Sparkles, Laptop } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { benefits } from "@/lib/site";

const icons = [MessageCircle, Gamepad2, HeartHandshake, NotebookPen, BookOpenCheck, TrendingUp];

export default function Benefits() {
  return (
    <section id="korzysci" aria-labelledby="benefits-title" className="relative overflow-x-clip bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Korzyści"
          title="Dlaczego warto uczyć się ze mną?"
          lead="Stawiam na jakość, zaufanie i realne postępy — bez zbędnej presji."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={benefit.title} delay={i * 0.07} className="h-full">
                <div className="h-full rounded-3xl bg-mist p-7 ring-1 ring-slate-200/60 transition-shadow duration-300 hover:shadow-card">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-600">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl text-ink">{benefit.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-soft">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            );
          })}

          {/* Karta CTA */}
          <Reveal delay={0.35} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-accent-400 p-7 shadow-soft">
              <div aria-hidden="true" className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-white/25" />
              <div>
                <h3 className="text-xl font-semibold text-ink">Zacznijmy od bezpłatnej rozmowy</h3>
                <p className="mt-2.5 text-sm font-medium leading-relaxed text-ink/80">
                  Bez zobowiązań — pierwsza rozmowa zapoznawcza (15 min) jest bezpłatna.
                </p>
              </div>
              <Button href="#kontakt" variant="light" className="mt-6 self-start">
                Umów darmową rozmowę
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>

        {/* 💻 Baner: Dlaczego nauka online się sprawdza? */}
        <Reveal delay={0.4}>
          <div className="mt-14 rounded-3xl bg-slate-900 p-8 sm:p-10 text-white shadow-xl ring-1 ring-slate-800 relative overflow-hidden">
            <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 -mt-10 -mr-10 size-60 rounded-full bg-brand-500/10 blur-3xl" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold border border-brand-500/30">
                <Laptop className="size-4 text-accent-400" /> Dlaczego nauka online się sprawdza?
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Wygodnie, skutecznie i bez dojazdów.
              </h3>

              <div className="grid gap-5 sm:grid-cols-3 pt-2">
                <div className="space-y-2 bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60">
                  <div className="flex items-center gap-2 text-accent-400 font-bold text-sm">
                    <Clock className="size-4" /> Bez dojazdów — lekcja z domu
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Wystarczy komputer lub tablet z internetem. Żadnych korków, żadnego stresu związanego z dowożeniem dziecka.
                  </p>
                </div>

                <div className="space-y-2 bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60">
                  <div className="flex items-center gap-2 text-accent-400 font-bold text-sm">
                    <Globe className="size-4" /> Lekcja z dowolnego miejsca
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Łączymy się skądkolwiek — z domu, wyjazdu czy z drugiego końca świata. Wystarczy laptop lub tablet z internetem.
                  </p>
                </div>

                <div className="space-y-2 bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60">
                  <div className="flex items-center gap-2 text-accent-400 font-bold text-sm">
                    <Sparkles className="size-4" /> Sprawdzi się dla każdego ucznia
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Nauka online jest skuteczna na każdym etapie — od szkoły podstawowej po maturę. Forma sprawdzona na setkach lekcji na dużych platformach edukacyjnych.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
