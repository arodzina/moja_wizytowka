# Korepetycje online — strona jednoczęściowa

Landing page dla mojej własnej praktyki korepetycyjnej (angielski + matematyka, klasy 4–8 i liceum,
matura, egzamin ósmoklasisty) — zaprojektowana i zbudowana samodzielnie od podstaw, od makiety
przez implementację po wdrożenie.

🔗 **Live:** [moja-wizytowka-vert.vercel.app](https://moja-wizytowka-vert.vercel.app)

**Dlaczego ten projekt:** potrzebowałam realnej wizytówki pod własną markę tutoringową, więc
wykorzystałam to jako okazję, żeby zbudować coś od zera zgodnie z dobrymi praktykami frontendu —
z naciskiem na SEO, dostępność (WCAG) i wydajność, nie tylko na wygląd.

**Co pokazuje ten projekt:**
- Kompletny, wdrożony produkt (nie tylko tutorial/ćwiczenie) — działa produkcyjnie i przyjmuje realny ruch
- Konfigurowalna architektura — cała treść i dane wydzielone do jednego pliku (`site.ts`), więc strukturę można łatwo rozszerzyć pod kolejny projekt
- Dbałość o SEO/dostępność/performance, nie tylko o UI

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion

---

## Uruchomienie

```
npm install
npm run dev      # tryb deweloperski → http://localhost:3000
npm run build    # produkcyjny build
npm run start    # serwowanie builda
npm run lint     # ESLint
```

## Struktura

```
src/
├── app/
│   ├── layout.tsx          # metadata, fonty, JSON-LD (SEO), skip-link
│   ├── page.tsx            # skład sekcji
│   ├── globals.css         # motyw Tailwind v4 (kolory, cienie, fonty)
│   ├── icon.svg             # favicon (marka „A+”)
│   ├── opengraph-image.tsx  # generowany obraz do udostępniania
│   ├── sitemap.ts / robots.ts
├── components/
│   ├── site/                # Header (sticky nav + menu mobilne), Footer, Logo
│   ├── sections/             # Hero, About, Services, HowItWorks, Benefits,
│   │                          # Testimonials, FAQ, Contact
│   └── ui/                   # Button, Reveal (animacje), SectionHeading, Icons
├── lib/site.ts               # ⚙️ CAŁA KONFIGURACJA — dane kontaktowe i teksty
└── public/images/portrait.svg  # ilustracja portretowa
```

## Design i dostępność

- Skandynawski minimalizm: dużo bieli, zaokrąglone karty, typografia
**Fraunces** (nagłówki) + **Inter** (tekst), paleta niebiesko-biała
z ciepłymi żółtymi akcentami.
- Subtelne animacje Framer Motion (reveal przy scrollu, pływające elementy,
akordeon FAQ, pasek postępu czytania).
- Pełne wsparcie `prefers-reduced-motion`.
- Dostępność: semantyczne landmarki, skip-link, `aria-expanded`/`aria-controls`,
etykiety formularza, komunikaty błędów z `role="alert"`, widoczny fokus.
- Płynne przewijanie z offsetem pod sticky header.
- SEO: metadata + OpenGraph + Twitter, JSON-LD
(`EducationalOrganization`, `FAQPage`), sitemap.xml, robots.txt, generowany
obraz OG.
