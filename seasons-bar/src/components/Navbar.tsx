"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Laboratory", href: "/laboratory" },
  { label: "Find Us", href: "/find-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isHome = pathname === "/";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury ${
          scrolled || !isHome
            ? "bg-night/95 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative flex items-center gap-3 group">
            <div className="w-8 h-8 relative overflow-hidden rounded-full">
              <Image
                src="/images/logo.jpg"
                alt="Seasons"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-display text-xl tracking-widest2 text-gold uppercase font-light">
              Seasons
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-xs tracking-widest2 uppercase transition-colors duration-300 relative group ${
                  pathname === item.href
                    ? "text-gold"
                    : "text-ivory/70 hover:text-ivory"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden relative z-60 flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-px bg-ivory transition-all duration-400 ease-luxury ${
                menuOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-ivory transition-all duration-400 ease-luxury ${
                menuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-ivory transition-all duration-400 ease-luxury ${
                menuOpen ? "w-6 -rotate-45 -translate-y-[9px]" : "w-6"
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-night flex flex-col items-center justify-center"
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "url('/images/cocktailbest.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <nav className="relative flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.6,
                    ease: [0.25, 0.1, 0, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className={`font-display text-5xl sm:text-6xl font-light italic tracking-wide transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-gold"
                        : "text-ivory hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 font-sans text-xs tracking-widest2 text-ivory uppercase"
            >
              Lungomare · Vlorë · Albania
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
