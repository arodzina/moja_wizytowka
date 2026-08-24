const pptxgen = require("pptxgenjs");

// ==========================================
// PALETA KOLORÓW I STYLE
// ==========================================
const COLORS = {
  primary: "2F52EA",       // Czysty, nowoczesny błękit
  primaryDark: "1E3AA8",   // Głęboki granat
  accent: "F59E0B",        // Złoty / ciepły bursztyn
  accentDark: "B45309",
  goldTint: "FFF7E8",
  goldBorder: "FDE68A",
  blueTint: "EEF2FF",
  blueTint2: "E0E7FF",
  mist: "F8FAFC",          // Jasne tło
  white: "FFFFFF",
  navy: "0F172A",          // Ciemny tekst
  slate: "475569",         // Tekst pomocniczy
  slateLight: "94A3B8",
  cardBorder: "E2E8F0",
  emerald: "10B981",
  emeraldTint: "ECFDF5",
};

const SERIF = "Cambria"; // Elegancki font nagłówków
const SANS = "Calibri";  // Czytelny font treści

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 cala
const PW = 13.33;
const PH = 7.5;

// ==========================================
// FUNKCJE POMOCNICZE UI
// ==========================================
function card(slide, x, y, w, h, opts = {}) {
  slide.addShape("roundRect", {
    x, y, w, h,
    rectRadius: opts.radius ?? 0.16,
    fill: { color: opts.fill ?? COLORS.white },
    line: opts.border ? { color: opts.border, width: opts.borderWidth ?? 1 } : (opts.line ?? { color: COLORS.cardBorder, width: 1 }),
    shadow: opts.shadow === false ? undefined : {
      type: "outer", color: "1E293B", opacity: 0.08, blur: 10, offset: 3, angle: 90,
    },
  });
}

function pill(slide, x, y, w, h, text, opts = {}) {
  slide.addShape("roundRect", {
    x, y, w, h,
    rectRadius: h / 2,
    fill: { color: opts.fill ?? COLORS.blueTint },
    line: opts.border ? { color: opts.border, width: 1 } : { type: "none" },
  });
  slide.addText(text, {
    x, y, w, h,
    align: "center", valign: "middle",
    fontFace: SANS, fontSize: opts.fontSize ?? 11, bold: true,
    color: opts.color ?? COLORS.primary,
    margin: 0,
  });
}

function pageHeader(slide, eyebrowText, title, subtitle) {
  pill(slide, 0.7, 0.52, 0.35 + eyebrowText.length * 0.105, 0.4, eyebrowText, { fontSize: 10.5 });
  slide.addText(title, {
    x: 0.7, y: 0.96, w: 11.9, h: 0.72,
    fontFace: SERIF, fontSize: 27, bold: true, color: COLORS.navy, margin: 0,
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.7, y: 1.6, w: 11.9, h: 0.38,
      fontFace: SANS, fontSize: 13.5, color: COLORS.slate, margin: 0,
    });
  }
}

// ==============================================================================
// SLAJD 1 — POWITANIE & O MNIE (BUDOWANIE ZAUFANIA)
// ==============================================================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.mist };

  // Ozdobne kręgi w tle
  slide.addShape("ellipse", {
    x: 10.5, y: -1.8, w: 5.5, h: 5.5,
    fill: { color: COLORS.primary, transparency: 92 }, line: { type: "none" },
  });
  slide.addShape("ellipse", {
    x: -1.6, y: 5.4, w: 4.5, h: 4.5,
    fill: { color: COLORS.accent, transparency: 92 }, line: { type: "none" },
  });

  pill(slide, 0.85, 0.65, 3.2, 0.44, "POWITANIE & O MNIE", {
    fill: COLORS.blueTint, color: COLORS.primaryDark, fontSize: 11,
  });

  slide.addText("Spokojne i Skuteczne Przygotowanie do Egzaminu Ósmoklasisty z Angielskiego", {
    x: 0.85, y: 1.25, w: 11.6, h: 1.2,
    fontFace: SERIF, fontSize: 34, bold: true, color: COLORS.navy, margin: 0, valign: "top",
    lineSpacingMultiple: 1.08,
  });

  slide.addText([
    { text: "Ola", options: { color: COLORS.primary, bold: true } },
    { text: "  ·  Korepetycje Online", options: { color: COLORS.slate, bold: false } },
  ], {
    x: 0.85, y: 2.5, w: 9.0, h: 0.45,
    fontFace: SANS, fontSize: 17, margin: 0,
  });

  // 3 Plakietki (Badges)
  const badges = [
    {
      emoji: "🎓",
      title: "Matura Rozszerzona z Angielskiego na 100%",
      sub: "Doskonała znajomość gramatyki, struktur językowych oraz schematów zadań CKE.",
      tag: "Wynik",
    },
    {
      emoji: "🌍",
      title: "Poziom C1 (Erasmus+ w Portugalii)",
      sub: "Praktyczna swoboda językowa i bezstresowe przełamywanie barier w mówieniu oraz pisaniu.",
      tag: "Praktyka",
    },
    {
      emoji: "💻",
      title: "Praktyka Lektorska na Platformie Edukacyjnej",
      sub: "Doświadczenie w pracy 1 na 1 z uczniami E8 (platformy Tutlo / szkolenia Udemy).",
      tag: "Doświadczenie",
    },
  ];

  const bw = 3.75, gap = 0.28, bx0 = 0.85, by = 3.15, bh = 3.7;
  badges.forEach((b, i) => {
    const x = bx0 + i * (bw + gap);
    card(slide, x, by, bw, bh, { radius: 0.18 });

    slide.addShape("ellipse", {
      x: x + 0.28, y: by + 0.28, w: 0.64, h: 0.64,
      fill: { color: COLORS.blueTint }, line: { type: "none" },
    });
    slide.addText(b.emoji, {
      x: x + 0.28, y: by + 0.28, w: 0.64, h: 0.64,
      align: "center", valign: "middle", fontSize: 24, margin: 0,
    });

    pill(slide, x + bw - 1.35, by + 0.35, 1.05, 0.34, b.tag, {
      fill: COLORS.mist, color: COLORS.slate, fontSize: 9.5, border: COLORS.cardBorder,
    });

    slide.addText(b.title, {
      x: x + 0.28, y: by + 1.15, w: bw - 0.56, h: 0.9,
      fontFace: SERIF, fontSize: 16.5, bold: true, color: COLORS.navy,
      valign: "top", margin: 0, lineSpacingMultiple: 1.12,
    });

    slide.addText(b.sub, {
      x: x + 0.28, y: by + 2.15, w: bw - 0.56, h: bh - 2.3,
      fontFace: SANS, fontSize: 12.5, color: COLORS.slate,
      valign: "top", margin: 0, lineSpacingMultiple: 1.2,
    });
  });

  slide.addNotes("„Studiuję Informatykę i Ekonometrię na AGH w Krakowie, więc tłumaczę angielski bardzo analitycznie i przejrzyście — bez kucia regułek na pamięć. Sama z matury rozszerzonej miałam 100%, a praktyczny język szlifowałam na wyjeździe C1 w Portugalii.”");
}

// ==============================================================================
// SLAJD 2 — DWA FILARY NAUKI (STRATEGIA E8 & POMOC SZKOLNA)
// ==============================================================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.white };

  pageHeader(
    slide,
    "DWA FILARY NAUKI",
    "Dwa Filary Nauki · Strategia E8 i Elastyczność dla Szkoły",
    "Harmonijne połączenie strategicznego planu egzaminacyjnego z bieżącym wsparciem w szkole."
  );

  const cardY = 2.1, cardH = 2.7, cardW = 5.75, gap = 0.4;

  // Karta 1: Główny Plan E8
  card(slide, 0.7, cardY, cardW, cardH, { radius: 0.18 });
  pill(slide, 0.7 + 0.32, cardY + 0.3, 2.4, 0.42, "🎯  GŁÓWNY PLAN E8", {
    fill: COLORS.blueTint, color: COLORS.primaryDark, fontSize: 11.5,
  });
  slide.addText("Strategia & Repetytorium", {
    x: 0.7 + 0.32, y: cardY + 0.88, w: cardW - 0.64, h: 0.45,
    fontFace: SERIF, fontSize: 18.5, bold: true, color: COLORS.navy, margin: 0, valign: "top",
  });
  slide.addText([
    { text: "• Autorski plan ", options: { bold: true, color: COLORS.navy } },
    { text: "w oparciu o Repetytorium Nowej Ery („Teraz egzamin ósmoklasisty”)\n", options: { color: COLORS.slate } },
    { text: "• Metoda Mostu: ", options: { bold: true, color: COLORS.navy } },
    { text: "gramatyka i słownictwo od razu w zadaniach w formacie CKE (tłumaczenia PL → EN, parafrazy, luki)\n", options: { color: COLORS.slate } },
    { text: "• Płynne udostępnianie materiałów ", options: { bold: true, color: COLORS.navy } },
    { text: "i autorskich kart pracy (wszystko w cenie)", options: { color: COLORS.slate } },
  ], {
    x: 0.7 + 0.32, y: cardY + 1.38, w: cardW - 0.64, h: cardH - 1.48,
    fontFace: SANS, fontSize: 12, valign: "top", margin: 0, lineSpacingMultiple: 1.18,
  });

  // Karta 2: Wsparcie Szkolne & Synchronizacja
  const rightX = 0.7 + cardW + gap;
  card(slide, rightX, cardY, cardW, cardH, { radius: 0.18 });
  pill(slide, rightX + 0.32, cardY + 0.3, 3.4, 0.42, "🏫  WSPARCIE SZKOLNE & SYNCHRONIZACJA", {
    fill: COLORS.goldTint, color: COLORS.accentDark, fontSize: 11.5,
  });
  slide.addText("Elastyczność dla Klasówek", {
    x: rightX + 0.32, y: cardY + 0.88, w: cardW - 0.64, h: 0.45,
    fontFace: SERIF, fontSize: 18.5, bold: true, color: COLORS.navy, margin: 0, valign: "top",
  });
  slide.addText([
    { text: "• Dopasowanie moich tematów E8 ", options: { bold: true, color: COLORS.navy } },
    { text: "do spisu treści podręcznika szkolnego\n", options: { color: COLORS.slate } },
    { text: "• 100% priorytetu dla szkoły ", options: { bold: true, color: COLORS.navy } },
    { text: "przy sprawdzianach i kartkówkach (zgłoszonych min. 24h przed)\n", options: { color: COLORS.slate } },
    { text: "• Nadrabianie zaległości ", options: { bold: true, color: COLORS.navy } },
    { text: "i bieżące pytania z lekcji bez stresu", options: { color: COLORS.slate } },
  ], {
    x: rightX + 0.32, y: cardY + 1.38, w: cardW - 0.64, h: cardH - 1.48,
    fontFace: SANS, fontSize: 12, valign: "top", margin: 0, lineSpacingMultiple: 1.18,
  });

  // Dół slajdu: Metodologia
  const mY = 5.05, mH = 1.7;
  card(slide, 0.7, mY, cardW * 2 + gap, mH, {
    radius: 0.18, fill: COLORS.mist, shadow: false, border: COLORS.cardBorder,
  });

  slide.addText("METODOLOGIA NAUKI:", {
    x: 1.05, y: mY + 0.2, w: 4, h: 0.3,
    fontFace: SANS, fontSize: 10, bold: true, color: COLORS.slateLight, charSpacing: 1, margin: 0,
  });

  const midX = 0.7 + (cardW * 2 + gap) / 2;

  // Odwrócona lekcja
  slide.addShape("ellipse", {
    x: 1.05, y: mY + 0.62, w: 0.6, h: 0.6, fill: { color: COLORS.white }, line: { type: "none" },
  });
  slide.addText("🏠", { x: 1.05, y: mY + 0.62, w: 0.6, h: 0.6, align: "center", valign: "middle", fontSize: 20, margin: 0 });
  slide.addText([
    { text: "Odwrócona lekcja  ", options: { bold: true, color: COLORS.navy } },
    { text: "— krótka, 15-minutowa praca domowa przed zajęciami (np. powtórka słówek na Quizlet), by na lekcji maksymalnie wykorzystać czas na ćwiczenia.", options: { color: COLORS.slate } },
  ], {
    x: 1.75, y: mY + 0.52, w: midX - 1.75 - 0.3, h: 0.95,
    fontFace: SANS, fontSize: 11.5, valign: "middle", margin: 0, lineSpacingMultiple: 1.15,
  });

  // Cyfrowy Zeszyt w Canwie na Google Meet
  slide.addShape("ellipse", {
    x: midX + 0.15, y: mY + 0.62, w: 0.6, h: 0.6, fill: { color: COLORS.white }, line: { type: "none" },
  });
  slide.addText("💻", { x: midX + 0.15, y: mY + 0.62, w: 0.6, h: 0.6, align: "center", valign: "middle", fontSize: 20, margin: 0 });
  slide.addText([
    { text: "Cyfrowy Zeszyt w Canwie  ", options: { bold: true, color: COLORS.navy } },
    { text: "— praca na żywo przez Google Meet. Dedykowany, kolorowy zeszyt online ze wszystkimi notatkami zawsze pod ręką.", options: { color: COLORS.slate } },
  ], {
    x: midX + 0.85, y: mY + 0.52, w: 0.7 + cardW * 2 + gap - (midX + 0.85) - 0.3, h: 0.95,
    fontFace: SANS, fontSize: 11.5, valign: "middle", margin: 0, lineSpacingMultiple: 1.15,
  });

  slide.addNotes("„Nie dzielimy lekcji sztucznie stoperem. Domyślnie ciśniemy nasz plan E8 oparty o Repetytorium Nowej Ery, ale jeśli w szkole szykuje się sprawdzian lub kartkówka — dajecie mi znać min. dzień wcześniej i wtedy zajęcia poświęcamy w 100% na szkołę! Do tego pracujemy na żywo w Cyfrowym Zeszycie Canwy na Google Meet.”");
}

// ==============================================================================
// SLAJD 3 — PLAN DZIAŁANIA (PLAN E8 W 3 PRZEJRZYSTYCH ETAPACH)
// ==============================================================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.white };

  pageHeader(
    slide,
    "PLAN DZIAŁANIA",
    "Plan E8 w 3 Przejrzystych Etapach",
    "Strategia na 12 Maja 2027 · ok. 30 spotkań (1x w tygodniu)"
  );

  const stages = [
    {
      n: "1",
      period: "WRZESIEŃ – STYCZEŃ",
      title: "Baza Leksykalna i Gramatyka",
      desc: "12 działów tematycznych słownictwa + gramatyka oparta na zadaniach CKE. Solidne fundamenty bez pamięciowego wkuwania.",
      tag: "Etap 1",
    },
    {
      n: "2",
      period: "LUTY – MARZEC",
      title: "Trening Zadań Otwartych",
      desc: "Tłumaczenia fragmentów zdań, parafrazy oraz niezawodny szablon e-maila nastawiony na zdobycie pełnych 10 punktów.",
      tag: "Etap 2",
    },
    {
      n: "3",
      period: "KWIECIEŃ – MAJ",
      title: "Symulacje Arkuszy CKE",
      desc: "Rozwiązywanie oficjalnych arkuszy egzaminacyjnych na czas, wyczucie tempa i eliminacja stresu przed dniem testu.",
      tag: "Etap 3",
    },
  ];

  const sy = 2.2, sh = 2.6, sw = 3.75, sgap = 0.29, sx0 = 0.7;
  stages.forEach((s, i) => {
    const x = sx0 + i * (sw + sgap);
    card(slide, x, sy, sw, sh, { radius: 0.18 });

    slide.addShape("ellipse", {
      x: x + 0.3, y: sy + 0.28, w: 0.58, h: 0.58,
      fill: { color: COLORS.primary }, line: { type: "none" },
    });
    slide.addText(s.n, {
      x: x + 0.3, y: sy + 0.28, w: 0.58, h: 0.58,
      align: "center", valign: "middle", fontFace: SANS, fontSize: 20, bold: true, color: COLORS.white, margin: 0,
    });

    pill(slide, x + sw - 1.35, sy + 0.32, 1.05, 0.34, s.tag, {
      fill: COLORS.blueTint, color: COLORS.primaryDark, fontSize: 9.5,
    });

    slide.addText(s.period, {
      x: x + 0.3, y: sy + 1.0, w: sw - 0.6, h: 0.3,
      fontFace: SANS, fontSize: 10.5, bold: true, color: COLORS.accent, charSpacing: 0.5, margin: 0,
    });

    slide.addText(s.title, {
      x: x + 0.3, y: sy + 1.28, w: sw - 0.6, h: 0.55,
      fontFace: SERIF, fontSize: 15.5, bold: true, color: COLORS.navy, margin: 0, valign: "top",
    });

    slide.addText(s.desc, {
      x: x + 0.3, y: sy + 1.85, w: sw - 0.6, h: sh - 1.95,
      fontFace: SANS, fontSize: 11.5, color: COLORS.slate, margin: 0, valign: "top", lineSpacingMultiple: 1.18,
    });
  });

  // Żarówka na dole
  const ty = 5.0, th = 1.7;
  card(slide, 0.7, ty, sw * 3 + sgap * 2, th, {
    radius: 0.18, fill: COLORS.goldTint, shadow: false, border: COLORS.goldBorder,
  });

  slide.addShape("ellipse", {
    x: 1.05, y: ty + (th - 0.64) / 2, w: 0.64, h: 0.64, fill: { color: COLORS.white }, line: { type: "none" },
  });
  slide.addText("💡", { x: 1.05, y: ty + (th - 0.64) / 2, w: 0.64, h: 0.64, align: "center", valign: "middle", fontSize: 22, margin: 0 });

  slide.addText([
    { text: "Wiemy, na czym się skupić. Znamy uszczuplone wymagania CKE!\n", options: { bold: true, color: "92400E", fontSize: 14 } },
    { text: "Nie marnujemy czasu na wykreślone działy, jak Past Perfect czy mowa zależna! Uczymy się precyzyjnie tego, co naprawdę pojawia się na arkuszu i przynosi punkty.", options: { color: "78350F", fontSize: 12 } },
  ], {
    x: 1.88, y: ty + 0.22, w: sw * 3 + sgap * 2 - 2.2, h: th - 0.44,
    fontFace: SANS, valign: "middle", margin: 0, lineSpacingMultiple: 1.18,
  });

  slide.addNotes("„Mamy dokładnie 30 spotkań do 12 maja 2027 r. Znamy uszczuplone wymagania CKE, więc nie marnujemy czasu na zbędną teorię (jak Past Perfect), tylko przechodzimy przez te 3 Etapy krok po kroku.”");
}

// ==============================================================================
// SLAJD 4 — WSPÓŁPRACA (PRZEJRZYSTY I BEZSTRESOWY ONBOARDING)
// ==============================================================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.mist };

  pageHeader(
    slide,
    "WSPÓŁPRACA",
    "Przejrzysty i Bezstresowy Onboarding",
    "Zasady stworzone tak, aby uczeń i rodzic czuli 100% spokoju i bezpieczeństwa."
  );

  const rows = [
    {
      n: "1",
      badge: "PUNKT 1",
      title: "Pakiet Startowy: 3 lekcje próbne z rabatem −25%",
      desc: "Cena: 45 zł za 60 min (zamiast 60 zł), płatne z lekcji na lekcję na 24h przed zajęciami. Czas na bezstresowe sprawdzenie wspólnego flow i Cyfrowego Zeszytu w Canwie.",
      accent: COLORS.emerald,
    },
    {
      n: "2",
      badge: "PUNKT 2",
      title: "Stała Współpraca (od 4. lekcji)",
      desc: "Po 3 lekcjach — rezerwacja stałego miejsca w grafiku tygodniowym oraz wygodny abonament miesięczny z góry (płatny do 1. dnia miesiąca).",
      accent: COLORS.primary,
    },
    {
      n: "3",
      badge: "PUNKT 3",
      title: "Elastyczność & 1 „Koło Ratunkowe”",
      desc: "Bezpłatne przełożenie zajęć z wyprzedzeniem 24h lub w dniu poprzedzającym + 1 awaryjne przełożenie w semestrze w trybie last-minute bez utraty lekcji.",
      accent: COLORS.accent,
    },
  ];

  const rx = 0.7, rw = 11.9, rh = 1.34, rgap = 0.22, ry0 = 2.15;
  rows.forEach((r, i) => {
    const y = ry0 + i * (rh + rgap);
    card(slide, rx, y, rw, rh, { radius: 0.16 });

    slide.addShape("ellipse", {
      x: rx + 0.32, y: y + (rh - 0.68) / 2, w: 0.68, h: 0.68,
      fill: { color: COLORS.blueTint }, line: { color: COLORS.blueTint2, width: 1 },
    });
    slide.addText(r.n, {
      x: rx + 0.32, y: y + (rh - 0.68) / 2, w: 0.68, h: 0.68,
      align: "center", valign: "middle", fontFace: SANS, fontSize: 20, bold: true, color: COLORS.primaryDark, margin: 0,
    });

    pill(slide, rx + 1.25, y + 0.18, 0.3 + r.badge.length * 0.085, 0.3, r.badge, {
      fill: COLORS.mist, color: r.accent, fontSize: 8.5, border: COLORS.cardBorder,
    });

    slide.addText(r.title, {
      x: rx + 1.25, y: y + 0.48, w: rw - 1.6, h: 0.34,
      fontFace: SERIF, fontSize: 15.5, bold: true, color: COLORS.navy, margin: 0,
    });

    slide.addText(r.desc, {
      x: rx + 1.25, y: y + 0.82, w: rw - 1.6, h: rh - 0.88,
      fontFace: SANS, fontSize: 11.5, color: COLORS.slate, margin: 0, valign: "top", lineSpacingMultiple: 1.15,
    });
  });

  slide.addNotes("„Zaczynamy bezstresowo od 3 lekcji próbnych z rabatem -25%. Zuzia sprawdzi nasz Cyfrowy Zeszyt w Canwie na Google Meet. Od 4. lekcji wchodzimy w stały grafik i abonament miesięczny z góry.”");
}

// ==============================================================================
// SLAJD 5 — ZAKOŃCZENIE & NASTĘPNY KROK
// ==============================================================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.primaryDark };

  // Ozdobne kręgi
  slide.addShape("ellipse", {
    x: 9.5, y: -2.0, w: 6.5, h: 6.5,
    fill: { color: COLORS.white, transparency: 93 }, line: { type: "none" },
  });
  slide.addShape("ellipse", {
    x: -2.2, y: 4.6, w: 5.5, h: 5.5,
    fill: { color: COLORS.accent, transparency: 88 }, line: { type: "none" },
  });

  pill(slide, (PW - 3.0) / 2, 0.75, 3.0, 0.42, "✨  NASTĘPNY KROK", {
    fill: "2F52EA", color: COLORS.white, fontSize: 10.5, border: "6366F1",
  });

  slide.addText("Zróbmy Pierwszy Krok do Wysokiego Wyniku!", {
    x: 1.0, y: 1.35, w: 11.3, h: 0.9,
    fontFace: SERIF, fontSize: 34, bold: true, color: COLORS.white, align: "center", margin: 0,
  });

  // Karta obietnicy planu
  const hw = 10.2, hh = 1.35, hx = (PW - hw) / 2, hy = 2.4;
  slide.addShape("roundRect", {
    x: hx, y: hy, w: hw, h: hh, rectRadius: 0.18,
    fill: { color: COLORS.white }, line: { type: "none" },
    shadow: { type: "outer", color: "0F172A", opacity: 0.25, blur: 14, offset: 4, angle: 90 },
  });
  slide.addText(
    "Po naszej dzisiejszej rozmowie podeślę Wam podsumowanie ustaleń oraz spersonalizowany plan powtórek na e-maila / w wiadomości!",
    {
      x: hx + 0.5, y: hy, w: hw - 1.0, h: hh,
      align: "center", valign: "middle",
      fontFace: SANS, fontSize: 14.5, color: COLORS.navy, margin: 0, lineSpacingMultiple: 1.25,
    }
  );

  // Napis akcentowy
  slide.addText("Wybierzmy termin na pierwszą lekcję próbną!", {
    x: 1.0, y: 4.0, w: 11.3, h: 0.45,
    fontFace: SANS, fontSize: 17, color: COLORS.accent, bold: true, align: "center", margin: 0,
  });

  // Dwa kafelki z terminami
  const tw = 4.6, th = 1.05, tx0 = (PW - (tw * 2 + 0.4)) / 2, ty = 4.65;

  slide.addShape("roundRect", {
    x: tx0, y: ty, w: tw, h: th, rectRadius: 0.16,
    fill: { color: "1E293B" }, line: { color: "334155", width: 1 },
  });
  slide.addText("Termin 1 (np. Czwartek 16:00)", {
    x: tx0, y: ty + 0.18, w: tw, h: 0.32, align: "center",
    fontFace: SANS, fontSize: 13, bold: true, color: COLORS.white,
  });
  slide.addText("1. Lekcja Próbna · 60 min (45 zł)", {
    x: tx0, y: ty + 0.52, w: tw, h: 0.32, align: "center",
    fontFace: SANS, fontSize: 11, color: "94A3B8",
  });

  slide.addShape("roundRect", {
    x: tx0 + tw + 0.4, y: ty, w: tw, h: th, rectRadius: 0.16,
    fill: { color: "1E293B" }, line: { color: "334155", width: 1 },
  });
  slide.addText("Termin 2 (np. Piątek 17:00)", {
    x: tx0 + tw + 0.4, y: ty + 0.18, w: tw, h: 0.32, align: "center",
    fontFace: SANS, fontSize: 13, bold: true, color: COLORS.white,
  });
  slide.addText("1. Lekcja Próbna · 60 min (45 zł)", {
    x: tx0 + tw + 0.4, y: ty + 0.52, w: tw, h: 0.32, align: "center",
    fontFace: SANS, fontSize: 11, color: "94A3B8",
  });

  // Przycisk linku na środku
  const lw = 3.6, lh = 0.6, lx = (PW - lw) / 2, ly = 5.95;
  slide.addShape("roundRect", {
    x: lx, y: ly, w: lw, h: lh, rectRadius: lh / 2,
    fill: { color: COLORS.white }, line: { type: "none" },
    shadow: { type: "outer", color: "0F172A", opacity: 0.2, blur: 10, offset: 3, angle: 90 },
  });
  slide.addText("🌐  ola-korepetycje.pl", {
    x: lx, y: ly, w: lw, h: lh,
    align: "center", valign: "middle", fontFace: SANS, fontSize: 14, bold: true, color: COLORS.primary, margin: 0,
  });

  slide.addNotes("„Po naszej dzisiejszej rozmowie podeślę Wam podsumowanie i spersonalizowany plan na e-maila! Mam wolny termin na pierwszą lekcję próbną w [np. czwartek o 16:00] lub w [np. piątek o 17:00]. Który termin bardziej Wam pasuje?”");
}

// ==========================================
// ZAPIS PLIKU PREZENTACJI
// ==========================================
pres.writeFile({ fileName: "E8_Konsultacja_Angielski_v2.pptx" }).then((fileName) => {
  console.log("Prezentacja wygenerowana pomyślnie:", fileName);
});
