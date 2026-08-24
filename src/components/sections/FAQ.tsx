"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqItems } from "@/lib/site";

function FaqItem({ item, index }: { item: (typeof faqItems)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const reduce = useReducedMotion();
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div
      className={`rounded-2xl bg-white ring-1 transition-shadow duration-300 ${
        open ? "shadow-card ring-brand-300" : "ring-slate-200/80"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left sm:px-6"
        >
          <span className="text-base font-semibold text-ink sm:text-lg">{item.q}</span>
          <span
            className={`grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
              open ? "rotate-180 bg-brand-600 text-white" : "bg-brand-50 text-brand-600"
            }`}
          >
            <ChevronDown className="size-4" aria-hidden="true" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-6 text-sm leading-relaxed text-slate-soft sm:px-6 sm:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative overflow-x-clip bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Najczęściej zadawane pytania"
            lead="Odpowiedzi na najważniejsze pytania dotyczące zajęć, przygotowań i zasad współpracy."
          />
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-3 rounded-2xl bg-brand-50 px-5 py-4 text-sm font-semibold text-brand-700 ring-1 ring-brand-100 transition-colors hover:bg-brand-100"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Zadaj pytanie bezpośrednio
              </a>
              <p className="text-xs text-slate-400">
                Odpowiadam zwykle w ciągu kilku godzin.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <FaqItem item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
