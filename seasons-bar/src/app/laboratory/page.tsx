"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const labCocktails = [
  {
    number: "001",
    name: "Carbon Copy",
    method: "Activated Charcoal Infusion",
    ingredients: [
      "Activated charcoal-washed gin",
      "clarified lime",
      "white bitter",
      "saline",
    ],
    description:
      "A study in negative space. Visually stark, flavourfully complex — everything you expect from a gin sour, yet nothing you've tasted before.",
    image: "/images/tabaka cool.jpeg",
    objectPosition: "object-[center_25%]",
  },
  {
    number: "002",
    name: "Ghost Protocol",
    method: "Fat-Washed Distillate",
    ingredients: [
      "Butter-washed bourbon",
      "vanilla-smoked ice",
      "black truffle shrub",
      "angostura",
    ],
    description:
      "The invisible made tangible. Fat-washing erases the visual of butter while letting its richness haunt every sip alongside truffle and smoke.",
    image: "/images/cocktail10.jpeg",
    objectPosition: "object-center",
  },
  {
    number: "003",
    name: "Solstice",
    method: "Sous Vide Extraction",
    ingredients: [
      "Sous vide saffron vodka",
      "honey dew",
      "yuzu",
      "basil oil float",
    ],
    description:
      "Saffron extracted at a precise 60°C for three hours to preserve floral notes lost in conventional infusion. Sun-coloured, summer-flavoured.",
    image: "/images/cocktailbest.jpeg",
    objectPosition: "object-[center_20%]",
  },
  {
    number: "004",
    name: "Iridescence",
    method: "Butterfly Pea Flower pH Shift",
    ingredients: [
      "Butterfly pea gin",
      "citric acid solution",
      "lemon verbena",
      "tonic micro-fizz",
    ],
    description:
      "Pour in the citrus and watch deep violet transform to rose pink before your eyes. A cocktail that performs as well as it tastes.",
    image: "/images/tabaka.jpeg",
    objectPosition: "object-center",
  },
];

const techniques = [
  {
    title: "Clarification",
    description:
      "Using centrifuge and milk-washing to remove colour while preserving flavour complexity. The invisible cocktail.",
  },
  {
    title: "Fat Washing",
    description:
      "Infusing spirits with fats — butter, oil, bacon — at room temperature then freezing to separate. Silky texture without sweetness.",
  },
  {
    title: "Sous Vide",
    description:
      "Precise temperature control extracts aromas that would be destroyed at boiling. Every botanical at its perfect potential.",
  },
  {
    title: "Fermentation",
    description:
      "House-made shrubs, kefir sodas, and tepache. Living ingredients that add probiotics and unpredictable depth.",
  },
];

export default function LaboratoryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Doktori AI.jpeg"
            alt="The Laboratory"
            fill
            priority
            className="object-cover object-[center_10%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night/95 via-night/70 to-night/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <AnimatedSection direction="up" className="max-w-xl">
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-6">
              Craft · Science · Art
            </p>
            <h1 className="font-display font-light text-ivory leading-none mb-6"
              style={{ fontSize: "clamp(3.5rem, 13vw, 10rem)" }}>
              The<br />
              <em className="text-gold">Lab</em>
            </h1>
            <p className="font-sans text-sm text-ivory/60 leading-loose max-w-sm">
              Where curiosity has no closing time. Our bartenders are
              experimenters — perpetually questioning what a cocktail can be,
              chasing the moment when craft becomes something more.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-sans text-[10px] text-ivory/30 uppercase tracking-widest2">
              Explore
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-night py-24 md:py-36 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection direction="none" duration={1.2}>
            <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic text-ivory/85 leading-relaxed text-balance">
              &ldquo;A recipe is only the beginning. The laboratory is where we
              find out what a cocktail truly wants to become.&rdquo;
            </blockquote>
            <p className="font-sans text-xs text-gold/60 uppercase tracking-widest2 mt-8">
              — Seasons Head Bartender
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-night-2 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-4">
              Behind the Process
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-ivory">
              In Motion
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedSection direction="left" className="relative aspect-video overflow-hidden bg-night-3">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="/images/Doktori.jpeg"
              >
                <source src="/images/cooking process.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-night/20" />
              <div className="absolute bottom-6 left-6">
                <span className="font-sans text-[10px] tracking-widest2 uppercase text-gold/80">
                  The Process
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative aspect-video overflow-hidden bg-night-3">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="/images/CoolDoc.jpeg"
              >
                <source src="/images/labcook.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-night/20" />
              <div className="absolute bottom-6 left-6">
                <span className="font-sans text-[10px] tracking-widest2 uppercase text-gold/80">
                  Lab Sessions
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection
              direction="up"
              delay={0.1}
              className="relative aspect-video overflow-hidden bg-night-3 md:col-span-2"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="/images/stafff.jpeg"
              >
                <source src="/images/Doktori LAB.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-night/20" />
              <div className="absolute bottom-6 left-6">
                <span className="font-sans text-[10px] tracking-widest2 uppercase text-gold/80">
                  Laboratory
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TECHNIQUES */}
      <section className="bg-night py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-4">
              Our Methods
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-ivory">
              Techniques
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {techniques.map((tech, i) => (
              <AnimatedSection
                key={tech.title}
                delay={i * 0.1}
                className="bg-night p-7 sm:p-10 md:p-14 group"
              >
                <div className="w-8 h-px bg-gold/30 mb-8 group-hover:w-16 transition-all duration-500 ease-luxury" />
                <h3 className="font-display text-3xl font-light text-ivory mb-4">
                  {tech.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-loose">
                  {tech.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LAB COCKTAILS */}
      <section className="bg-night-2 py-24 md:py-36 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-4">
              Experimental Series
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-ivory">
              Lab Signatures
            </h2>
            <p className="font-sans text-sm text-muted mt-4 max-w-md mx-auto leading-relaxed">
              These cocktails exist at the edge of what is possible. Available
              in limited quantities each evening — ask your bartender.
            </p>
          </AnimatedSection>

          <div className="space-y-px bg-white/5">
            {labCocktails.map((cocktail, i) => (
              <AnimatedSection
                key={cocktail.name}
                delay={i * 0.12}
                className="group bg-night-2"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-0">
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[300px] overflow-hidden">
                    <Image
                      src={cocktail.image}
                      alt={cocktail.name}
                      fill
                      className={`object-cover ${cocktail.objectPosition} transition-transform duration-700 ease-luxury group-hover:scale-105`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-night/20" />
                  </div>

                  <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-display text-5xl sm:text-6xl font-light text-gold/15 leading-none">
                        {cocktail.number}
                      </span>
                    </div>
                    <p className="font-sans text-[10px] tracking-widest2 uppercase text-gold mb-2">
                      {cocktail.method}
                    </p>
                    <h3 className="font-display text-3xl sm:text-4xl font-light text-ivory mb-4">
                      {cocktail.name}
                    </h3>
                    <p className="font-sans text-sm text-muted leading-loose max-w-lg">
                      {cocktail.description}
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
                    <p className="font-sans text-[10px] tracking-widest2 uppercase text-ivory/30 mb-4">
                      Components
                    </p>
                    <ul className="space-y-2">
                      {cocktail.ingredients.map((ing) => (
                        <li
                          key={ing}
                          className="font-sans text-xs text-muted/80 flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-gold/40 mt-1.5 shrink-0" />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden flex items-center justify-center" style={{ aspectRatio: "21/9", minHeight: "48vh" }}>
        <Image
          src="/images/CoolDoc.jpeg"
          alt="Laboratory spirit"
          fill
          className="object-cover object-[center_15%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/80" />
        <AnimatedSection direction="none" className="relative z-10 text-center px-6">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic text-ivory/80 max-w-2xl mx-auto leading-relaxed text-balance">
            &ldquo;Curiosity is our most important ingredient.&rdquo;
          </p>
        </AnimatedSection>
      </section>
    </>
  );
}
