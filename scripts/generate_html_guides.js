const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public", "poradniki");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function wrapHtml(title, category, icon, contentHtml) {
  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>${title} | Ola — Korepetycje Online</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}], throwOnError: false});"></script>
  <style>
    *, ::before, ::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background-color: #f8fafc;
      color: #0f172a;
      line-height: 1.7;
      padding-bottom: 4rem;
    }
    .top-bar {
      position: sticky;
      top: 0;
      z-index: 50;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid #e2e8f0;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 100%;
      margin-bottom: 2rem;
    }
    .top-bar .brand {
      font-weight: 800;
      font-size: 1.125rem;
      color: #1e3a8a;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .top-bar .btn-print {
      background-color: #2563eb;
      color: #ffffff;
      font-weight: 700;
      font-size: 0.875rem;
      padding: 0.625rem 1.25rem;
      border-radius: 9999px;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
      transition: all 0.2s;
    }
    .top-bar .btn-print:hover {
      background-color: #1d4ed8;
      transform: translateY(-1px);
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    .card {
      background-color: #ffffff;
      border-radius: 1.5rem;
      padding: 2.5rem;
      border: 1px solid #e2e8f0;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.04);
    }
    .badge {
      display: inline-block;
      background-color: #eff6ff;
      color: #1e40af;
      border: 1px solid #bfdbfe;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    @media print {
      body { background-color: #ffffff; padding-bottom: 0; }
      .top-bar { display: none; }
      .card { border: none; box-shadow: none; padding: 0; }
    }
  </style>
</head>
<body>
  <div class="top-bar">
    <div class="brand">
      <span>✨</span> Ola — Korepetycje Online
    </div>
    <button class="btn-print" onclick="window.print()">
      📄 Drukuj / Zapisz jako PDF
    </button>
  </div>

  <div class="container">
    <div class="card">
      <div class="badge">${icon} ${category}</div>
      ${contentHtml}
    </div>
  </div>
</body>
</html>`;
}

// Convert markdown line to inline HTML (bold, italic, links)
function parseInline(text) {
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; font-weight: 600;">$1</a>');
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  return text;
}

// Convert markdown file to clean HTML
function convertMarkdownToHtml(mdPath) {
  const rawText = fs.readFileSync(mdPath, "utf-8");
  const lines = rawText.split("\n");

  const htmlLines = [];
  let inList = false;

  for (let line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      if (inList) { htmlLines.push("</ul>"); inList = false; }
      continue;
    }

    if (trimmed === "---") {
      if (inList) { htmlLines.push("</ul>"); inList = false; }
      htmlLines.push('<hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 2rem 0;">');
      continue;
    }

    if (trimmed.startsWith("# ")) {
      if (inList) { htmlLines.push("</ul>"); inList = false; }
      htmlLines.push(`<h1 style="font-size: 2.25rem; font-weight: 800; color: #0f172a; line-height: 1.25; margin-bottom: 0.75rem;">${parseInline(trimmed.substring(2))}</h1>`);
      continue;
    }

    if (trimmed.startsWith("## ")) {
      if (inList) { htmlLines.push("</ul>"); inList = false; }
      htmlLines.push(`<h2 style="font-size: 1.5rem; font-weight: 700; color: #1e3a8a; margin-top: 2rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #f1f5f9;">${parseInline(trimmed.substring(3))}</h2>`);
      continue;
    }

    if (trimmed.startsWith("### ")) {
      if (inList) { htmlLines.push("</ul>"); inList = false; }
      htmlLines.push(`<h3 style="font-size: 1.125rem; font-weight: 700; color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">${parseInline(trimmed.substring(4))}</h3>`);
      continue;
    }

    if (trimmed.startsWith("> ")) {
      if (inList) { htmlLines.push("</ul>"); inList = false; }
      htmlLines.push(`<blockquote style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 1rem 1.25rem; border-radius: 0.5rem; margin: 1.25rem 0; font-style: italic; color: #1e293b;">${parseInline(trimmed.substring(2))}</blockquote>`);
      continue;
    }

    if (trimmed.startsWith("- [ ] ")) {
      if (!inList) {
        htmlLines.push('<ul style="margin-bottom: 1.25rem; padding-left: 1.5rem;">');
        inList = true;
      }
      htmlLines.push(`<li style="list-style: none; margin-bottom: 0.5rem; font-weight: 500; color: #334155;">☐ ${parseInline(trimmed.substring(6))}</li>`);
      continue;
    }

    const listMatch = trimmed.match(/^([-*]|\d+\.)\s+(.*)$/);
    if (listMatch) {
      if (!inList) {
        htmlLines.push('<ul style="margin-bottom: 1.25rem; padding-left: 1.5rem;">');
        inList = true;
      }
      htmlLines.push(`<li style="margin-bottom: 0.5rem; color: #334155;">${parseInline(listMatch[2])}</li>`);
      continue;
    }

    if (inList) {
      htmlLines.push("</ul>");
      inList = false;
    }
    htmlLines.push(`<p style="margin-bottom: 1.25rem; color: #334155; font-size: 1rem;">${parseInline(trimmed)}</p>`);
  }

  if (inList) { htmlLines.push("</ul>"); }

  return htmlLines.join("\n");
}

const brainDir = "/Users/ola/.gemini/antigravity/brain/fac548ab-4beb-485d-be94-896036fa7ad6";

// 1. Poradnik 1: Matematyka E8
const p1Html = convertMarkdownToHtml(path.join(brainDir, "poradnik_1_matematyka_e8.md"));
fs.writeFileSync(path.join(publicDir, "poradnik_1_matematyka_e8.html"), wrapHtml("Pewniaki E8 Matematyka", "Egzamin Ósmoklasisty • Matematyka", "📐", p1Html));

// 2. Poradnik 2: Angielski E8
const p2Html = convertMarkdownToHtml(path.join(brainDir, "poradnik_2_angielski_e8.md"));
fs.writeFileSync(path.join(publicDir, "poradnik_2_angielski_e8.html"), wrapHtml("E8 z Angielskiego pod Klucz CKE", "Egzamin Ósmoklasisty • Angielski", "🇬🇧", p2Html));

// 3. Poradnik 3: Matematyka Matura Podstawowa
const p3Html = convertMarkdownToHtml(path.join(brainDir, "poradnik_3_matematyka_pp.md"));
fs.writeFileSync(path.join(publicDir, "poradnik_3_matematyka_pp.html"), wrapHtml("Strategia Matury Podstawowej z Matematyki", "Matura Podstawowa • Matematyka", "🎓", p3Html));

// 4. Poradnik 4: Matematyka Matura Rozszerzona
const p4Html = convertMarkdownToHtml(path.join(brainDir, "poradnik_4_matematyka_pr.md"));
fs.writeFileSync(path.join(publicDir, "poradnik_4_matematyka_pr.html"), wrapHtml("Masterclass Matury Rozszerzonej z Matematyki", "Matura Rozszerzona • Matematyka", "🚀", p4Html));

// 5. Poradnik 5: Angielski Matura Podstawowa
const p5Html = convertMarkdownToHtml(path.join(brainDir, "poradnik_5_angielski_pp.md"));
fs.writeFileSync(path.join(publicDir, "poradnik_5_angielski_pp.html"), wrapHtml("Bezstresowa Matura Podstawowa z Angielskiego", "Matura Podstawowa • Angielski", "💬", p5Html));

// 6. Poradnik 6: Angielski Matura Rozszerzona
const p6Html = convertMarkdownToHtml(path.join(brainDir, "poradnik_6_angielski_pr.md"));
fs.writeFileSync(path.join(publicDir, "poradnik_6_angielski_pr.html"), wrapHtml("Masterclass Matury Rozszerzonej z Angielskiego", "Matura Rozszerzona • Angielski", "🗣️", p6Html));

console.log("Successfully generated 6 distinct HTML guide documents!");
