"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

type Category = "All" | "Signatures" | "Twist On Classics" | "Gin Tonic Delights";

interface Cocktail {
  name: string;
  ingredients: string;
  category: Exclude<Category, "All">;
}

const cocktails: Cocktail[] = [
  // SIGNATURES
  { name: "African Violet", ingredients: "London Dry Gin, Violet & Blackberry Cordial", category: "Signatures" },
  { name: "Amalfi", ingredients: "Gin, Limoncello, Aromatic Mint Soda, Raspberry", category: "Signatures" },
  { name: "Charlize", ingredients: "Gin, Cordial Lime, Vermouth, Maraschino, Orange Water", category: "Signatures" },
  { name: "Coco Loco", ingredients: "Rum, Coconut Milk, Plantation Papaya, Guava, Chili", category: "Signatures" },
  { name: "Citrus Circus", ingredients: "Bergamot, Malfy Limone, Limoncello, Paragon Penja Pepper", category: "Signatures" },
  { name: "Emergency Room", ingredients: "Gin, Flower Extract, Pomegranate Cordial, Spicy Bitter", category: "Signatures" },
  { name: "French Kiss", ingredients: "Rey Vodka, Strawberry, Peach Schnapps, Flower Aroma", category: "Signatures" },
  { name: "Floral Sunset", ingredients: "Rum, Amaretto, Peach Schnapps, Hibiscus & Watermelon Cordial", category: "Signatures" },
  { name: "Le’ Parfume", ingredients: "Gin, Flower & Vanilla Extract, Jasmine Aroma", category: "Signatures" },
  { name: "Green Garden", ingredients: "London Dry Gin, Basil, Cucumber", category: "Signatures" },
  { name: "Lotus", ingredients: "Lime, Mezcal Ilegal, Pineapple & Peppercorn Cordial, Jasmine Air", category: "Signatures" },
  { name: "Loving Me Loving You", ingredients: "Yuu Bal Mezcal, Bergamot Shrub, Guava & Lime Soda", category: "Signatures" },
  { name: "Insolito", ingredients: "Citadelle Gin, Malic Acid, Celery Bitter, Basil & Cucumber Air", category: "Signatures" },
  { name: "Midnight Bloom", ingredients: "Dark Rum, White Penja Pepper, Chokeberry & Lavender Cordial, Honey", category: "Signatures" },
  { name: "Orient Express", ingredients: "Mandarine & Ginger Soda, Jasmine, Lemon, Rum Spicy, Paragon Rue Berry", category: "Signatures" },
  // TWIST ON CLASSICS
  { name: "Mezcalita", ingredients: "Yuu Bal Mezcal, Dry Curacao, Lime", category: "Twist On Classics" },
  { name: "Tiramisu Martini", ingredients: "Tiramisu, Rye Vodka, Borghetti, Cream", category: "Twist On Classics" },
  { name: "Vodka Sour Maracuja", ingredients: "Rye Vodka, Lemon, Maracuja", category: "Twist On Classics" },
  { name: "Mezcal Sunset", ingredients: "Lime, Limoncello, Orange Liqueur, Yuu Bal Mezcal, Raspberry & Sage Cordial", category: "Twist On Classics" },
  { name: "New Fashion", ingredients: "Bourbon Whiskey, Chocolate, Orange Bitter, Peppercorn, Maraschino", category: "Twist On Classics" },
  { name: "Spicy Paloma", ingredients: "Tequila, Chili Powder, Grapefruit Soda, Chipotle", category: "Twist On Classics" },
  { name: "Nepal Gimlet", ingredients: "Gin, Lime, Paragon Timur Berry, Strawberry & Basil Cordial", category: "Twist On Classics" },
  { name: "White Negroni", ingredients: "Gin, White Bitter, White Vermouth, Paragon Timur Berry Cordial", category: "Twist On Classics" },
  { name: "Negroni Rinforzato", ingredients: "Carpano, Luxardo Bitter, Amaro, Gin, Blackberry & Thyme Cordial, Paragon White Penja Pepper", category: "Twist On Classics" },
  // GIN TONIC DELIGHTS
  { name: "Gin Tonic Mediterranean", ingredients: "Mediterranean herbs and botanicals", category: "Gin Tonic Delights" },
  { name: "Gin Tonic Spicy", ingredients: "A bold mix with a hint of spice", category: "Gin Tonic Delights" },
  { name: "Gin Tonic Floreal", ingredients: "Floral infusion with fragrant delicate flavour", category: "Gin Tonic Delights" },
  { name: "Gin Tonic Forestal", ingredients: "Earthy blend inspired by forest freshness", category: "Gin Tonic Delights" },
  { name: "Gin Tonic Garden", ingredients: "Fresh herbs and garden botanicals", category: "Gin Tonic Delights" },
];

const categories: Category[] = ["All", "Signatures", "Twist On Classics", "Gin Tonic Delights"];
const sections: Exclude<Category, "All">[] = ["Signatures", "Twist On Classics", "Gin Tonic Delights"];

export default function MenuPage() {
  const [active, setActive] = useState<Category>("All");

  const sectionsToShow: Exclude<Category, "All">[] =
    active === "All" ? sections : [active as Exclude<Category, "All">];

  return (
    <>
      {/* HERO */}
      <section className="bg-night border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-20 py-16 lg:py-0">
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
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <AnimatedSection direction="up" delay={0.15} className="w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[460px] xl:max-w-[520px]">
                <Image
                  src="/images/fotoo.jpeg"
                  alt="Seasons cocktail"
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

      {/* FILTER */}
      <section className="bg-night sticky top-16 z-30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center gap-5 sm:gap-8 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-xs tracking-widest2 uppercase whitespace-nowrap transition-all duration-300 pb-1 border-b min-h-[44px] flex items-end ${
                active === cat
                  ? "text-gold border-gold"
                  : "text-ivory/50 border-transparent hover:text-ivory/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section className="bg-night py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {sectionsToShow.map((section, si) => {
            const items = cocktails.filter((c) => c.category === section);
            return (
              <div key={section} className={si > 0 ? "mt-16 sm:mt-24" : ""}>
                {/* Section header */}
                <AnimatedSection direction="none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-5 h-px bg-gold/50" />
                    <p className="font-sans text-[10px] tracking-widest3 text-gold uppercase">
                      {section}
                    </p>
                    <div className="flex-1 h-px bg-gold/15" />
                  </div>
                </AnimatedSection>

                {/* Cocktail rows */}
                <div>
                  {items.map((cocktail, i) => (
                    <AnimatedSection key={cocktail.name} delay={(i % 8) * 0.04}>
                      <div className="group border-b border-white/8 py-5 sm:py-6 hover:border-gold/25 transition-colors duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-8">
                          <h3 className="font-display text-2xl sm:text-3xl font-light text-ivory group-hover:text-gold/90 transition-colors duration-300 shrink-0">
                            {cocktail.name}
                          </h3>
                          <p className="font-sans text-xs sm:text-sm text-muted/80 leading-relaxed sm:text-right">
                            {cocktail.ingredients}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden h-[70vh] md:h-auto md:aspect-[21/9] border-t border-white/5 flex items-center justify-center">
        <Image
          src="/images/fotobukur.jpeg"
          alt="Crafted with care"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/70" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-night to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-night to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection direction="none" duration={1.2}>
            <div className="w-8 h-px bg-gold/30 mx-auto mb-10" />
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-10 text-shadow-sm">
              A note on our craft
            </p>
            <p className="font-display text-xl sm:text-2xl font-light italic text-ivory/90 leading-relaxed text-balance mb-12 text-shadow-sm">
              All cocktails are crafted to order. Our menu breathes with the
              seasons — ask your bartender about today&rsquo;s specials.
            </p>
            <div className="w-16 h-px bg-gold/30 mx-auto" />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
