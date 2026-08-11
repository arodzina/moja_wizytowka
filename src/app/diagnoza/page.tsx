"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowLeft, ArrowRight, Sparkles, HeartHandshake, Calendar, Clock, Copy, Sun, Moon, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

type SubjectType =
  | "matematyka-4-6"
  | "matematyka-7-8"
  | "angielski-4-6"
  | "angielski-7-8"
  | "angielski-liceum-biezacy"
  | "angielski-matura-podstawowa"
  | "angielski-matura-rozszerzona";

interface Question {
  id: string;
  levelLabel: string;
  question: string;
  options: { label: string; isCorrect: boolean }[];
}

/* 🎒 POZIOM 1: MATEMATYKA (KLASY 4–6 - STANDARD) */
const MATH_QUESTIONS_46: Question[] = [
  {
    id: "m46_1",
    levelLabel: "🟢 Klasy 4–6: Rachunki i kolejność działań",
    question: "Kolejność działań: (15 - 3) : 3 + 2 = ?",
    options: [
      { label: "2", isCorrect: false },
      { label: "6", isCorrect: true },
      { label: "4", isCorrect: false },
      { label: "8", isCorrect: false },
      { label: "Nie wiem / gubię się w nawiasach", isCorrect: false },
    ],
  },
  {
    id: "m46_2",
    levelLabel: "🟢 Klasy 4–6: Dzielenie z resztą",
    question: "Dzielenie z resztą: Podziel 29 : 4. Jaki jest wynik i reszta?",
    options: [
      { label: "6 r 5", isCorrect: false },
      { label: "7 r 1", isCorrect: true },
      { label: "7 r 2", isCorrect: false },
      { label: "6 r 1", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "m46_3",
    levelLabel: "🟢 Klasy 4–6: Ułamki zwykłe",
    question: "Ułamki zwykłe: Oblicz: 3/5 + 1/2 = ?",
    options: [
      { label: "4/7", isCorrect: false },
      { label: "1 1/10 (11/10)", isCorrect: true },
      { label: "4/10", isCorrect: false },
      { label: "2/5", isCorrect: false },
      { label: "Nie umiem sprowadzać do wspólnego mianownika", isCorrect: false },
    ],
  },
  {
    id: "m46_4",
    levelLabel: "🟢 Klasy 4–6: Ułamki dziesiętne",
    question: "Ułamki dziesiętne: Oblicz: 3,2 - 0,45 = ?",
    options: [
      { label: "2,75", isCorrect: true },
      { label: "2,85", isCorrect: false },
      { label: "3,25", isCorrect: false },
      { label: "2,65", isCorrect: false },
      { label: "Gubię się w przecinkach", isCorrect: false },
    ],
  },
  {
    id: "m46_5",
    levelLabel: "🟢 Klasy 4–6: Liczby ujemne",
    question: "Liczby ujemne: Oblicz: -8 + 5 = ?",
    options: [
      { label: "-13", isCorrect: false },
      { label: "-3", isCorrect: true },
      { label: "3", isCorrect: false },
      { label: "13", isCorrect: false },
      { label: "Gubię się przy minusach", isCorrect: false },
    ],
  },
  {
    id: "m46_6",
    levelLabel: "🟢 Klasy 4–6: Proste równania",
    question: "Proste równanie: Rozwiąż: 4x = 28. Ile wynosi x?",
    options: [
      { label: "x = 6", isCorrect: false },
      { label: "x = 7", isCorrect: true },
      { label: "x = 24", isCorrect: false },
      { label: "x = 112", isCorrect: false },
      { label: "Nie wiem, jak to policzyć", isCorrect: false },
    ],
  },
  {
    id: "m46_7",
    levelLabel: "🟢 Klasy 4–6: Geometria podstawowa",
    question: "Pole prostokąta: Prostokąt ma boki 6 cm i 9 cm. Ile wynosi jego pole (P)?",
    options: [
      { label: "30 cm²", isCorrect: false },
      { label: "54 cm²", isCorrect: true },
      { label: "27 cm²", isCorrect: false },
      { label: "15 cm²", isCorrect: false },
      { label: "Nie pamiętam wzoru", isCorrect: false },
    ],
  },
];

/* 🎒 POZIOM 1 (NADRABIANIE ZALEGŁOŚCI): MATEMATYKA (KLASY 4–6) */
const MATH_QUESTIONS_46_CATCHUP: Question[] = [
  {
    id: "m46c_1",
    levelLabel: "🟢 Klasy 4–6: Tabliczka mnożenia",
    question: "Tabliczka mnożenia: Ile wynosi wynik: 7 · 8 = ?",
    options: [
      { label: "54", isCorrect: false },
      { label: "56", isCorrect: true },
      { label: "48", isCorrect: false },
      { label: "64", isCorrect: false },
      { label: "Mieszam jeszcze tabliczkę mnożenia", isCorrect: false },
    ],
  },
  {
    id: "m46c_2",
    levelLabel: "🟢 Klasy 4–6: Dzielenie pamięciowe",
    question: "Dzielenie pamięciowe: Podziel 42 : 6 = ?",
    options: [
      { label: "6", isCorrect: false },
      { label: "7", isCorrect: true },
      { label: "8", isCorrect: false },
      { label: "Mieszam tabliczkę dzielenia", isCorrect: false },
    ],
  },
  {
    id: "m46c_3",
    levelLabel: "🟢 Klasy 4–6: Dodawanie w pamięci",
    question: "Dodawanie z przekraczaniem progu: Oblicz w pamięci: 37 + 25 = ?",
    options: [
      { label: "52", isCorrect: false },
      { label: "62", isCorrect: true },
      { label: "57", isCorrect: false },
      { label: "Muszę liczyć to na palcach / na kartce", isCorrect: false },
    ],
  },
  {
    id: "m46c_4",
    levelLabel: "🟢 Klasy 4–6: Kolejność działań",
    question: "Kolejność działań w nawiasie: Oblicz: (12 - 4) · 3 = ?",
    options: [
      { label: "24", isCorrect: true },
      { label: "0", isCorrect: false },
      { label: "20", isCorrect: false },
      { label: "Gubię się w nawiasach", isCorrect: false },
    ],
  },
  {
    id: "m46c_5",
    levelLabel: "🟢 Klasy 4–6: Pojęcie ułamka",
    question: "Pojęcie ułamka: Co oznacza ułamek ½ (jedna druga)?",
    options: [
      { label: "Całość", isCorrect: false },
      { label: "Połowa czegokolwiek", isCorrect: true },
      { label: "Ćwiartka (jedna czwarta)", isCorrect: false },
      { label: "Nie wiem, co to ułamek", isCorrect: false },
    ],
  },
  {
    id: "m46c_6",
    levelLabel: "🟢 Klasy 4–6: Pieniądze i dziesiętne",
    question: "Pieniądze i ułamki dziesiętne: Masz 2 zł i 50 gr. Jak zapiszesz tę kwotę za pomocą przecinka (w złotówkach)?",
    options: [
      { label: "2,50 zł", isCorrect: true },
      { label: "250 zł", isCorrect: false },
      { label: "2,05 zł", isCorrect: false },
      { label: "Gubię się w zapisie z przecinkiem", isCorrect: false },
    ],
  },
  {
    id: "m46c_7",
    levelLabel: "🟢 Klasy 4–6: Dodawanie kwot",
    question: "Dodawanie groszy/dziesiętne: Koszulka kosztuje 12,50 zł, a ciastko 3,20 zł. Ile zapłacisz razem?",
    options: [
      { label: "15,70 zł", isCorrect: true },
      { label: "15,20 zł", isCorrect: false },
      { label: "16,00 zł", isCorrect: false },
      { label: "Trudno mi liczyć kwoty z przecinkami", isCorrect: false },
    ],
  },
  {
    id: "m46c_8",
    levelLabel: "🟢 Klasy 4–6: Zegar i czas",
    question: "Zegar i czas: Lekcja zaczyna się o 8:15 i trwa 45 minut. O której godzinie się kończy?",
    options: [
      { label: "8:50", isCorrect: false },
      { label: "9:00", isCorrect: true },
      { label: "9:15", isCorrect: false },
      { label: "Gubię się w obliczeniach zegarowych", isCorrect: false },
    ],
  },
  {
    id: "m46c_9",
    levelLabel: "🟢 Klasy 4–6: Jednostki długości",
    question: "Zamiana jednostek długości: Ile centymetrów (cm) ma 1 metr (m)?",
    options: [
      { label: "10 cm", isCorrect: false },
      { label: "100 cm", isCorrect: true },
      { label: "1000 cm", isCorrect: false },
      { label: "Mieszają mi się metry i centymetry", isCorrect: false },
    ],
  },
  {
    id: "m46c_10",
    levelLabel: "🟢 Klasy 4–6: Geometria — obwód",
    question: "Obwód figury: Kwadrat ma bok o długości 5 cm. Ile wynosi jego obwód (suma wszystkich boków)?",
    options: [
      { label: "10 cm", isCorrect: false },
      { label: "20 cm", isCorrect: true },
      { label: "25 cm", isCorrect: false },
      { label: "Nie pamiętam, co to jest obwód", isCorrect: false },
    ],
  },
];

/* 🎒 POZIOM 2: MATEMATYKA (KLASY 7–8 / EGZAMIN ÓSMOKLASISTY E8) */
const MATH_QUESTIONS_78: Question[] = [
  {
    id: "m78_1",
    levelLabel: "🟡 Egzamin Ósmoklasisty E8",
    question: "Potęgi: Oblicz: 2^3 · 2^4 = ?",
    options: [
      { label: "2^12", isCorrect: false },
      { label: "2^7 (128)", isCorrect: true },
      { label: "4^7", isCorrect: false },
      { label: "2^1", isCorrect: false },
      { label: "Nie pamiętam wzorów na potęgi", isCorrect: false },
    ],
  },
  {
    id: "m78_2",
    levelLabel: "🟡 Egzamin Ósmoklasisty E8",
    question: "Pierwiastki: Wyłącz czynnik przed pierwiastek: √72 = ?",
    options: [
      { label: "6√2", isCorrect: true },
      { label: "2√6", isCorrect: false },
      { label: "36√2", isCorrect: false },
      { label: "3√8", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "m78_3",
    levelLabel: "🟡 Egzamin Ósmoklasisty E8",
    question: "Procenty: Obniżono cenę kurtki ze 150 zł na 120 zł. O ile procent obniżono cenę?",
    options: [
      { label: "o 30%", isCorrect: false },
      { label: "o 20%", isCorrect: true },
      { label: "o 25%", isCorrect: false },
      { label: "o 15%", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "m78_4",
    levelLabel: "🟡 Egzamin Ósmoklasisty E8",
    question: "Równanie z nawiasami: Rozwiąż równanie: 2(x - 3) = x + 4. Ile wynosi x?",
    options: [
      { label: "x = 10", isCorrect: true },
      { label: "x = 7", isCorrect: false },
      { label: "x = 1", isCorrect: false },
      { label: "x = -2", isCorrect: false },
      { label: "Gubię się w równaniach", isCorrect: false },
    ],
  },
  {
    id: "m78_5",
    levelLabel: "🔴 Geometria & Twierdzenia E8",
    question: "Twierdzenie Pitagorasa: W trójkącie prostokątnym przyprostokątne mają 5 cm i 12 cm. Przeciwprostokątna wynosi:",
    options: [
      { label: "17 cm", isCorrect: false },
      { label: "13 cm", isCorrect: true },
      { label: "169 cm", isCorrect: false },
      { label: "7 cm", isCorrect: false },
      { label: "Nie umiem Pitagorasa", isCorrect: false },
    ],
  },
  {
    id: "m78_6",
    levelLabel: "🔴 Geometria & Twierdzenia E8",
    question: "Trójkąt 30-60-90: Przyprostokątna naprzeciw kąta 30° wynosi 4 cm. Przeciwprostokątna wynosi:",
    options: [
      { label: "8 cm", isCorrect: true },
      { label: "4√3 cm", isCorrect: false },
      { label: "4√2 cm", isCorrect: false },
      { label: "12 cm", isCorrect: false },
      { label: "Nie znam trójkąta 30-60-90", isCorrect: false },
    ],
  },
  {
    id: "m78_7",
    levelLabel: "🟡 Zadania z treścią E8",
    question: "Prędkość (s = v · t): Samochód jechał ze średnią prędkością 60 km/h przez 2,5 godziny. Jaką drogę pokonał?",
    options: [
      { label: "120 km", isCorrect: false },
      { label: "150 km", isCorrect: true },
      { label: "180 km", isCorrect: false },
      { label: "125 km", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "m78_8",
    levelLabel: "🟡 Statystyka & Prawdopodobieństwo E8",
    question: "Prawdopodobieństwo: W torbie są 3 kulki białe i 7 czarnych. Jakie jest prawdopodobieństwo wyciągnięcia kulki białej?",
    options: [
      { label: "3/7", isCorrect: false },
      { label: "3/10", isCorrect: true },
      { label: "1/3", isCorrect: false },
      { label: "7/10", isCorrect: false },
      { label: "Nie umiem prawdopodobieństwa", isCorrect: false },
    ],
  },
];

/* 🎒 POZIOM 1: ANGIELSKI (KLASY 4–6 - STANDARD) */
const ENG_QUESTIONS_46: Question[] = [
  {
    id: "e46_1",
    levelLabel: "🟢 Klasy 4–6: Podstawy języka",
    question: "Present Simple: My brother __________ TV every evening.",
    options: [
      { label: "watch", isCorrect: false },
      { label: "watches", isCorrect: true },
      { label: "is watching", isCorrect: false },
      { label: "watched", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e46_2",
    levelLabel: "🟢 Klasy 4–6: Podstawy języka",
    question: "Present Continuous: Listen! Somebody __________ at the door.",
    options: [
      { label: "knocks", isCorrect: false },
      { label: "is knocking", isCorrect: true },
      { label: "knocked", isCorrect: false },
      { label: "are knocking", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e46_3",
    levelLabel: "🟢 Klasy 4–6: Czas przeszły podstawowy",
    question: "Past Simple (was/were): Where __________ you yesterday at 5 o'clock?",
    options: [
      { label: "was", isCorrect: false },
      { label: "were", isCorrect: true },
      { label: "are", isCorrect: false },
      { label: "be", isCorrect: false },
      { label: "Nie pamiętam", isCorrect: false },
    ],
  },
  {
    id: "e46_4",
    levelLabel: "🟢 Klasy 4–6: Czasowniki nieregularne",
    question: "Past Simple (Nieregularne): She __________ a new bike last month.",
    options: [
      { label: "buyed", isCorrect: false },
      { label: "bought", isCorrect: true },
      { label: "buys", isCorrect: false },
      { label: "is buying", isCorrect: false },
      { label: "Nie znam czasowników nieregularnych", isCorrect: false },
    ],
  },
  {
    id: "e46_5",
    levelLabel: "🟢 Klasy 4–6: Stopniowanie",
    question: "Stopniowanie przymiotników: An elephant is __________ than a dog.",
    options: [
      { label: "bigger", isCorrect: true },
      { label: "more big", isCorrect: false },
      { label: "the biggest", isCorrect: false },
      { label: "as big", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
];

/* 🎒 POZIOM 1 (NADRABIANIE ZALEGŁOŚCI): ANGIELSKI (KLASY 4–6) */
const ENG_QUESTIONS_46_CATCHUP: Question[] = [
  {
    id: "e46c_1",
    levelLabel: "🟢 Klasy 4–6: Czasownik to be",
    question: "Czasownik to be: I __________ a student in class 5.",
    options: [
      { label: "is", isCorrect: false },
      { label: "am", isCorrect: true },
      { label: "are", isCorrect: false },
      { label: "Nie wiem", isCorrect: false },
    ],
  },
  {
    id: "e46c_2",
    levelLabel: "🟢 Klasy 4–6: Przeczenie z to be",
    question: "Przeczenie z to be: She __________ at home today. She is at school.",
    options: [
      { label: "isn't", isCorrect: true },
      { label: "aren't", isCorrect: false },
      { label: "am not", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e46c_3",
    levelLabel: "🟢 Klasy 4–6: Przymiotniki dzierżawcze",
    question: "Przymiotniki dzierżawcze: This is my sister. __________ name is Anna.",
    options: [
      { label: "His", isCorrect: false },
      { label: "Her", isCorrect: true },
      { label: "My", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e46c_4",
    levelLabel: "🟢 Klasy 4–6: Have got",
    question: "Have got: They __________ a big dog in their garden.",
    options: [
      { label: "has got", isCorrect: false },
      { label: "have got", isCorrect: true },
      { label: "is got", isCorrect: false },
      { label: "Nie pamiętam have got / has got", isCorrect: false },
    ],
  },
  {
    id: "e46c_5",
    levelLabel: "🟢 Klasy 4–6: Can / Can't",
    question: "Can / Can't: Birds can fly, but elephants __________ fly.",
    options: [
      { label: "can", isCorrect: false },
      { label: "can't", isCorrect: true },
      { label: "mustn't", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e46c_6",
    levelLabel: "🟢 Klasy 4–6: Liczba mnoga",
    question: "Liczba mnoga rzeczowników: Jak stworzysz liczbę mnogą od słowa \"one cat\" (jeden kot) -> \"two __________\"?",
    options: [
      { label: "cates", isCorrect: false },
      { label: "cats", isCorrect: true },
      { label: "caties", isCorrect: false },
      { label: "Zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e46c_7",
    levelLabel: "🟢 Klasy 4–6: Dni tygodnia",
    question: "Dni tygodnia i czas: Jaki dzień tygodnia następuje po Monday (poniedziałek)?",
    options: [
      { label: "Sunday", isCorrect: false },
      { label: "Tuesday", isCorrect: true },
      { label: "Thursday", isCorrect: false },
      { label: "Mieszają mi się dni tygodnia po angielsku", isCorrect: false },
    ],
  },
  {
    id: "e46c_8",
    levelLabel: "🟢 Klasy 4–6: Prosta reakcja",
    question: "Prosta reakcja: Jak odpowiesz na pytanie: \"How old are you?\"",
    options: [
      { label: "I'm fine, thank you.", isCorrect: false },
      { label: "I'm 11 years old.", isCorrect: true },
      { label: "I live in Poland.", isCorrect: false },
      { label: "Nie rozumiem tego pytania", isCorrect: false },
    ],
  },
];

/* 🎒 POZIOM 2: ANGIELSKI (KLASY 7–8 & E8) */
const ENG_QUESTIONS_78: Question[] = [
  {
    id: "e78_1",
    levelLabel: "🟡 Egzamin Ósmoklasisty E8",
    question: "Past Continuous: I __________ my homework when the phone rang.",
    options: [
      { label: "wrote", isCorrect: false },
      { label: "was writing", isCorrect: true },
      { label: "have written", isCorrect: false },
      { label: "am writing", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e78_2",
    levelLabel: "🟡 Egzamin Ósmoklasisty E8",
    question: "Present Perfect: She has lived in Cracow __________ 2018.",
    options: [
      { label: "for", isCorrect: false },
      { label: "since", isCorrect: true },
      { label: "ago", isCorrect: false },
      { label: "from", isCorrect: false },
      { label: "Nie wiem", isCorrect: false },
    ],
  },
  {
    id: "e78_3",
    levelLabel: "🟡 Egzamin Ósmoklasisty E8",
    question: "Passive Voice (Strona bierna): This bridge __________ built in 1995.",
    options: [
      { label: "is", isCorrect: false },
      { label: "was", isCorrect: true },
      { label: "has", isCorrect: false },
      { label: "were", isCorrect: false },
      { label: "Nie znam strony biernej", isCorrect: false },
    ],
  },
  {
    id: "e78_4",
    levelLabel: "🟡 Egzamin Ósmoklasisty E8",
    question: "1st Conditional: If it __________ tomorrow, we will stay at home.",
    options: [
      { label: "rain", isCorrect: false },
      { label: "rains", isCorrect: true },
      { label: "will rain", isCorrect: false },
      { label: "rained", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e78_5",
    levelLabel: "🟡 Egzamin Ósmoklasisty E8",
    question: "2nd Conditional: If I __________ a million dollars, I would buy an island.",
    options: [
      { label: "have", isCorrect: false },
      { label: "had", isCorrect: true },
      { label: "would have", isCorrect: false },
      { label: "had had", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "e78_6",
    levelLabel: "🟡 Egzamin Ósmoklasisty E8",
    question: "Mowa zależna: He said that he __________ tired.",
    options: [
      { label: "is", isCorrect: false },
      { label: "was", isCorrect: true },
      { label: "has been", isCorrect: false },
      { label: "will be", isCorrect: false },
      { label: "Nie pamiętam mowy zależnej", isCorrect: false },
    ],
  },
];

/* 🎓 LICEUM BIEŻĄCE / OGÓLNE (A2+ / B1+) */
const ENG_LIC_BIEZACY: Question[] = [
  {
    id: "elb_1",
    levelLabel: "📘 Liceum: Gramatyka ogólna",
    question: "Present Perfect vs Past Simple: I __________ my keys yesterday, but I've found them now.",
    options: [
      { label: "lost", isCorrect: true },
      { label: "have lost", isCorrect: false },
      { label: "had lost", isCorrect: false },
      { label: "was losing", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "elb_2",
    levelLabel: "📘 Liceum: Czasowniki modalne",
    question: "Modal Verbs: You __________ come to the lesson if you feel sick. Just rest!",
    options: [
      { label: "mustn't", isCorrect: false },
      { label: "don't have to", isCorrect: true },
      { label: "should", isCorrect: false },
      { label: "couldn't", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "elb_3",
    levelLabel: "📘 Liceum: Słownictwo i przyimki",
    question: "Prepositions: Are you interested __________ learning new languages?",
    options: [
      { label: "on", isCorrect: false },
      { label: "in", isCorrect: true },
      { label: "at", isCorrect: false },
      { label: "about", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "elb_4",
    levelLabel: "📘 Liceum: Słownictwo konwersacyjne",
    question: "Phrasal Verb: I need to __________ up this new word in a dictionary.",
    options: [
      { label: "look", isCorrect: true },
      { label: "take", isCorrect: false },
      { label: "make", isCorrect: false },
      { label: "give", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
];

/* 🎓 MATURA PODSTAWOWA ANGIELSKI (B1–B2) */
const ENG_MATURA_PODSTAWOWA: Question[] = [
  {
    id: "emp_1",
    levelLabel: "🎓 Matura Podstawowa (B1–B2)",
    question: "Past Perfect: By the time we arrived at the cinema, the movie __________ .",
    options: [
      { label: "already started", isCorrect: false },
      { label: "had already started", isCorrect: true },
      { label: "was starting", isCorrect: false },
      { label: "starts", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "emp_2",
    levelLabel: "🎓 Matura Podstawowa (B1–B2)",
    question: "Future Perfect: By 2030, scientists __________ a cure for this disease.",
    options: [
      { label: "will find", isCorrect: false },
      { label: "will have found", isCorrect: true },
      { label: "find", isCorrect: false },
      { label: "have found", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "emp_3",
    levelLabel: "🎓 Matura Podstawowa (B1–B2)",
    question: "Have something done: I need to __________ my car serviced before the trip.",
    options: [
      { label: "have", isCorrect: true },
      { label: "do", isCorrect: false },
      { label: "make", isCorrect: false },
      { label: "get to", isCorrect: false },
      { label: "Nie znam tej konstrukcji", isCorrect: false },
    ],
  },
  {
    id: "emp_4",
    levelLabel: "🎓 Matura Podstawowa (B1–B2)",
    question: "3rd Conditional: If you had told me earlier, I __________ you.",
    options: [
      { label: "would help", isCorrect: false },
      { label: "would have helped", isCorrect: true },
      { label: "will help", isCorrect: false },
      { label: "had helped", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "emp_5",
    levelLabel: "🎓 Matura Podstawowa (B1–B2)",
    question: "I wish / If only: I wish I __________ so much money yesterday.",
    options: [
      { label: "didn't spend", isCorrect: false },
      { label: "hadn't spent", isCorrect: true },
      { label: "don't spend", isCorrect: false },
      { label: "wouldn't spend", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "emp_6",
    levelLabel: "🎓 Matura Podstawowa (B1–B2)",
    question: "Czasowniki modalne w przeszłości: He didn't answer the phone. He __________ slept.",
    options: [
      { label: "must have", isCorrect: true },
      { label: "should have", isCorrect: false },
      { label: "can have", isCorrect: false },
      { label: "had to", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "emp_7",
    levelLabel: "🎓 Matura Podstawowa (B1–B2)",
    question: "Czasowniki wprowadzające w mowie zależnej: She __________ me to turn off the lights.",
    options: [
      { label: "reminded", isCorrect: true },
      { label: "suggested", isCorrect: false },
      { label: "insisted", isCorrect: false },
      { label: "explained", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
];

/* 🚀 MATURA ROZSZERZONA ANGIELSKI (B2+–C1) */
const ENG_MATURA_ROZSZERZONA: Question[] = [
  {
    id: "emr_1",
    levelLabel: "🚀 Matura Rozszerzona (B2+–C1)",
    question: "Inwersja stylistyczna: Hardly __________ into the house when the lights went out.",
    options: [
      { label: "I stepped", isCorrect: false },
      { label: "had I stepped", isCorrect: true },
      { label: "did I step", isCorrect: false },
      { label: "I had stepped", isCorrect: false },
      { label: "Nie znam inwersji", isCorrect: false },
    ],
  },
  {
    id: "emr_2",
    levelLabel: "🚀 Matura Rozszerzona (B2+–C1)",
    question: "Inwersja z Under no circumstances: Under no circumstances __________ leave the room without permission.",
    options: [
      { label: "you should", isCorrect: false },
      { label: "should you", isCorrect: true },
      { label: "you must", isCorrect: false },
      { label: "must you to", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "emr_3",
    levelLabel: "🚀 Matura Rozszerzona (B2+–C1)",
    question: "Mixed Conditionals: If I __________ that exam 5 years ago, I would be working as a doctor now.",
    options: [
      { label: "passed", isCorrect: false },
      { label: "had passed", isCorrect: true },
      { label: "would pass", isCorrect: false },
      { label: "pass", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "emr_4",
    levelLabel: "🚀 Matura Rozszerzona (B2+–C1)",
    question: "Participle Clauses (Imiesłowy): __________ the project, she finally took a long vacation.",
    options: [
      { label: "Having completed", isCorrect: true },
      { label: "Completed", isCorrect: false },
      { label: "Complete", isCorrect: false },
      { label: "Completing to", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "emr_5",
    levelLabel: "🚀 Matura Rozszerzona (B2+–C1)",
    question: "It's high time: It's high time you __________ looking for a job.",
    options: [
      { label: "start", isCorrect: false },
      { label: "started", isCorrect: true },
      { label: "will start", isCorrect: false },
      { label: "have started", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "emr_6",
    levelLabel: "🚀 Matura Rozszerzona (B2+–C1)",
    question: "Phrasal Verbs C1: We had to __________ off the meeting due to the blizzard.",
    options: [
      { label: "call", isCorrect: true },
      { label: "put", isCorrect: false },
      { label: "turn", isCorrect: false },
      { label: "take", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "emr_7",
    levelLabel: "🚀 Matura Rozszerzona (B2+–C1)",
    question: "Phrasal Verbs C1 (Znosić kogoś): I can no longer put __________ with his arrogance.",
    options: [
      { label: "on", isCorrect: false },
      { label: "up", isCorrect: true },
      { label: "off", isCorrect: false },
      { label: "out", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
    ],
  },
  {
    id: "emr_8",
    levelLabel: "🚀 Matura Rozszerzona (B2+–C1)",
    question: "Słowotwórstwo (Word Formation C1): The decision was completely __________ (EXPECTED). Nobody saw it coming.",
    options: [
      { label: "unexpected", isCorrect: true },
      { label: "disexpected", isCorrect: false },
      { label: "non-expected", isCorrect: false },
      { label: "unexpecting", isCorrect: false },
      { label: "Nie wiem / zgaduję", isCorrect: false },
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

const GOAL_OPTIONS = [
  {
    id: "egzamin",
    label: "🎯 Przygotowanie do Egzaminu Ósmoklasisty / Matury CKE",
    sub: "Test wymagań egzaminacyjnych, arkusze i zadania z poprzednich lat",
  },
  {
    id: "nadrabianie",
    label: "🩹 Nadrabianie zaległości z poprzednich lat / lekcji",
    sub: "Spokojne tłumaczenie podstaw od zera bez pośpiechu i stresu",
  },
  {
    id: "biezacy",
    label: "📖 Bieżący materiał ze szkoły & sprawdziany",
    sub: "Utrwalanie lekcji na bieżąco i dobre przygotowanie do kartkówek",
  },
  {
    id: "mowienie",
    label: "🗣️ Przełamanie oporu w mówieniu & konwersacje",
    sub: "Praktyczne używanie języka i budowanie pewności siebie",
  },
  {
    id: "wyzsze-wyniki",
    label: "🚀 Wyższe oceny (5-6) & głębszy rozwój",
    sub: "Robienie ambitniejszych rzeczy i rozwiązywanie trudniejszych zadań",
  },
  {
    id: "inny",
    label: "✏️ Inny cel...",
    sub: "Wpisz własny cel lub szczegółowe oczekiwania",
  },
];

export default function DiagnozaPage() {
  const [step, setStep] = useState<number>(1);
  const [filledBy, setFilledBy] = useState<"uczen" | "rodzic">("uczen");
  const [studentName, setStudentName] = useState("");
  const [schoolClass, setSchoolClass] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState<SubjectType>("matematyka-7-8");
  const [grade, setGrade] = useState("3");
  const [selectedGoal, setSelectedGoal] = useState("nadrabianie");
  const [customGoalText, setCustomGoalText] = useState("");

  const [frequency, setFrequency] = useState("1x-tydzien");
  const [preferredTime, setPreferredTime] = useState("popoludnia");
  const [duration, setDuration] = useState("caly-rok");

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [conceptMap, setConceptMap] = useState<Record<string, string>>({});
  const [mathFears, setMathFears] = useState<string[]>([]);
  const [customMathFear, setCustomMathFear] = useState("");

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

  const getQuestions = (): Question[] => {
    // JEŚLI UCZEŃ CHCE NADRABIĆ ZALEGŁOŚCI:
    if (selectedGoal === "nadrabianie") {
      if (subject === "matematyka-4-6") {
        return MATH_QUESTIONS_46_CATCHUP;
      }
      if (subject === "angielski-4-6") {
        return ENG_QUESTIONS_46_CATCHUP;
      }
      if (subject === "matematyka-7-8") {
        return [
          MATH_QUESTIONS_46[0],
          MATH_QUESTIONS_46[2],
          MATH_QUESTIONS_46[4],
          MATH_QUESTIONS_78[0],
          MATH_QUESTIONS_78[2],
          MATH_QUESTIONS_78[3],
        ];
      }
      if (subject === "angielski-7-8") {
        return [
          ENG_QUESTIONS_46[0],
          ENG_QUESTIONS_46[3],
          ENG_QUESTIONS_78[0],
          ENG_QUESTIONS_78[1],
          ENG_QUESTIONS_78[3],
        ];
      }
      if (subject.startsWith("angielski-liceum") || subject.startsWith("angielski-matura")) {
        return [
          ENG_QUESTIONS_78[0],
          ENG_QUESTIONS_78[1],
          ENG_LIC_BIEZACY[0],
          ENG_LIC_BIEZACY[1],
          ENG_LIC_BIEZACY[2],
        ];
      }
    }

    if (selectedGoal === "egzamin") {
      if (subject === "matematyka-4-6") return MATH_QUESTIONS_46;
      if (subject === "matematyka-7-8") return MATH_QUESTIONS_78;
      if (subject === "angielski-4-6") return ENG_QUESTIONS_46;
      if (subject === "angielski-7-8") return ENG_QUESTIONS_78;
      if (subject === "angielski-matura-podstawowa") return ENG_MATURA_PODSTAWOWA;
      if (subject === "angielski-matura-rozszerzona") return ENG_MATURA_ROZSZERZONA;
      return ENG_LIC_BIEZACY;
    }

    if (subject === "matematyka-4-6") return MATH_QUESTIONS_46.slice(0, 5);
    if (subject === "matematyka-7-8") return MATH_QUESTIONS_78.slice(0, 5);
    if (subject === "angielski-4-6") return ENG_QUESTIONS_46.slice(0, 4);
    if (subject === "angielski-7-8") return ENG_QUESTIONS_78.slice(0, 4);
    if (subject === "angielski-matura-podstawowa") return ENG_MATURA_PODSTAWOWA.slice(0, 4);
    if (subject === "angielski-matura-rozszerzona") return ENG_MATURA_ROZSZERZONA.slice(0, 4);
    return ENG_LIC_BIEZACY;
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
        return "Matematyka (klasy 7–8 & Egzamin Ósmoklasisty E8)";
      case "angielski-4-6":
        return "Język Angielski (klasy 4–6 / A1–A2)";
      case "angielski-7-8":
        return "Język Angielski (klasy 7–8 & Egzamin Ósmoklasisty E8)";
      case "angielski-liceum-biezacy":
        return "Język Angielski — Liceum (Bieżąca nauka & Konwersacje)";
      case "angielski-matura-podstawowa":
        return "Język Angielski — Liceum / Matura Podstawowa (B1–B2)";
      case "angielski-matura-rozszerzona":
        return "Język Angielski — Liceum / Matura Rozszerzona (B2+/C1)";
    }
  };

  const getGoalDisplay = () => {
    const found = GOAL_OPTIONS.find((g) => g.id === selectedGoal);
    let title = found ? found.label : selectedGoal;
    if (selectedGoal === "inny" && customGoalText.trim()) {
      title += `: ${customGoalText.trim()}`;
    }
    return title;
  };

  const getFrequencyDisplay = (f: string) => {
    switch (f) {
      case "1x-tydzien":
        return "1 raz w tygodniu (60 min) — regularnie";
      case "2x-tydzien":
        return "2 razy w tygodniu (2x 60 min) — intensywnie";
      case "doraznie":
        return "Doraźnie / Przed sprawdzianami i klasówkami";
      case "do-ustalenia":
        return "Chcę ustalić częstotliwość podczas darmowej rozmowy";
      default:
        return f;
    }
  };

  const getPreferredTimeDisplay = (t: string) => {
    switch (t) {
      case "popoludnia":
        return "🌅 Popołudnia (15:00–18:00)";
      case "wieczory":
        return "🌙 Wieczory (18:00–21:00)";
      case "weekendy":
        return "📅 Weekendy";
      case "elastycznie":
        return "⚡ Elastycznie / Do uzgodnienia";
      default:
        return t;
    }
  };

  const getDurationDisplay = (d: string) => {
    switch (d) {
      case "caly-rok":
        return "Stała współpraca na cały rok szkolny";
      case "krotkoterminowo":
        return "Krótkoterminowo (np. 1-2 miesiące powtórek przed egzaminem/klasówką)";
      case "do-ustalenia":
        return "Do omówienia podczas darmowego spotkania";
      default:
        return d;
    }
  };

  const buildSummaryText = () => {
    const questions = getQuestions();
    const { score, total } = calculateScore();

    let text = `📄 RAPORT DIAGNOSTYCZNY:\n`;
    text += `👤 Uczeń: ${studentName || "Nie podano"}\n`;
    text += `👥 Osoba wypełniająca: ${filledBy === "uczen" ? "Uczeń" : "Rodzic z dzieckiem"}\n`;
    text += `🏫 Klasa/Szkoła: ${schoolClass || "Nie podano"}\n`;
    text += `📧 Kontakt: ${contact || "Nie podano"}\n`;
    text += `📚 Przedmiot i poziom: ${getSubjectLabel(subject)}\n`;
    text += `🎯 Główny cel nauki: ${getGoalDisplay()}\n`;
    text += `🗓️ Preferowana częstotliwość: ${getFrequencyDisplay(frequency)}\n`;
    text += `⏰ Preferowana pora dnia: ${getPreferredTimeDisplay(preferredTime)}\n`;
    text += `⏳ Przewidywany czas współpracy: ${getDurationDisplay(duration)}\n`;
    text += `⭐ Ocena w szkole: ${grade}\n\n`;
    text += `📊 WYNIK QUIZU SPRAWDZAJĄCEGO: ${score} / ${total} poprawnych\n\n`;

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
      const allFears = [...mathFears];
      if (customMathFear.trim()) {
        allFears.push(`Własny problem: ${customMathFear.trim()}`);
      }
      if (allFears.length > 0) {
        text += `\n⚠️ Główne lęki i trudności:\n- ${allFears.join("\n- ")}\n`;
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

    if (subject.startsWith("angielski-matura") || subject === "angielski-liceum-biezacy") {
      text += `\n--- SAMOOCENA LICEALNA ---\n`;
      text += `- Wypowiedź pisemna: ${writingEvalLic}\n`;
      text += `- Mówienie / Ustna: ${oralMaturaEvalLic}\n`;
      text += `- Środki językowe: ${useOfEnglishEval}\n`;
    }

    return text;
  };

  const buildAIPrompt = () => {
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
    p += `5. 🗣️ SKRYPT I STRATEGIA NA 30-MINUTOWĄ ROZMOWĘ ZAPOZNAWCZĄ:\n`;
    p += `   - Jak otworzyć rozmowę i pochwalić ucznia za test.\n`;
    p += `   - Jak przedstawić diagnozę: "Zauważyłam, że świetnie idzie Ci X, ale na Y warto poświęcić chwilę..."\n`;
    p += `   - Jak przedstawić plan i domknąć zapis na regularne lekcje.\n\n`;
    p += `===============================================================\n`;
    p += `ODPOWIEDZI UCZNIA:\n`;
    p += `===============================================================\n\n`;
    p += buildSummaryText();
    return p;
  };

  // AUTOMATYCZNA WYSYŁKA RAPORTU NA E-MAIL OLI (DARMOWY FORMSUBMIT API + LOKALNY ZAPIS TXT)
  useEffect(() => {
    if (step === 3 && studentName) {
      const summary = buildSummaryText();
      const prompt = buildAIPrompt();

      // 1. Zapis pliku lokalnego .txt na serwerze dev
      fetch("/api/diagnoza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName,
          summaryText: summary,
          aiPrompt: prompt,
        }),
      }).catch(() => {});

      // 2. Wyszukanie w tle darmowego e-maila do Oli (FormSubmit API - 100% darmowe)
      fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `Nowa Diagnoza Ucznia: ${studentName}`,
          _captcha: "false",
          uczen: studentName,
          wypelnia: filledBy === "uczen" ? "Uczeń" : "Rodzic z dzieckiem",
          klasa: schoolClass,
          kontakt: contact,
          przedmiot: getSubjectLabel(subject),
          cel: getGoalDisplay(),
          czestotliwosc: getFrequencyDisplay(frequency),
          pora_dnia: getPreferredTimeDisplay(preferredTime),
          czas_wspolpracy: getDurationDisplay(duration),
          ocena: grade,
          wynik: `${calculateScore().score} / ${calculateScore().total}`,
          pelny_raport: summary,
        }),
      }).catch(() => {});
    }
  }, [step]);

  const handleCopySummary = () => {
    const summary = buildSummaryText();
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const currentQuestions = getQuestions();
  const allQuestionsAnswered = currentQuestions.every((q) => answers[q.id]);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
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

          {/* BANER Z PROŚBĄ O SZCZERE WYPEŁNIANIE BEZ ŚCIĄGANIA */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs sm:text-sm text-left flex items-start gap-3">
            <HeartHandshake className="size-5 shrink-0 text-amber-600 mt-0.5" />
            <p className="leading-relaxed font-medium">
              <strong>Ważna prośba:</strong> Bardzo proszę o szczere wypełnianie quizu — bez używania kalkulatora, słowników ani pomocy osób trzecich. Dzięki temu na naszej darmowej 30-minutowej lekcji skupimy się dokładnie na tym, w czym najbardziej potrzebujesz wsparcia! 😊
            </p>
          </div>

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
                CZĘŚĆ 1: Dane ucznia, cel i preferencje zajęć
              </h2>

              {/* PYTANIE O OSOBĘ WYPEŁNIAJĄCĄ */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-1.5">
                  <Users className="size-4 text-brand-600" /> Kto wypełnia formularz? *
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setFilledBy("uczen")}
                    className={`flex-1 py-3 px-4 rounded-xl border text-center text-xs sm:text-sm font-semibold transition-all ${
                      filledBy === "uczen"
                        ? "border-brand-500 bg-brand-50 text-brand-900 font-bold ring-2 ring-brand-200"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    🧑 Wypełnia uczeń
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilledBy("rodzic")}
                    className={`flex-1 py-3 px-4 rounded-xl border text-center text-xs sm:text-sm font-semibold transition-all ${
                      filledBy === "rodzic"
                        ? "border-brand-500 bg-brand-50 text-brand-900 font-bold ring-2 ring-brand-200"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    👪 Wypełnia rodzic z dzieckiem
                  </button>
                </div>
              </div>

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
                    placeholder="np. 4 klasa, 8 klasa E8, 1 klasa liceum"
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

              {/* KAFELKI PRZEDMIOTU I POZIOMU */}
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
                      sub: "Klasy 7–8 & Egzamin Ósmoklasisty E8",
                    },
                    {
                      id: "angielski-4-6",
                      label: "🇬🇧 Język Angielski",
                      sub: "Klasy 4–6 (podstawy języka A1/A2)",
                    },
                    {
                      id: "angielski-7-8",
                      label: "🇬🇧 Język Angielski",
                      sub: "Klasy 7–8 & Egzamin Ósmoklasisty E8",
                    },
                    {
                      id: "angielski-liceum-biezacy",
                      label: "🎓 Język Angielski — Liceum",
                      sub: "Bieżąca nauka w szkole / Konwersacje (bez matury)",
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

              {/* GŁÓWNY CEL NAUKI (WYBÓR DYNAMICZNY) */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Jaki jest Twój główny cel nauki ze mną? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {GOAL_OPTIONS.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setSelectedGoal(g.id)}
                      className={`p-4 rounded-2xl text-left border transition-all ${
                        selectedGoal === g.id
                          ? "border-brand-500 bg-brand-50/60 ring-2 ring-brand-200"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">{g.label}</div>
                      <div className="text-xs text-slate-500 mt-1">{g.sub}</div>
                    </button>
                  ))}
                </div>

                {selectedGoal === "inny" && (
                  <div className="mt-3">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Wpisz swój własny cel / oczekiwanie:
                    </label>
                    <input
                      type="text"
                      value={customGoalText}
                      onChange={(e) => setCustomGoalText(e.target.value)}
                      placeholder="np. Przygotowanie do wyjazdu za granicę, poprawa wymowy, zdanie egzaminu poprawkowego..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs sm:text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                )}
              </div>

              {/* PREFEROWANA CZĘSTOTLIWOŚĆ, PORA DNIA I CZAS WSPÓŁPRACY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1.5">
                    <Clock className="size-4 text-brand-600" /> Preferowana częstotliwość zajęć:
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  >
                    <option value="1x-tydzien">1 raz w tygodniu (60 min) — regularnie</option>
                    <option value="2x-tydzien">2 razy w tygodniu (2x 60 min) — intensywnie</option>
                    <option value="doraznie">Doraźnie / Przed sprawdzianami i klasówkami</option>
                    <option value="do-ustalenia">Chcę ustalić częstotliwość podczas rozmowy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1.5">
                    <Calendar className="size-4 text-brand-600" /> Przewidywany czas współpracy:
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  >
                    <option value="caly-rok">Stała współpraca na cały rok szkolny</option>
                    <option value="krotkoterminowo">Krótkoterminowo (np. 1–2 miesiące przed egzaminem)</option>
                    <option value="do-ustalenia">Do omówienia podczas darmowego spotkania</option>
                  </select>
                </div>
              </div>

              {/* PORA DNIA NA ZAJĘCIA */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-1.5">
                  <Sun className="size-4 text-amber-500" /> Preferowana pora dnia na zajęcia:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: "popoludnia", label: "🌅 Popołudnia (15:00–18:00)" },
                    { id: "wieczory", label: "🌙 Wieczory (18:00–21:00)" },
                    { id: "weekendy", label: "📅 Weekendy" },
                    { id: "elastycznie", label: "⚡ Elastycznie / Do uzgodnienia" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setPreferredTime(t.id)}
                      className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                        preferredTime === t.id
                          ? "border-brand-500 bg-brand-50 text-brand-900 font-bold ring-2 ring-brand-200"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {t.label}
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
                    Rozwiązuj samodzielnie bez kalkulatora i słowników. Przy każdym pytaniu masz opcję "Nie wiem".
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
                      {q.options.map((opt, optIdx) => {
                        const isSelected = answers[q.id] === opt.label;
                        const prefix = String.fromCharCode(65 + optIdx);
                        const isLastOption = optIdx === q.options.length - 1;

                        return (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={() => handleOptionSelect(q.id, opt.label)}
                            className={`px-4 py-2.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                              isLastOption ? "sm:col-span-2" : ""
                            } ${
                              isSelected
                                ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                                : isLastOption
                                ? "border-slate-200 bg-slate-100/70 text-slate-600 hover:border-slate-300 hover:bg-slate-200/60"
                                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100/60"
                            }`}
                          >
                            <span className="font-bold mr-1.5">{prefix})</span> {opt.label}
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

                    <div className="pt-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Inny problem / dopisz własną odpowiedź:
                      </label>
                      <input
                        type="text"
                        value={customMathFear}
                        onChange={(e) => setCustomMathFear(e.target.value)}
                        placeholder="np. Przeliczanie skali na mapie, ułamki dziesiętne pod kreską..."
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs sm:text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
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

              {/* ANGIELSKI LICEUM: SPRAWNOŚCI MATURALNE / LICEALNE */}
              {(subject.startsWith("angielski-matura") || subject === "angielski-liceum-biezacy") && (
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <h3 className="font-bold text-slate-900 text-base">
                    CZĘŚĆ C2: Sprawności językowe i maturalne (Samoocena)
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-slate-700 block mb-1">
                        Rozprawka / Artykuł / E-mail (Pisanie):
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
                        Mówienie / Ustna komunikacja:
                      </span>
                      <div className="space-y-2">
                        {[
                          "Mówię płynnie, potrafię opisać ilustrację i uzasadnić wybór z materiału stymulującego",
                          "Mówię, ale mam pauzy na szukanie słówek w głowie",
                          "Mam paraliżujący stres na samej myśli o mówieniu po angielsku",
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
                        Środki językowe & Gramatyka:
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
                            className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${
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

          {/* KROK 3: WYNIKI — RAPORT ZAPISANY AUTOMATYCZNIE W TLE DLA OLI */}
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
                <p className="text-sm font-semibold text-brand-800 max-w-lg mx-auto leading-relaxed bg-brand-50 p-4 rounded-2xl border border-brand-100">
                  Super! Twoje wyniki trafiły na moją skrzynkę. Przeanalizuję je i odezwę się do Was w ciągu 24 godzin z propozycją dogodnego terminu darmowej 30-minutowej rozmowy!
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
                <div><strong className="text-slate-900">Wypełnia:</strong> {filledBy === "uczen" ? "Uczeń" : "Rodzic z dzieckiem"}</div>
                <div><strong className="text-slate-900">Kontakt:</strong> {contact}</div>
                <div><strong className="text-slate-900">Przedmiot:</strong> {getSubjectLabel(subject)}</div>
                <div><strong className="text-slate-900">Główny cel nauki:</strong> {getGoalDisplay()}</div>
                <div><strong className="text-slate-900">Częstotliwość:</strong> {getFrequencyDisplay(frequency)}</div>
                <div><strong className="text-slate-900">Pora dnia:</strong> {getPreferredTimeDisplay(preferredTime)}</div>
                <div><strong className="text-slate-900">Czas współpracy:</strong> {getDurationDisplay(duration)}</div>
                <div><strong className="text-slate-900">Ocena w szkole:</strong> {grade}</div>
              </div>

              {/* PRZYCISK KOPIOWANIA DLA UCZNIA (OPCJONALNY DLA JEGO WIADOMOŚCI) */}
              <div className="pt-2">
                <Button onClick={handleCopySummary} size="lg" className="w-full">
                  {copied ? (
                    <>
                      <CheckCircle2 className="mr-2 size-5 text-emerald-300" /> Skopiowano Twoje wyniki!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 size-5" /> 📋 Skopiuj swoje wyniki (dla siebie)
                    </>
                  )}
                </Button>
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
