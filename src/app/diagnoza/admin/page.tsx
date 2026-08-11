"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bot, Copy, CheckCircle2, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function DiagnozaAdminPage() {
  const [pastedReport, setPastedReport] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGeneratePrompt = () => {
    if (!pastedReport.trim()) return;

    let p = `Jesteś doświadczonym, empatycznym korepetytorem i dydaktykiem. Oto pełny raport z bezstresowej diagnozy ucznia przed rozpoczęciem korepetycji:\n\n`;
    p += pastedReport.trim();
    p += `\n\nNa podstawie powyższych danych ułóż dla mnie dedykowany, tygodniowy plan nauki (np. na pierwsze 4 tygodnie lekcji), zawierający:\n`;
    p += `1. Najważniejsze cele i priorytety do opanowania w pierwszej kolejności.\n`;
    p += `2. Sugerowane metody pracy (np. gry językowe, zadania tekstowe krok po kroku, praca na schematach) uwzględniające lęki i trudności ucznia.\n`;
    p += `3. Propozycję struktury pojedynczej 60-minutowej lekcji (np. rozgrzewka, nowy materiał, utrwalenie, notatka po lekcji).\n`;
    p += `4. Wskazówki jak prowadzić zajęcia bezstresowo i podnieść pewność siebie ucznia.`;

    setGeneratedPrompt(p);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <Link
            href="/diagnoza"
            className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 size-4" /> Powrót do Diagnozy
          </Link>
          <span className="text-xs px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 font-semibold border border-brand-500/30">
            🔐 Tajny Panel dla Oli
          </span>
        </div>

        <div className="bg-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-700 space-y-6 shadow-xl">
          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Bot className="size-6 text-accent-400" /> Generator Promptu dla AI
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Wklej tutaj podsumowanie wyników ucznia (które uczeń Ci przesłał lub skopiował), aby w 1 sekundę wygenerować dla siebie gotowy Prompt do ułożenia planu nauki w ChatGPT/Claude!
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
            <Sparkles className="mr-2 size-5" /> Wygeneruj Prompt dla AI
          </Button>

          {generatedPrompt && (
            <div className="pt-6 border-t border-slate-700 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Gotowy Prompt (Gotowy do ChatGPT):
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

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-80 overflow-y-auto">
                {generatedPrompt}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
