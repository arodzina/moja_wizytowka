"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Copy,
  CheckCircle2,
  Sparkles,
  Lock,
  KeyRound,
  Trash2,
  Eye,
  EyeOff,
  RefreshCw,
  Search,
  UserCheck,
  FileText,
  PlusCircle,
  Database,
  HelpCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";

interface Submission {
  id: string;
  createdAt: string;
  studentName: string;
  summaryText: string;
  aiPrompt: string;
}

export default function DiagnozaAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [storageMode, setStorageMode] = useState<string>("file");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Dodawanie ręczne do bazy
  const [showAddForm, setShowAddForm] = useState(false);
  const [addName, setAddName] = useState("");
  const [addSummary, setAddSummary] = useState("");
  const [addPrompt, setAddPrompt] = useState("");
  const [addSuccessMsg, setAddSuccessMsg] = useState("");

  // Ręczny generator
  const [pastedReport, setPastedReport] = useState("");
  const [manualPrompt, setManualPrompt] = useState("");
  const [copiedManual, setCopiedManual] = useState(false);

  // Sprawdzanie czy Ola logowała się już w tej sesji
  useEffect(() => {
    const storedPass = sessionStorage.getItem("ola_admin_pass");
    if (storedPass) {
      setSavedPassword(storedPass);
      fetchSubmissions(storedPass);
    }
  }, []);

  const fetchSubmissions = async (passToUse?: string) => {
    const pass = passToUse || savedPassword || sessionStorage.getItem("ola_admin_pass") || "";
    if (!pass) return;

    setLoading(true);
    try {
      const res = await fetch("/api/diagnoza", {
        headers: {
          "x-admin-password": pass,
        },
      });

      if (res.status === 401) {
        setIsAuthenticated(false);
        sessionStorage.removeItem("ola_admin_pass");
        setErrorMsg("Nieprawidłowe hasło lub sesja wygasła.");
        return;
      }

      const data = await res.json();
      if (data.submissions) {
        setSubmissions(data.submissions);
        if (data.storageMode) setStorageMode(data.storageMode);
        setIsAuthenticated(true);
        setErrorMsg("");
      }
    } catch (err) {
      console.error("Błąd podczas pobierania zgłoszeń:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const entered = passwordInput.trim();
    if (!entered) return;

    setLoading(true);
    try {
      const res = await fetch("/api/diagnoza", {
        headers: {
          "x-admin-password": entered,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setSavedPassword(entered);
        sessionStorage.setItem("ola_admin_pass", entered);
        setIsAuthenticated(true);
        setErrorMsg("");
        if (data.submissions) {
          setSubmissions(data.submissions);
          if (data.storageMode) setStorageMode(data.storageMode);
        }
      } else {
        setErrorMsg("Nieprawidłowe hasło. Spróbuj ponownie!");
      }
    } catch (err) {
      setErrorMsg("Błąd połączenia z serwerem.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSavedPassword("");
    sessionStorage.removeItem("ola_admin_pass");
  };

  const handleCopyPrompt = (promptText: string, id: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  const handleDeleteSubmission = async (id: string) => {
    if (!confirm("Czy na pewno chcesz usunąć tę diagnozę z listy?")) return;
    const pass = savedPassword || sessionStorage.getItem("ola_admin_pass") || "";
    try {
      const res = await fetch("/api/diagnoza", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": pass,
        },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
      } else {
        alert("Błąd autoryzacji przy usuwaniu.");
      }
    } catch (err) {
      console.error("Błąd przy usuwaniu:", err);
    }
  };

  const handleAddManualStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!addName.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/diagnoza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: addName.trim(),
          summaryText: addSummary.trim() || `Ręcznie dodany raport dla: ${addName.trim()}`,
          aiPrompt: addPrompt.trim() || manualPrompt.trim() || "Brak promptu",
        }),
      });

      if (res.ok) {
        setAddSuccessMsg(`Dodano ucznia ${addName} do bazy!`);
        setAddName("");
        setAddSummary("");
        setAddPrompt("");
        setTimeout(() => setAddSuccessMsg(""), 4000);
        fetchSubmissions();
      } else {
        alert("Błąd zapisu ucznia.");
      }
    } catch (err) {
      console.error("Błąd ręcznego dodawania:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateManualPrompt = () => {
    if (!pastedReport.trim()) return;

    let p = `Jesteś moim osobistym asystentem pedagogiczno-strategicznym dla Oli — korepetytorki online z matematyki i języka angielskiego.\n\n`;
    p += `O OLI (KOREPETYTORCE):\n`;
    p += `- Wykształcenie: Informatyka i Ekonometria na AGH w Krakowie (analityczne myślenie), angielski C1 (Erasmus+ w Portugalii), autorka kursu "Notion Master" na Udemy.\n`;
    p += `- Przedmioty:\n`;
    p += `  1) Matematyka: Szkoła Podstawowa kl. 4–8 oraz Egzamin Ósmoklasisty (NIE uczy matematyki w liceum!).\n`;
    p += `  2) Angielski: Podstawówka kl. 4–8, E8 oraz Liceum (Matura Podstawowa i Rozszerzona B1/B2/C1).\n`;
    p += `- Styl pracy:\n`;
    p += `  - Spokój, brak oceniania ("Tłumaczę tyle razy, ile trzeba, aż zaskoczy").\n`;
    p += `  - Nieszablonowa aktywizacja: nauka słownictwa przez gry (wisielec, kółko-krzyżyk, quizy).\n`;
    p += `  - Mówienie na 1. miejscu na angielskim (przełamywanie bariery).\n`;
    p += `  - Wyjątkowa organizacja: przygotowuje każdą lekcję, wysyła notatki po zajęciach, układa plany powtórek w Notion.\n`;
    p += `  - Posiada oficjalne arkusze CKE i repetytoria.\n\n`;

    p += `TWOJE ZADANIE:\n`;
    p += `Przeanalizuj poniższe odpowiedzi ucznia z formularza i przygotuj dla Oli RAPORT DIAGNOSTYCZNO-STRATEGICZNY przed pierwszą bezpłatną 15-minutową rozmową zapoznawczą.\n\n`;
    p += `WYGENERUJ ODPOWIEDŹ PODZIELONĄ NA 5 SEKCJI:\n\n`;
    p += `1. 📌 SZYBKIE PODSUMOWANIE PROFILU UCZNIA:\n`;
    p += `   - Imię, przedmiot, poziom docelowy (np. E8 / Matura / Zaległości).\n`;
    p += `   - Obecna ocena vs Cel docelowy.\n`;
    p += `   - Główne obawy i trudności (blokada w mówieniu, zadania tekstowe, stres).\n`;
    p += `   - Częstotliwość i czas zajęć oraz pora dnia.\n\n`;
    p += `2. 🔍 DIAGNOZA LUK (ANALIZA QUIZU):\n`;
    p += `   - Wskaż 3-5 konkretnych zagadnień z quizu, w których uczeń popełnił błąd lub zaznaczył "Nie wiem / gubię się w tym".\n`;
    p += `   - Podziel je na: a) Fundamenty do uzupełnienia, b) Zagadnienia egzaminacyjne.\n\n`;
    p += `3. 🗺️ RAMOWY PLAN NA PIERWSZE 4 LEKCJE:\n`;
    p += `   - Lekcja 1: Uzupełnienie kluczowej luki fundamentowej + przełamanie stresu.\n`;
    p += `   - Lekcja 2: Przepracowanie zagadnienia X z użyciem wciągającej gry/metody.\n`;
    p += `   - Lekcja 3: Praktyka na arkuszach CKE / konwersacje.\n`;
    p += `   - Lekcja 4: Podsumowanie pierwszego miesiąca i sprawdzenie postępów.\n\n`;
    p += `4. 🧰 PROPONOWANE METODY, MATERIAŁY I GRY:\n`;
    p += `   - Wskaż odpowiednie repetytorium / arkusze CKE.\n`;
    p += `   - Zaproponuj 2 konkretne gry/aktywizacje (np. wisielec ze słownictwa z działu X, kółko-krzyżyk na czasy).\n`;
    p += `   - Wyślij propozycję notatki polekcyjnej i planu w Notion.\n\n`;
    p += `5. 🗣️ SKRYPT I STRATEGIA NA 15-MINUTOWĄ ROZMOWĘ ZAPOZNAWCZĄ:\n`;
    p += `   - Jak otworzyć rozmowę i pochwalić ucznia za test.\n`;
    p += `   - Jak przedstawić diagnozę: "Zauważyłam, że świetnie idzie Ci X, ale na Y warto poświęcić chwilę..."\n`;
    p += `   - Jak przedstawić plan i domknąć zapis na regularne lekcje.\n\n`;
    p += `===============================================================\n`;
    p += `ODPOWIEDZI UCZNIA:\n`;
    p += `===============================================================\n\n`;
    p += pastedReport.trim();

    setManualPrompt(p);
  };

  const filteredSubmissions = submissions.filter(
    (sub) =>
      sub.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.summaryText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStorageBadge = () => {
    switch (storageMode) {
      case "supabase":
        return (
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 flex items-center gap-1.5" title="Dane są trwale zapisane w bazie Supabase PostgreSQL">
            <Database className="size-3.5" /> Baza chmurowa: Supabase
          </span>
        );
      case "kv":
        return (
          <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30 flex items-center gap-1.5" title="Dane są zapisane w Vercel KV / Upstash Redis">
            <Database className="size-3.5" /> Baza chmurowa: Vercel KV
          </span>
        );
      case "tmp":
        return (
          <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30 flex items-center gap-1.5" title="Brak skonfigurowanej bazy chmurowej na Vercel (zapis w /tmp)">
            <Database className="size-3.5" /> Tryb tymczasowy (/tmp)
          </span>
        );
      default:
        return (
          <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30 flex items-center gap-1.5" title="Zapis lokalny w pliku raporty_uczniow/submissions.json">
            <Database className="size-3.5" /> Baza lokalna: Dysk
          </span>
        );
    }
  };

  // EKRAN LOGOWANIA HASŁEM
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl text-center space-y-6">
          <div className="inline-grid place-items-center size-14 rounded-2xl bg-brand-500/20 text-brand-400 mx-auto border border-brand-500/30">
            <Lock className="size-7" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-white">Panel Administracyjny Oli</h1>
            <p className="text-xs text-slate-400 mt-1">
              Wpisz hasło dostępu, aby odblokować automatyczną listę diagnoz.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                <KeyRound className="size-3.5 text-brand-400" /> Hasło dostępu:
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Wpisz hasło..."
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-400 font-semibold bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/20">
                ⚠️ {errorMsg}
              </p>
            )}

            <Button type="submit" className="w-full">
              Odblokuj Panel <ArrowLeft className="ml-2 size-4 rotate-180" />
            </Button>
          </form>

          <div className="pt-2 border-t border-slate-800">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-1.5 size-3.5" /> Powrót do strony głównej
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // PANEL OLI - AUTOMATYCZNA LISTA DIAGNOZ Z MOŻLIWOŚCIĄ RĘCZNEGO DODAWCZEGO
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Górna nawigacja */}
        <div className="flex flex-wrap justify-between items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 size-4" /> Strona główna
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            {renderStorageBadge()}

            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 flex items-center gap-1.5">
              <UserCheck className="size-3.5" /> Zalogowano jako Ola
            </span>
            <button
              onClick={handleLogout}
              className="text-xs text-slate-400 hover:text-rose-400 underline transition-colors"
            >
              Wyloguj
            </button>
          </div>
        </div>

        {/* Nagłówek główny */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
                <Bot className="size-7 text-accent-400" /> Baza Diagnoz Uczniów
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Kiedy uczeń wypełni formularz, jego diagnoza pojawia się tutaj automatycznie. Kliknij <strong>„Skopiuj prompt dla AI”</strong> i wklej do ChatGPT!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-xs font-semibold text-white transition-colors border border-brand-500"
              >
                <PlusCircle className="size-4" />
                {showAddForm ? "Zamknij dodawanie" : "Dodaj ucznia"}
              </button>

              <button
                onClick={() => fetchSubmissions()}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors border border-slate-700"
              >
                <RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} />
                Odśwież listę
              </button>
            </div>
          </div>

          {/* Formularz ręcznego dodawania ucznia */}
          {showAddForm && (
            <form onSubmit={handleAddManualStudent} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <PlusCircle className="size-4 text-brand-400" /> Ręczne wprowadzanie ucznia do bazy
                </h3>
                <span className="text-xs text-slate-400">Dla zgłoszeń telefonicznych, z SMS lub e-maila</span>
              </div>

              {addSuccessMsg && (
                <p className="text-xs text-emerald-300 font-semibold bg-emerald-500/20 p-2.5 rounded-xl border border-emerald-500/30">
                  ✅ {addSuccessMsg}
                </p>
              )}

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Imię ucznia / rodzica:</label>
                  <input
                    type="text"
                    required
                    value={addName}
                    onChange={(e) => setAddName(e.target.value)}
                    placeholder="np. Tomek (kl. 8 E8)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Treść raportu / odpowiedzi:</label>
                  <textarea
                    rows={4}
                    value={addSummary}
                    onChange={(e) => setAddSummary(e.target.value)}
                    placeholder="Opis trudności, ocen, przedmiotu i preferencji ucznia..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Prompt dla ChatGPT / Claude (opcjonalnie):</label>
                  <textarea
                    rows={3}
                    value={addPrompt}
                    onChange={(e) => setAddPrompt(e.target.value)}
                    placeholder="Jeśli wygenerowałaś prompt niżej, wklej go tutaj lub zostaw puste..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                  >
                    Anuluj
                  </button>
                  <Button type="submit" size="md">
                    Zapisz w bazie <CheckCircle2 className="ml-1.5 size-4" />
                  </Button>
                </div>
              </div>
            </form>
          )}

          {/* Wyszukiwarka */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3 size-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Szukaj ucznia po imieniu lub zawartości..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-brand-500 focus:outline-none"
            />
          </div>
        </div>

        {/* POMOCNIK I INFORMACJA O BAZIE DANYCH */}
        {storageMode === "tmp" && (
          <div className="bg-amber-500/10 rounded-2xl p-4 border border-amber-500/20 text-xs text-amber-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-300">
              <HelpCircle className="size-4 text-amber-400" /> Uwaga dotycząca zapisu w chmurze Vercel:
            </div>
            <p className="leading-relaxed">
              Strona działa na Vercel w trybie bezstanowym. Wyniki są też przesyłane automatycznie na Twój e-mail (<strong>kontakt.ola.korepetycje@gmail.com</strong>). Aby baza wpisów w tym panelu była w 100% trwała bez resetowania po restarcie serwera, wystarczy dodać zmienne <code>SUPABASE_URL</code> i <code>SUPABASE_KEY</code> lub <code>KV_REST_API_URL</code> w panelu Vercel.
            </p>
          </div>
        )}

        {/* LISTA DIAGNOZ */}
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <div className="bg-slate-900/60 rounded-3xl p-10 text-center border border-slate-800 space-y-3">
              <FileText className="size-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-300">Brak zapisanych diagnoz w bazie</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Gdy pierwszy uczeń wypełni formularz na stronie `/diagnoza`, jego wyniki pojawią się tutaj automatycznie. Możesz też dodać ucznia ręcznie przyciskiem wyżej!
              </p>
            </div>
          ) : (
            filteredSubmissions.map((sub) => {
              const isExpanded = expandedId === sub.id;
              const isCopied = copiedId === sub.id;

              return (
                <div
                  key={sub.id}
                  className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-lg space-y-4 transition-all hover:border-slate-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-white">👤 {sub.studentName}</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 font-semibold border border-brand-500/30">
                          {sub.createdAt}
                        </span>
                      </div>
                    </div>

                    {/* PRZYCISK KOPIOWANIA PROMPTU */}
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => handleCopyPrompt(sub.aiPrompt, sub.id)}
                        size="md"
                        className={isCopied ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                      >
                        {isCopied ? (
                          <>
                            <CheckCircle2 className="mr-1.5 size-4 text-emerald-200" /> Skopiowano Prompt!
                          </>
                        ) : (
                          <>
                            <Copy className="mr-1.5 size-4" /> 📋 Skopiuj prompt dla AI
                          </>
                        )}
                      </Button>

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : sub.id)}
                        className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
                        title={isExpanded ? "Zwiń raport" : "Rozwiń pełny raport"}
                      >
                        {isExpanded ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </button>

                      <button
                        onClick={() => handleDeleteSubmission(sub.id)}
                        className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
                        title="Usuń z listy"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>

                  {/* Podgląd skrótowy / pełny */}
                  {isExpanded ? (
                    <div className="space-y-4 pt-2">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          📄 Pełny Raport Ucznia:
                        </h4>
                        <pre className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-60 overflow-y-auto">
                          {sub.summaryText}
                        </pre>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                          🤖 Wygenerowany Prompt dla ChatGPT / Claude:
                        </h4>
                        <pre className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-emerald-300/90 font-mono whitespace-pre-wrap max-h-60 overflow-y-auto">
                          {sub.aiPrompt}
                        </pre>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-400 line-clamp-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800 font-mono">
                      {sub.summaryText.slice(0, 200)}...
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* REZERWOWY GENERATOR RĘCZNY (GDYBY OLA CHCIAŁA WKLEIĆ COŚ SAMA) */}
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <details className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
            <summary className="cursor-pointer font-bold text-sm text-slate-300 hover:text-white flex items-center justify-between">
              <span>🛠️ Opcjonalnie: Ręczne generowanie promptu z wklejonego tekstu</span>
              <Sparkles className="size-4 text-accent-400" />
            </summary>
            <div className="mt-4 space-y-4 pt-4 border-t border-slate-800">
              <textarea
                rows={5}
                value={pastedReport}
                onChange={(e) => setPastedReport(e.target.value)}
                placeholder="Wklej dowolne zapiski lub odpowiedzi ucznia tutaj..."
                className="w-full rounded-2xl bg-slate-950 border border-slate-800 p-4 text-xs sm:text-sm text-slate-200 focus:border-brand-500 focus:outline-none"
              />
              <Button onClick={handleGenerateManualPrompt} size="md">
                Wygeneruj prompt z wklejonego tekstu
              </Button>

              {manualPrompt && (
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-emerald-400">Prompt ręczny:</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(manualPrompt);
                        setCopiedManual(true);
                        setTimeout(() => setCopiedManual(false), 3000);
                      }}
                      className="text-xs text-accent-400 hover:underline"
                    >
                      {copiedManual ? "Skopiowano!" : "Skopiuj"}
                    </button>
                  </div>
                  <pre className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-60 overflow-y-auto">
                    {manualPrompt}
                  </pre>
                </div>
              )}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
