"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/site/Logo";
import Button from "@/components/ui/Button";
import { navLinks } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      {/* Pasek postępu czytania */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-500 via-brand-400 to-accent-400"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 pt-1 sm:pt-0 transition-all duration-300 ${
          solid
            ? "border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-3.5 sm:h-20 sm:px-8 py-2 sm:py-0">
          <a
            href="/#start"
            className="rounded-xl shrink-0"
            aria-label="Przejdź do początku strony"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </a>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Nawigacja główna">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-brand-700"
              >
                {link.label}
                {link.href.includes("poradniki") && (
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider shadow-xs">
                    FREE
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Button href="/#kontakt" size="md" className="hidden sm:inline-flex px-3.5 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm">
              Umów rozmowę
            </Button>
            <button
              type="button"
              className="grid size-10 sm:size-11 place-items-center rounded-xl text-ink transition-colors hover:bg-brand-50 lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobilne"
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5 sm:size-6" /> : <Menu className="size-5 sm:size-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="menu-mobilne"
              aria-label="Menu mobilne"
              className="border-t border-slate-100 bg-white/95 backdrop-blur-md lg:hidden"
              initial={reduce ? undefined : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto max-w-6xl space-y-1 px-5 py-5 sm:px-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-brand-50"
                  >
                    <span>{link.label}</span>
                    {link.href.includes("poradniki") && (
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
                        DARMOWE
                      </span>
                    )}
                  </a>
                ))}
                <Button
                  href="/#kontakt"
                  size="lg"
                  className="mt-3 w-full"
                  onClick={() => setOpen(false)}
                >
                  Umów darmową rozmowę
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
