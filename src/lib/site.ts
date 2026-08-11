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
    "Lubię uczyć, lubię tłumaczyć i lubię, kiedy widzę, że coś nagle \u2018zaskoczyło\u2019. Pracuję spokojnie, bez pośpiechu i bez oceniania \u2014 bo błędy to część nauki, nie powód do wstydu.",
  email: "kontakt.ola.korepetycje@gmail.com",
  phoneDisplay: "",
  whatsapp: "",
  whatsappMessage: "",
  facebook: "",
  instagram: "",
} as const;

export const navLinks = [
  { label: "O mnie", href: "#o-mnie" },
  { label: "Zajęcia", href: "#zajecia" },
  { label: "Jak to działa", href: "#jak-to-dziala" },
  { label: "Cennik", href: "#cennik" },
  { label: "FAQ", href: "#faq" },
] as const;

export const services = [
  {
    id: "angielski-4-8",
    title: "Angielski · klasy 4–8",
    description:
      "Buduję pewność siebie w mówieniu i pisaniu oraz pomagam nadrobić zaległości.",
    bullets: ["Gramatyka krok po kroku", "Konwersacje bez presji", "Pomoc w zadaniach domowych"],
  },
  {
    id: "angielski-matura",
    title: "Angielski · matura",
    description:
      "Kompleksowe przygotowanie do matury podstawowej i rozszerzonej.",
    bullets: ["Rozwiązywanie arkuszy", "Strategie na każdą część", "Materiały na poziomie C1"],
  },
  {
    id: "matematyka-4-8",
    title: "Matematyka · klasy 4–8",
    description:
      "Wyjaśniam trudne zagadnienia prostym językiem, na przykładach z życia.",
    bullets: ["Ułamki, procenty, geometria", "Nadrabianie zaległości", "Nauka bez oceniania"],
  },
  {
    id: "egzamin-osmoklasisty",
    title: "Egzamin ósmoklasisty",
    description:
      "Spokojne i planowe przygotowanie do egzaminu z matematyki i angielskiego.",
    bullets: ["Próbne arkusze", "Indywidualny plan powtórek", "Techniki egzaminacyjne"],
  },
] as const;

export const benefits = [
  {
    title: "Mówienie na 1. miejscu",
    description: "Nawet przy przygotowaniu do egzaminów stawiam na praktyczną komunikację. Język służy do mówienia w prawdziwym życiu — przełamujemy barierę od pierwszej lekcji.",
  },
  {
    title: "Nieszablonowe metody & gry",
    description: "Koniec z nudnym wklepywaniem regułek! Słownictwo i pojęcia utrwalamy przez wciągające gry (np. językowy wisielec, kółko-krzyżyk, interaktywne quizy i wyzwania).",
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
    title: "Śledzę Twoje postępy",
    description: "Co kilka tygodni sprawdzamy razem, co wchodzi łatwo, a co warto powtórzyć. Widzisz, że z lekcji na lekcję idziesz do przodu.",
  },
] as const;


export const faqItems = [
  {
    q: "Jak wygląda pierwsza lekcja?",
    a: "Pierwsze spotkanie trwa 30 minut i jest w 100% darmowe oraz niezobowiązujące. Przed spotkaniem możesz wypełnić krótki quiz w Google Forms lub od razu powiedzieć mi, z czym masz trudności. Podczas rozmowy omawiamy cele, pomysł na współpracę i oczekiwane efekty.",
  },
  {
    q: "Co jeśli wiem dokładnie, z czym mam problem albo kontynuuję naukę z nowym korepetytorem?",
    a: "Świetnie! Nie musimy zaczynać od zera. Podczas darmowego 30-minutowego spotkania omówimy Twoje dotychczasowe postępy i skupimy się dokładnie na tym zagadnieniu lub celu, który chcesz dopracować.",
  },
  {
    q: "Jak wyglądają regularne lekcje online?",
    a: "Lekcje odbywają się przez wideorozmowę (Zoom lub Google Meet) — z kamerą albo bez. Korzystamy ze wspólnej interaktywnej tablicy i materiałów na ekranie. Po każdej lekcji dostajesz notatkę z podsumowaniem opanowanego materiału.",
  },
  {
    q: "Czy lekcje są odpowiednie dla mojego dziecka?",
    a: "Tak. Pracuję z uczniami klas 4–8 oraz licealistami na różnych poziomach — od nadrabiania zaległości po przygotowanie do matury. Podchodzę do uczniów cierpliwie i bez oceniania, dopasowując tempo do ich potrzeb.",
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
