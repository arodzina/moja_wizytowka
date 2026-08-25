"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Globe, GraduationCap, Sparkles, Target, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export default function About() {
  const [showQualifications, setShowQualifications] = useState(false);
  const reduce = useReducedMotion();

  const float = (duration: number, delay: number) => ({
    animate: reduce ? undefined : { y: [0, -8, 0] },
    transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
  });

  return (
    <section id="o-mnie" aria-labelledby="about-title" className="relative overflow-x-clip bg-mist">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-28">
        {/* Portret z plakietkami & Wynikami z matur */}
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <Image
              src="/images/ola-portrait.jpg"
              alt="Zdjęcie Oli — mentorki egzaminacyjnej E8 i Matury"
              width={576}
              height={1024}
              unoptimized
              className="w-full rounded-[2.5rem] object-cover shadow-float ring-1 ring-white aspect-[4/5]"
            />
            <motion.div
              {...float(5, 0.3)}
              className="absolute -top-4 -left-3 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-soft ring-1 ring-slate-100 sm:-left-6"
            >
              <Globe className="size-4 text-brand-600" aria-hidden="true" />
              Angielski <span className="text-brand-600">C1</span> · Erasmus+
            </motion.div>
          </div>

          {/* Wyniki z matur pod zdjęciem */}
          <div className="mt-8 rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-200/80 space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600">
                <Sparkles className="size-4 text-accent-500" aria-hidden="true" />
                Wyniki, które mówią same za siebie
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-soft leading-relaxed">
                Do matury przygotowywałam się dokładnie tak, jak dziś pomagam przygotowywać się innym uczniom.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full items-stretch">
              {/* Karta 1: Język angielski */}
              <div className="flex flex-col justify-between rounded-2xl bg-brand-50/80 p-4 ring-1 ring-brand-200/70 space-y-2 w-full">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-900">
                  <Globe className="size-4 text-brand-600 shrink-0" />
                  <span>Język angielski</span>
                </div>
                <div className="pt-1 border-t border-brand-100/80 text-xs text-slate-700 font-medium leading-relaxed">
                  Podstawa <strong className="font-extrabold text-brand-700">100%</strong> · Rozszerzenie <strong className="font-extrabold text-brand-700">100%</strong>
                </div>
              </div>

              {/* Karta 2: Matematyka */}
              <div className="flex flex-col justify-between rounded-2xl bg-amber-50/80 p-4 ring-1 ring-amber-200/70 space-y-2 w-full">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                  <Target className="size-4 text-amber-600 shrink-0" />
                  <span>Matematyka</span>
                </div>
                <div className="pt-1 border-t border-amber-100/80 text-xs text-slate-700 font-medium leading-relaxed">
                  Podstawa <strong className="font-extrabold text-amber-800">100%</strong> · Rozszerzenie <strong className="font-extrabold text-amber-800">98%</strong>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tekst o mnie */}
        <div>
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <span aria-hidden="true" className="h-px w-6 bg-accent-400" />
              O mnie i moim podejściu
            </p>
            <h2 id="about-title" className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Cześć, jestem {site.tutorName}.
            </h2>
            <p className="mt-3 text-lg font-medium leading-relaxed text-slate-soft">
              Pomagam uczniom dobrze przygotować się do egzaminów z matematyki i języka angielskiego — spokojnie, konkretnie i krok po kroku.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-slate-soft">
              <p>
                Studiuję <strong className="font-semibold text-ink">Informatykę i Ekonometrię na AGH w Krakowie</strong>. Analityczne podejście, które wykorzystuję na studiach, pomaga mi porządkować materiał i tłumaczyć trudniejsze zagadnienia w prosty i zrozumiały sposób.
              </p>
              <p>
                W przygotowaniach skupiam się na <strong className="font-semibold text-ink">wymaganiach CKE i praktycznej pracy z zadaniami egzaminacyjnymi</strong>. Zwracam uwagę nie tylko na znajomość materiału, ale też na sposób czytania poleceń, kryteria oceniania i typowe błędy.
              </p>
              <p>
                Tworzę <strong className="font-semibold text-ink">własne materiały i plany nauki</strong>, które pomagają uporządkować przygotowania i skupić się na najważniejszych zagadnieniach.
              </p>

              <div className="pt-3 space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-ink">
                  <span className="text-emerald-600 font-bold text-lg">✓</span>
                  <span>Wykształcenie i analityczne podejście</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-ink">
                  <span className="text-emerald-600 font-bold text-lg">✓</span>
                  <span>Znajomość wymagań CKE</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-ink">
                  <span className="text-emerald-600 font-bold text-lg">✓</span>
                  <span>Własne materiały i uporządkowany plan nauki</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 4 Kafelki wyróżnień: Wykształcenie, szkolenia i doświadczenie */}
          <Reveal delay={0.2}>
            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-900 flex items-center gap-2 mb-4">
                <Sparkles className="size-4 text-accent-500" aria-hidden="true" />
                Wykształcenie, szkolenia CKE & organizacja pracy
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="rounded-2xl bg-white p-4.5 shadow-card ring-1 ring-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-900">
                    <GraduationCap className="size-4 text-brand-600 shrink-0" />
                    <span>AGH — Informatyka i Ekonometria</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Studia na renomowanej uczelni technicznej — analityczne, uporządkowane podejście do matematyki.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4.5 shadow-card ring-1 ring-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-900">
                    <Target className="size-4 text-brand-600 shrink-0" />
                    <span>Webinar z egzaminatorem CKE</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Udział w webinarze prowadzonym przez egzaminatora CKE — poznanie kryteriów oceniania oraz sposobu sprawdzania arkuszy z perspektywy egzaminatora.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4.5 shadow-card ring-1 ring-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-900">
                    <Globe className="size-4 text-brand-600 shrink-0" />
                    <span>Erasmus+ — Portugalia · angielski C1</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Codzienna komunikacja po angielsku i swoboda językowa potwierdzona testem C1.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4.5 shadow-card ring-1 ring-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-900">
                    <Sparkles className="size-4 text-brand-600 shrink-0" />
                    <span>Autorka kursu Notion Master na Udemy</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Autorski kurs z organizacji pracy, nauki i cyfrowych notatek.{" "}
                    <a
                      href="https://www.udemy.com/course/notion-master/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-brand-700 underline"
                    >
                      Zobacz kurs →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Działanie CTA */}
          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button href="#kontakt" size="lg">
                Umów darmową rozmowę zapoznawczą
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <p className="font-display text-xl italic text-slate-500">— {site.tutorName}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
