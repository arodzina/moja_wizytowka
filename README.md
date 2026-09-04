# Język Angielski E8 — Aplikacja Webowa & Platforma Edukacyjna

[![Live Website](https://img.shields.io/badge/Live_Site-ola--korepetycje.pl-1d4ed8?style=for-the-badge&logo=google-chrome&logoColor=white)](https://ola-korepetycje.pl)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Nowoczesna, wysokowydajna aplikacja internetowa przygotowana pod obsługę przygotowań do Egzaminu Ósmoklasisty (E8) oraz klas 6–8 z Języka Angielskiego. Projekt skupia się na optymalizacji konwersji, pełnej dostępności (a11y), subtelnych animacjach oraz przejrzystej prezentacji materiałów egzaminacyjnych CKE.

---

## Funkcjonalności i architektura

- **Next.js 16 (App Router & Turbopack)**: Renderowanie po stronie serwera (SSR) i statyczna generacja stron gwarantująca błyskawiczne ładowanie.
- **System Design & Style**: Autorskie stylowanie Tailwind CSS v4, efekty szkła (glassmorphism), elastyczne siatki oraz typografia łącząca fonty Fraunces i Inter.
- **Interaktywne animacje**: Mikrointerakcje, sekcje ujawniane przy przewijaniu (scroll reveal), karty cennikowe oraz pełne wsparcie dla ustawień `prefers-reduced-motion`.
- **Formularz kontaktowy i obsługa zgłoszeń**: Integracja z API FormSubmit z obsługą wyboru roli (uczeń / rodzic), walidacją pól i powiadomieniami e-mail.
- **Poradniki cyfrowe CKE**: Interaktywne opracowania wymogów egzaminacyjnych CKE 2026, szablony pisania e-maili i strategie zarządzania czasem.
- **Standardy SEO i Dostępności (a11y)**:
  - Dostępność z poziomu klawiatury i semantyczny układ HTML5 (`<main>`, `<header>`, `<footer>`, `<section>`).
  - Ustrukturyzowane dane JSON-LD (`EducationalOrganization` oraz `FAQPage`).
  - Dynamiczna generacja metadanych OpenGraph, kart Twittera oraz automatyczna sitemap.xml i robots.txt.

---

## Stos technologiczny

| Warstwa | Technologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Biblioteka UI | React 19 |
| Język | TypeScript |
| Stylowanie | Tailwind CSS v4 |
| Animacje | Framer Motion |
| Ikony | Lucide React |
| Wdrożenie | Vercel |

---

## Autorka

**Aleksandra Rodzinka** — Studentka Informatyki i Ekonometrii na AGH w Krakowie  
Strona produkcyjna: [ola-korepetycje.pl](https://ola-korepetycje.pl)
