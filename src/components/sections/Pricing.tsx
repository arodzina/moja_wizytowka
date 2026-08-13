"use client";

import { useState } from "react";
import { ArrowRight, BookOpen, Check, GraduationCap, Sparkles, ShieldCheck, FileText, X, AlertCircle } from "lucide-react";
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
    sub: "Angielski (Podstawowa & Rozszerzona B1/B2/C1) + Podstawy Mat. Średniej",
    price: "60",
    unit: "zł / godzina",
    color: "accent",
    popular: true,
    includes: [
      "Angielski Matura Podstawowa i Rozszerzona",
      "Podstawy matematyki szkoły średniej",
      "Darmowa Rozmowa Zapoznawcza (15 min)",
      "Pakiet Startowy 3 Lekcji Próbnych",
      "Praca na autentycznych arkuszach CKE",
      "Notatka i podsumowanie po każdej lekcji",
      "Regularna kontrola postępów",
    ],
  },
];

export default function Pricing() {
  const reduce = useReducedMotion();
  const [showTermsModal, setShowTermsModal] = useState(false);

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
                  „Pracuję według jasnych i uczciwych zasad. Cenię czas moich uczniów i ich rodziców, dlatego każda współpraca opiera się na przejrzystym regulaminie. Zanim zdecydują się Państwo na stałą współpracę, przechodzimy przez <strong className="font-semibold text-white">Pakiet Startowy 3 Lekcji Próbnych</strong>, aby uczeń poczuł się w 100% komfortowo, a rodzic miał pewność co do efektów.”
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowTermsModal(true)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors underline underline-offset-4"
                  >
                    <FileText className="size-4" /> Zobacz Pełne Zasady Współpracy & Regulamin (6 punktów) →
                  </button>
                </div>
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

      {/* MODAL Z REGULAMINEM */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-6 text-slate-700 relative">
            <button
              type="button"
              onClick={() => setShowTermsModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="size-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="grid size-10 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Zasady Współpracy & Regulamin Korepetycji
                </h3>
                <p className="text-xs text-slate-500">Przejrzyste zasady dla bezpieczeństwa obu stron</p>
              </div>
            </div>

            <div className="space-y-5 text-xs sm:text-sm leading-relaxed">
              <div className="bg-brand-50/70 p-4 rounded-2xl border border-brand-100 text-brand-900 space-y-1">
                <strong className="block text-sm font-bold flex items-center gap-1.5">
                  <Sparkles className="size-4 text-brand-600" /> 1. Darmowa Rozmowa & 3 Lekcje Próbne
                </strong>
                <p>
                  Przed współpracą łączymy się na darmową 15-30 min rozmowę zapoznawczą. Pierwsze 3 lekcje to okres adaptacyjny — płatny z lekcji na lekcję, aby uczeń i rodzic upewnili się, że dobrze nam się współpracuje.
                </p>
              </div>

              <div className="space-y-1.5">
                <strong className="block text-sm font-bold text-slate-900">
                  💳 2. Płatności i Stała Współpraca
                </strong>
                <p>
                  Po 3 lekcjach próbnych przechodzimy na rozliczenie miesięczne (płatność z góry za cały miesiąc do 1. dnia miesiąca). Rezerwuje to stały termin w moim grafiku wyłącznie dla Was.
                </p>
              </div>

              <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200/80 text-amber-950 space-y-1">
                <strong className="block text-sm font-bold flex items-center gap-1.5 text-amber-900">
                  <AlertCircle className="size-4 text-amber-600" /> 3. Odpowiedzialność za Wynik i Praca Własna
                </strong>
                <p>
                  Robię wszystko co w mojej mocy w trakcie zajęć, aby wytłumaczyć materiał cierpliwie i zrozumiale. Jednak 1 godzina w tygodniu to za mało bez pracy własnej ucznia. Ostateczny wynik na egzaminie (E8/Matura) zależy od samodzielnego ćwiczenia i zaangażowania ucznia, dlatego nie bierze się odpowiedzialności prawnej/finansowej za oceny szkolne i wyniki egzaminów.
                </p>
              </div>

              <div className="space-y-1.5">
                <strong className="block text-sm font-bold text-slate-900">
                  🚪 4. Zasady Rezygnacji ze Współpracy
                </strong>
                <p>
                  Każda ze stron może zrezygnować ze współpracy. W systemie miesięcznym rezygnacja następuje ze skutkiem na koniec opłaconego miesiąca (opłacone lekcje w miesiącu realizowane są do końca, brak zwrotów gotówki). Będę wdzięczna za krótki feedback, dlaczego rezygnujecie — to pomaga mi ulepszać zajęcia!
                </p>
              </div>

              <div className="space-y-1.5">
                <strong className="block text-sm font-bold text-slate-900">
                  ⏰ 5. Odwoływanie Lekcji (Zasada 24h)
                </strong>
                <p>
                  Lekcję można bezpłatnie przełożyć na inny termin w danym tygodniu pod warunkiem zgłoszenia co najmniej 24h wcześniej. Lekcja odwołana na mniej niż 24h przed czasem uważana jest za zrealizowaną.
                </p>
              </div>

              <div className="space-y-1.5">
                <strong className="block text-sm font-bold text-slate-900">
                  📝 6. Własne Tematy & Zadania ze Szkoły
                </strong>
                <p>
                  Uczeń może przynieść na lekcję własny temat ze szkoły lub zadanie domowe. Proszę o przesłanie zdjęcia lub informacji minimum 24h przed lekcją, abym mogła przygotować idealne materiały.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <Button onClick={() => setShowTermsModal(false)}>
                Rozumiem i Akceptuję
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
