"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

type Category = "All" | "Signatures" | "Classics" | "Seasonal";

interface Cocktail {
  name: string;
  spirit: string;
  ingredients: string[];
  description: string;
  image: string;
  category: Omit<Category, "All">;
  objectPosition?: string;
}

const cocktails: Cocktail[] = [
  {
    name: "Aegean Drift",
    spirit: "Gin Based",
    ingredients: ["Hendrick's gin", "cucumber", "elderflower liqueur", "fresh lime", "sea salt"],
    description:
      "Inspired by the clarity of Adriatic waters. Light, botanical, and with a whisper of the sea.",
    image: "/images/tabaka.jpeg",
    category: "Signatures",
    objectPosition: "object-center",
  },
  {
    name: "Golden Hour",
    spirit: "Sparkling",
    ingredients: ["Aperol", "Prosecco", "blood orange", "rosemary syrup", "citrus foam"],
    description:
      "A sunset poured into a glass. Bittersweet, effervescent, and impossibly warm.",
    image: "/images/cocktailbest.jpeg",
    category: "Signatures",
    objectPosition: "object-[center_20%]",
  },
  {
    name: "Vlora Nights",
    spirit: "Mezcal Based",
    ingredients: ["Mezcal", "blackberry", "lemon", "agave", "activated charcoal"],
    description:
      "Dark as a Mediterranean night. Smoky depth, sweet intrigue, and a long finish.",
    image: "/images/cocktails19.jpeg",
    category: "Signatures",
    objectPosition: "object-center",
  },
  {
    name: "Season's Kiss",
    spirit: "Vodka Based",
    ingredients: ["Vodka", "lychee", "rose water", "lime", "champagne float"],
    description:
      "Delicate, floral, and ethereal. Like the first warm evening of the year.",
    image: "/images/tabaka cool.jpeg",
    category: "Signatures",
    objectPosition: "object-[center_25%]",
  },
  {
    name: "Mistral",
    spirit: "Gin Based",
    ingredients: ["Gin", "lavender syrup", "lemon", "wildflower honey", "egg white"],
    description:
      "Silky and aromatic. Soft as the wind that crosses the Adriatic.",
    image: "/images/cocktail2.jpeg",
    category: "Signatures",
    objectPosition: "object-center",
  },
  {
    name: "Copper Sunset",
    spirit: "Bourbon Based",
    ingredients: ["Bourbon", "smoked peach", "honey", "lemon", "cedar smoke"],
    description:
      "Warm amber complexity with the sweet heat of late summer evenings.",
    image: "/images/cocktail3.jpeg",
    category: "Signatures",
    objectPosition: "object-[center_30%]",
  },
  {
    name: "Negroni Bianco",
    spirit: "Gin Based",
    ingredients: ["Gin", "dry vermouth", "Suze", "grapefruit zest"],
    description:
      "A white Negroni — herbaceous, bitter-bright, and entirely elegant.",
    image: "/images/cocktail5.jpeg",
    category: "Classics",
    objectPosition: "object-center",
  },
  {
    name: "Penicillin",
    spirit: "Whisky Based",
    ingredients: ["Blended Scotch", "lemon", "honey-ginger syrup", "Islay float"],
    description:
      "A modern classic with smoky depth and warming ginger fire.",
    image: "/images/cocktail6.jpeg",
    category: "Classics",
    objectPosition: "object-[center_20%]",
  },
  {
    name: "Espresso Martini",
    spirit: "Vodka Based",
    ingredients: ["Vodka", "fresh espresso", "coffee liqueur", "vanilla", "coffee foam"],
    description:
      "Rich, velvety, indulgent. A love letter to late nights and good coffee.",
    image: "/images/cocktail7.jpeg",
    category: "Classics",
    objectPosition: "object-[center_30%]",
  },
  {
    name: "Tommy's Margarita",
    spirit: "Tequila Based",
    ingredients: ["Blanco tequila", "fresh lime", "agave nectar", "tajín rim"],
    description:
      "Pure and clean. The gold standard of simplicity, perfectly balanced.",
    image: "/images/cocktail8.jpeg",
    category: "Classics",
    objectPosition: "object-[center_35%]",
  },
  {
    name: "Sea Glass",
    spirit: "Tequila Based",
    ingredients: ["Tequila blanco", "blue curaçao", "elderflower", "lime", "soda"],
    description:
      "Clear as the Adriatic on a calm morning. Summer in a single sip.",
    image: "/images/cocktail10.jpeg",
    category: "Seasonal",
    objectPosition: "object-center",
  },
  {
    name: "Ember Rose",
    spirit: "Bourbon Based",
    ingredients: ["Bourbon", "rose syrup", "lemon", "orange bitters", "dried rose"],
    description:
      "Warm, floral, and lingering — the feeling of autumn's first crisp evening.",
    image: "/images/cocktail11.jpeg",
    category: "Seasonal",
    objectPosition: "object-[center_25%]",
  },
];

const categories: Category[] = ["All", "Signatures", "Classics", "Seasonal"];

export default function MenuPage() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<Cocktail | null>(null);

  const filtered =
    active === "All" ? cocktails : cocktails.filter((c) => c.category === active);

  const closeModal = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    if (selected) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected, closeModal]);

  /* iOS-safe scroll lock — overflow:hidden alone doesn't work on iOS Safari */
  useEffect(() => {
    if (selected) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (top) {
        window.scrollTo(0, -parseInt(top, 10));
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      {/* HERO */}
      <section className="bg-night border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-20 py-16 lg:py-0">

            {/* Text */}
            <div className="order-2 lg:order-1 lg:py-28">
              <AnimatedSection direction="up">
                <p className="font-sans text-[10px] tracking-widest3 text-gold uppercase mb-6">
                  The Drinks
                </p>
                <h1 className="font-display text-[clamp(3.5rem,12vw,8.5rem)] font-light text-ivory leading-[0.88] mb-10">
                  Our<br />Menu
                </h1>
                <div className="w-12 h-px bg-gold/30 mb-8" />
                <p className="font-display text-lg sm:text-xl font-light italic text-ivory/55 max-w-sm leading-loose">
                  &ldquo;Every cocktail on our menu has been designed around a
                  feeling — a moment, a season, a memory. We hope you find yours.&rdquo;
                </p>
              </AnimatedSection>
            </div>

            {/* Full poster — natural proportions, fully visible, no cropping */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <AnimatedSection direction="up" delay={0.15} className="w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[460px] xl:max-w-[520px]">
                <Image
                  src="/images/fotoo.jpeg"
                  alt="Paloma Cocktail"
                  width={600}
                  height={900}
                  priority
                  className="w-full h-auto"
                />
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* FILTER — sticky below the 64px navbar (py-4 + 32px logo) */}
      <section className="bg-night sticky top-16 z-30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center gap-5 sm:gap-8 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-xs tracking-widest2 uppercase whitespace-nowrap transition-all duration-300 pb-1 border-b min-h-[44px] flex items-end ${
                active === cat
                  ? "text-gold border-gold"
                  : "text-ivory/40 border-transparent hover:text-ivory/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* MENU LIST */}
      <section className="bg-night py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {filtered.map((cocktail, i) => (
            <AnimatedSection key={cocktail.name} delay={(i % 6) * 0.05}>
              <button
                onClick={() => setSelected(cocktail)}
                className="group w-full text-left border-b border-white/8 py-5 sm:py-6 flex items-center justify-between gap-4 sm:gap-6 transition-colors duration-200 hover:border-gold/30 min-h-[64px]"
              >
                <div className="flex items-baseline gap-4 sm:gap-5 min-w-0">
                  <span className="font-sans text-[10px] tracking-widest2 uppercase text-gold/60 shrink-0 w-16 sm:w-20 hidden sm:block">
                    {cocktail.spirit.replace(" Based", "")}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-light text-ivory group-hover:text-gold transition-colors duration-200">
                    {cocktail.name}
                  </span>
                </div>
                <span className="font-sans text-[10px] tracking-widest2 uppercase text-ivory/20 group-hover:text-gold/60 transition-colors duration-200 shrink-0">
                  View ↗
                </span>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* NOTE AT BOTTOM */}
      <section className="bg-night border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-sans text-xs text-muted leading-relaxed max-w-md mx-auto">
            All cocktails are crafted to order. Please inform us of any
            allergies or dietary requirements. Our menu changes seasonally — ask
            your bartender about today&apos;s specials.
          </p>
        </div>
      </section>

      {/* COCKTAIL MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-night/90 backdrop-blur-md" />

          {/* Panel — overflow-y-auto so the whole modal scrolls on small screens */}
          <div
            className="relative z-10 w-full max-w-3xl bg-night border border-white/10 grid grid-cols-1 sm:grid-cols-2 overflow-y-auto max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image — capped height on mobile so details are always visible */}
            <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[480px] flex-shrink-0">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className={`object-cover ${selected.objectPosition ?? "object-center"}`}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-night/40" />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center px-6 sm:px-8 py-8 sm:py-10">
              <p className="font-sans text-[10px] tracking-widest3 text-gold uppercase mb-4">
                {selected.spirit}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-ivory leading-tight mb-5">
                {selected.name}
              </h2>
              <p className="font-sans text-sm text-ivory/60 leading-relaxed mb-6 sm:mb-8">
                {selected.description}
              </p>
              <div className="border-t border-white/8 pt-5 sm:pt-6">
                <p className="font-sans text-[10px] tracking-widest2 uppercase text-gold/50 mb-3">
                  Ingredients
                </p>
                <ul className="space-y-1.5">
                  {selected.ingredients.map((ing) => (
                    <li key={ing} className="font-sans text-xs text-ivory/40">
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="font-sans text-[10px] tracking-widest2 uppercase text-ivory/20 mt-6">
                {selected.category}
              </span>
            </div>

            {/* Close — proper 44px tap target */}
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 font-sans text-xs text-ivory/40 hover:text-ivory transition-colors duration-200 bg-night/60 backdrop-blur-sm min-w-[44px] min-h-[44px] flex items-center justify-center gap-1"
            >
              <span className="hidden sm:inline">Close</span>
              <span>✕</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
