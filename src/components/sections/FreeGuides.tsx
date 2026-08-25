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
    id: "matematyka-e8",
    category: "e8",
    badge: "📐 Egzamin Ósmoklasisty — Matematyka",
    badgeColor: "bg-brand-100 text-brand-900 border-brand-200",
    title: "Najważniejsze zagadnienia przed E8 z matematyki",
    subtitle: "Wymagania CKE i najważniejsze typy zadań",
    description: "Poradnik zawierający zestawienie kluczowych zagadnień CKE, wskazówki dotyczące typowych błędów oraz sposób zapisu zadań otwartych.",
    icon: "📐",
    features: [],
    fileUrl: "/poradniki/poradnik_1_matematyka_e8.html",
  },
  {
    id: "angielski-e8",
    category: "e8",
    badge: "🇬🇧 Egzamin Ósmoklasisty — Język Angielski",
    badgeColor: "bg-brand-100 text-brand-900 border-brand-200",
    title: "Przygotowanie do E8 z angielskiego",
    subtitle: "Gramatyka, słownictwo, e-mail i przydatne zwroty",
    description: "Poradnik ze strukturami gramatycznymi, słownictwem, szablonymi e-maila oraz praktycznymi zwrotami na egzamin.",
    icon: "🇬🇧",
    features: [],
    fileUrl: "/poradniki/poradnik_2_angielski_e8.html",
  },
  {
    id: "matematyka-pp",
    category: "matura-pp",
    badge: "🎓 Matura Podstawowa — Matematyka",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    title: "Przygotowanie do matury podstawowej z matematyki",
    subtitle: "Karta wzorów CKE i najważniejsze typy zadań",
    description: "Przewodnik po Karcie Wzorów CKE, najważniejszych działach i powtarzalnych typach zadań na maturze podstawowej.",
    icon: "🎓",
    features: [],
    fileUrl: "/poradniki/poradnik_3_matematyka_pp.html",
  },
  {
    id: "angielski-pp",
    category: "matura-pp",
    badge: "💬 Matura Podstawowa — Język Angielski",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    title: "Przygotowanie do matury podstawowej z angielskiego",
    subtitle: "E-mail, gramatyka, słownictwo i praca z arkuszem",
    description: "Praktyczny poradnik z kluczową gramatyką, przydatnym słownictwem oraz gotowymi zwrotami do wypowiedzi pisemnej.",
    icon: "💬",
    features: [],
    fileUrl: "/poradniki/poradnik_5_angielski_pp.html",
  },
  {
    id: "matematyka-pr",
    category: "matura-pr",
    badge: "🚀 Matura Rozszerzona — Matematyka",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-200",
    title: "Przygotowanie do matury rozszerzonej z matematyki",
    subtitle: "Pochodne, optymalizacja i trudniejsze zagadnienia",
    description: "Omówienie trudniejszych zagadnień maturalnych, pochodnych, zadań z parametrem oraz sposobu pracy z arkuszem rozszerzonym.",
    icon: "🚀",
    features: [],
    fileUrl: "/poradniki/poradnik_4_matematyka_pr.html",
  },
  {
    id: "angielski-pr",
    category: "matura-pr",
    badge: "🗣️ Matura Rozszerzona — Język Angielski",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-200",
    title: "Przygotowanie do matury rozszerzonej z angielskiego",
    subtitle: "Use of English, wypowiedź pisemna i matura ustna",
    description: "Zestawienie struktur C1, Use of English, transformacji oraz wskazówki do napisania wypowiedzi argumentacyjnej i części ustnej.",
    icon: "🗣️",
    features: [],
    fileUrl: "/poradniki/poradnik_6_angielski_pr.html",
  },
];

type CategoryFilter = "all" | "e8" | "matura-pp" | "matura-pr";

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

  const filteredGuides = guides.filter((g) => {
    if (activeFilter === "all") return true;
    return g.category === activeFilter;
  });

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
          lead="Przygotowałam bezpłatne materiały, które pomogą Ci uporządkować naukę i lepiej przygotować się do egzaminu. Znajdziesz w nich najważniejsze zagadnienia, wskazówki oraz przykładowe zadania."
        />

        {/* Filtr kategorii (Kompaktowe zakładki) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: "all", label: "Wszystkie (6)" },
            { id: "e8", label: "Egzamin Ósmoklasisty" },
            { id: "matura-pp", label: "Matura Podstawowa" },
            { id: "matura-pr", label: "Matura Rozszerzona" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as CategoryFilter)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                activeFilter === tab.id
                  ? "bg-brand-900 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-200 ring-1 ring-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Kompaktowe kafelki poradników */}
        <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide) => (
            <motion.div
              key={guide.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="relative flex flex-col justify-between rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-200/80 transition-all hover:shadow-float hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="grid size-10 place-items-center rounded-2xl bg-brand-50 text-xl">
                    {guide.icon}
                  </span>
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold ${guide.badgeColor}`}>
                    {guide.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-base sm:text-lg font-bold leading-snug text-ink">
                  {guide.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-soft">
                  {guide.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <Button
                  type="button"
                  onClick={() => handleOpenModal(guide)}
                  className="w-full justify-center text-xs sm:text-sm py-2.5"
                >
                  <Download className="mr-2 size-4" /> Pobierz bezpłatny PDF
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Baner pomocniczy */}
        <div className="mt-10 rounded-3xl bg-brand-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">Potrzebujesz pomocy w przygotowaniach?</h4>
            <p className="text-xs sm:text-sm text-brand-200 max-w-xl">
              Umów się na bezpłatną 15-minutową rozmowę. Porozmawiamy o sytuacji ucznia, celu egzaminacyjnym i możliwym planie nauki.
            </p>
          </div>
          <Button href="#kontakt" variant="secondary" size="lg" className="shrink-0">
            Umów bezpłatną rozmowę <ArrowRight className="ml-2 size-4" />
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
