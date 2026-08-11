import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { studentName, summaryText, aiPrompt } = data;

    const sanitizedName = (studentName || "Ucien")
      .replace(/[^a-zA-Z0-9ąĆęŁńÓśŹŻąćęłnóśźż_-]/g, "_")
      .trim();

    const timestamp = new Date().toISOString().split("T")[0];
    const fileName = `${sanitizedName}_${timestamp}.txt`;

    // Folder zapisywania raportów w katalogu projektu
    const dirPath = path.join(process.cwd(), "raporty_uczniow");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const filePath = path.join(dirPath, fileName);
    const fileContent = `==================================================
RAPORT DIAGNOSTYCZNY UCZNIA
Data wypełnienia: ${new Date().toLocaleString("pl-PL")}
==================================================

${summaryText}

==================================================
🤖 PROMPT DLA AI (DO CHATGPT / CLAUDE)
(Skopiuj poniższą sekcję i wklej do ChatGPT, aby wygenerować plan nauki):
==================================================

${aiPrompt}
`;

    fs.writeFileSync(filePath, fileContent, "utf-8");

    return NextResponse.json({
      success: true,
      message: `Zapisano raport w pliku: ${fileName}`,
      filePath: filePath,
    });
  } catch (error) {
    console.error("Błąd zapisu raportu:", error);
    return NextResponse.json(
      { success: false, error: "Błąd zapisu serwera" },
      { status: 500 }
    );
  }
}
