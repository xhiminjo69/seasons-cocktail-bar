import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Laboratory", href: "/laboratory" },
  { label: "Find Us", href: "/find-us" },
];

export default function Footer() {
  return (
    <footer className="bg-night border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 relative overflow-hidden rounded-full">
                <Image
                  src="/images/logo.jpg"
                  alt="Seasons"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display text-2xl tracking-widest2 text-gold uppercase font-light">
                Seasons
              </span>
            </div>
            <p className="font-sans text-sm text-muted leading-relaxed max-w-xs">
              A refined cocktail experience where the Adriatic breeze meets the
              art of mixology. Lungomare, Vlorë, Albania.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs tracking-widest2 uppercase text-gold mb-2">
              Navigate
            </h4>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm text-ivory/60 hover:text-ivory transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-sans text-xs tracking-widest2 uppercase text-gold mb-4">
                Opening Hours
              </h4>
              <div className="space-y-2 font-sans text-sm text-ivory/60">
                <div className="flex justify-between gap-8">
                  <span>Mon — Thu</span>
                  <span className="text-ivory/40">17:00 — 01:00</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span>Fri — Sat</span>
                  <span className="text-ivory/40">17:00 — 03:00</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span>Sunday</span>
                  <span className="text-ivory/40">17:00 — 01:00</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/seasons.cocktail.bar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="font-sans text-xs tracking-widest2 uppercase text-ivory/40 hover:text-gold transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-muted/60">
            © {new Date().getFullYear()} Seasons Cocktail Bar. All rights
            reserved.
          </p>
          <p className="font-sans text-xs text-muted/40 tracking-wider">
            Lungomare, Vlorë, Albania
          </p>
        </div>
      </div>
    </footer>
  );
}
