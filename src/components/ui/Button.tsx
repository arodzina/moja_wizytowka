import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "light" | "outline";
type Size = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out-soft";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:-translate-y-0.5",
  secondary:
    "bg-white text-brand-700 ring-1 ring-brand-200 hover:ring-brand-400 hover:bg-brand-50",
  accent:
    "bg-accent-400 text-ink shadow-soft hover:bg-accent-500 hover:-translate-y-0.5",
  light:
    "bg-white text-brand-700 shadow-soft hover:bg-brand-50 hover:-translate-y-0.5",
  outline:
    "bg-white/10 text-white ring-1 ring-white/30 backdrop-blur-sm hover:bg-white/20 hover:ring-white/60 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {children}
    </button>
  );
}
