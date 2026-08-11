import Link from "next/link";
import { Mail } from "lucide-react";
import Logo from "@/components/site/Logo";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { navLinks, services, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/#start" className="rounded-xl" aria-label="Przejdź do początku strony">
              <Logo inverse />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Angielski i matematyka online dla klas 4–8 i liceum. Spokojnie,
              cierpliwie i bez stresu.
            </p>
            {(site.facebook || site.instagram) && (
              <div className="mt-6 flex items-center gap-3">
                {site.facebook && (
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="grid size-10 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-brand-500"
                  >
                    <FacebookIcon className="size-5" />
                  </a>
                )}
                {site.instagram && (
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="grid size-10 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-brand-500"
                  >
                    <InstagramIcon className="size-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          <nav aria-label="Nawigacja w stopce">
            <h3 className="font-display text-base font-semibold text-white">Na skróty</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-accent-300">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/#kontakt" className="transition-colors hover:text-accent-300">
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-base font-semibold text-white">Zajęcia</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="/#zajecia" className="transition-colors hover:text-accent-300">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-white">Kontakt</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent-300"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              {site.phoneDisplay && site.whatsapp ? (
                <li>
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-accent-300"
                  >
                    <WhatsAppIcon className="size-4" aria-hidden="true" />
                    {site.phoneDisplay}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {year} {site.name}. Wszelkie prawa zastrzeżone.</p>
          <p>Korepetycje online z pasją i cierpliwością.</p>
        </div>
      </div>
    </footer>
  );
}
