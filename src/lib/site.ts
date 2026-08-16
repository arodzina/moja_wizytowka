/**
 * Centralna konfiguracja strony: Egzamin Ósmoklasisty (E8) & Matura z Języka Angielskiego.
 */

export const site = {
  name: "Ola — Przygotowanie do E8 & Matury z Angielskiego",
  /** Użyj domeny produkcyjnej po publikacji */
  url: "https://korepetycje-ola.pl",
  tutorName: "Ola",
  headline: "Przekształć stres przed egzaminem w pewność siebie i wysoki wynik.",
  description:
    "Dostanie się do dobrego liceum i na wymarzone studia to nie przypadek. Kompleksowe przygotowanie do E8 z Matematyki i Angielskiego oraz Matury z Angielskiego, które uczy myślenia i strategii CKE.",
  email: "kontakt.ola.korepetycje@gmail.com",
  phoneDisplay: "",
  whatsapp: "",
  whatsappMessage: "",
  facebook: "",
  instagram: "",
} as const;

export const navLinks = [
  { label: "O co toczy się gra", href: "/#stawka-egzaminu" },
  { label: "Filary oferty", href: "/#oferta" },
  { label: "Zgodność z CKE", href: "/#cke" },
  { label: "Metodologia", href: "/#metodologia" },
  { label: "Cennik", href: "/#cennik" },
  { label: "Darmowy niezbędnik", href: "/#materialy" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const services = [
  {
    id: "e8-matematyka",
    title: "Egzamin Ósmoklasisty: Matematyka",
    description:
      "Nauka rozpracowywania zadań CKE, unikanie typowych pułapek egzaminacyjnych, geometria i algebra bez paniki.",
    bullets: [
      "Rozpracowywanie schematów zadań otwartych i zamkniętych CKE",
      "Pewniaki egzaminacyjne: ułamki, procenty, równania i planimetria",
      "Techniki oszczędzania czasu i sprawdzania wyników na arkuszu",
    ],
  },
  {
    id: "e8-angielski",
    title: "Egzamin Ósmoklasisty: Język Angielski",
    description:
      "Pewniaki gramatyczne, schematy wypowiedzi pisemnej (e-mail, wpis na blog), reakcje językowe i słownictwo tematyczne.",
    bullets: [
      "Niezawodne szablony do form pisemnych (e-mail / wpis na bloga)",
      "Transformacje, parafrazy i słowotwórstwo w standardzie CKE",
      "Słuchanie ze zrozumieniem i reakcje językowe bez utraty punktów",
    ],
  },
  {
    id: "matura-angielski",
    title: "Matura z Języka Angielskiego (Podstawa & Rozszerzenie)",
    description:
      "Trening pisania (rozprawka, list, artykuł), Use of English, transformacje oraz pewność w rozumieniu ze słuchu i tekstu.",
    bullets: [
      "Budowanie przewagi rekrutacyjnej na studia (angielski liczy się wszędzie)",
      "Trening pisania rozprawki, artykułu i listu pod klucz CKE",
      "Zaawansowane struktury gramatyczne (inwersja, okresy warunkowe, strona bierna)",
    ],
  },
] as const;

export const faqItems = [
  {
    q: "Kiedy najlepiej zacząć przygotowania do E8 i Matury?",
    a: "Najbardziej optymalny czas to początek roku szkolnego (wrzesień/październik), co pozwala na spokojne uzupełnienie zaległości i regularne arkusze bez pośpiechu. Jeśli jednak do egzaminu zostało mniej czasu (np. 3–5 miesięcy), wdrażamy intensywny plan strategiczny skupiony na kluczowych pewniakach CKE, które dają najwięcej punktów.",
  },
  {
    q: "Jak pomagacie uczniom, którzy odczuwają paraliżujący stres przed matematyką lub angielskim?",
    a: "Stres najczęściej wynika z poczucia chaosu i braku kontroli. Na zajęciach rozkładamy trudne zagadnienia na małe, logiczne kroki i pokazujemy, że zadania egzaminacyjne opierają się na powtarzalnych schematach. Pracujemy w bezstresowej, partnerskiej atmosferze — uczeń zyskuje poczucie bezpieczeństwa, gdy widzi, że za każdym razem potrafi samodzielnie rozwiązać zadanie.",
  },
  {
    q: "Dlaczego warto uczyć się ze strategią CKE, a nie tylko samodzielnie z podręczników?",
    a: "Szkoła realizuje cały program podręcznikowy, w którym jest mnóstwo materiału niemającego odzwierciedlenia na egzaminie. My uczymy ściśle pod aktualne Wytyczne i Informatory CKE. Uczymy nie tylko wiedzy, ale strategii: jak czytać polecenia, jak konstruować odpowiedzi pod klucz punktowania i jak nie tracić punktów na drobnych pułapkach formalnych.",
  },
  {
    q: "Jak wyznaczamy cele i monitorujemy postępy ucznia?",
    a: "Zaczynamy od dokładnej diagnozy luk w wiedzy na podstawie autentycznych zadań egzaminacyjnych. Następnie ustalamy cel punktowy (np. 85%+ potrzebne do wymarzonego liceum lub na dany kierunek studiów). Po każdych zajęciach uczeń i rodzic otrzymują podsumowanie zrobionego materiału, a regularne mini-arkusze pokazują realny przyrost punktów.",
  },
  {
    q: "Jak wygląda pakiet startowy 3 lekcji próbnych?",
    a: "Pierwsza krótka rozmowa online (15 min) jest w 100% darmowa. Następnie rozpoczynamy od 3 lekcji próbnych (płatnych pojedynczo, bez konieczności wiązania się długą umową). To czas, w którym uczeń sprawdza naszą metodę, a my poznajemy jego tempo pracy. Dopiero po tym etapie decydujecie o stałej współpracy.",
  },
  {
    q: "Czy zajęcia odbywają się w 100% online?",
    a: "Tak, lekcje prowadzimy przez Google Meet z wykorzystaniem interaktywnej tablicy online i przejrzystych materiałów. Uczeń pracuje w swoim domowym, bezpiecznym środowisku, nie tracąc czasu na dojazdy. Po lekcji otrzymuje zapis tablicy lub pełną notatkę w formacie cyfrowym.",
  },
] as const;
