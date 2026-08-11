"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Bot, Copy, CheckCircle2, Sparkles, Lock, KeyRound } from "lucide-react";
import Button from "@/components/ui/Button";

// Domyślne hasło dostępu dla Oli
const ADMIN_PASSWORD = "ola";

export default function DiagnozaAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [pastedReport, setPastedReport] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  // Sprawdzanie czy Ola logowała się już w tej sesji
  useEffect(() => {
    const auth = localStorage.getItem("ola_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim().toLowerCase() === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("ola_admin_auth", "true");
      setErrorMsg("");
    } else {
      setErrorMsg("Nieprawidłowe hasło. Spróbuj ponowne!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("ola_admin_auth");
  };

  const handleGeneratePrompt = () => {
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
    p += `Przeanalizuj poniższe odpowiedzi ucznia z formularza i przygotuj dla Oli RAPORT DIAGNOSTYCZNO-STRATEGICZNY przed pierwszą bezpłatną 30-minutową rozmową zapoznawczą.\n\n`;
    p += `WYGENERUJ ODPOWIEDŹ PODZIELONĄ NA 5 SEKCJI:\n\n`;
    p += `1. 📌 SZYBKIE PODSUMOWANIE PROFILU UCZNIA:\n`;
    p += `   - Imię, przedmiot, poziom docelowy (np. E8 / Matura / Zaległości).\n`;
    p += `   - Obecna ocena vs Cel docelowy.\n`;
    p += `   - Główne obawy i trudności (blokada w mówieniu, zadania tekstowe, stres).\n`;
    p += `   - Częstotliwość i czas zajęć.\n\n`;
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
    p += `5. 🗣️ SKRYPT I STRATEGIA NA 30-MINUTOWĄ ROZMOWĘ ZAPOZNAWCZĄ:\n`;
    p += `   - Jak otworzyć rozmowę i pochwalić ucznia za test.\n`;
    p += `   - Jak przedstawić diagnozę: "Zauważyłam, że świetnie idzie Ci X, ale na Y warto poświęcić chwilę..."\n`;
    p += `   - Jak przedstawić plan i domknąć zapis na regularne lekcje.\n\n`;
    p += `===============================================================\n`;
    p += `ODPOWIEDZI UCZNIA:\n`;
    p += `===============================================================\n\n`;
    p += pastedReport.trim();

    setGeneratedPrompt(p);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
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
              Wpisz hasło dostępu, aby odblokować panel generatora promptów AI.
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

  // ZAHASŁOWANY PANEL OLI
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 size-4" /> Powrót do Strony Głównym
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
              🔓 Zalogowano jako Ola
            </span>
            <button
              onClick={handleLogout}
              className="text-xs text-slate-400 hover:text-rose-400 underline transition-colors"
            >
              Wyloguj
            </button>
          </div>
        </div>

        <div className="bg-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-700 space-y-6 shadow-xl">
          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Bot className="size-6 text-accent-400" /> Generator Promptu dla AI (Pedagogiczno-Strategicznego)
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Wklej tutaj podsumowanie wyników ucznia (z maila lub przesyłki na Messengerze), aby w 1 sekundę wygenerować dla siebie 5-sekcyjny raport z planem nauki i skryptem na rozmowę zapoznawczą!
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Wklej raport ucznia:
            </label>
            <textarea
              rows={6}
              value={pastedReport}
              onChange={(e) => setPastedReport(e.target.value)}
              placeholder="Wklej tutaj raport skopiowany od ucznia..."
              className="w-full rounded-2xl bg-slate-950 border border-slate-700 p-4 text-xs sm:text-sm text-slate-200 focus:border-brand-500 focus:outline-none"
            />
          </div>

          <Button onClick={handleGeneratePrompt} size="lg" className="w-full">
            <Sparkles className="mr-2 size-5" /> Wygeneruj Strategiczny Prompt (5 Sekcji)
          </Button>

          {generatedPrompt && (
            <div className="pt-6 border-t border-slate-700 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Gotowy Prompt dla ChatGPT / Claude:
                </span>
                <button
                  type="button"
                  onClick={handleCopyPrompt}
                  className="px-3 py-1.5 rounded-xl bg-slate-700 text-xs font-semibold hover:bg-slate-600 transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="size-4 text-emerald-400" /> Skopiowano!
                    </>
                  ) : (
                    <>
                      <Copy className="size-4 text-accent-400" /> Skopiuj Prompt
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-96 overflow-y-auto">
                {generatedPrompt}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
