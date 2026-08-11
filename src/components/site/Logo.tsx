import { Sparkles } from "lucide-react";
import { site } from "@/lib/site";

interface LogoProps {
  /** Wariant jasny (dla ciemnych sekcji / stopki). */
  inverse?: boolean;
}

export default function Logo({ inverse = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-600 font-display text-lg font-bold text-white shadow-soft"
      >
        <Sparkles className="size-5 text-accent-300" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-lg font-semibold ${inverse ? "text-white" : "text-ink"}`}
        >
          {site.tutorName}
        </span>
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
            inverse ? "text-white/50" : "text-slate-400"
          }`}
        >
          korepetycje online
        </span>
      </span>
    </span>
  );
}
