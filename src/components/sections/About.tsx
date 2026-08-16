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
        {/* Portret z plakietkami */}
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <Image
              src="/images/ola-portrait.jpg"
              alt="Zdjęcie Oli — mentorki egzaminacyjnej E8 i Matury"
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
              Angielski <span className="text-brand-600">C1</span> · Erasmus+
            </motion.div>

            <motion.div
              {...float(5.6, 0.8)}
              className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-2xl bg-accent-200 px-4 py-2.5 text-sm font-bold text-ink shadow-soft sm:right-6"
            >
              <Target className="size-4 text-accent-600" aria-hidden="true" />
              Strategia CKE bez stresu
            </motion.div>
          </div>
        </Reveal>

        {/* Tekst o mnie */}
        <div>
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <span aria-hidden="true" className="h-px w-6 bg-accent-400" />
              O mnie & Metoda pracy
            </p>
            <h2 id="about-title" className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Cześć, jestem {site.tutorName}.{" "}
              <span className="text-brand-600">Pomagam zamienić presję egzaminacyjną w spokój i wysokie wyniki.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-slate-soft">
              <p>
                Studiuję <strong className="font-semibold text-ink">Informatykę i Ekonometrię na AGH w Krakowie</strong> — to daje mi analityczne, uporządkowane podejście, które przekładam na proste tłumaczenie matematyki i schematów CKE. Z korepetycjami zaczynałam na dużych platformach edukacyjnych, gdzie przeprowadziłam setki lekcji z uczniami przygotowującymi się do egzaminów.
              </p>
              <p>
                Wierzę, że sukces na egzaminie to w 50% wiedza, a w 50% spokój i wyćwiczona strategia. W <strong className="font-semibold text-ink">matematyce</strong> rozkładamy skomplikowane zadania na proste kroki, aż wszystko „zaskoczy” bez kucia wzorów na pamięć. Na <strong className="font-semibold text-ink">angielskim</strong> skupiamy się na szablonach wypowiedzi pisemnej, pewniakach gramatycznych i odwadze językowej.
              </p>
              <p>
                Praktyczny angielski szlifowałam podczas wyjazdu <strong className="font-semibold text-ink">Erasmus+ w Portugalii (poziom C1)</strong>. Stworzyłam też autorski kurs <strong className="font-semibold text-ink">Notion Master</strong>, pomagając uczniom układać bezstresowy harmonogram powtórek do samego dnia testu!
              </p>
            </div>
          </Reveal>

          {/* DOŚWIADCZENIE W LICZBACH */}
          <Reveal delay={0.15}>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-slate-200/70 shadow-card">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-600">Setki+</div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                  👨‍🏫 Przeprowadzonych lekcji online z uczniami E8 i liceum
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-slate-200/70 shadow-card">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-500">1 na 1</div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                  🎯 Indywidualny plan powtórek dopasowany do ucznia
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-slate-200/70 shadow-card">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">100%</div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                  📋 Zgodności z wytycznymi i informatorami CKE
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-slate-200/70 shadow-card">
                <div className="text-lg sm:text-xl font-bold text-ink">AGH & C1</div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                  🎓 Informatyka AGH + Angielski C1 (Erasmus+ Portugalia)
                </div>
              </div>
            </div>
          </Reveal>

          {/* Rozwijana sekcja z kwalifikacjami */}
          <Reveal delay={0.2}>
            <div className="mt-7">
              <button
                type="button"
                onClick={() => setShowQualifications(!showQualifications)}
                aria-expanded={showQualifications}
                className="group flex items-center justify-between w-full rounded-2xl bg-brand-50 px-5 py-4 text-left font-semibold text-brand-800 transition-colors hover:bg-brand-100 ring-1 ring-brand-200/60"
              >
                <span className="flex items-center gap-2.5 text-sm sm:text-base">
                  <Sparkles className="size-5 text-accent-500" aria-hidden="true" />
                  Kwalifikacje, wykształcenie & organizacja nauki
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
                          <GraduationCap className="size-5 text-brand-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-ink block">Informatyka i Ekonometria — AGH Kraków:</strong>
                            <p>Studia na renomowanej uczelni technicznej to gwarancja logicznego, uporządkowanego podejścia do matematyki.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 pt-2.5 border-t border-slate-100">
                          <Globe className="size-5 text-brand-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-ink block">Certyfikat C1 & Doświadczenie z Portugalii:</strong>
                            <p>Praktyczne używanie języka w międzynarodowym środowisku (Erasmus+), eliminujące barierę przed mówieniem.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 pt-2.5 border-t border-slate-100">
                          <Sparkles className="size-5 text-brand-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-ink block">Autorka kursu Notion Master (Udemy):</strong>
                            <p>Wiedzę ze szkolenia z organizacji i zarządzania czasem wykorzystuję, pomagając uczniom układać bezstresowy harmonogram powtórek.</p>
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
