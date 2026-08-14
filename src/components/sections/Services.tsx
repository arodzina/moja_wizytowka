"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen, Calculator, Check, GraduationCap, Target } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";

const icons = [BookOpen, GraduationCap, Calculator, Target];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="zajecia" aria-labelledby="services-title" className="relative overflow-x-clip bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Zajęcia"
          title="Czego mogę nauczyć?"
          lead="Cztery obszary, w których pomagam uczniom osiągać konkretne efekty — zawsze w indywidualnym tempie."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={service.id} delay={i * 0.08} className="h-full">
                <motion.article
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 shadow-card transition-shadow duration-300 hover:shadow-soft"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl text-ink">{service.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-soft">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-600">
                          <Check className="size-2.5" aria-hidden="true" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#kontakt"
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
                  >
                    Umów darmową rozmowę
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
