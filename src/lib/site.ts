/**
 * Centralna konfiguracja strony.
 * Wszystkie dane kontaktowe i teksty łatwe do edycji w jednym miejscu.
 */

export const site = {
  name: "Ola — Korepetycje online",
  /** Użyj domeny produkcyjnej po publikacji */
  url: "https://korepetycje-ola.pl",
  tutorName: "Ola",
  headline: "Angielski i matematyka online bez stresu.",
  description:
    "Lubię uczyć, lubię tłumaczyć i lubię, kiedy widzę, że coś nagle ‘zaskoczyło’. Pracuję spokojnie, bez pośpiechu i bez oceniania — bo błędy to część nauki, nie powód do wstydu.",
  email: "kontakt.ola.korepetycje@gmail.com",
  phoneDisplay: "",
  whatsapp: "",
  whatsappMessage: "",
  facebook: "",
  instagram: "",
} as const;

export const navLinks = [
  { label: "O mnie", href: "/#o-mnie" },
  { label: "Zajęcia", href: "/#zajecia" },
  { label: "Jak to działa", href: "/#jak-to-dziala" },
  { label: "Cennik", href: "/#cennik" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const services = [
  {
    id: "angielski-sp-matura",
    title: "Język Angielski · Kompletny",
    description:
      "Klasy 4–8, Egzamin Ósmoklasisty E8, Liceum oraz Matura (Podstawowa i Rozszerzona B1/B2/C1).",
    bullets: [
      "Przełamywanie barier w mówieniu od 1. lekcji",
      "E8 oraz Matura Podstawowa i Rozszerzona",
      "Phrasal verbs, gramatyka i arkusze CKE",
    ],
  },
  {
    id: "matematyka-sp-liceum",
    title: "Matematyka · Szkoła Podstawowa (kl. 4–8 & E8)",
    description:
      "Klasy 4–8 oraz przygotowanie do Egzaminu Ósmoklasisty E8.",
    bullets: [
      "Rachunki, ułamki, procenty i geometria",
      "Egzamin Ósmoklasisty E8 bez stresu",
      "Nadrabianie zaległości z wcześniejszych klas",
    ],
  },
  {
    id: "egzamin-osmoklasisty",
    title: "Egzamin Ósmoklasisty E8",
    description:
      "Spokojne i planowe przygotowanie do egzaminu CKE z matematyki i angielskiego.",
    bullets: ["Praca na oficjalnych arkuszach CKE", "Indywidualne powtórki i repetytoria", "Techniki egzaminacyjne"],
  },
  {
    id: "matura-angielski",
    title: "Matura z Angielskiego (Podst. & Rozsz.)",
    description:
      "Kompleksowe przygotowanie do matury pisemnej i ustnej z języka angielskiego na poziomie B1, B2 i C1.",
    bullets: ["Rozprawki, e-maile i wypowiedzi pisemne", "Use of English C1 i inwersja", "Rozmowy stymulujące do matury ustnej"],
  },
] as const;

export const benefits = [
  {
    title: "Mówienie na 1. miejscu",
    description: "Nawet przy przygotowaniu do egzaminów stawiam na praktyczną komunikację. Język służy do mówienia w prawdziwym życiu — przełamujemy barierę od pierwszej lekcji.",
  },
  {
    title: "Proste tłumaczenie od podstaw",
    description: "Koniec ze skomplikowanym językiem podręcznikowym. Trudne zagadnienia tłumaczymy krok po kroku w spokojnej i przyjaznej atmosferze.",
  },
  {
    title: "Tłumaczę tyle razy, ile trzeba",
    description: "Nie ma tutaj pośpiechu. Jeśli coś nie gra — wracamy do tego, szukamy innego sposobu i idziemy dalej dopiero wtedy, gdy naprawdę rozumiesz.",
  },
  {
    title: "Przygotowuję każdą lekcję",
    description: "Przed zajęciami analizuję postępy ucznia i dobieram materiały oraz zadania dopasowane do jego trudności. Nie przychodzę bez przygotowania.",
  },
  {
    title: "Podsumowanie lub notatka po lekcji",
    description: "Po zajęciach dostajesz przejrzyste podsumowanie lub pełną notatkę — co przerobiliśmy, co ćwiczyć i na co zwrócić uwagę. Zawsze wiesz, na czym stoisz.",
  },
  {
    title: "Pakiet startowy 3 lekcji próbnych",
    description: "Przed przejściem na stałą współpracę przechodzimy przez 3 lekcje próbne (odpłatne, ale niezobowiązujące), aby uczeń i rodzic mieli pewność co do formy zajęć.",
  },
] as const;

export const faqItems = [
  {
    q: "Jak często odbywają się lekcje?",
    a: "Częstotliwość ustalamy indywidualnie — najczęściej to 1–2 lekcje w tygodniu. Czas trwania lekcji to standardowo 60 minut, ale po uzgodnieniu możliwe są również lekcje 45-minutowe (np. dwa razy w tygodniu). W trakcie współpracy możemy dopasować ilość i czas lekcji do aktualnych potrzeb ucznia.",
  },
  {
    q: "Czy lekcje próbne są darmowe?",
    a: "Rozmowa zapoznawcza (15 min) jest zawsze bezpłatna. Natomiast 3 lekcje próbne są już płatne według normalnego cennika — płatność przed każdą lekcją, min. 24h wcześniej. Lekcje próbne nie zobowiązują do dalszej współpracy — po każdej z nich możesz zrezygnować.",
  },
  {
    q: "Co dokładnie dostaję po lekcji?",
    a: "W pakiecie standardowym — podsumowanie po lekcji (co zrobiliśmy, nad czym warto popracować). W pakiecie Premium — pełną notatkę z lekcji i indywidualnie dobrane materiały do samodzielnej pracy.",
  },
  {
    q: "Jak mogę zrezygnować ze współpracy?",
    a: "Rezygnację zgłaszasz do końca bieżącego miesiąca kalendarzowego — od kolejnego miesiąca współpraca zostaje zakończona. Lekcje opłacone w danym miesiącu realizujemy do końca. W wyjątkowych sytuacjach losowych (np. przeprowadzka, choroba) — indywidualnie ustalamy rozwiązanie.",
  },
  {
    q: "Jak wygląda pierwsza rozmowa zapoznawcza?",
    a: "Rozmowa zapoznawcza (15 min) jest w 100% bezpłatna i niezobowiązująca. Podczas krótkiego spotkania online omawiamy cele, dotychczasowe trudności, oceny i pasujący termin w grafiku.",
  },
  {
    q: "Jak wyglądają regularne lekcje online?",
    a: "Lekcje odbywają się przez wideorozmowę na Google Meet — z kamerą albo bez. Korzystamy ze wspólnej interaktywnej tablicy i materiałów na ekranie. Po każdej lekcji rodzic i uczeń wiedzą dokładnie, co zostało przerobione.",
  },
  {
    q: "Czy lekcje są odpowiednie dla mojego dziecka z klas 4–5?",
    a: "Zdecydowanie tak! Lekcje dla młodszych uczniów prowadzimy z wykorzystaniem angażujących ćwiczeń oraz przejrzystych notatek. Dzieci chętnie biorą udział w zajęciach i nie czują presji.",
  },
  {
    q: "Jak przygotowujesz do matury i egzaminu ósmoklasisty?",
    a: "Pracujemy na autentycznych arkuszach egzaminacyjnych CKE z poprzednich lat, uczymy się strategii rozwiązywania zadań i zarządzania czasem. Regularnie sprawdzamy postępy w spokojnej atmosferze.",
  },
] as const;

export const testimonialsPlaceholders = [
  {
    title: "„Ola tłumaczyła mojemu bratu matematykę do matury. Wracała do tych samych rzeczy tyle razy, ile było trzeba — bez żadnego zniecierpliwienia. Zdał i był z siebie dumny.”",
    who: "Siostra maturzysty",
  },
  {
    title: "„Nie czułam się głupio, kiedy czegoś nie rozumiałam. Ola po prostu tłumaczyła inaczej, aż to zaskoczyło. Angielski przestał mnie stresować.”",
    who: "Uczennica kl. 8",
  },
  {
    title: "„Po każdej lekcji dostawałam podsumowanie z notatkami. Czułam, że Ola naprawdę się przygotowuje i że jej zależy. To duża różnica w porównaniu do innych korepetycji.”",
    who: "Maturzystka",
  },
] as const;
