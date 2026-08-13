"use client";

import { ArrowRight, BookOpen, Check, GraduationCap, Sparkles, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const plans = [
  {
    icon: BookOpen,
    label: "Szkoła Podstawowa",
    sub: "Klasy 4–8 · Angielski i Matematyka · E8",
    price: "50",
    unit: "zł / godzina",
    color: "brand",
    includes: [
      "Angielski kl. 4–8 i Egzamin Ósmoklasisty E8",
      "Matematyka kl. 4–8 i Egzamin Ósmoklasisty E8",
      "Darmowa Rozmowa Zapoznawcza (15 min)",
      "Pakiet Startowy 3 Lekcji Próbnych",
      "Notatka i podsumowanie po każdej lekcji",
      "Darmowe materiały i arkusze CKE",
      "Regularna kontrola postępów",
    ],
  },
  {
    icon: GraduationCap,
    label: "Liceum / Matura",
    sub: "Język Angielski · Matura Podstawowa & Rozszerzona (B1 / B2 / C1)",
    price: "60",
    unit: "zł / godzina",
    color: "accent",
    popular: true,
    includes: [
      "Angielski Matura Podstawowa (B1/B2)",
      "Angielski Matura Rozszerzona (B2+/C1)",
      "Przygotowanie do matury ustnej i pisemnej",
      "Darmowa Rozmowa Zapoznawcza (15 min)",
      "Pakiet Startowy 3 Lekcji Próbnych",
      "Praca na autentycznych arkuszach CKE",
      "Notatka i podsumowanie po każdej lekcji",
    ],
  },
];

export default function Pricing() {
  const reduce = useReducedMotion();

  return (
    <section id="cennik" aria-labelledby="pricing-title" className="relative overflow-x-clip bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[20%] h-80 w-80 rounded-full bg-brand-50/80 blur-3xl" />
        <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-accent-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Cennik"
          title="Przejrzyste stawki, bez niespodzianek"
          lead="Widzisz dokładnie, za co płacisz. Bez ukrytych kosztów — materiały, notatki po lekcji i diagnoza są wliczone w cenę."
        />

        {/* Darmowa lekcja próbna — baner */}
        <Reveal>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-brand-50 px-6 py-5 ring-1 ring-brand-200/60 text-center">
            <p className="flex items-center justify-center gap-2 text-sm font-bold text-brand-800">
              <Sparkles className="size-4 text-accent-500" aria-hidden="true" />
              Pierwsza Rozmowa Zapoznawcza (15 min) jest zawsze{" "}
              <span className="text-brand-600">bezpłatna i niezobowiązująca.</span>
            </p>
            <p className="mt-1 text-sm text-slate-soft">
              Zanim zaczniesz płacić — poznajmy się i sprawdźmy, czy dobrze się dogadamy.
            </p>
          </div>
        </Reveal>

        {/* Karty cenowe */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <Reveal key={plan.label} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex h-full flex-col rounded-3xl p-7 ring-1 shadow-card ${
                  plan.popular
                    ? "bg-brand-950 ring-brand-800 text-white"
                    : "bg-mist ring-slate-200/70"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-400 px-4 py-1 text-xs font-bold text-ink shadow-soft">
                    Najpopularniejsze
                  </span>
                )}

                <div className={`inline-flex size-12 items-center justify-center rounded-2xl ${
                  plan.popular ? "bg-white/10 text-accent-300" : "bg-brand-50 text-brand-600"
                }`}>
                  <plan.icon className="size-6" aria-hidden="true" />
                </div>

                <h3 className={`mt-5 text-xl font-semibold ${plan.popular ? "text-white" : "text-ink"}`}>
                  {plan.label}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-white/60" : "text-slate-soft"}`}>
                  {plan.sub}
                </p>

                {/* PROMO BADGE */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 self-start">
                  🔥 Cena promocyjna na start nowego semestru
                </div>

                <div className="mt-3 flex items-end gap-1">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-ink"}`}>
                    {plan.price}
                  </span>
                  <span className={`mb-1.5 text-sm font-medium ${plan.popular ? "text-white/60" : "text-slate-soft"}`}>
                    {plan.unit}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <span className={`mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full ${
                        plan.popular ? "bg-accent-400 text-ink" : "bg-brand-100 text-brand-600"
                      }`}>
                        <Check className="size-2.5" aria-hidden="true" />
                      </span>
                      <span className={plan.popular ? "text-white/80" : "text-slate-600"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#kontakt"
                  variant={plan.popular ? "accent" : "primary"}
                  className="mt-8 w-full justify-center"
                >
                  Umów darmową rozmowę
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* 🛡️ Gwarancja Rzetelności i Bezpieczne Zasady Współpracy */}
        <Reveal delay={0.25}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-slate-900 p-8 text-white shadow-xl ring-1 ring-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 size-40 rounded-full bg-brand-500/10 blur-2xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 relative z-10">
              <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-500/20 text-brand-300 ring-1 ring-brand-500/30">
                <ShieldCheck className="size-8 text-accent-400" aria-hidden="true" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-400">
                    Bezpieczna Współpraca
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  🛡️ Gwarancja Rzetelności i Bezpieczne Zasady Współpracy
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
                  „Pracuję według jasnych i uczciwych zasad. Cenię czas moich uczniów i ich rodziców, dlatego każda współpraca opiera się na przejrzystych warunkach. Zanim zdecydują się Państwo na stałą współpracę, przechodzimy przez <strong className="font-semibold text-white">Pakiet Startowy 3 Lekcji Próbnych</strong>, aby uczeń poczuł się w 100% komfortowo, a rodzic miał pewność co do efektów.”
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Drobne info pod kartami */}
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-slate-400">
            Standardowy czas lekcji: <strong className="text-slate-600">60 minut</strong>. Na prośbę możliwe również lekcje 45-minutowe — napisz do mnie, ustalamy indywidualnie.{" "}
            <a href="#kontakt" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              Masz pytanie o cenę?
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
