# 🇬🇧 Język Angielski E8 — Full-Stack Educational Platform

[![Live Website](https://img.shields.io/badge/Live_Site-ola--korepetycje.pl-1d4ed8?style=for-the-badge&logo=google-chrome&logoColor=white)](https://ola-korepetycje.pl)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance web application built for an English Language Egzamin Ósmoklasisty (E8) & 6–8 Grade Tutoring Practice. Designed with a focus on conversion optimization, accessibility, fluid animations, and structured CKE exam preparation resources.

---

## ✨ Features & Architecture

- 🚀 **Next.js 16 (App Router & Turbopack)**: Server-side rendering and static page generation for lightning-fast loading speeds.
- 🎨 **Modern Design System**: Custom Tailwind CSS v4 styling, glassmorphism, responsive grid layouts, and Fraunces & Inter typography.
- 🎭 **Framer Motion Animations**: Micro-interactions, scroll-triggered reveals, interactive pricing cards, and smooth modal overlays with `prefers-reduced-motion` support.
- 📩 **Interactive Form & Lead Delivery**: Integrated contact flow with FormSubmit API handling parent/student role selection, subject validation, and instant notifications.
- 📚 **Digital Exam Guides & Analysis**: Integrated HTML exam analysis guides for CKE 2026 E8 guidelines, e-mail writing templates, and time-management strategies.
- ♿ **Accessibility (a11y) & SEO First**:
  - Full keyboard navigation & semantic landmarks (`<main>`, `<header>`, `<footer>`, `<section>`).
  - Structured Data (JSON-LD `EducationalOrganization` & `FAQPage`).
  - Dynamic OpenGraph and Twitter card image generation.
  - Automated `sitemap.xml` and `robots.txt`.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Library** | React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## 📁 Repository Structure

```
.
├── public/
│   ├── images/              # Optimized profile and avatar assets
│   └── poradniki/           # Interactive HTML exam guides and CKE analysis
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, fonts, metadata & JSON-LD
│   │   ├── page.tsx         # Main landing page section composition
│   │   ├── globals.css      # Tailwind CSS v4 configuration
│   │   ├── icon.svg         # Custom SVG favicon
│   │   └── sitemap.ts       # Dynamic sitemap generation
│   ├── components/
│   │   ├── sections/        # Hero, About, ExamStakes, Testimonials, FreeGuides, Pricing, FAQ, Contact
│   │   ├── site/            # Header, Footer, Logo
│   │   └── ui/              # Button, Reveal, SectionHeading, Icons
│   └── lib/
│       └── site.ts          # Central configuration & content data
└── next.config.ts           # Next.js configuration
```

---

## 💻 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/arodzina/moja_wizytowka.git

# Navigate into directory
cd moja_wizytowka

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

---

## 🏆 Author

Developed by **Aleksandra Rodzinka** — Computer Science & Econometrics Student @ AGH University of Krakow.  
🌐 Live Site: [ola-korepetycje.pl](https://ola-korepetycje.pl)
