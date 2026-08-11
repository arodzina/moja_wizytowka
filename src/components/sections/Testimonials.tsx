import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonialsPlaceholders } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="opinie" aria-labelledby="testimonials-title" className="relative overflow-x-clip bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Opinie"
          title="Co mówią uczniowie i rodzice"
          lead="Przykładowe wrażenia uczniów i rodziców z moich dotychczasowych zajęć."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonialsPlaceholders.map((t, i) => (
            <Reveal key={i} delay={i * 0.1} className="h-full">
              <figure className="flex h-full min-h-[240px] flex-col justify-between rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-200/70">
                <div>
                  <Quote className="size-8 text-brand-500/30" aria-hidden="true" />
                  <blockquote className="mt-3 text-base leading-relaxed text-slate-700">
                    {t.title}
                  </blockquote>
                </div>
                <figcaption className="mt-6 pt-4 border-t border-slate-100 text-sm font-bold text-ink flex items-center gap-2">
                  <span className="size-2 rounded-full bg-accent-400" />
                  {t.who}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-slate-500">
            Jeśli chcesz podzielić się swoją opinią o zajęciach — napisz do mnie
            przez{" "}
            <a href="#kontakt" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              formularz kontaktowy
            </a>
            . Z przyjemnością zamieszczę ją na tej stronie.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
