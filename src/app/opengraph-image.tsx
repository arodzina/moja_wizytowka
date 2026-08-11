import { ImageResponse } from "next/og";

export const alt = "Angielski i matematyka online bez stresu — korepetycje online";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "linear-gradient(135deg, #eef3ff 0%, #ffffff 55%, #fff6de 100%)",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ fontSize: 72, color: "#0e1733", fontWeight: 700, lineHeight: 1.12 }}>
          Angielski i matematyka
        </div>
        <div style={{ fontSize: 72, color: "#0e1733", fontWeight: 700, lineHeight: 1.12 }}>
          online bez stresu.
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            color: "#525c73",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Korepetycje online · klasy 4–8 i liceum · matura i egzamin ósmoklasisty
        </div>
        <div
          style={{
            position: "absolute",
            top: 64,
            right: 64,
            width: 170,
            height: 170,
            borderRadius: 85,
            background: "#f7c03c",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: 64,
            width: 130,
            height: 130,
            borderRadius: 65,
            background: "#c6d8ff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 92,
            right: 100,
            width: 96,
            height: 40,
            borderRadius: 20,
            background: "#2f52ea",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: 700,
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          A+
        </div>
      </div>
    ),
    size
  );
}
