"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowDownToLine, CheckCircle2, FileText, Gift, Mail, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [selectedPack, setSelectedPack] = useState<"e8" | "matura" | "all">("all");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const reduce = useReducedMotion();

  const handleDownload = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Podaj poprawny adres e-mail.");
      return;
    }
    setError("");
    setStatus("sending");

    fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        _subject: `Zapis na darmowy niezbędnik egzaminacyjny (${selectedPack}): ${email}`,
        _captcha: "false",
        typ_materialu: selectedPack,
        email: email,
      }),
    })
      .then(() => setStatus("sent"))
      .catch(() => setStatus("sent"));
  };

  return (
    <section id="materialy" aria-labelledby="lead-magnet-title" className="relative overflow-x-clip bg-white">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-50 via-mist to-accent-100/50 p-8 ring-1 ring-brand-200/80 sm:p-12 lg:p-16 shadow-card">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
              {/* Lewa strona: Opis prezentu */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-800 ring-1 ring-brand-200">
                  <Gift className="size-4 text-accent-600" aria-hidden="true" />
                  Darmowy Niezbędnik Egzaminacyjny CKE
                </div>

                <h2 id="lead-magnet-title" className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl leading-[1.2]">
                  Pobierz darmowy zestaw strategiczny i zacznij zbierać punkty od dziś.
                </h2>

                <p className="text-base leading-relaxed text-slate-soft">
                  Przygotowałam bezpłatne materiały w PDF, które natychmiast eliminują najpopularniejsze pomyłki uczniów i dają gotowe szablony do wykorzystania na egzaminie.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60">
                    <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-900 font-bold text-xs">
                      E8
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-ink">
                        Poradnik: 10 najczęstszych pułapek CKE na Egzaminie Ósmoklasisty
                      </h4>
                      <p className="text-xs text-slate-soft mt-0.5">
                        Konkretne typy zadań z matematyki i angielskiego, na których uczeń traci najwięcej punktów przez nieuwagę.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60">
                    <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-900 font-bold text-xs">
                      C1
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-ink">
                        Niezbędnik: Lista 40 kluczowych zwrotów maturalnych z angielskiego
                      </h4>
                      <p className="text-xs text-slate-soft mt-0.5">
                        Zwroty do rozprawki, artykułu i form pisemnych, które podnoszą ocenę za bogactwo językowe pod klucz CKE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prawa strona: Formularz odbioru */}
              <div className="rounded-3xl bg-white p-7 sm:p-8 shadow-float ring-1 ring-slate-100">
                {status === "sent" ? (
                  <motion.div
                    initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-4"
                  >
                    <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h3 className="text-xl font-bold text-ink">Świetnie! Materiały są w drodze</h3>
                    <p className="text-sm text-slate-soft leading-relaxed">
                      Wysłaliśmy bezpłatny niezbędnik na adres <strong className="text-ink">{email}</strong>. Sprawdź swoją skrzynkę (oraz folder Spam/Oferty).
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleDownload} className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
                      <Sparkles className="size-4 text-accent-500" />
                      Wybierz materiał do pobrania:
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedPack("e8")}
                        className={`rounded-xl py-2 px-3 text-xs font-bold border transition-all ${
                          selectedPack === "e8"
                            ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        E8 (Ósmoklasista)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedPack("matura")}
                        className={`rounded-xl py-2 px-3 text-xs font-bold border transition-all ${
                          selectedPack === "matura"
                            ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        Matura Angielski
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedPack("all")}
                        className={`rounded-xl py-2 px-3 text-xs font-bold border transition-all ${
                          selectedPack === "all"
                            ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        Oba pakiety (Polecane)
                      </button>
                    </div>

                    <div className="pt-2">
                      <label htmlFor="lead-email" className="block text-xs font-semibold text-ink mb-1.5">
                        Twój adres e-mail (tam wyślemy PDF):
                      </label>
                      <div className="relative">
                        <input
                          id="lead-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="twoj-email@przyklad.pl"
                          className={`w-full rounded-xl border bg-white pl-10 pr-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 ${
                            error
                              ? "border-red-400 focus:ring-red-100"
                              : "border-slate-200 focus:border-brand-500 focus:ring-brand-100"
                          }`}
                        />
                        <Mail className="size-4 text-slate-400 absolute left-3.5 top-3.5" />
                      </div>
                      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full justify-center"
                      aria-disabled={status === "sending"}
                    >
                      {status === "sending" ? "Wysyłanie..." : "Pobierz bezpłatny zestaw (PDF)"}
                      <ArrowDownToLine className="size-4" />
                    </Button>

                    <p className="text-[11px] text-center text-slate-400 leading-tight">
                      100% bezpłatnie · Zero spamu · Natychmiastowy dostęp
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
