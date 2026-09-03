/**
 * Centralna konfiguracja strony: Egzamin Ósmoklasisty & Klasy 6–8 z Języka Angielskiego.
 */

export const site = {
  name: "ola-korepetycje.pl — Język Angielski E8 & Klasy 6–8",
  url: "https://ola-korepetycje.pl",
  tutorName: "Ola",
  headline: "Egzamin Ósmoklasisty & Klasy 6–8 — Język Angielski",
  description:
    "Korepetycje online z języka angielskiego do Egzaminu Ósmoklasisty oraz klas 6–8. Autorski plan pracy, materiały przygotowywane przed lekcją, zadania domowe i wymagania CKE.",
  email: "kontakt.ola.korepetycje@gmail.com",
  phoneDisplay: "",
  whatsapp: "",
  whatsappMessage: "",
  facebook: "",
  instagram: "",
} as const;

export const navLinks = [
  { label: "O przygotowaniach", href: "/#jak-pracujemy" },
  { label: "O mnie", href: "/#o-mnie" },
  { label: "Opinie", href: "/#opinie" },
  { label: "Poradniki", href: "/#poradniki" },
  { label: "Cennik", href: "/#cennik" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const services = [
  {
    id: "e8-angielski",
    title: "Egzamin Ósmoklasisty z Języka Angielskiego",
    description:
      "Kompleksowe przygotowanie pod wymogi CKE: gramatyka, Use of English, schematy pisania (e-mail, blog) oraz reakcje językowe.",
    bullets: [
      "Autorski plan nauki przedstawiany rodzicowi i uczniowi po bezpłatnej rozmowie",
      "Materiały przygotowywane przeze mnie przed każdą lekcją (zadania z repetytoriów & autorskie ćwiczenia)",
      "Trening form pisemnych (e-mail / wpis na bloga) pod kryteria oceniania CKE",
    ],
  },
  {
    id: "klasy-6-8-angielski",
    title: "Nadrabianie braków & Bieżący materiał (Klasy 6–8)",
    description:
      "Systematyczne wsparcie w codziennej nauce angielskiego, nadrabianie zaległości i budowanie swobody w mówieniu.",
    bullets: [
      "Przygotowanie do kartkówek, sprawdzianów i odpowiedzi ustnych",
      "Przełamywanie bariery językowej i praktyczna nauka słownictwa",
      "Zadania domowe i utrwalanie materiału między lekcjami",
    ],
  },
] as const;

export const faqItems = [
  {
    q: "Jak pomagasz uczniom, którzy odczuwają stres przed Egzaminem Ósmoklasisty?",
    a: "Rozumiem to doskonale — Egzamin Ósmoklasisty to pierwszy tak ważny egzamin w życiu. Stres wynika z niepewności co do wymagań CKE. Podczas lekcji rozkładamy arkusz na części pierwsze, przerabiamy sprawdzone schematy i stopniowo budujemy pewność siebie.",
  },
  {
    q: "Czy możemy też pracować nad bieżącym materiałem ze szkoły lub brakiem swobody w mówieniu?",
    a: "Tak, jak najbardziej! Choć moim głównym celem jest Egzamin Ósmoklasisty, pomagam również w nadrabianiu zaległości z klas 6–8, przygotowaniu do sprawdzianów i rozwĳaniu swobodnej komunikacji.",
  },
  {
    q: "Dlaczego warto uczyć się pod wymagania CKE, a nie tylko z podręczników?",
    a: "Szkoła często realizuje cały opasły podręcznik bez nacisku na specyfikę arkusza CKE. Ja skupiam się na aktualnych Informatorach CKE: jak czytać polecenia, jak pisać e-maile bez utraty punktów i jak rozwiązywać Use of English.",
  },
  {
    q: "Jak wygląda informacja zwrotna i monitorowanie postępów po lekcji?",
    a: "Po każdych zajęciach rodzic i uczeń wiedzą dokładnie, nad czym pracowaliśmy. Przesyłam podsumowanie przerobionego materiału, krótką informację zwrotną oraz spersonalizowane zadanie domowe do wykonania przed kolejnym spotkaniem.",
  },
  {
    q: "Jak wygląda pakiet startowy 3 lekcji z rabatem -25%?",
    a: "Pierwsza krótka rozmowa online (15 min) jest w 100% darmowa. Następnie pierwsze 3 lekcje objęte są rabatem -25% (56 zł zamiast 75 zł / 60 min). Płatność odbywa się z lekcji na lekcję, bez długoterminowej umowy.",
  },
  {
    q: "Czy zajęcia odbywają się w 100% online?",
    a: "Tak, lekcje trwają 60 minut i odbywają się przez Google Meet z wykorzystaniem interaktywnej tablicy oraz cyfrowych zeszytów w Canvie. Uczeń nie traci czasu na dojazdy, a wszystkie notatki ma w jednym miejscu.",
  },
] as const;
