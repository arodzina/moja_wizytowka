import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Submission {
  id: string;
  createdAt: string;
  studentName: string;
  summaryText: string;
  aiPrompt: string;
}

const getSubmissionsFilePath = () => {
  const dirPath = path.join(process.cwd(), "raporty_uczniow");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  return path.join(dirPath, "submissions.json");
};

export async function GET() {
  try {
    const filePath = getSubmissionsFilePath();
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ submissions: [] });
    }
    const content = fs.readFileSync(filePath, "utf-8");
    const submissions = JSON.parse(content || "[]");
    return NextResponse.json({ submissions });
  } catch (error) {
    console.error("Błąd pobierania raportów:", error);
    return NextResponse.json({ submissions: [] });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { studentName, summaryText, aiPrompt } = data;

    const sanitizedName = (studentName || "Uczen")
      .replace(/[^a-zA-Z0-9ąĆęŁńÓśŹŻąćęłnóśźż_-]/g, "_")
      .trim();

    const timestamp = new Date().toISOString();
    const dateStr = new Date().toLocaleString("pl-PL");
    const fileName = `${sanitizedName}_${timestamp.split("T")[0]}_${Date.now()}.txt`;

    const dirPath = path.join(process.cwd(), "raporty_uczniow");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // 1. Zapis osobnego pliku TXT dla archiwacji
    const filePath = path.join(dirPath, fileName);
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
    fs.writeFileSync(filePath, fileContent, "utf-8");

    // 2. Zapis w pliku JSON z listą diagnoz dla panelu admina Oli (/diagnoza/admin)
    const submissionsFile = getSubmissionsFilePath();
    let submissions: Submission[] = [];
    if (fs.existsSync(submissionsFile)) {
      try {
        submissions = JSON.parse(fs.readFileSync(submissionsFile, "utf-8") || "[]");
      } catch {
        submissions = [];
      }
    }

    const newSubmission: Submission = {
      id: `${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: dateStr,
      studentName: studentName || "Nie podano",
      summaryText: summaryText || "",
      aiPrompt: aiPrompt || "",
    };

    submissions.unshift(newSubmission);
    fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2), "utf-8");

    return NextResponse.json({
      success: true,
      message: `Zapisano raport ucznia: ${studentName}`,
      submissionId: newSubmission.id,
    });
  } catch (error) {
    console.error("Błąd zapisu raportu:", error);
    return NextResponse.json(
      { success: false, error: "Błąd zapisu serwera" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const submissionsFile = getSubmissionsFilePath();

    if (fs.existsSync(submissionsFile)) {
      let submissions: Submission[] = JSON.parse(fs.readFileSync(submissionsFile, "utf-8") || "[]");
      submissions = submissions.filter((sub) => sub.id !== id);
      fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2), "utf-8");
    }

    return NextResponse.json({ success: true, message: "Usunięto diagnozę z listy" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Błąd podczas usuwania" }, { status: 500 });
  }
}
