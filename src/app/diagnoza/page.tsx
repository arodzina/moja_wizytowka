"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowLeft, ArrowRight, Send, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

type SubjectType =
  | "matematyka-4-6"
  | "matematyka-7-8"
  | "angielski-4-6"
  | "angielski-7-8"
  | "angielski-matura-podstawowa"
  | "angielski-matura-rozszerzona";

interface Question {
  id: string;
  levelLabel: string;
  question: string;
  options: { label: string; isCorrect: boolean }[];
}

const MATH_QUESTIONS: Question[] = [
  {
    id: "m1",
    levelLabel: "🟢 Poziom 1: Podstawy rachunkowe i ułamki (kl. 4–6)",
    question: "Kolejność działań: 4 + 2 · (6 - 3) = ?",
    options: [
      { label: "18", isCorrect: false },
      { label: "10", isCorrect: true },
      { label: "14", isCorrect: false },
      { label: "Nie wiem / gubię się w nawiasach", isCorrect: false },
    ],
  },
  {
    id: "m2",
    levelLabel: "🟢 Poziom 1: Podstawy rachunkowe i ułamki (kl. 4–6)",
    question: "Ułamki zwykłe: ⅔ + ¼ = ?",
    options: [
      { label: "¾", isCorrect: false },
      { label: "⅖", isCorrect: false },
      { label: "¹¹/₁₂", isCorrect: true },
      { label: "Nie umiem sprowadzać do wspólnego mianownika", isCorrect: false },
    ],
  },
  {
    id: "m3",
    levelLabel: "🟢 Poziom 1: Podstawy rachunkowe i ułamki (kl. 4–6)",
    question: "Ułamki dziesiętne: 1,5 · 0,4 = ?",
    options: [
      { label: "0,6", isCorrect: true },
      { label: "6", isCorrect: false },
      { label: "0,06", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "m4",
    levelLabel: "🟢 Poziom 1: Podstawy rachunkowe i ułamki (kl. 4–6)",
    question: "Liczby ujemne: -7 - (-12) = ?",
    options: [
      { label: "-19", isCorrect: false },
      { label: "5", isCorrect: true },
      { label: "-5", isCorrect: false },
      { label: "Gubię się przy minusach", isCorrect: false },
    ],
  },
  {
    id: "m5",
    levelLabel: "🟡 Poziom 2: Równania, Procenty i Potęgi (kl. 7–8 / E8)",
    question: "Równania: Rozwiąż: 3x - 4 = 2(x + 3). Ile wynosi x?",
    options: [
      { label: "x = 10", isCorrect: true },
      { label: "x = 2", isCorrect: false },
      { label: "x = 7", isCorrect: false },
      { label: "Nie potrafię przekształcać równań", isCorrect: false },
    ],
  },
  {
    id: "m6",
    levelLabel: "🟡 Poziom 2: Równania, Procenty i Potęgi (kl. 7–8 / E8)",
    question: "Procenty: Towar kosztował 200 zł. Cenę podniesiono o 20%, a potem obniżono o 10%. Cena końcowa = ?",
    options: [
      { label: "216 zł", isCorrect: true },
      { label: "220 zł", isCorrect: false },
      { label: "200 zł", isCorrect: false },
      { label: "Procenty sprawiają mi duży kłopot", isCorrect: false },
    ],
  },
  {
    id: "m7",
    levelLabel: "🟡 Poziom 2: Równania, Procenty i Potęgi (kl. 7–8 / E8)",
    question: "Potęgi i Pierwiastki: Wyłącz czynnik przed pierwiastek z √72:",
    options: [
      { label: "6√2", isCorrect: true },
      { label: "2√6", isCorrect: false },
      { label: "36√2", isCorrect: false },
      { label: "Nie pamiętam wzorów na pierwiastki", isCorrect: false },
    ],
  },
  {
    id: "m8",
    levelLabel: "🔴 Poziom 3: Geometria i Twierdzenia (kl. 8 / E8)",
    question: "Geometria płaska: Pole trapezu o podstawach 6 cm, 10 cm i wysokości 4 cm wynosi:",
    options: [
      { label: "64 cm²", isCorrect: false },
      { label: "32 cm²", isCorrect: true },
      { label: "40 cm²", isCorrect: false },
      { label: "Nie pamiętam wzoru na trapez", isCorrect: false },
    ],
  },
  {
    id: "m9",
    levelLabel: "🔴 Poziom 3: Geometria i Twierdzenia (kl. 8 / E8)",
    question: "Twierdzenie Pitagorasa: W trójkącie prostokątnym a = 6 cm, c = 10 cm. Przyprostokątna b = ?",
    options: [
      { label: "8 cm", isCorrect: true },
      { label: "4 cm", isCorrect: false },
      { label: "√136 cm", isCorrect: false },
      { label: "Nie pamiętam twierdzenia Pitagorasa", isCorrect: false },
    ],
  },
  {
    id: "m10",
    levelLabel: "🔴 Poziom 3: Geometria i Twierdzenia (kl. 8 / E8)",
    question: "Stereometria (Bryły): Objętość sześcianu o krawędzi a = 4 cm wynosi:",
    options: [
      { label: "16 cm³", isCorrect: false },
      { label: "48 cm³", isCorrect: false },
      { label: "64 cm³", isCorrect: true },
      { label: "Gubię się w geometrii przestrzennej", isCorrect: false },
    ],
  },
];

const ENG_SP_QUESTIONS: Question[] = [
  {
    id: "e_sp1",
    levelLabel: "🟢 Poziom 1: Podstawy (A1/A2)",
    question: "Present Simple vs Continuous: Listen! She __________ the piano in her room right now.",
    options: [
      { label: "plays", isCorrect: false },
      { label: "is playing", isCorrect: true },
      { label: "played", isCorrect: false },
      { label: "Nie wiem", isCorrect: false },
    ],
  },
  {
    id: "e_sp2",
    levelLabel: "🟢 Poziom 1: Podstawy (A1/A2)",
    question: "Czasowniki nieregularne: Last weekend I __________ a big cake for my family.",
    options: [
      { label: "make", isCorrect: false },
      { label: "maked", isCorrect: false },
      { label: "made", isCorrect: true },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_sp3",
    levelLabel: "🟢 Poziom 1: Podstawy (A1/A2)",
    question: "Stopniowanie przymiotników: Football is __________ than tennis in Poland.",
    options: [
      { label: "popularer", isCorrect: false },
      { label: "more popular", isCorrect: true },
      { label: "most popular", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_sp4",
    levelLabel: "🟡 Poziom 2: Średniozaawansowany (B1 / E8)",
    question: "Present Perfect: Have you ever __________ to London?",
    options: [
      { label: "be", isCorrect: false },
      { label: "went", isCorrect: false },
      { label: "been", isCorrect: true },
      { label: "Nie znam tego czasu", isCorrect: false },
    ],
  },
  {
    id: "e_sp5",
    levelLabel: "🟡 Poziom 2: Średniozaawansowany (B1 / E8)",
    question: "Czasowniki modalne: You __________ run in the school corridor. It's strictly forbidden!",
    options: [
      { label: "mustn't", isCorrect: true },
      { label: "don't have to", isCorrect: false },
      { label: "should", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_sp6",
    levelLabel: "🟡 Poziom 2: Średniozaawansowany (B1 / E8)",
    question: "Przyimki czasu/miejsca: The concert starts __________ 7 p.m. __________ Friday.",
    options: [
      { label: "in / at", isCorrect: false },
      { label: "at / on", isCorrect: true },
      { label: "on / at", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_sp7",
    levelLabel: "🟡 Poziom 2: Średniozaawansowany (B1 / E8)",
    question: "Reakcje językowe: Jak powiesz po angielsku 'Czy możesz mi pomóc?':",
    options: [
      { label: "Could you give me a hand?", isCorrect: true },
      { label: "Do you have help?", isCorrect: false },
      { label: "Are you helping me?", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
];

const ENG_LICEUM_QUESTIONS: Question[] = [
  {
    id: "e_lic1",
    levelLabel: "🟢 Poziom 1: Matura Podstawowa (B1/B2)",
    question: "Passive Voice (Strona bierna): A new sports center __________ in our town next month.",
    options: [
      { label: "will build", isCorrect: false },
      { label: "is being built", isCorrect: true },
      { label: "has built", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_lic2",
    levelLabel: "🟢 Poziom 1: Matura Podstawowa (B1/B2)",
    question: "Reported Speech (Mowa zależna): 'I bought a new car yesterday.' -> She said she __________ a new car the day before.",
    options: [
      { label: "bought", isCorrect: false },
      { label: "had bought", isCorrect: true },
      { label: "buys", isCorrect: false },
      { label: "Nie znam mowy zależnej", isCorrect: false },
    ],
  },
  {
    id: "e_lic3",
    levelLabel: "🟢 Poziom 1: Matura Podstawowa (B1/B2)",
    question: "Conditionals (Okresy warunkowe): If I had studied harder, I __________ the exam last week.",
    options: [
      { label: "would pass", isCorrect: false },
      { label: "would have passed", isCorrect: true },
      { label: "will pass", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_lic4",
    levelLabel: "🔴 Poziom 2: Matura Rozszerzona & C1 (B2+/C1)",
    question: "Phrasal Verbs: I really can't __________ up with his constant complaining any longer.",
    options: [
      { label: "put", isCorrect: true },
      { label: "take", isCorrect: false },
      { label: "keep", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_lic5",
    levelLabel: "🔴 Poziom 2: Matura Rozszerzona & C1 (B2+/C1)",
    question: "Inwersja stylistyczna: Under no circumstances __________ leave the room during the test.",
    options: [
      { label: "you should", isCorrect: false },
      { label: "should you", isCorrect: true },
      { label: "you would", isCorrect: false },
      { label: "Nie znam inwersji", isCorrect: false },
    ],
  },
  {
    id: "e_lic6",
    levelLabel: "🔴 Poziom 2: Matura Rozszerzona & C1 (B2+/C1)",
    question: "Konstrukcje Wish / Hypothetical: I wish I __________ more time for my hobbies these days.",
    options: [
      { label: "had", isCorrect: true },
      { label: "have", isCorrect: false },
      { label: "would have", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_lic7",
    levelLabel: "🔴 Poziom 2: Matura Rozszerzona & C1 (B2+/C1)",
    question: "Parafraza zdania: Although it was raining, they played football. -> In spite of the __________ weather, they played football.",
    options: [
      { label: "rainy / raining", isCorrect: true },
      { label: "rainily", isCorrect: false },
      { label: "rained", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
];

const MATH_CONCEPT_MAP = [
  "Budowanie równań do zadań tekstowych (z treścią)",
  "Zadania na prędkość, drogę i czas (s = v · t)",
  "Wyznaczanie niewiadomej ze wzoru (np. wyznacz h z P = a·h/2)",
  "Zamiana jednostek pola i objętości (metry, cm², litry, hektary)",
  "Kąty w trójkątach, równoległobokach i trapezach",
  "Średnia arytmetyczna i odczytywanie wykresów",
];

const ENG_SP_VOCAB_TOPICS = [
  "Człowiek, wygląd i cechy charakteru",
  "Dom, pomieszczenia i meble",
  "Świat przyrody, pogoda i środowisko",
  "Zdrowie, choroby i wizyta u lekarza",
  "Zakupy, usługi i płatności",
  "Podróżowanie i środki transportu",
];

export default function DiagnozaPage() {
  const [step, setStep] = useState<number>(1);
  const [studentName, setStudentName] = useState("");
  const [schoolClass, setSchoolClass] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState<SubjectType>("matematyka-7-8");
  const [grade, setGrade] = useState("3");
  const [goal, setGoal] = useState("");

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [conceptMap, setConceptMap] = useState<Record<string, string>>({});
  const [mathFears, setMathFears] = useState<string[]>([]);

  // Samoocena Angielski SP
  const [speakingEval, setSpeakingEval] = useState("🟢 Mówię chętnie");
  const [listeningEval, setListeningEval] = useState("🟢 Rozumiem bez problemu");
  const [writingEvalSP, setWritingEvalSP] = useState("🟢 Wiem jak zacząć i skończyć");
  const [grammarEvalSP, setGrammarEvalSP] = useState("🟢 Znam czasy");
  const [engVocabDiffs, setEngVocabDiffs] = useState<string[]>([]);

  // Samoocena Angielski Liceum
  const [writingEvalLic, setWritingEvalLic] = useState("Znam strukturę i łączniki");
  const [oralMaturaEvalLic, setOralMaturaEvalLic] = useState("Mówię płynnie");
  const [useOfEnglishEval, setUseOfEnglishEval] = useState("Daję radę na 80%+");

  const [copied, setCopied] = useState(false);

  const getQuestions = () => {
    if (subject === "matematyka-4-6") return MATH_QUESTIONS.slice(0, 4);
    if (subject === "matematyka-7-8") return MATH_QUESTIONS;
    if (subject === "angielski-4-6") return ENG_SP_QUESTIONS.slice(0, 3);
    if (subject === "angielski-7-8") return ENG_SP_QUESTIONS;
    if (subject === "angielski-matura-podstawowa") return ENG_LICEUM_QUESTIONS.slice(0, 3);
    return ENG_LICEUM_QUESTIONS;
  };

  const handleOptionSelect = (qId: string, optionLabel: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionLabel }));
  };

  const toggleArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    setter((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  };

  const calculateScore = () => {
    const questions = getQuestions();
    let score = 0;
    questions.forEach((q) => {
      const selected = answers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect);
      if (selected && correctOpt && selected === correctOpt.label) {
        score += 1;
      }
    });
    return { score, total: questions.length };
  };

  const getSubjectLabel = (s: SubjectType) => {
    switch (s) {
      case "matematyka-4-6":
        return "Matematyka (klasy 4–6)";
      case "matematyka-7-8":
        return "Matematyka (klasy 7–8 & Egzamin Ósmoklasisty)";
      case "angielski-4-6":
        return "Język Angielski (klasy 4–6)";
      case "angielski-7-8":
        return "Język Angielski (klasy 7–8 & Egzamin Ósmoklasisty)";
      case "angielski-matura-podstawowa":
        return "Język Angielski (Liceum / Matura Podstawowa)";
      case "angielski-matura-rozszerzona":
        return "Język Angielski (Liceum / Matura Rozszerzona)";
    }
  };

  const buildSummaryText = () => {
    const questions = getQuestions();
    const { score, total } = calculateScore();

    let text = `📄 RAPORT DIAGNOSTYCZNY:\n`;
    text += `👤 Uczeń: ${studentName || "Nie podano"}\n`;
    text += `🏫 Klasa/Szkoła: ${schoolClass || "Nie podano"}\n`;
    text += `📧 Kontakt: ${contact || "Nie podano"}\n`;
    text += `📚 Przedmiot i poziom: ${getSubjectLabel(subject)}\n`;
    text += `⭐ Ocena w szkole: ${grade}\n`;
    text += `🎯 Cel z lekcji / Co chcesz osiągnąć: ${goal || "Nie podano"}\n\n`;
    text += `📊 WYNIK TESTU WIEDZY TWARDEJ: ${score} / ${total} poprawnych\n\n`;

    text += `--- SZCZEGÓŁY ODPOWIEDZI ---\n`;
    questions.forEach((q, idx) => {
      const ans = answers[q.id] || "Brak odpowiedzi";
      text += `${idx + 1}. ${q.question}\n   -> Odpowiedź: ${ans}\n`;
    });

    if (subject.startsWith("matematyka")) {
      text += `\n--- MAPA POJĘĆ MATEMATYCZNYCH ---\n`;
      MATH_CONCEPT_MAP.forEach((c) => {
        text += `- ${c}: ${conceptMap[c] || "Brak oceny"}\n`;
      });
      if (mathFears.length > 0) {
        text += `\n⚠️ Główne lęki i trudności:\n- ${mathFears.join("\n- ")}\n`;
      }
    }

    if (subject.startsWith("angielski-4") || subject.startsWith("angielski-7")) {
      text += `\n--- SAMOOCENA SPRAWNOŚCI (ANGIELSKI SP) ---\n`;
      text += `- Mówienie: ${speakingEval}\n`;
      text += `- Słuchanie: ${listeningEval}\n`;
      text += `- Pisanie: ${writingEvalSP}\n`;
      text += `- Gramatyka: ${grammarEvalSP}\n`;
      if (engVocabDiffs.length > 0) {
        text += `\n📚 Trudne działy słownictwa E8:\n- ${engVocabDiffs.join("\n- ")}\n`;
      }
    }

    if (subject.startsWith("angielski-matura")) {
      text += `\n--- SAMOOCENA MATURALNA ---\n`;
      text += `- Wypowiedź pisemna: ${writingEvalLic}\n`;
      text += `- Matura Ustna: ${oralMaturaEvalLic}\n`;
      text += `- Środki językowe: ${useOfEnglishEval}\n`;
    }

    return text;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(buildSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendEmail = () => {
    const body = encodeURIComponent(buildSummaryText());
    const subjectText = encodeURIComponent(`Diagnoza przed lekcją — ${studentName || "Uczeń"}`);
    window.open(`mailto:${site.email}?subject=${subjectText}&body=${body}`, "_blank");
  };

  const currentQuestions = getQuestions();
  const allQuestionsAnswered = currentQuestions.every((q) => answers[q.id]);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors"
          >
            <ArrowLeft className="mr-2 size-4" /> Powrót do strony głównej
          </Link>
        </div>

        {/* Nagłówek */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 mb-8 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-4">
            <Sparkles className="size-4 text-accent-500" /> Bezstresowy Formularz Diagnostyczny
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Diagnoza Przed Lekcją Zapoznawczą
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Sprawdźmy spokojnie i bez stresu, jak Ci idzie, z czym czujesz się pewnie, a nad czym razem popracujemy!
          </p>

          {/* Pasek postępu */}
          <div className="mt-8">
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-2">
              <span>Krok {step} z 3</span>
              <span>
                {step === 1 ? "Dane i cel" : step === 2 ? "Test i samoocena" : "Wynik i podsumowanie"}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-accent-400 transition-all duration-300 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* KROK 1: DANE I CEL */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6"
            >
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                CZĘŚĆ 1: Dane ucznia i Twój cel
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Imię i nazwisko ucznia *
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="np. Ania Kowalska"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Klasa / Szkoła *
                  </label>
                  <input
                    type="text"
                    value={schoolClass}
                    onChange={(e) => setSchoolClass(e.target.value)}
                    placeholder="np. 6 klasa, 8 klasa E8, 2 klasa liceum"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Adres e-mail / Kontakt (np. Telefon lub WhatsApp) *
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="np. ania@gmail.com lub 500 111 222"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>

              {/* KAFELKI DO WYBORU (PODZIELONA MATURA) */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Wybierz przedmiot i poziom *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      id: "matematyka-4-6",
                      label: "📐 Matematyka",
                      sub: "Klasy 4–6 (podstawy rachunkowe i ułamki)",
                    },
                    {
                      id: "matematyka-7-8",
                      label: "📐 Matematyka",
                      sub: "Klasy 7–8 & Egzamin Ósmoklasisty",
                    },
                    {
                      id: "angielski-4-6",
                      label: "🇬🇧 Język Angielski",
                      sub: "Klasy 4–6 (podstawy języka)",
                    },
                    {
                      id: "angielski-7-8",
                      label: "🇬🇧 Język Angielski",
                      sub: "Klasy 7–8 & Egzamin Ósmoklasisty",
                    },
                    {
                      id: "angielski-matura-podstawowa",
                      label: "🎓 Język Angielski — Liceum",
                      sub: "Matura Podstawowa (B1/B2)",
                    },
                    {
                      id: "angielski-matura-rozszerzona",
                      label: "🎓 Język Angielski — Liceum",
                      sub: "Matura Rozszerzona (B2+/C1)",
                    },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSubject(item.id as SubjectType)}
                      className={`p-4 rounded-2xl text-left border transition-all ${
                        subject === item.id
                          ? "border-brand-500 bg-brand-50/60 ring-2 ring-brand-200"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-bold text-slate-900 text-sm">{item.label}</div>
                      <div className="text-xs text-slate-500 mt-1">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Ocena obecna w szkole z tego przedmiotu:
                </label>
                <div className="flex gap-2">
                  {["1", "2", "3", "4", "5", "6"].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setGrade(val)}
                      className={`flex-1 py-3 rounded-xl border text-center font-bold text-sm transition-all ${
                        grade === val
                          ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>

              {/* WOLNE POLE TEKSTOWE NA CEL */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Co chciałbyś / chciałabyś ze mną osiągnąć? (Twój cel):
                </label>
                <textarea
                  rows={3}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="np. Wysoki wynik na egzaminie / maturze, podniesienie oceny w szkole, przełamanie oporu w mówieniu po angielsku, ogólne podniesienie poziomu..."
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <Button
                  onClick={() => {
                    if (!studentName || !contact || !schoolClass) {
                      alert("Proszę wpisać imię, klasę oraz kontakt.");
                      return;
                    }
                    setStep(2);
                  }}
                >
                  Przejdź do pytań <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* KROK 2: TEST I SAMOOCENA */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-8"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Test wiedzy twardej & Samoocena
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Rozwiązuj samodzielnie bez ściągania. Przy każdym pytaniu możesz zaznaczyć "Nie wiem".
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {Object.keys(answers).length} / {currentQuestions.length} pytań
                </span>
              </div>

              {/* PYTANIA TESTOWE */}
              <div className="space-y-6">
                {currentQuestions.map((q, idx) => (
                  <div key={q.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>{q.levelLabel}</span>
                      <span>Pytanie {idx + 1} z {currentQuestions.length}</span>
                    </div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      {q.question}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {q.options.map((opt) => {
                        const isSelected = answers[q.id] === opt.label;
                        return (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={() => handleOptionSelect(q.id, opt.label)}
                            className={`px-4 py-2.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                              isSelected
                                ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100/60"
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* MATEMATYKA: MAPA POJĘĆ & TRUDNOŚCI */}
              {subject.startsWith("matematyka") && (
                <>
                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <h3 className="font-bold text-slate-900 text-base">
                      CZĘŚĆ A2: Szczegółowa mapa pojęć z matematyki
                    </h3>
                    <p className="text-xs text-slate-500">Oceń swoją pewność w poniższych zagadnieniach:</p>
                    
                    <div className="space-y-3">
                      {MATH_CONCEPT_MAP.map((concept) => (
                        <div key={concept} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                          <div className="text-xs sm:text-sm font-medium text-slate-800">{concept}</div>
                          <div className="grid grid-cols-3 gap-2">
                            {["Znam dobrze", "Muszę powtórzyć", "Czarna magia"].map((choice) => {
                              const active = conceptMap[concept] === choice;
                              return (
                                <button
                                  key={choice}
                                  type="button"
                                  onClick={() =>
                                    setConceptMap((prev) => ({ ...prev, [concept]: choice }))
                                  }
                                  className={`py-2 px-1 rounded-lg border text-center text-xs font-semibold transition-all ${
                                    active
                                      ? choice === "Znam dobrze"
                                        ? "bg-emerald-600 text-white border-emerald-600"
                                        : choice === "Muszę powtórzyć"
                                        ? "bg-amber-500 text-white border-amber-500"
                                        : "bg-rose-600 text-white border-rose-600"
                                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                  }`}
                                >
                                  {choice}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 space-y-3">
                    <h3 className="font-bold text-slate-900 text-base">
                      CZĘŚĆ A3: Główne lęki i trudności z matematyki
                    </h3>
                    <div className="space-y-2">
                      {[
                        "Zadania z treścią — nie wiem od czego zacząć i jak ułożyć równanie",
                        "Głupie błędy rachunkowe, gubienie minusów i nawiasów",
                        "Geometria i brak pamięci do wzorów",
                        "Stres i paraliż przed odpowiadaniem przy tablicy / klasówką",
                        "Wolne tempo rozwiązywania zadań na sprawdzianach",
                      ].map((item) => {
                        const active = mathFears.includes(item);
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleArrayItem(setMathFears, item)}
                            className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${
                              active
                                ? "border-brand-500 bg-brand-50 text-brand-900 font-semibold"
                                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            {active ? "☑ " : "☐ "} {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* ANGIELSKI SP: SAMOOCENA & SŁOWNICTWO */}
              {(subject === "angielski-4-6" || subject === "angielski-7-8") && (
                <>
                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <h3 className="font-bold text-slate-900 text-base">
                      CZĘŚĆ B2: Samoocena umiejętności językowych
                    </h3>
                    <div className="space-y-4 text-xs sm:text-sm">
                      <div>
                        <span className="font-medium text-slate-700 block mb-1">Mówienie po angielsku:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            "🟢 Mówię chętnie",
                            "🟡 Mam blokadę i szukam słów w głowie",
                            "🔴 Paraliżuje mnie stres",
                          ].map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() => setSpeakingEval(v)}
                              className={`p-2.5 rounded-xl border text-center text-xs font-medium ${
                                speakingEval === v
                                  ? "border-brand-500 bg-brand-50 text-brand-900 font-bold"
                                  : "border-slate-200 text-slate-600 hover:border-slate-300"
                              }`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-medium text-slate-700 block mb-1">Słuchanie ze słuchu:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            "🟢 Rozumiem bez problemu",
                            "🟡 Rozumiem tylko gdy ktoś mówi wolno",
                            "🔴 Nic nie wyłapuję",
                          ].map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() => setListeningEval(v)}
                              className={`p-2.5 rounded-xl border text-center text-xs font-medium ${
                                listeningEval === v
                                  ? "border-brand-500 bg-brand-50 text-brand-900 font-bold"
                                  : "border-slate-200 text-slate-600 hover:border-slate-300"
                              }`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-medium text-slate-700 block mb-1">Pisanie e-maili / wpisów:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            "🟢 Wiem jak zacząć i skończyć",
                            "🟡 Brak mi zasobu słów",
                            "🔴 Robię dużo błędów",
                          ].map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() => setWritingEvalSP(v)}
                              className={`p-2.5 rounded-xl border text-center text-xs font-medium ${
                                writingEvalSP === v
                                  ? "border-brand-500 bg-brand-50 text-brand-900 font-bold"
                                  : "border-slate-200 text-slate-600 hover:border-slate-300"
                              }`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-medium text-slate-700 block mb-1">Gramatyka:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            "🟢 Znam czasy",
                            "🟡 Czasy mi się mieszają",
                            "🔴 Czarna magia",
                          ].map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() => setGrammarEvalSP(v)}
                              className={`p-2.5 rounded-xl border text-center text-xs font-medium ${
                                grammarEvalSP === v
                                  ? "border-brand-500 bg-brand-50 text-brand-900 font-bold"
                                  : "border-slate-200 text-slate-600 hover:border-slate-300"
                              }`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 space-y-3">
                    <h3 className="font-bold text-slate-900 text-base">
                      CZĘŚĆ B3: Słownictwo tematyczne E8
                    </h3>
                    <p className="text-xs text-slate-500">Które działy sprawiają Ci największą trudność?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ENG_SP_VOCAB_TOPICS.map((topic) => {
                        const active = engVocabDiffs.includes(topic);
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => toggleArrayItem(setEngVocabDiffs, topic)}
                            className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${
                              active
                                ? "border-brand-500 bg-brand-50 text-brand-900 font-semibold"
                                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            {active ? "☑ " : "☐ "} {topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* ANGIELSKI LICEUM: SPRAWNOŚCI MATURALNE */}
              {subject.startsWith("angielski-matura") && (
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <h3 className="font-bold text-slate-900 text-base">
                    CZĘŚĆ C2: Sprawności maturalne (Samoocena)
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-slate-700 block mb-1">
                        Rozprawka / Artykuł / List formalny (Pisanie):
                      </span>
                      <div className="space-y-2">
                        {[
                          "Znam strukturę, łączniki (Furthermore, Nevertheless) i mieszczę się w limitach słów",
                          "Znam strukturę, ale brakuje mi bogatego słownictwa C1",
                          "Boję się wypowiedzi pisemnej i robię błędy gramatyczne",
                        ].map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setWritingEvalLic(v)}
                            className={`w-full p-3 rounded-xl border text-left text-xs font-medium ${
                              writingEvalLic === v
                                ? "border-brand-500 bg-brand-50 text-brand-900 font-bold"
                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-medium text-slate-700 block mb-1">
                        Matura Ustna (Mówienie):
                      </span>
                      <div className="space-y-2">
                        {[
                          "Mówię płynnie, potrafię opisać ilustrację i uzasadnić wybór z materiału stymulującego",
                          "Mówię, ale ziąb w głowie i pauzy na szukanie słówek",
                          "Mam paraliżujący stres na samej myśli o mówieniu komisji",
                        ].map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setOralMaturaEvalLic(v)}
                            className={`w-full p-3 rounded-xl border text-left text-xs font-medium ${
                              oralMaturaEvalLic === v
                                ? "border-brand-500 bg-brand-50 text-brand-900 font-bold"
                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-medium text-slate-700 block mb-1">
                        Środki językowe (Parafrazy, słowotwórstwo, luki):
                      </span>
                      <div className="space-y-2">
                        {[
                          "Daję radę na 80%+",
                          "Trafiają się trudne phrasale i zwroty, w których gubię punkty",
                          "Zgaduję większość odpowiedzi",
                        ].map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setUseOfEnglishEval(v)}
                            className={`w-full p-3 rounded-xl border text-left text-xs font-medium ${
                              useOfEnglishEval === v
                                ? "border-brand-500 bg-brand-50 text-brand-900 font-bold"
                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Nawigacja w krokach */}
              <div className="pt-4 flex items-center justify-between">
                <Button variant="secondary" onClick={() => setStep(1)}>
                  <ArrowLeft className="mr-2 size-4" /> Wstecz
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!allQuestionsAnswered}
                  className={!allQuestionsAnswered ? "opacity-60 cursor-not-allowed" : ""}
                >
                  Zobacz wynik i podsumowanie <CheckCircle2 className="ml-2 size-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* KROK 3: WYNIKI I WYSYŁKA */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6"
            >
              <div className="text-center space-y-3 border-b border-slate-100 pb-6">
                <div className="inline-grid place-items-center size-14 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto">
                  <CheckCircle2 className="size-8" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Dziękuję! Formularz został pomyślnie wypełniony.
                </h2>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Poniżej znajduje się Twój raport diagnostyczny. Możesz go wysłać e-mailem lub skopiować do wiadomości.
                </p>
              </div>

              {/* Wynik numeryczny */}
              <div className="bg-gradient-to-r from-brand-500 to-accent-400 p-6 rounded-2xl text-white text-center shadow-md">
                <div className="text-xs uppercase tracking-wider font-semibold opacity-90">
                  Wynik z testu wiedzy twardej
                </div>
                <div className="text-4xl font-extrabold mt-1">
                  {calculateScore().score} / {calculateScore().total}
                </div>
                <p className="text-xs mt-2 opacity-95">
                  Spokojnie! Wszystkie niepewne obszary przeanalizujemy razem na darmowej lekcji.
                </p>
              </div>

              {/* Wpisane dane */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-xs sm:text-sm space-y-2 text-slate-700">
                <div><strong className="text-slate-900">Uczeń:</strong> {studentName} ({schoolClass})</div>
                <div><strong className="text-slate-900">Kontakt:</strong> {contact}</div>
                <div><strong className="text-slate-900">Przedmiot:</strong> {getSubjectLabel(subject)}</div>
                <div><strong className="text-slate-900">Ocena w szkole:</strong> {grade}</div>
                <div><strong className="text-slate-900">Cel z lekcji:</strong> {goal || "Brak (ogólna nauka)"}</div>
              </div>

              {/* Przyciski wysyłki */}
              <div className="space-y-3 pt-2">
                <Button onClick={handleSendEmail} size="lg" className="w-full">
                  <Send className="mr-2 size-5" /> Wyślij podsumowanie e-mailem do Oli
                </Button>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full py-3 px-4 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="size-4 text-emerald-600" /> Skopiowano raport do schowka!
                    </>
                  ) : (
                    <>Skopiuj pełny raport (np. na Messenger / WhatsApp)</>
                  )}
                </button>
              </div>

              <div className="pt-4 flex justify-between border-t border-slate-100">
                <Button variant="secondary" onClick={() => setStep(2)}>
                  <ArrowLeft className="mr-2 size-4" /> Wstecz
                </Button>
                <Link
                  href="/"
                  className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-900"
                >
                  Strona główna
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
