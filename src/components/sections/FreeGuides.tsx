"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, CheckCircle2, X, FileText, ArrowRight, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

interface GuideItem {
  id: string;
  category: "e8" | "matura-pp" | "matura-pr";
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  fileUrl: string;
}

const guides: GuideItem[] = [
  {
    id: "angielski-e8",
    category: "e8",
    badge: "Egzamin Ósmoklasisty",
    badgeColor: "bg-brand-100 text-brand-900 border-brand-200",
    title: "Poradnik dla ósmoklasisty — Język Angielski",
    subtitle: "Gramatyka, słownictwo, e-mail i przydatne zwroty",
    description: "Poradnik ze strukturami gramatycznymi, słownictwem, szablonami e-maila oraz praktycznymi zwrotami na egzamin.",
    icon: "🇬🇧",
    features: [],
    fileUrl: "/poradniki/poradnik_2_angielski_e8.html",
  },
  {
    id: "angielski-arkusz-2026",
    category: "e8",
    badge: "Arkusz CKE 2026",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    title: "Rozpracowany arkusz 2026 & typy zadań na E8",
    subtitle: "Pewniaki egzaminacyjne, pułapki CKE i klucz odpowiedzi",
    description: "Szczegółowa analiza typów zadań z najnowszego arkusza CKE wraz ze wskazówkami, jak unikać utraty punktów.",
    icon: "📝",
    features: [],
    fileUrl: "/poradniki/rozpracowany_arkusz_2026_e8.html",
  },
  {
    id: "angielski-email-master",
    category: "e8",
    badge: "Forma Pisemna CKE",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    title: "Niezawodne szablony e-mail & blog na E8",
    subtitle: "Gotowe zwroty, wstępy i zakończenia pod punkty CKE",
    description: "Kompletny zestaw gotowych zwrotów i wyrażeń, które gwarantują brak utraty punktów w części pisemnej.",
    icon: "✉️",
    features: [],
    fileUrl: "/poradniki/poradnik_2_angielski_e8.html",
  },
  {
    id: "angielski-reakcje",
    category: "e8",
    badge: "Klasy 6–8 & Reakcje",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-200",
    title: "Słownik zwrotów i reakcji językowych CKE",
    subtitle: "Najczęstsze sytuacji komunikacyjne na E8",
    description: "Zestawienie najczęściej pojawiających się reakcji językowych, parafraz i przydatnych struktur.",
    icon: "💬",
    features: [],
    fileUrl: "/poradniki/poradnik_5_angielski_pp.html",
  },
];

type CategoryFilter = "all" | "e8";

export default function FreeGuides() {
  const [selectedGuide, setSelectedGuide] = useState<GuideItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOpenModal = (guide: GuideItem) => {
    setSelectedGuide(guide);
    setIsSuccess(false);
    setName("");
    setContact("");
  };

  const handleCloseModal = () => {
    setSelectedGuide(null);
    setIsSuccess(false);
  };

  const filteredGuides = guides;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact || !selectedGuide) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/diagnoza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: name,
          summaryText: `📄 POBRANIE DARMOWEGO PORADNIKA:\n- Poradnik: ${selectedGuide.title} (${selectedGuide.badge})\n- Imię: ${name}\n- Kontakt: ${contact}\n`,
          aiPrompt: `Uczeń/Rodzic ${name} (${contact}) pobrał darmowy poradnik "${selectedGuide.title}". Przygotuj powitanie i propozycję darmowej 15-minutowej konsultacji.`,
        }),
      });

      fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Pobranie Poradnika: ${selectedGuide.badge} - ${name}`,
          _captcha: "false",
          imie: name,
          kontakt: contact,
          poradnik: selectedGuide.title,
        }),
      }).catch(console.error);

      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <section id="poradniki" aria-labelledby="guides-title" className="relative overflow-x-clip bg-slate-50 py-16 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-[-10%] h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="absolute bottom-10 left-[-10%] h-96 w-96 rounded-full bg-accent-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Baza wiedzy • Bezpłatnie"
          title="Darmowe materiały do egzaminów"
        />



        {/* Kompaktowe małe kafelki poradników */}
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
          {filteredGuides.map((guide) => (
            <motion.div
              key={guide.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 rounded-2xl bg-white p-4.5 shadow-card ring-1 ring-slate-200/80 transition-all hover:shadow-float"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">
                  {guide.icon}
                </span>
                <div>
                  <span className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-extrabold mb-1 ${guide.badgeColor}`}>
                    {guide.badge}
                  </span>
                  <h3 className="text-sm font-bold text-ink leading-snug">
                    {guide.title}
                  </h3>
                </div>
              </div>

              <Button
                type="button"
                onClick={() => handleOpenModal(guide)}
                size="md"
                className="shrink-0 text-xs py-2 px-3.5 whitespace-nowrap justify-center"
              >
                <Download className="mr-1.5 size-3.5" /> Pobierz bezpłatny PDF
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Baner pomocniczy CTA */}
        <div className="mt-10 rounded-3xl bg-brand-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">Nie wiesz, od czego zacząć?</h4>
            <p className="text-xs sm:text-sm text-brand-200 max-w-xl">
              Porozmawiamy o sytuacji ucznia, celu egzaminacyjnym i tym, jak możemy zaplanować przygotowania.
            </p>
          </div>
          <Button href="#kontakt" variant="secondary" size="lg" className="shrink-0">
            Umów bezpłatną 15-minutową konsultację <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>

      {/* MODAL POBIERANIA PORADNIKA */}
      <AnimatePresence>
        {selectedGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl ring-1 ring-slate-200"
            >
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-all"
              >
                <X className="size-5" />
              </button>

              {!isSuccess ? (
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selectedGuide.icon}</span>
                    <div>
                      <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${selectedGuide.badgeColor}`}>
                        {selectedGuide.badge}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug mt-0.5">
                        {selectedGuide.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Wpisz swoje imię oraz kontakt (e-mail lub numer telefonu), aby otrzymać bezpłatny dostępowy poradnik PDF:
                  </p>

                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Twoje Imię *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="np. Ania"
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs sm:text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        E-mail lub Telefon / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="np. ania@gmail.com lub 600 000 000"
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs sm:text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full justify-center"
                        size="lg"
                      >
                        {isSubmitting ? "Generowanie dostępu..." : "Odbierz bezpłatny poradnik →"}
                      </Button>
                    </div>

                    <p className="text-[11px] text-center text-slate-400">
                      🔒 Twoje dane są w 100% bezpieczne. Zero spamu.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="grid size-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Dostęp przyznany! 🎉
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Dziękuję {name}! Dostęp do poradnika <strong>„{selectedGuide.title}”</strong> został uaktywniony.
                  </p>

                  <div className="pt-3 space-y-3">
                    <a
                      href={selectedGuide.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-5 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 transition-all shadow-md"
                    >
                      <FileText className="mr-2 size-5" /> Otwórz Poradnik w nowej karcie
                    </a>

                    <Button
                      type="button"
                      variant="secondary"
                      onClick={handleCloseModal}
                      className="w-full justify-center text-xs"
                    >
                      Zamknij okno
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
