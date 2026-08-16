"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Compass, GraduationCap, School, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const stakes = [
  {
    icon: School,
    badge: "Dla Ósmoklasisty i Rodziców",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    title: "Presja rekrutacji: Kilka punktów waży o przyszłości",
    description:
      "Wiem, z jaką presją mierzy się ósmoklasista i jego rodzice. Kilka punktów różnicy na E8 decyduje o tym, czy uczeń trafi do wymarzonego liceum lub technikum z wyższym poziomem nauczania, czy do szkoły z przypadku. Zdejmuję ten ciężar — zamieniam chaos i panikę w uporządkowany plan działania tydzień po tygodniu.",
    takeaway: "Eliminacja stresu + pewność dostania się do klasy pierwszego wyboru.",
    accentColor: "border-amber-400/40",
  },
  {
    icon: GraduationCap,
    badge: "Dla Maturzysty",
    badgeColor: "bg-brand-100 text-brand-900 border-brand-200",
    title: "Angielski: Uniwersalna przepustka na studia",
    description:
      "Niezależnie od tego, czy Twoim celem jest informatyka, medycyna, prawo, architektura, psychologia czy finanse — język angielski jest punktowany w rekrutacji niemal na KAŻDYM kierunku w Polsce i za granicą. Maksymalizacja wyniku z matury podstawowej i rozszerzonej to najprostsza dźwignia do wyprzedzenia tysięcy kandydatów.",
    takeaway: "Maksymalna liczba punktów rekrutacyjnych bez względu na wybrany kierunek.",
    accentColor: "border-brand-400/40",
  },
  {
    icon: Compass,
    badge: "Wartość Ponadprogramowa",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    title: "Kompetencje, które zostają na całe życie",
    description:
      "Nie wierzę w bezmyślne kucie pod klucz, o którym zapomina się dzień po egzaminie. Matematyka uczy analitycznego myślenia, łączenia faktów i radzenia sobie ze złożonymi problemami. Angielski daje swobodę komunikacji, pewność siebie w podróżach i dostęp do globalnej wiedzy. Uczę tak, by wyciągnąć Twój maksymalny wynik, ale też zyskać przewagę na lata.",
    takeaway: "Logika i swoboda językowa, które procentują na studiach i w dorosłym życiu.",
    accentColor: "border-emerald-400/40",
  },
];

export default function ExamStakes() {
  const reduce = useReducedMotion();

  return (
    <section id="stawka-egzaminu" aria-labelledby="stakes-title" className="relative overflow-x-clip bg-mist">
      {/* Tło */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-[-10%] h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute bottom-10 right-[-10%] h-96 w-96 rounded-full bg-accent-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Dlaczego to takie ważne"
          title="O co tak naprawdę toczy się gra?"
          lead="Egzaminy nie sprawdzają wrodzonego talentu, lecz opanowanie strategii i radzenie sobie z presją. Zobacz, dlaczego odpowiednie przygotowanie decyduje o kolejnych latach edukacji."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {stakes.map((stake, idx) => (
            <Reveal key={stake.title} delay={idx * 0.12} className="h-full">
              <motion.div
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex h-full flex-col justify-between rounded-3xl bg-white p-7 sm:p-8 shadow-card ring-1 ring-slate-200/80 border-t-4 ${stake.accentColor}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                      <stake.icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${stake.badgeColor}`}>
                      {stake.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-snug text-ink sm:text-2xl">
                    {stake.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-soft">
                    {stake.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <Sparkles className="size-4 shrink-0 text-amber-500 mt-0.5" />
                    <span>{stake.takeaway}</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
