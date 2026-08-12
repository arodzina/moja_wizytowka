"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Download, FileText, Globe, GraduationCap, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const highlights = [
  "Mówienie & aktywne konwersacje",
  "Gry językowe & aktywizacja",
  "Erasmus+ · Portugalia (C1)",
  "Informatyka & Ekonometria (AGH)",
];

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
        {/* Portret z plakietkami */}
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <Image
              src="/images/ola-portrait.jpg"
              alt="Zdjęcie Oli — korepetytorki online"
              width={640}
              height={800}
              loading="lazy"
              className="w-full rounded-[2.5rem] object-cover shadow-float ring-1 ring-white aspect-[4/5]"
            />
            <motion.div
              {...float(5, 0.3)}
              className="absolute -top-4 -left-3 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-soft ring-1 ring-slate-100 sm:-left-6"
            >
              <Globe className="size-4 text-brand-600" aria-hidden="true" />
              Angielski <span className="text-brand-600">C1</span> · Portugalia
            </motion.div>

            <motion.div
              {...float(5.6, 0.8)}
              className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-2xl bg-accent-200 px-4 py-2.5 text-sm font-bold text-ink shadow-soft sm:right-6"
            >
              <GraduationCap className="size-4 text-accent-600" aria-hidden="true" />
              Wysokie wyniki matur
            </motion.div>
          </div>
        </Reveal>

        {/* Tekst o mnie */}
        <div>
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <span aria-hidden="true" className="h-px w-6 bg-accent-400" />
              O mnie & Moja historia
            </p>
            <h2 id="about-title" className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Cześć, jestem {site.tutorName}.{" "}
              <span className="text-brand-600">Pomagam przełamać barierę w mówieniu i zrozumieć matematykę bez stresu.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-soft">
              <p>
                Studiuję <strong className="font-semibold text-ink">Informatykę i Ekonometrię na AGH w Krakowie</strong> — to daje mi analityczne i logiczne myślenie, które przekładam na proste tłumaczenie matematyki. Z korepetycjami zaczynałam na dużych platformach edukacyjnych, gdzie przeprowadziłam setki lekcji z uczniami.
              </p>
              <p>
                Stawiam na <strong className="font-semibold text-ink">nieszablonowe i bezstresowe podejście do obu przedmiotów</strong>. W <strong className="font-semibold text-ink">matematyce</strong> rozkładamy skomplikowane zadania na proste kroki, aż wszystko „zaskoczy” bez kucia wzorów na pamięć. Na <strong className="font-semibold text-ink">angielskim</strong> stawiam na praktyczne mówienie i przełamywanie barier. Aby nauka nie była nudna, wykorzystuję gry aktywizujące.
              </p>
              <p>
                Praktyczny angielski szlifowałam podczas wyjazdu <strong className="font-semibold text-ink">Erasmus+ w Portugalii (poziom C1)</strong>. Stworzyłam też kurs <strong className="font-semibold text-ink">Notion Master na Udemy</strong>, bo wierzę, że dobra organizacja, przejrzyste notatki i ciekawa lekcja to klucz do sukcesu każdego ucznia!
              </p>
            </div>
          </Reveal>

          {/* Wyróżniki */}
          <Reveal delay={0.18}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3.5 ring-1 ring-slate-200/70">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Rozwijana sekcja z kwalifikacjami / certyfikatami */}
          <Reveal delay={0.22}>
            <div className="mt-7">
              <button
                type="button"
                onClick={() => setShowQualifications(!showQualifications)}
                aria-expanded={showQualifications}
                className="group flex items-center justify-between w-full rounded-2xl bg-brand-50 px-5 py-4 text-left font-semibold text-brand-800 transition-colors hover:bg-brand-100 ring-1 ring-brand-200/60"
              >
                <span className="flex items-center gap-2.5 text-sm sm:text-base">
                  <Sparkles className="size-5 text-accent-500" aria-hidden="true" />
                  Wykształcenie, kursy & wyniki matur
                </span>
                <ChevronDown
                  className={`size-5 text-brand-600 transition-transform duration-300 ${
                    showQualifications ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {showQualifications && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-200/80 space-y-4">
                      <div className="space-y-3 text-sm text-slate-soft">
                        <div className="flex items-start gap-2.5">
                          <Sparkles className="size-5 text-brand-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-ink block">Autorka kursu Notion Master (Udemy):</strong>
                            <p>Stworzyłam własne szkolenie z organizacji i zarządzania czasem, z którego wiedzę wykorzystuję, pomagając uczniom układać plan powtórek.</p>
                            <a
                              href="https://www.udemy.com/course/notion-master/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:underline"
                            >
                              Zobacz mój kurs na Udemy →
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 pt-2.5 border-t border-slate-100">
                          <GraduationCap className="size-5 text-brand-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-ink block">Informatyka i Ekonometria — AGH Kraków:</strong>
                            <p>Studia na renomowanej uczelni technicznej to gwarancja logicznego, uporządkowanego podejścia do matematyki.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 pt-2.5 border-t border-slate-100">
                          <GraduationCap className="size-5 text-brand-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-ink block">Top wyniki matur — Angielski 100% | Matematyka 100% (podst.) & 98% (rozszerz.):</strong>
                            <p>Wyniki w ścisłej czołówce kraju stanowią najlepszy dowód opanowania materiału CKE i pozwalają mi skutecznie przygotowywać uczniów do własnych egzaminów.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 pt-2.5 border-t border-slate-100">
                          <Globe className="size-5 text-brand-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-ink block">C1 & Doświadczenie z Portugalii:</strong>
                            <p>Praktyczne używanie języka za granicą w międzynarodowym środowisku.</p>
                          </div>
                        </div>
                      </div>

                      {/* Przycisk pobierania PDF z wynikami */}
                      <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                          <FileText className="size-4 text-brand-600" />
                          Dokumenty, Certyfikaty & Wyniki matur (PDF):
                        </span>
                        <div className="flex flex-wrap gap-2">
                          <a
                            href="/documents/wyniki-matur.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-mist px-3 py-1.5 text-xs font-bold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-50"
                          >
                            <Download className="size-3.5" aria-hidden="true" />
                            Wyniki matur (PDF)
                          </a>
                          <a
                            href="/documents/certyfikat-c1-ols.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-mist px-3 py-1.5 text-xs font-bold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-50"
                          >
                            <Download className="size-3.5" aria-hidden="true" />
                            Certyfikat C1 (PDF)
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Działanie CTA */}
          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button href="#kontakt" size="lg">
                Umów darmową lekcję próbną
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
