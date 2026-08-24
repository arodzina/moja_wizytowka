const pptxgen = require("pptxgenjs");

// ---------- palette ----------
const BLUE = "2F52EA";
const BLUE_DARK = "1E3AA8";
const BLUE_TINT = "EEF2FF";
const BLUE_TINT2 = "E3E9FE";
const GOLD = "F59E0B";
const GOLD_DARK = "B4720A";
const GOLD_TINT = "FFF6E5";
const BG = "F8FAFC";
const INK = "1E293B";
const MUTED = "64748B";
const WHITE = "FFFFFF";
const LINE = "E2E8F0";

const HEAD = "Arial";
const BODY = "Calibri";

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
const PW = 13.33, PH = 7.5;

// ---------- helpers ----------
function dotGrid(slide, x, y, cols, rows, gap, color, size, opacity) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      slide.addShape("ellipse", {
        x: x + c * gap, y: y + r * gap, w: size, h: size,
        fill: { color, transparency: opacity }, line: { type: "none" },
      });
    }
  }
}

function eyebrow(slide, text, x, y, w, opts = {}) {
  const fill = opts.fill || GOLD_TINT;
  const color = opts.color || GOLD_DARK;
  slide.addShape("roundRect", {
    x, y, w, h: 0.4, rectRadius: 0.2,
    fill: { color: fill }, line: { type: "none" },
  });
  slide.addText(text, {
    x, y, w, h: 0.4, align: "center", valign: "middle",
    fontFace: BODY, fontSize: 12, bold: true, color, charSpacing: 1,
  });
}

function iconCircle(slide, emoji, x, y, d, bg) {
  slide.addShape("ellipse", {
    x, y, w: d, h: d, fill: { color: bg }, line: { type: "none" },
  });
  slide.addText(emoji, {
    x, y, w: d, h: d, align: "center", valign: "middle", fontSize: d * 26,
  });
}

function card(slide, x, y, w, h, opts = {}) {
  slide.addShape("roundRect", {
    x, y, w, h, rectRadius: 0.14,
    fill: { color: opts.fill || WHITE },
    line: opts.line || { color: LINE, width: 1 },
    shadow: opts.shadow === false ? undefined : {
      type: "outer", color: "1E3AA8", opacity: 0.12, blur: 10, offset: 3, angle: 90,
    },
  });
}

function sectionHeader(slide, eyebrowText, title, sub) {
  eyebrow(slide, eyebrowText, 0.6, 0.5, 3.9, { fill: BLUE_TINT, color: BLUE_DARK });
  slide.addText(title, {
    x: 0.6, y: 0.98, w: 12.1, h: 0.62,
    fontFace: HEAD, fontSize: 26, bold: true, color: INK,
  });
  if (sub) {
    slide.addText(sub, {
      x: 0.6, y: 1.55, w: 12.1, h: 0.4,
      fontFace: BODY, fontSize: 13.5, color: MUTED,
    });
  }
}

function placeholderText(slide, text, x, y, w, h, opts = {}) {
  slide.addText(text, {
    x, y, w, h,
    fontFace: BODY, fontSize: opts.fontSize || 13, italic: true,
    color: opts.color || "94A3B8", valign: "top", align: "left",
    margin: 6,
  });
}

// =========================================================
// SLIDE 1 — OKŁADKA
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: BG };

  // decorative bubble-sheet dot grid (bottom-left) + soft circle (top-right)
  dotGrid(s, 0.5, 5.6, 10, 5, 0.26, BLUE, 0.08, 82);
  s.addShape("ellipse", {
    x: 10.2, y: -1.6, w: 5.5, h: 5.5,
    fill: { color: BLUE_TINT, transparency: 40 }, line: { type: "none" },
  });
  s.addShape("ellipse", {
    x: 11.6, y: 4.6, w: 2.6, h: 2.6,
    fill: { color: GOLD_TINT, transparency: 20 }, line: { type: "none" },
  });

  eyebrow(s, "🎓  EGZAMIN ÓSMOKLASISTY · JĘZYK ANGIELSKI", 4.16, 1.35, 5.0,
    { fill: GOLD_TINT, color: GOLD_DARK });

  s.addText(
    [
      { text: "Cyfrowy Zeszyt ", options: { color: BLUE_DARK } },
      { text: "E8", options: { color: GOLD } },
    ],
    { x: 1.16, y: 2.1, w: 11.0, h: 1.1, align: "center", fontFace: HEAD, bold: true, fontSize: 46 }
  );
  s.addText("Język Angielski", {
    x: 1.16, y: 3.05, w: 11.0, h: 0.6, align: "center",
    fontFace: HEAD, fontSize: 24, color: BLUE_DARK,
  });

  s.addText(
    [
      { text: "Uczeń: ", options: { bold: false, color: MUTED } },
      { text: "[Imię Ucznia]", options: { bold: true, color: INK } },
      { text: "     |     Lektorka: ", options: { bold: false, color: MUTED } },
      { text: "Ola Rodzinka", options: { bold: true, color: INK } },
    ],
    { x: 1.16, y: 3.95, w: 11.0, h: 0.5, align: "center", fontFace: BODY, fontSize: 16 }
  );

  // badge row
  const badges = ["🎓  E8 2027", "💻  Google Meet & Canva Whiteboards", "🛡️  Standard CKE"];
  const bw = [1.7, 3.7, 2.2];
  let totalW = bw.reduce((a, b) => a + b, 0) + 0.35 * 2;
  let bx = (PW - totalW) / 2;
  badges.forEach((b, i) => {
    s.addShape("roundRect", {
      x: bx, y: 4.85, w: bw[i], h: 0.55, rectRadius: 0.28,
      fill: { color: BLUE_TINT }, line: { color: BLUE_TINT2, width: 1 },
    });
    s.addText(b, {
      x: bx, y: 4.85, w: bw[i], h: 0.55, align: "center", valign: "middle",
      fontFace: BODY, fontSize: 12.5, bold: true, color: BLUE_DARK,
    });
    bx += bw[i] + 0.35;
  });

  s.addText("Szablon uniwersalny · rozbudowuj lekcja po lekcji", {
    x: 1.16, y: 6.85, w: 11.0, h: 0.35, align: "center",
    fontFace: BODY, fontSize: 11, color: MUTED, italic: true,
  });
}

// =========================================================
// SLIDE 2 — ROZDZIELACZ NOWEJ LEKCJI
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: BLUE_DARK };

  dotGrid(s, 10.6, 0.4, 6, 6, 0.28, WHITE, 0.07, 88);
  s.addShape("ellipse", {
    x: -2.2, y: 3.4, w: 6.0, h: 6.0,
    fill: { color: BLUE, transparency: 55 }, line: { type: "none" },
  });

  s.addText("ROZDZIELACZ LEKCJI", {
    x: 1.16, y: 0.85, w: 11.0, h: 0.4, align: "center",
    fontFace: BODY, fontSize: 13, bold: true, color: GOLD, charSpacing: 2,
  });

  s.addText(
    [
      { text: "LEKCJA ", options: {} },
      { text: "nr", options: { color: GOLD } },
      { text: "  ·  ", options: { color: "9FB0E8" } },
      { text: "DD.MM.RRRR", options: { color: GOLD } },
    ],
    { x: 1.16, y: 1.35, w: 11.0, h: 0.9, align: "center", fontFace: HEAD, bold: true, fontSize: 38, color: WHITE }
  );

  s.addText(
    [
      { text: "Temat:  ", options: { color: "C6D2F5" } },
      { text: "[Temat Lekcji, np. Człowiek & Present Continuous]", options: { color: WHITE, bold: true } },
    ],
    { x: 1.16, y: 2.3, w: 11.0, h: 0.5, align: "center", fontFace: BODY, fontSize: 17 }
  );

  // goal list
  const goals = [
    "Cel 1 — np. słownictwo wyglądu",
    "Cel 2 — np. tłumaczenia PL → EN",
    "Cel 3 — np. szablon e-maila",
  ];
  const gW = 7.6, gX = (PW - gW) / 2, gY0 = 3.35, gH = 0.62, gGap = 0.2;
  goals.forEach((g, i) => {
    const y = gY0 + i * (gH + gGap);
    s.addShape("roundRect", {
      x: gX, y, w: gW, h: gH, rectRadius: 0.1,
      fill: { color: WHITE, transparency: 92 }, line: { color: WHITE, width: 0.75, transparency: 70 },
    });
    s.addShape("ellipse", {
      x: gX + 0.18, y: y + gH / 2 - 0.17, w: 0.34, h: 0.34,
      fill: { color: GOLD }, line: { type: "none" },
    });
    s.addText(String(i + 1), {
      x: gX + 0.18, y: y + gH / 2 - 0.17, w: 0.34, h: 0.34, align: "center", valign: "middle",
      fontFace: BODY, bold: true, fontSize: 13, color: BLUE_DARK,
    });
    s.addText(g, {
      x: gX + 0.68, y, w: gW - 0.9, h: gH, valign: "middle",
      fontFace: BODY, fontSize: 14.5, color: WHITE,
    });
  });
}

// =========================================================
// SLIDE 3 — SEKCJA A: E8 CKE PRACTICE
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: BG };
  sectionHeader(s, "🎯  E8 CKE PRACTICE · 30 MIN", "Sekcja A — Przygotowanie do Egzaminu E8", "Gramatyka, słownictwo i zadania w formacie egzaminacyjnym CKE.");

  const top = 2.15, colW = 5.85, colH = 4.7, gap = 0.4, leftX = 0.6, rightX = leftX + colW + gap;

  // left card - grammar & vocab
  card(s, leftX, top, colW, colH, { fill: BLUE_TINT, line: { color: BLUE_TINT2, width: 1 } });
  iconCircle(s, "📘", leftX + 0.28, top + 0.28, 0.5, WHITE);
  s.addText("Gramatyka & Słowniczek", {
    x: leftX + 0.95, y: top + 0.3, w: colW - 1.2, h: 0.46,
    fontFace: HEAD, bold: true, fontSize: 15, color: INK, valign: "middle",
  });
  card(s, leftX + 0.3, top + 1.0, colW - 0.6, colH - 1.35, { fill: WHITE, line: { color: BLUE_TINT2, width: 1.25, dashType: "dash" }, shadow: false });
  placeholderText(s, "Wpisz kluczowe reguły gramatyczne i nowe słówka z tej lekcji...",
    leftX + 0.5, top + 1.2, colW - 1.0, colH - 1.7, { fontSize: 13 });

  // right card - CKE tasks
  card(s, rightX, top, colW, colH, { fill: WHITE, line: { color: LINE, width: 1 } });
  iconCircle(s, "📝", rightX + 0.28, top + 0.28, 0.5, BLUE_TINT);
  s.addText("Zadania w formacie CKE", {
    x: rightX + 0.95, y: top + 0.3, w: colW - 1.2, h: 0.46,
    fontFace: HEAD, bold: true, fontSize: 15, color: INK, valign: "middle",
  });
  const rows = 5, rowH = 0.62, rowGap = 0.1, ry0 = top + 1.05;
  for (let i = 0; i < rows; i++) {
    const ry = ry0 + i * (rowH + rowGap);
    s.addText(String(i + 1) + ".", {
      x: rightX + 0.3, y: ry, w: 0.35, h: rowH, valign: "middle",
      fontFace: BODY, bold: true, fontSize: 13, color: BLUE,
    });
    s.addShape("roundRect", {
      x: rightX + 0.7, y: ry + 0.06, w: colW - 1.05, h: rowH - 0.12, rectRadius: 0.06,
      fill: { color: BLUE_TINT }, line: { color: BLUE_TINT2, width: 1, dashType: "dash" },
    });
    s.addText("[Wpisz odpowiedź tutaj...]", {
      x: rightX + 0.85, y: ry + 0.06, w: colW - 1.35, h: rowH - 0.12, valign: "middle",
      fontFace: BODY, italic: true, fontSize: 11.5, color: "94A3B8",
    });
  }
}

// =========================================================
// SLIDE 4 — SEKCJA B: SCHOOL SUPPORT
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: BG };
  sectionHeader(s, "🏫  SCHOOL SUPPORT · 30 MIN", "Sekcja B — Materiał Szkolny & Zaległości", "Miejsce na zadania z podręcznika, poprawki kartkówek i notatki ze szkoły.");

  const top = 2.15, colW = 5.85, colH = 4.7, gap = 0.4, leftX = 0.6, rightX = leftX + colW + gap;

  // left - screenshot dropzone
  card(s, leftX, top, colW, colH, { fill: WHITE, line: { color: LINE, width: 1 } });
  iconCircle(s, "📷", leftX + 0.28, top + 0.28, 0.5, BLUE_TINT);
  s.addText("Zrzuty ekranu / zdjęcia zadań", {
    x: leftX + 0.95, y: top + 0.3, w: colW - 1.2, h: 0.46,
    fontFace: HEAD, bold: true, fontSize: 15, color: INK, valign: "middle",
  });
  card(s, leftX + 0.3, top + 1.0, colW - 0.6, colH - 1.35,
    { fill: BLUE_TINT, line: { color: BLUE_TINT2, width: 1.5, dashType: "dash" }, shadow: false });
  s.addText("🖼️", { x: leftX + 0.3, y: top + 1.55, w: colW - 0.6, h: 0.8, align: "center", fontSize: 30 });
  s.addText("Wklej tutaj zrzut ekranu lub zdjęcie\nzadania z podręcznika", {
    x: leftX + 0.6, y: top + 2.35, w: colW - 1.2, h: 0.7, align: "center",
    fontFace: BODY, fontSize: 12.5, color: MUTED,
  });

  // right - notes
  card(s, rightX, top, colW, colH, { fill: BLUE_TINT, line: { color: BLUE_TINT2, width: 1 } });
  iconCircle(s, "✏️", rightX + 0.28, top + 0.28, 0.5, WHITE);
  s.addText("Rozwiązania, poprawki i notatki", {
    x: rightX + 0.95, y: top + 0.3, w: colW - 1.2, h: 0.46,
    fontFace: HEAD, bold: true, fontSize: 15, color: INK, valign: "middle",
  });
  card(s, rightX + 0.3, top + 1.0, colW - 0.6, colH - 1.35, { fill: WHITE, line: { color: BLUE_TINT2, width: 1.25, dashType: "dash" }, shadow: false });
  placeholderText(s, "Zapisz rozwiązania zadań, poprawki kartkówek i notatki ze szkoły...",
    rightX + 0.5, top + 1.2, colW - 1.0, colH - 1.7, { fontSize: 13 });
}

// =========================================================
// SLIDE 5 — SEKCJA C: WRITING LAB
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: BG };
  sectionHeader(s, "✉️  WRITING LAB · E-MAIL CKE NA 10 PKT", "Sekcja C — E-mail & Wypowiedź Pisemna", "Napisz e-mail zgodnie z poleceniem i trzema kropkami CKE (50–120 słów).");

  // prompt box
  const pY = 2.1, pH = 1.05;
  card(s, 0.6, pY, 12.13, pH, { fill: GOLD_TINT, line: { color: "FBD79A", width: 1.25 } });
  s.addText("📋  Polecenie:  [Wklej treść polecenia z arkusza CKE...]", {
    x: 0.85, y: pY + 0.1, w: 11.6, h: 0.35,
    fontFace: BODY, bold: true, fontSize: 12.5, color: INK,
  });
  s.addText("•  Kropka 1...        •  Kropka 2...        •  Kropka 3...", {
    x: 0.85, y: pY + 0.52, w: 11.6, h: 0.4,
    fontFace: BODY, fontSize: 12, italic: true, color: MUTED,
  });

  const wTop = 3.35, wH = 3.5, wW = 8.05, sideX = 0.6 + wW + 0.35, sideW = 12.13 - wW - 0.35;

  // writing area
  card(s, 0.6, wTop, wW, wH, { fill: BLUE_TINT, line: { color: BLUE_TINT2, width: 1.25, dashType: "dash" } });
  placeholderText(s, "Hi Sam, ... / Dear ..., \n\nNapisz swoją odpowiedź tutaj...",
    0.85, wTop + 0.25, wW - 0.5, wH - 0.9, { fontSize: 13 });
  s.addShape("roundRect", {
    x: 0.6, y: wTop + wH + 0.15, w: 2.3, h: 0.4, rectRadius: 0.2,
    fill: { color: BLUE_TINT2 }, line: { type: "none" },
  });
  s.addText("50–120 słów", {
    x: 0.6, y: wTop + wH + 0.15, w: 2.3, h: 0.4, align: "center", valign: "middle",
    fontFace: BODY, bold: true, fontSize: 11.5, color: BLUE_DARK,
  });

  // phrase sidebar
  card(s, sideX, wTop, sideW, wH, { fill: WHITE, line: { color: LINE, width: 1 } });
  s.addText("PRZYDATNE ZWROTY", {
    x: sideX + 0.25, y: wTop + 0.2, w: sideW - 0.5, h: 0.3,
    fontFace: BODY, bold: true, fontSize: 11, color: BLUE, charSpacing: 1,
  });
  const phrases = [
    "Hi [imię], / Dear [imię],",
    "Thanks for your email...",
    "I'm writing to tell you...",
    "By the way, ...",
    "Can't wait to hear from you!",
    "Best wishes, / See you soon,",
  ];
  let py = wTop + 0.62;
  phrases.forEach((p) => {
    s.addShape("roundRect", {
      x: sideX + 0.22, y: py, w: sideW - 0.44, h: 0.42, rectRadius: 0.06,
      fill: { color: BLUE_TINT }, line: { type: "none" },
    });
    s.addText(p, {
      x: sideX + 0.35, y: py, w: sideW - 0.6, h: 0.42, valign: "middle",
      fontFace: BODY, fontSize: 10.5, color: INK,
    });
    py += 0.48;
  });
}

// =========================================================
// SLIDE 6 — HOMEWORK & FISZKI
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: BG };
  sectionHeader(s, "🏠  HOMEWORK & REVISION", "Praca Domowa & Fiszki", "Zadania utrwalające materiał z tej lekcji — do wykonania przed kolejnym spotkaniem.");

  const top = 2.15, rowH = 0.56, rowGap = 0.14, x0 = 0.6, w0 = 12.13;
  for (let i = 0; i < 5; i++) {
    const y = top + i * (rowH + rowGap);
    s.addShape("roundRect", {
      x: x0, y, w: w0, h: rowH, rectRadius: 0.1,
      fill: { color: BLUE_TINT }, line: { color: BLUE_TINT2, width: 1 },
    });
    s.addShape("roundRect", {
      x: x0 + 0.22, y: y + rowH / 2 - 0.13, w: 0.26, h: 0.26, rectRadius: 0.05,
      fill: { color: WHITE }, line: { color: BLUE, width: 1.5 },
    });
    s.addText(`${i + 1}. Zdanie do przetłumaczenia na angielski...`, {
      x: x0 + 0.65, y, w: w0 - 0.9, h: rowH, valign: "middle",
      fontFace: BODY, fontSize: 13.5, color: INK,
    });
  }

  // quizlet CTA
  const qY = top + 5 * (rowH + rowGap) + 0.15, qH = 0.95;
  card(s, x0, qY, w0, qH, { fill: GOLD_TINT, line: { color: "FBD79A", width: 1.25 } });
  s.addText(
    [
      { text: "📚  Zestaw słówek na kolejną lekcję\n", options: { bold: true, fontSize: 13.5, color: INK, breakLine: true } },
      { text: "[Wklej link do zestawu na Quizlet]", options: { fontSize: 11.5, italic: true, color: MUTED } },
    ],
    { x: x0 + 0.3, y: qY, w: 8.2, h: qH, valign: "middle", fontFace: BODY }
  );
  s.addShape("roundRect", {
    x: x0 + w0 - 3.0, y: qY + qH / 2 - 0.28, w: 2.6, h: 0.56, rectRadius: 0.28,
    fill: { color: GOLD }, line: { type: "none" },
  });
  s.addText("Otwórz Quizlet  →", {
    x: x0 + w0 - 3.0, y: qY + qH / 2 - 0.28, w: 2.6, h: 0.56, align: "center", valign: "middle",
    fontFace: BODY, bold: true, fontSize: 12.5, color: WHITE,
  });
}

pres.writeFile({ fileName: "Cyfrowy_Zeszyt_E8_Angielski.pptx" }).then((fileName) => {
  console.log("Prezentacja wygenerowana pomyślnie:", fileName);
});
