/**
 * Centralna konfiguracja strony: Egzamin Ósmoklasisty (E8) & Matura z Języka Angielskiego.
 */

export const site = {
  name: "Ola — Przygotowanie do E8 & Matury (Matematyka & Angielski)",
  /** Użyj domeny produkcyjnej po publikacji */
  url: "https://korepetycje-ola.pl",
  tutorName: "Ola",
  headline: "Solidna wiedza i strategia na Twój najlepszy wynik z egzaminu.",
  description:
    "Przekazuję sprawdzony materiał, motywację i wytyczne CKE z Matematyki i Angielskiego. Pomagam uczniom przygotować się do E8 i Matury (z Matematyki i Angielskiego) mądrze i bez chaotycznego kucia.",
  email: "kontakt.ola.korepetycje@gmail.com",
  phoneDisplay: "",
  whatsapp: "",
  whatsappMessage: "",
  facebook: "",
  instagram: "",
} as const;

export const navLinks = [
  { label: "O egzaminach", href: "/#stawka-egzaminu" },
  { label: "O mnie", href: "/#o-mnie" },
  { label: "Jak uczę", href: "/#metodologia" },
  { label: "Cennik", href: "/#cennik" },
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
    id: "matura-matematyka",
    title: "Matura z Matematyki (Podstawa & Rozszerzenie)",
    description:
      "Praca na oficjalnych arkuszach CKE, nauka toku rozumowania w zadaniach otwartych, algebra, funkcja kwadratowa, wielomiany, pochodne i optymalizacja.",
    bullets: [
      "Przygotowanie do Matury Podstawowej oraz Rozszerzonej dla kandydatów na uczelnie techniczne i ścisłe",
      "Analiza toku rozumowania w zadaniach otwartych pod klucz oceniania CKE",
      "Wyłapywanie pewniaków: funkcja kwadratowa, ciągi, pochodne i zadania optymalizacyjne",
    ],
  },
  {
    id: "matura-angielski",
    title: "Matura z Języka Angielskiego (Podstawa & Rozszerzenie)",
    description:
      "Trening pisania (rozprawka, list, artykuł), Use of English, transformacje oraz bezstresowa matura ustna.",
    bullets: [
      "Budowanie przewagi rekrutacyjnej na studia (angielski liczy się wszędzie)",
      "Trening pisania rozprawki, artykułu i listu pod klucz CKE",
      "Zaawansowane struktury gramatyczne (inwersja, okresy warunkowe, strona bierna) & matura ustna",
    ],
  },
] as const;

export const faqItems = [
  {
    q: "Kiedy najlepiej zacząć przygotowania do E8 i Matury?",
    a: "Najbardziej optymalny czas to początek roku szkolnego (wrzesień/październik), co pozwala na spokojne uzupełnienie zaległości i regularne arkusze bez pośpiechu. Jeśli jednak do egzaminu zostało mniej czasu (np. 3–5 miesięcy), wdrażam intensywny plan strategiczny skupiony na kluczowych pewniakach CKE, które dają najwięcej punktów.",
  },
  {
    q: "Jak pomagasz uczniom, którzy odczuwają paraliżujący stres przed matematyką lub angielskim?",
    a: "Stres najczęściej wynika z poczucia chaosu i braku kontroli. Na zajęciach rozkładam trudne zagadnienia na małe, logiczne kroki i pokazuję, że zadania egzaminacyjne opierają się na powtarzalnych schematach. Pracuję w bezstresowej, partnerskiej atmosferze — uczeń zyskuje poczucie bezpieczeństwa, gdy widzi, że za każdym razem potrafi samodzielnie rozwiązać zadanie.",
  },
  {
    q: "Dlaczego warto uczyć się ze strategią CKE, a nie tylko samodzielnie z podręczników?",
    a: "Szkoła realizuje cały program podręcznikowy, w którym jest mnóstwo materiału niemającego odzwierciedlenia na egzaminie. Ja uczę ściśle pod aktualne Wytyczne i Informatory CKE. Uczę nie tylko wiedzy, ale strategii: jak czytać polecenia, jak konstruować odpowiedzi pod klucz punktowania i jak nie tracić punktów na drobnych pułapkach formalnych.",
  },
  {
    q: "Jak wyznaczasz cele i monitorujesz postępy ucznia?",
    a: "Zaczynam od dokładnego sprawdzenia wiedzy i wyłapania luk na podstawie autentycznych zadań egzaminacyjnych. Następnie ustalam ambitny, lecz realny cel punktowy (dopasowany do aktualnych możliwości ucznia). Po każdych zajęciach uczeń i rodzic otrzymują podsumowanie zrobionego materiału, a regularne mini-arkusze pokazują realny przyrost punktów.",
  },
  {
    q: "Jak wygląda pakiet startowy 3 lekcji próbnych?",
    a: "Pierwsza krótka rozmowa online (15 min) jest w 100% darmowa. Następnie rozpoczynamy od 3 lekcji próbnych (płatnych pojedynczo, bez konieczności wiązania się długą umową). To czas, w którym uczeń sprawdza mój styl nauczania, a ja poznaję jego tempo pracy. Dopiero po tym etapie decydujecie o stałej współpracy.",
  },
  {
    q: "Czy zajęcia odbywają się w 100% online?",
    a: "Tak, lekcje prowadzę przez Google Meet z wykorzystaniem interaktywnej tablicy online i przejrzystych materiałów. Uczeń pracuje w swoim domowym, bezpiecznym środowisku, nie tracąc czasu na dojazdy. Po lekcji otrzymuje zapis tablicy lub pełną notatkę w formacie cyfrowym.",
  },
] as const;
