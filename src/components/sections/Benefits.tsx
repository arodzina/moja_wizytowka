"use client";

import { ArrowRight, BookOpenCheck, Gamepad2, HeartHandshake, MessageCircle, NotebookPen, TrendingUp } from "lucide-react";
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
                <h3 className="text-xl text-ink">Zacznijmy od pierwszej lekcji</h3>
                <p className="mt-2.5 text-sm font-medium leading-relaxed text-ink/80">
                  Bez zobowiązań — pierwsza rozmowa i lekcja próbna są bezpłatne.
                </p>
              </div>
              <Button href="#kontakt" variant="light" className="mt-6 self-start">
                Umów pierwszą lekcję
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
