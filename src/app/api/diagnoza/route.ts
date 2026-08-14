import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface Submission {
  id: string;
  createdAt: string;
  studentName: string;
  summaryText: string;
  aiPrompt: string;
}

// Konfiguracja zmiennych środowiskowych dla baz chmurowych
const getSupabaseConfig = () => {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (url && key) {
    return { url: url.replace(/\/$/, ""), key };
  }
  return null;
};

const getKvConfig = () => {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    return { url: url.replace(/\/$/, ""), token };
  }
  return null;
};

// Pomocnicza ścieżka pliku z fallbackiem do /tmp dla Vercel/Serverless
const getSubmissionsFilePath = (): { primaryPath: string; isTmp: boolean } => {
  try {
    const dirPath = path.join(process.cwd(), "raporty_uczniow");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    return { primaryPath: path.join(dirPath, "submissions.json"), isTmp: false };
  } catch {
    // W środowisku serverless (Vercel) /var/task jest read-only, więc używamy /tmp
    const tmpDir = path.join("/tmp", "raporty_uczniow");
    if (!fs.existsSync(tmpDir)) {
      try {
        fs.mkdirSync(tmpDir, { recursive: true });
      } catch {
        // ignorujemy
      }
    }
    return { primaryPath: path.join(tmpDir, "submissions.json"), isTmp: true };
  }
};

function isAuthorized(request: Request): boolean {
  const adminPass = process.env.ADMIN_PASSWORD || "Ola#Korepetycje2026!Sec";
  const authHeader = request.headers.get("x-admin-password");
  return !!authHeader && authHeader.trim() === adminPass.trim();
}

// Funkcja odczytująca diagnozy z aktywnej bazy danych
async function fetchAllSubmissions(): Promise<{ submissions: Submission[]; mode: string }> {
  // 1. Sprawdź Supabase
  const supabase = getSupabaseConfig();
  if (supabase) {
    try {
      const res = await fetch(`${supabase.url}/rest/v1/submissions?select=*&order=id.desc`, {
        headers: {
          apikey: supabase.key,
          Authorization: `Bearer ${supabase.key}`,
        },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        return { submissions: Array.isArray(data) ? data : [], mode: "supabase" };
      }
    } catch (e) {
      console.error("Błąd pobierania z Supabase:", e);
    }
  }

  // 2. Sprawdź Vercel KV / Upstash Redis
  const kv = getKvConfig();
  if (kv) {
    try {
      const res = await fetch(`${kv.url}/get/submissions`, {
        headers: { Authorization: `Bearer ${kv.token}` },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        const rawResult = data.result;
        let parsed: Submission[] = [];
        if (typeof rawResult === "string") {
          parsed = JSON.parse(rawResult);
        } else if (Array.isArray(rawResult)) {
          parsed = rawResult;
        }
        return { submissions: parsed, mode: "kv" };
      }
    } catch (e) {
      console.error("Błąd pobierania z KV:", e);
    }
  }

  // 3. Fallback do dysku lokalnego / /tmp
  const { primaryPath, isTmp } = getSubmissionsFilePath();
  if (!fs.existsSync(/*turbopackIgnore: true*/ primaryPath)) {
    return { submissions: [], mode: isTmp ? "tmp" : "file" };
  }

  try {
    const content = fs.readFileSync(/*turbopackIgnore: true*/ primaryPath, "utf-8");
    const submissions = JSON.parse(content || "[]");
    return { submissions, mode: isTmp ? "tmp" : "file" };
  } catch {
    return { submissions: [], mode: isTmp ? "tmp" : "file" };
  }
}

// GET - Pobieranie bazy zgłoszeń
export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Brak autoryzacji" }, { status: 401 });
  }

  try {
    const { submissions, mode } = await fetchAllSubmissions();
    return NextResponse.json({ submissions, storageMode: mode });
  } catch (error) {
    console.error("Błąd pobierania raportów:", error);
    return NextResponse.json({ submissions: [], storageMode: "error" });
  }
}

// POST - Dodawanie nowej diagnozy
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { studentName, summaryText, aiPrompt } = data;

    const timestamp = new Date().toISOString();
    const dateStr = new Date().toLocaleString("pl-PL");

    const newSubmission: Submission = {
      id: `${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: dateStr,
      studentName: studentName || "Nie podano",
      summaryText: summaryText || "",
      aiPrompt: aiPrompt || "",
    };

    // 1. Supabase
    const supabase = getSupabaseConfig();
    if (supabase) {
      try {
        const res = await fetch(`${supabase.url}/rest/v1/submissions`, {
          method: "POST",
          headers: {
            apikey: supabase.key,
            Authorization: `Bearer ${supabase.key}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify([newSubmission]),
        });
        if (res.ok) {
          return NextResponse.json({
            success: true,
            message: `Zapisano w Supabase: ${studentName}`,
            submissionId: newSubmission.id,
            storageMode: "supabase",
          });
        }
      } catch (e) {
        console.error("Błąd zapisu Supabase:", e);
      }
    }

    // 2. Upstash / Vercel KV
    const kv = getKvConfig();
    if (kv) {
      try {
        const { submissions: existing } = await fetchAllSubmissions();
        const updated = [newSubmission, ...existing];
        const res = await fetch(`${kv.url}/set/submissions`, {
          method: "POST",
          headers: { Authorization: `Bearer ${kv.token}` },
          body: JSON.stringify(JSON.stringify(updated)),
        });
        if (res.ok) {
          return NextResponse.json({
            success: true,
            message: `Zapisano w KV: ${studentName}`,
            submissionId: newSubmission.id,
            storageMode: "kv",
          });
        }
      } catch (e) {
        console.error("Błąd zapisu KV:", e);
      }
    }

    // 3. Fallback Plikowy TXT + JSON (lokalny / /tmp)
    const sanitizedName = (studentName || "Uczen")
      .replace(/[^a-zA-Z0-9ąĆęŁńÓśŹŻąćęłnóśźż_-]/g, "_")
      .trim();
    const fileName = `${sanitizedName}_${timestamp.split("T")[0]}_${Date.now()}.txt`;

    const { primaryPath, isTmp } = getSubmissionsFilePath();
    const dirPath = path.dirname(primaryPath);

    // Zapis TXT
    try {
      const txtPath = path.join(dirPath, fileName);
      const fileContent = `==================================================
RAPORT DIAGNOSTYCZNY UCZNIA
Data wypełnienia: ${dateStr}
==================================================

${summaryText}

==================================================
🤖 PROMPT DLA AI (DO CHATGPT / CLAUDE)
==================================================

${aiPrompt}
`;
      fs.writeFileSync(txtPath, fileContent, "utf-8");
    } catch {
      // Ignorujemy błędy dysku jeśli niemożliwe
    }

    // Zapis JSON
    let submissions: Submission[] = [];
    if (fs.existsSync(/*turbopackIgnore: true*/ primaryPath)) {
      try {
        submissions = JSON.parse(fs.readFileSync(/*turbopackIgnore: true*/ primaryPath, "utf-8") || "[]");
      } catch {
        submissions = [];
      }
    }
    submissions.unshift(newSubmission);

    try {
      fs.writeFileSync(primaryPath, JSON.stringify(submissions, null, 2), "utf-8");
    } catch {
      // Ostateczny ratunek - wymuszenie zapisu do /tmp
      const fallbackTmp = path.join("/tmp", "submissions.json");
      fs.writeFileSync(fallbackTmp, JSON.stringify(submissions, null, 2), "utf-8");
    }

    return NextResponse.json({
      success: true,
      message: `Zapisano raport ucznia: ${studentName}`,
      submissionId: newSubmission.id,
      storageMode: isTmp ? "tmp" : "file",
    });
  } catch (error) {
    console.error("Błąd zapisu raportu:", error);
    return NextResponse.json(
      { success: false, error: "Błąd zapisu serwera" },
      { status: 500 }
    );
  }
}

// DELETE - Usuwanie diagnozy z bazy
export async function DELETE(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Brak autoryzacji" }, { status: 401 });
  }

  try {
    const { id } = await request.json();

    // 1. Supabase
    const supabase = getSupabaseConfig();
    if (supabase) {
      try {
        await fetch(`${supabase.url}/rest/v1/submissions?id=eq.${id}`, {
          method: "DELETE",
          headers: {
            apikey: supabase.key,
            Authorization: `Bearer ${supabase.key}`,
          },
        });
      } catch (e) {
        console.error("Błąd usuwania Supabase:", e);
      }
    }

    // 2. KV
    const kv = getKvConfig();
    if (kv) {
      try {
        const { submissions: existing } = await fetchAllSubmissions();
        const updated = existing.filter((sub) => sub.id !== id);
        await fetch(`${kv.url}/set/submissions`, {
          method: "POST",
          headers: { Authorization: `Bearer ${kv.token}` },
          body: JSON.stringify(JSON.stringify(updated)),
        });
      } catch (e) {
        console.error("Błąd usuwania KV:", e);
      }
    }

    // 3. Plik lokalny
    const { primaryPath } = getSubmissionsFilePath();
    if (fs.existsSync(/*turbopackIgnore: true*/ primaryPath)) {
      try {
        let submissions: Submission[] = JSON.parse(
          fs.readFileSync(/*turbopackIgnore: true*/ primaryPath, "utf-8") || "[]"
        );
        submissions = submissions.filter((sub) => sub.id !== id);
        fs.writeFileSync(primaryPath, JSON.stringify(submissions, null, 2), "utf-8");
      } catch {
        // brak
      }
    }

    return NextResponse.json({ success: true, message: "Usunięto diagnozę z listy" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Błąd podczas usuwania" }, { status: 500 });
  }
}
