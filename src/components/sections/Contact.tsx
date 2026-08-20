"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Clock, Mail, Send, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";

const topics = [
  "Egzamin Ósmoklasisty — Matematyka",
  "Egzamin Ósmoklasisty — Język Angielski",
  "Matura z Matematyki (Podstawa / Rozszerzenie)",
  "Matura z Języka Angielskiego (Podstawa / Rozszerzenie)",
  "Darmowa konsultacja wstępna (15 min)",
  "Inne / mam pytanie",
];

interface FormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", topic: topics[0], message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const reduce = useReducedMotion();

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = "Podaj swoje imię i nazwisko.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Podaj poprawny adres e-mail.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = "Wiadomość powinna mieć co najmniej 10 znaków.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        _subject: `Zgłoszenie E8/Matura od: ${form.name}`,
        _captcha: "false",
        imie: form.name,
        email: form.email,
        sciezka_egzaminacyjna: form.topic,
        wiadomosc: form.message,
      }),
    })
      .then(() => setStatus("sent"))
      .catch(() => setStatus("sent"));
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-4 ${
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
        : "border-slate-200 focus:border-brand-500 focus:ring-brand-100"
    }`;

  return (
    <section id="kontakt" aria-labelledby="contact-title" className="relative overflow-x-clip bg-mist">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[15%] h-72 w-72 rounded-full bg-accent-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Zapisz się"
          title="Zapisz się na bezpłatną konsultację"
          lead="Wypełnij krótki formularz. Podczas 15-minutowej rozmowy online omówimy cele, trudności i ułożymy plan działania."
        />

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          {/* Kanały kontaktu */}
          <Reveal>
            <div className="space-y-3 sm:space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3.5 rounded-2xl bg-white p-4.5 sm:p-6 sm:rounded-3xl shadow-card ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white sm:size-14 sm:rounded-2xl">
                  <Mail className="size-5 sm:size-6" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
                    E-mail kontaktowy
                  </span>
                  <span className="mt-0.5 block break-all text-xs font-bold text-ink group-hover:text-brand-700 sm:text-base md:text-lg">
                    {site.email}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-3.5 rounded-2xl bg-white p-4.5 sm:p-6 sm:rounded-3xl shadow-card ring-1 ring-slate-200/70">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-100 text-accent-600 sm:size-14 sm:rounded-2xl">
                  <Clock className="size-5 sm:size-6" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
                    Czas odpowiedzi
                  </span>
                  <span className="mt-0.5 block text-xs font-bold text-ink sm:text-base md:text-lg">
                    Zwykle w ciągu kilku godzin
                  </span>
                </span>
              </div>

              {site.facebook || site.instagram ? (
                <div className="flex items-center gap-3.5 rounded-2xl bg-white p-4.5 sm:p-6 sm:rounded-3xl shadow-card ring-1 ring-slate-200/70">
                  <span className="text-xs font-semibold text-ink sm:text-sm">Obserwuj mnie:</span>
                  <div className="flex gap-2.5">
                    {site.facebook && (
                      <a
                        href={site.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="grid size-9 sm:size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
                      >
                        <FacebookIcon className="size-4 sm:size-5" />
                      </a>
                    )}
                    {site.instagram && (
                      <a
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="grid size-9 sm:size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
                      >
                        <InstagramIcon className="size-4 sm:size-5" />
                      </a>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>

          {/* Formularz */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white p-4.5 shadow-float ring-1 ring-slate-100 sm:rounded-[2rem] sm:p-9 min-w-0 max-w-full">
              {status === "sent" ? (
                <motion.div
                  initial={reduce ? undefined : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  role="status"
                  aria-live="polite"
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <span className="grid size-16 place-items-center rounded-full bg-accent-100 text-accent-600">
                    <Check className="size-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl text-ink">Dziękuję za zgłoszenie!</h3>
                  <p className="mt-3 max-w-sm text-slate-soft">
                    Odezwę się na adres <strong className="text-ink">{form.email}</strong> najszybciej, jak to możliwe, aby ustalić termin bezpłatnej rozmowy.
                  </p>
                  <Button
                    variant="secondary"
                    className="mt-8"
                    onClick={() => {
                      setForm(initialForm);
                      setStatus("idle");
                    }}
                  >
                    Wyślij kolejne zapytanie
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
                        Imię i nazwisko (rodzica lub ucznia) <span aria-hidden="true" className="text-accent-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        placeholder="np. Anna Nowak"
                        className={inputClass(Boolean(errors.name))}
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="mt-1.5 text-sm font-medium text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
                        Adres e-mail <span aria-hidden="true" className="text-accent-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        placeholder="np. anna@przyklad.pl"
                        className={inputClass(Boolean(errors.email))}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="mt-1.5 text-sm font-medium text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="topic" className="mb-1.5 block text-sm font-semibold text-ink">
                      Ścieżka egzaminacyjna
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      className={inputClass(false)}
                    >
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
                      Wiadomość <span aria-hidden="true" className="text-accent-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      placeholder="Napisz krótko: z czym uczeń ma największy problem, jaki jest docelowy wynik lub wymarzona szkoła/kierunek."
                      className={`${inputClass(Boolean(errors.message))} resize-none`}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-sm font-medium text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto" aria-disabled={status === "sending"}>
                    {status === "sending" ? "Wysyłanie…" : "Zapisz się na bezpłatną konsultację"}
                    {status !== "sending" && (
                      <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    )}
                  </Button>

                  <p className="mt-4 text-xs leading-relaxed text-slate-400">
                    Wysyłając formularz, zgadzasz się na kontakt w sprawie konsultacji i przygotowania do egzaminów.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
