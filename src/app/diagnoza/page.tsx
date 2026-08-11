"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, HelpCircle, ArrowLeft, ArrowRight, Send, Sparkles, AlertCircle, RefreshCw } from "lucide-react";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

type SubjectType = "matematyka-sp" | "angielski-sp" | "angielski-liceum";

interface Question {
  id: string;
  level: "podstawowy" | "sredni" | "zaawansowany";
  levelLabel: string;
  question: string;
  options: { label: string; isCorrect: boolean }[];
}

const MATH_QUESTIONS: Question[] = [
  {
    id: "m1",
    level: "podstawowy",
    levelLabel: "🟢 Poziom Podstawowy (kl. 4–6)",
    question: "Kolejność działań: Ile wynosi wynik: 4 + 2 · 5 = ?",
    options: [
      { label: "30", isCorrect: false },
      { label: "14", isCorrect: true },
      { label: "20", isCorrect: false },
      { label: "Nie wiem / gubię się w tym", isCorrect: false },
    ],
  },
  {
    id: "m2",
    level: "podstawowy",
    levelLabel: "🟢 Poziom Podstawowy (kl. 4–6)",
    question: "Ułamki zwykłe: Oblicz: ⅔ + ¼ = ?",
    options: [
      { label: "¾", isCorrect: false },
      { label: "⅖", isCorrect: false },
      { label: "¹¹/₁₂", isCorrect: true },
      { label: "Nie znam wspólnego mianownika", isCorrect: false },
    ],
  },
  {
    id: "m3",
    level: "podstawowy",
    levelLabel: "🟢 Poziom Podstawowy (kl. 4–6)",
    question: "Ułamki dziesiętne: Oblicz: 1,5 · 0,4 = ?",
    options: [
      { label: "0,6", isCorrect: true },
      { label: "6", isCorrect: false },
      { label: "0,06", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "m4",
    level: "sredni",
    levelLabel: "🟡 Poziom Średni / E8 (kl. 7–8)",
    question: "Równanie: Rozwiąż równanie: 3x - 4 = 11. Ile wynosi x?",
    options: [
      { label: "x = 5", isCorrect: true },
      { label: "x = 15", isCorrect: false },
      { label: "x = 7", isCorrect: false },
      { label: "Gubię się w przekształcaniu", isCorrect: false },
    ],
  },
  {
    id: "m5",
    level: "sredni",
    levelLabel: "🟡 Poziom Średni / E8 (kl. 7–8)",
    question: "Procenty: Rower kosztował 800 zł. Obniżono cenę o 10%. Ile kosztuje po obniżce?",
    options: [
      { label: "720 zł", isCorrect: true },
      { label: "700 zł", isCorrect: false },
      { label: "790 zł", isCorrect: false },
      { label: "Procenty sprawiają mi trudność", isCorrect: false },
    ],
  },
  {
    id: "m6",
    level: "sredni",
    levelLabel: "🟡 Poziom Średni / E8 (kl. 7–8)",
    question: "Potęgi i pierwiastki: Wyłącz czynnik przed pierwiastek: √50 = ?",
    options: [
      { label: "5√2", isCorrect: true },
      { label: "2√5", isCorrect: false },
      { label: "25√2", isCorrect: false },
      { label: "Nie pamiętam pierwiastków", isCorrect: false },
    ],
  },
  {
    id: "m7",
    level: "sredni",
    levelLabel: "🟡 Poziom Średni / E8 (kl. 7–8)",
    question: "Geometria: Trójkąt ma podstawę a = 8 cm i wysokość h = 5 cm. Pole P = ?",
    options: [
      { label: "40 cm²", isCorrect: false },
      { label: "20 cm²", isCorrect: true },
      { label: "26 cm²", isCorrect: false },
      { label: "Nie pamiętam wzoru", isCorrect: false },
    ],
  },
  {
    id: "m8",
    level: "sredni",
    levelLabel: "🟡 Poziom Średni / E8 (kl. 7–8)",
    question: "Twierdzenie Pitagorasa: Przyprostokątne trójkąta prostokątnego to 3 cm i 4 cm. Przeciwprostokątna = ?",
    options: [
      { label: "5 cm", isCorrect: true },
      { label: "7 cm", isCorrect: false },
      { label: "25 cm", isCorrect: false },
      { label: "Nie pamiętam Pitagorasa", isCorrect: false },
    ],
  },
];

const ENG_SP_QUESTIONS: Question[] = [
  {
    id: "e_sp1",
    level: "podstawowy",
    levelLabel: "🟢 Poziom Podstawowy (A2)",
    question: "Czasownik 'to be': They __________ very happy today.",
    options: [
      { label: "is", isCorrect: false },
      { label: "are", isCorrect: true },
      { label: "am", isCorrect: false },
      { label: "Nie wiem", isCorrect: false },
    ],
  },
  {
    id: "e_sp2",
    level: "podstawowy",
    levelLabel: "🟢 Poziom Podstawowy (A2)",
    question: "Present Simple: She __________ to school by bus every day.",
    options: [
      { label: "go", isCorrect: false },
      { label: "goes", isCorrect: true },
      { label: "is going", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_sp3",
    level: "podstawowy",
    levelLabel: "🟢 Poziom Podstawowy (A2)",
    question: "Present Continuous: Look! The cat __________ up the tree.",
    options: [
      { label: "climbs", isCorrect: false },
      { label: "is climbing", isCorrect: true },
      { label: "climbed", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_sp4",
    level: "sredni",
    levelLabel: "🟡 Poziom Średni / E8 (B1)",
    question: "Past Simple: We __________ a great time at the party last weekend.",
    options: [
      { label: "have", isCorrect: false },
      { label: "had", isCorrect: true },
      { label: "has", isCorrect: false },
      { label: "Nie znam czasowników nieregularnych", isCorrect: false },
    ],
  },
  {
    id: "e_sp5",
    level: "sredni",
    levelLabel: "🟡 Poziom Średni / E8 (B1)",
    question: "Present Perfect: I __________ my homework yet.",
    options: [
      { label: "haven't finished", isCorrect: true },
      { label: "didn't finish", isCorrect: false },
      { label: "don't finish", isCorrect: false },
      { label: "Nie znam tego czasu", isCorrect: false },
    ],
  },
  {
    id: "e_sp6",
    level: "sredni",
    levelLabel: "🟡 Poziom Średni / E8 (B1)",
    question: "Stopniowanie przymiotników: This book is __________ than the movie.",
    options: [
      { label: "more interesting", isCorrect: true },
      { label: "interestiner", isCorrect: false },
      { label: "most interesting", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
];

const ENG_LICEUM_QUESTIONS: Question[] = [
  {
    id: "e_lic1",
    level: "podstawowy",
    levelLabel: "🟢 Poziom 1: Matura Podstawowa (B1/B2)",
    question: "Passive Voice: The new library __________ by the Mayor tomorrow morning.",
    options: [
      { label: "will be opened", isCorrect: true },
      { label: "is opening", isCorrect: false },
      { label: "has opened", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_lic2",
    level: "podstawowy",
    levelLabel: "🟢 Poziom 1: Matura Podstawowa (B1/B2)",
    question: "Reported Speech: \"I bought a car.\" -> She said she __________ a car.",
    options: [
      { label: "bought", isCorrect: false },
      { label: "had bought", isCorrect: true },
      { label: "buys", isCorrect: false },
      { label: "Nie pamiętam mowy zależnej", isCorrect: false },
    ],
  },
  {
    id: "e_lic3",
    level: "podstawowy",
    levelLabel: "🟢 Poziom 1: Matura Podstawowa (B1/B2)",
    question: "Conditionals: If I had known about the party, I __________ .",
    options: [
      { label: "would come", isCorrect: false },
      { label: "would have come", isCorrect: true },
      { label: "will come", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_lic4",
    level: "zaawansowany",
    levelLabel: "🔴 Poziom 2: Matura Rozszerzona & C1 (B2+/C1)",
    question: "Phrasal Verbs: I can't __________ with his rude behaviour any longer.",
    options: [
      { label: "put up", isCorrect: true },
      { label: "put off", isCorrect: false },
      { label: "take after", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e_lic5",
    level: "zaawansowany",
    levelLabel: "🔴 Poziom 2: Matura Rozszerzona & C1 (B2+/C1)",
    question: "Inwersja stylistyczna: Seldom __________ such an inspiring speech.",
    options: [
      { label: "I have heard", isCorrect: false },
      { label: "have I heard", isCorrect: true },
      { label: "I heard", isCorrect: false },
      { label: "Nie znam inwersji", isCorrect: false },
    ],
  },
  {
    id: "e_lic6",
    level: "zaawansowany",
    levelLabel: "🔴 Poziom 2: Matura Rozszerzona & C1 (B2+/C1)",
    question: "Transformacja maturalna: Although it was freezing, they played football. -> In spite of the __________ weather, they played football.",
    options: [
      { label: "freezing", isCorrect: true },
      { label: "freeze", isCorrect: false },
      { label: "froze", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
];

export default function DiagnozaPage() {
  const [step, setStep] = useState<number>(1);
  const [studentName, setStudentName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState<SubjectType>("matematyka-sp");
  const [grade, setGrade] = useState("3");
  const [goal, setGoal] = useState("Egzamin Ósmoklasisty");
  
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [mathDifficulties, setMathDifficulties] = useState<string[]>([]);
  
  // Samoocena angielski
  const [speakingEval, setSpeakingEval] = useState("🟡 Mam blokadę/szukam słów");
  const [listeningEval, setListeningEval] = useState("🟢 Rozumiem dobrze");
  const [grammarEval, setGrammarEval] = useState("🟡 Mieszają mi się czasy");
  const [writingEval, setWritingEval] = useState("Potrzebuję wsparcia w słownictwie");
  const [oralMaturaEval, setOralMaturaEval] = useState("Mam blokadę językową i szukam słów");

  const [copied, setCopied] = useState(false);

  const getQuestions = () => {
    if (subject === "matematyka-sp") return MATH_QUESTIONS;
    if (subject === "angielski-sp") return ENG_SP_QUESTIONS;
    return ENG_LICEUM_QUESTIONS;
  };

  const handleOptionSelect = (qId: string, optionLabel: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionLabel }));
  };

  const toggleMathDifficulty = (item: string) => {
    setMathDifficulties((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
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

  const buildSummaryText = () => {
    const questions = getQuestions();
    const { score, total } = calculateScore();
    const subjectName =
      subject === "matematyka-sp"
        ? "Matematyka SP"
        : subject === "angielski-sp"
        ? "Angielski SP"
        : "Angielski Liceum / Matura";

    let text = `📋 DIAGNOZA PRZED LEKCJĄ:\n`;
    text += `👤 Uczeń: ${studentName || "Nie podano"}\n`;
    text += `📧 Kontakt: ${contact || "Nie podano"}\n`;
    text += `📚 Przedmiot: ${subjectName}\n`;
    text += `⭐ Ocena w szkole: ${grade}\n`;
    text += `🎯 Cel nauki: ${goal}\n\n`;
    text += `📊 WYNIK QUIZU: ${score} / ${total} poprawnych odpowiedzi\n\n`;

    text += `ODPOWIEDZI:\n`;
    questions.forEach((q, idx) => {
      const ans = answers[q.id] || "Brak odpowiedzi";
      text += `${idx + 1}. ${q.question} -> Odpowiedź: ${ans}\n`;
    });

    if (subject === "matematyka-sp" && mathDifficulties.length > 0) {
      text += `\n⚠️ Największe trudności w matematyce:\n- ${mathDifficulties.join("\n- ")}\n`;
    }

    if (subject === "angielski-sp") {
      text += `\n🗣️ Samoocena Angielski SP:\n`;
      text += `- Mówienie: ${speakingEval}\n`;
      text += `- Słuchanie: ${listeningEval}\n`;
      text += `- Gramatyka: ${grammarEval}\n`;
    }

    if (subject === "angielski-liceum") {
      text += `\n🎓 Samoocena Maturalna:\n`;
      text += `- Wypowiedź pisemna: ${writingEval}\n`;
      text += `- Matura ustna: ${oralMaturaEval}\n`;
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
        {/* Przycisk powrotu */}
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
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-2xl -z-0 opacity-60" />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-4">
            <Sparkles className="size-4" /> Безstresowa Diagnoza Poziomu
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sprawdź swój poziom przed lekcją
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Wypełnij ten krótki formularz, abyśmy przed darmowym spotkaniem wiedziały, na czym stoimy i w czym mogę Ci najbardziej pomóc!
          </p>

          {/* Pasek postępu */}
          <div className="mt-8">
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-2">
              <span>Krok {step} z 3</span>
              <span>
                {step === 1 ? "Dane i cel" : step === 2 ? "Test poziomujący" : "Podsumowanie"}
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

        {/* KROK 1: DANE I CEL */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6"
            >
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                1. Dane kontaktowe i Twój cel
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
                    Kontakt (E-mail lub Telefon/WhatsApp) *
                  </label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="np. ania@gmail.com lub 500 111 222"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Wybierz przedmiot i poziom *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: "matematyka-sp",
                      label: "📐 Matematyka",
                      sub: "Szkoła Podstawowa (kl. 4–8 & E8)",
                    },
                    {
                      id: "angielski-sp",
                      label: "🇬🇧 Angielski",
                      sub: "Szkoła Podstawowa (kl. 4–8 & E8)",
                    },
                    {
                      id: "angielski-liceum",
                      label: "🎓 Angielski",
                      sub: "Liceum / Matura (Podst. & Rozszerz.)",
                    },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSubject(item.id as SubjectType)}
                      className={`p-4 rounded-2xl text-left border transition-all ${
                        subject === item.id
                          ? "border-brand-500 bg-brand-50/50 ring-2 ring-brand-200"
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
                  Jaką ocenę masz obecnie w szkole z tego przedmiotu?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { val: "1 lub 2", desc: "Niedostateczna / Dopuszczająca — duże zaległości" },
                    { val: "3", desc: "Dostateczna — radzę sobie, ale brak pewności" },
                    { val: "4 lub 5", desc: "Dobra / B. dobra — celuję w wysokie wyniki" },
                  ].map((o) => (
                    <button
                      key={o.val}
                      type="button"
                      onClick={() => setGrade(o.val)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        grade === o.val
                          ? "border-brand-500 bg-brand-50/40 text-brand-900 font-semibold"
                          : "border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-bold text-sm mb-0.5">Ocena: {o.val}</div>
                      <div className="text-slate-500">{o.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Jaki jest Twój główny cel nauki?
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                >
                  <option value="Egzamin Ósmoklasisty (cel: wysoki wynik)">
                    Egzamin Ósmoklasisty (cel: wysoki wynik i dobre liceum)
                  </option>
                  <option value="Matura Podstawowa (cel: 80-100%)">
                    Matura Podstawowa (cel: 80-100%)
                  </option>
                  <option value="Matura Rozszerzona (cel: 70-90%+ pod studia)">
                    Matura Rozszerzona (cel: 70-90%+ pod studia)
                  </option>
                  <option value="Przełamanie bariery w mówieniu po angielsku">
                    Przełamanie bariery w mówieniu po angielsku
                  </option>
                  <option value="Podniesienie oceny szkolnej o 1-2 stopnie w górę">
                    Podniesienie oceny szkolnej o 1-2 stopnie w górę
                  </option>
                </select>
              </div>

              <div className="pt-4 flex justify-end">
                <Button
                  onClick={() => {
                    if (!studentName || !contact) {
                      alert("Proszę wpisać imię oraz kontakt.");
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

          {/* KROK 2: TEST POZIOMUJĄCY + SAMOOCENA */}
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
                    2. Pytania poziomujące
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Rozwiązuj samodzielnie. Jeśli czegoś nie wiesz, śmiało zaznacz opcję "Nie wiem".
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {Object.keys(answers).length} / {currentQuestions.length} odpowiedzi
                </span>
              </div>

              {/* Lista pytań */}
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

              {/* Dodatkowa sekcja samooceny w zależności od przedmiotu */}
              {subject === "matematyka-sp" && (
                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Z czym w szkole masz największy kłopot z matematyki?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Zadania tekstowe (nie wiem od czego zacząć)",
                      "Stres przed odpowiadaniem przy tablicy / kartkówką",
                      "Głupie błędy rachunkowe i zjadanie minusów",
                      "Geometria i wzory",
                    ].map((item) => {
                      const active = mathDifficulties.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleMathDifficulty(item)}
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${
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
              )}

              {subject === "angielski-sp" && (
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Samoocena umiejętności językowych
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-slate-700 block mb-1">Mówienie:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          "🟢 Mówię chętnie",
                          "🟡 Mam blokadę/szukam słów",
                          "🔴 Boję się odezwać",
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
                      <span className="font-medium text-slate-700 block mb-1">Gramatyka:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          "🟢 Znam zasady",
                          "🟡 Mieszają mi się czasy",
                          "🔴 Czarna magia",
                        ].map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setGrammarEval(v)}
                            className={`p-2.5 rounded-xl border text-center text-xs font-medium ${
                              grammarEval === v
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

              {subject === "angielski-liceum" && (
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Samoocena Maturalna
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-slate-700 block mb-1">
                        Pisanie wypracowań (rozprawka / e-mail / artykuł):
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          "Znam strukturę i piszę płynnie",
                          "Potrzebuję wsparcia w słownictwie",
                          "Boję się pisania wypracowań",
                        ].map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setWritingEval(v)}
                            className={`p-2.5 rounded-xl border text-center text-xs font-medium ${
                              writingEval === v
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
                  Zobacz podsumowanie <CheckCircle2 className="ml-2 size-4" />
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
                  Gotowe! Oto Twoja wstępna diagnoza
                </h2>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Dzięki za rozwiązanie testu! Poniżej przygotowaliśmy podsumowanie, które możesz wysłać przed naszą darmową lekcją próbną.
                </p>
              </div>

              {/* Wynik numeryczny */}
              <div className="bg-gradient-to-r from-brand-500 to-accent-400 p-6 rounded-2xl text-white text-center shadow-md">
                <div className="text-xs uppercase tracking-wider font-semibold opacity-90">
                  Twój wynik w quizie
                </div>
                <div className="text-4xl font-extrabold mt-1">
                  {calculateScore().score} / {calculateScore().total}
                </div>
                <p className="text-xs mt-2 opacity-95">
                  Super wynik! Pamiętaj, że błędy to idealny punkt wyjścia do nauki bez presji.
                </p>
              </div>

              {/* Podgląd wpisanych danych */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-xs sm:text-sm space-y-2 text-slate-700">
                <div><strong className="text-slate-900">Uczeń:</strong> {studentName}</div>
                <div><strong className="text-slate-900">Kontakt:</strong> {contact}</div>
                <div><strong className="text-slate-900">Cel:</strong> {goal}</div>
                {subject === "matematyka-sp" && mathDifficulties.length > 0 && (
                  <div>
                    <strong className="text-slate-900">Trudności w matematyce:</strong>{" "}
                    {mathDifficulties.join(", ")}
                  </div>
                )}
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
                      <CheckCircle2 className="size-4 text-emerald-600" /> Skopiowano podsumowanie do schowka!
                    </>
                  ) : (
                    <>Skopiuj podsumowanie (np. na Messenger / WhatsApp)</>
                  )}
                </button>
              </div>

              <div className="pt-4 flex justify-between border-t border-slate-100">
                <Button variant="secondary" onClick={() => setStep(2)}>
                  <ArrowLeft className="mr-2 size-4" /> Popraw odpowiedzi
                </Button>
                <Link
                  href="/"
                  className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-900"
                >
                  Wróć na stronę główną
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
