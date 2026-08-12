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
    title: "Matematyka · Szkoła Podstawowa & Średnia",
    description:
      "Klasy 4–8, Egzamin Ósmoklasisty E8 oraz podstawy szkoły średniej (bez matury rozszerzonej z matematyki).",
    bullets: [
      "Rachunki, ułamki, procenty i geometria",
      "Egzamin Ósmoklasisty E8 bez stresu",
      "Podstawy liceum i nadrabianie zaległości",
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
    title: "Nieszablonowe metody & gry",
    description: "Koniec z nudnym wklepywaniem regułek! Słownictwo i pojęcia utrwalamy przez wciągające gry i aktywizujące wyzwania.",
  },
  {
    title: "Tłumaczę tyle razy, ile trzeba",
    description: "Nie ma tutaj pośpiechu. Jeśli coś nie gra — wracamy do tego, szukamy innego sposobu i idziemy dalej dopiero wtedy, gdy naprawdę rozumiesz.",
  },
  {
    title: "Przygotowuję każdą lekcję",
    description: "Przed zajęciami analizuję Twoje postępy i dobieram ciekawe materiały oraz zadania pod Twoje trudności. Nie przychodzę bez przygotowania.",
  },
  {
    title: "Notatka po każdej lekcji",
    description: "Po zajęciach dostajesz krótkie podsumowanie z notatką — co przerobiliśmy, co ćwiczyć i na co zwrócić uwagę. Zawsze wiesz, na czym stoisz.",
  },
  {
    title: "Pakiet Startowy 3 Lekcji Próbnych",
    description: "Przed przejściem na stały abonament miesięczny przechodzimy przez Pakiet Startowy 3 Lekcji Próbnych, aby uczeń poczuł się komfortowo, a rodzic miał 100% pewności.",
  },
] as const;

export const faqItems = [
  {
    q: "Jak wygląda pierwsza rozmowa zapoznawcza?",
    a: "Pierwsza Darmowa Rozmowa Zapoznawcza (15 min) jest w 100% bezpłatna i niezobowiązująca. Podczas 15-minutowej rozmowy online omawiamy cele, pomysł na współpracę, oceny i pasujący termin w grafiku.",
  },
  {
    q: "Czym jest Pakiet Startowy 3 Lekcji Próbnych?",
    a: "Zanim zdecydują się Państwo na stały abonament miesięczny, przechodzimy przez Pakiet Startowy 3 Lekcji Próbnych. Pozwala to uczniowi sprawdzić styl prowadzenia zajęć bez presji, a rodzicowi upewnić się co do efektów.",
  },
  {
    q: "Jak wyglądają regularne lekcje online?",
    a: "Lekcje odbywają się przez wideorozmowę (Zoom lub Google Meet) — z kamerą albo bez. Korzystamy ze wspólnej interaktywnej tablicy i materiałów na ekranie. Po każdej lekcji dostajesz notatkę z podsumowaniem opanowanego materiału.",
  },
  {
    q: "Czy lekcje są odpowiednie dla mojego dziecka z klas 4–5?",
    a: "Zdecydowanie tak! Lekcje dla młodszych uczniów są prowadzone z wykorzystaniem gier aktywizujących oraz przejrzystych notatek. Dzieci są zaangażowane i traktują zajęcia jak ciekawą przygodę, a nie nudny obowiązek.",
  },
  {
    q: "Jak przygotowujesz do matury i egzaminu ósmoklasisty?",
    a: "Pracujemy na autentycznych arkuszach egzaminacyjnych z poprzednich lat, uczymy się strategii rozwiązywania zadań i zarządzania czasem. Regularnie sprawdzamy postępy, eliminując trudne obszary w spokojnej atmosferze.",
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
