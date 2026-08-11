# Korepetycje online — strona jednoczęściowa

Premium, nowoczesna strona one-page dla korepetytorki online (angielski + matematyka,
klasy 4–8 i liceum, matura, egzamin ósmoklasisty).

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion

---

## Uruchomienie

```bash
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
│   ├── icon.svg            # favicon (marka „A+”)
│   ├── opengraph-image.tsx # generowany obraz do udostępniania
│   ├── sitemap.ts / robots.ts
├── components/
│   ├── site/               # Header (sticky nav + menu mobilne), Footer, Logo
│   ├── sections/           # Hero, About, Services, HowItWorks, Benefits,
│   │                       # Testimonials, FAQ, Contact
│   └── ui/                 # Button, Reveal (animacje), SectionHeading, Icons
├── lib/site.ts             # ⚙️ CAŁA KONFIGURACJA — dane kontaktowe i teksty
└── public/images/portrait.svg  # ilustracja portretowa (do podmiany)
```

## Co skonfigurować przed publikacją

Wszystko w jednym miejscu: **`src/lib/site.ts`**

1. **Dane kontaktowe** — e-mail, telefon (numer WhatsApp w formacie `48600000000`),
   linki Facebook/Instagram.
2. **Domena** — w `site.url` (użyta przykładowa domena `.example` z RFC 2606)
   oraz w pliku `src/app/layout.tsx` (metadane).
3. **Imię i nazwisko** — `site.tutorName` (domyślnie placeholder „Anna Kowalska”).
4. **Portret** — podmień `public/images/portrait.svg` na własne zdjęcie
   (w `src/components/sections/About.tsx`).
5. **Formularz** — obecnie symuluje wysyłkę i pokazuje potwierdzenie.
   Podłącz backend w `handleSubmit` (`src/components/sections/Contact.tsx`,
   oznaczono komentarzem TODO) — np. route handler `/api/contact` lub Formspree.
6. **Opinie** — placeholderowe karty są gotowe; podmień dane
   w `testimonialsPlaceholders` (`src/lib/site.ts`).

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
