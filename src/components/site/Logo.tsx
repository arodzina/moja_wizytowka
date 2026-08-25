import { Sparkles } from "lucide-react";
import { site } from "@/lib/site";

interface LogoProps {
  /** Wariant jasny (dla ciemnych sekcji / stopki). */
  inverse?: boolean;
}

export default function Logo({ inverse = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5 shrink-0 select-none">
      <span
        aria-hidden="true"
        className="grid size-9 sm:size-10 shrink-0 place-items-center rounded-xl bg-brand-600 font-display text-base sm:text-lg font-bold text-white shadow-soft"
      >
        <Sparkles className="size-4 sm:size-5 text-accent-300" />
      </span>
      <span className="flex flex-col leading-tight shrink-0 whitespace-nowrap">
        <span
          className={`font-display text-base sm:text-lg font-bold ${inverse ? "text-white" : "text-ink"}`}
        >
          ola-korepetycje.pl
        </span>
        <span
          className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] ${
            inverse ? "text-white/60" : "text-slate-500"
          }`}
        >
          korepetycje online
        </span>
      </span>
    </span>
  );
}
