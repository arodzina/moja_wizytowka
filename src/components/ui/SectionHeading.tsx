import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/** Nagłówek sekcji: mała etykieta + tytuł display + lead. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`${centered ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}
    >
      <p
        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span aria-hidden="true" className="h-px w-6 bg-accent-400" />
        {eyebrow}
        {centered && <span aria-hidden="true" className="h-px w-6 bg-accent-400" />}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-slate-soft">{lead}</p>}
    </Reveal>
  );
}
