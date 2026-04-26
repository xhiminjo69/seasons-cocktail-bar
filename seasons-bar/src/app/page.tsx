"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const featuredCocktails = [
  {
    name: "Aegean Drift",
    type: "Gin · Elderflower · Sea Salt",
    description:
      "Inspired by the clarity of Adriatic waters. Light, botanical, ethereal.",
    image: "/images/cocktail10.jpeg",
    position: "object-center",
    aspectRatio: "aspect-[3/4]",
  },
  {
    name: "Golden Hour",
    type: "Aperol · Prosecco · Blood Orange",
    description:
      "A sunset poured into glass. Effervescent, warm, unforgettable.",
    image: "/images/cocktail8.jpeg",
    position: "object-[center_30%]",
    aspectRatio: "aspect-[4/5]",
  },
  {
    name: "Vlora Nights",
    type: "Mezcal · Blackberry · Agave",
    description:
      "Dark as a Mediterranean night. Smoky depth, sweet intrigue.",
    image: "/images/cocktails19.jpeg",
    position: "object-[center_55%]",
    aspectRatio: "aspect-[3/4]",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ y: heroY }}
        >
          <Image
            src="/images/superpic.jpeg"
            alt="Seasons Cocktail Bar"
            fill
            priority
            className="object-cover object-[center_55%]"
            sizes="100vw"
          />
          {/* Top vignette — keeps nav area readable, fades out before reaching the cocktail */}
          <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/10 to-transparent" />
          {/* Bottom fade — grounds the section */}
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0, 1] }}
            className="font-sans text-[10px] sm:text-xs text-gold uppercase tracking-widest2 sm:tracking-widest3 mb-8"
          >
            Cocktail Bar · Lungomare, Vlorë
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.25, 0.1, 0, 1],
              }}
              className="font-display font-light text-ivory leading-none uppercase tracking-wider sm:tracking-widest2 text-shadow-md"
              style={{ fontSize: "clamp(3rem, 13vw, 14rem)" }}
            >
              Seasons
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="font-display text-lg sm:text-xl md:text-2xl font-light italic text-champagne/90 text-shadow-sm"
          >
            Where every sip tells a story
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] text-ivory/50 uppercase tracking-widest2">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-night border-t border-white/5 py-16 sm:py-32 md:py-48">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection direction="none" duration={1.2}>
            <div className="w-8 h-px bg-gold/30 mx-auto mb-10" />
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-12">
              Our Philosophy
            </p>
            <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic text-ivory/90 leading-relaxed text-balance">
              &ldquo;Born from the sea breeze and the warmth of Mediterranean
              nights — Seasons is more than a bar. It is an experience crafted
              for those who believe a great cocktail is a work of art.&rdquo;
            </blockquote>
            <div className="w-16 h-px bg-gold/40 mx-auto mt-14" />
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURED COCKTAILS */}
      <section className="bg-night-2 border-t border-white/5 py-14 sm:py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14 sm:mb-24">
            <div className="w-8 h-px bg-gold/20 mx-auto mb-10" />
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-5">
              Crafted for You
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-ivory tracking-wide">
              Signature Pours
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {featuredCocktails.map((cocktail, i) => (
              <AnimatedSection
                key={cocktail.name}
                delay={i * 0.15}
                direction="up"
                className="group relative bg-night-2 overflow-hidden"
              >
                <div className={`relative ${cocktail.aspectRatio} overflow-hidden`}>
                  <Image
                    src={cocktail.image}
                    alt={cocktail.name}
                    fill
                    className={`object-cover ${cocktail.position} transition-transform duration-700 ease-luxury group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-2 via-night-2/10 to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-sans text-[10px] tracking-widest2 uppercase text-gold mb-2">
                    {cocktail.type}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-light text-ivory mb-3">
                    {cocktail.name}
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {cocktail.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14 sm:mt-24" delay={0.3}>
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest2 uppercase text-ivory/70 hover:text-gold transition-colors duration-300 group"
            >
              <span>Explore the Full Menu</span>
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* AMBIENCE SPLIT */}
      <section className="bg-night border-t border-white/5 grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <AnimatedSection
          direction="left"
          className="relative min-h-[65vh] md:min-h-full overflow-hidden"
        >
          <Image
            src="/images/ambienti.jpg"
            alt="Seasons Bar Ambience"
            fill
            className="object-cover object-[center_45%]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-night/15" />
        </AnimatedSection>
        <AnimatedSection
          direction="right"
          className="flex flex-col justify-center px-6 sm:px-10 md:px-16 py-20 sm:py-28 md:py-24 bg-night-2"
        >
          <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-6">
            The Space
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-ivory leading-[1.15] mb-6">
            An open-air <em>sanctuary</em> by the sea
          </h2>
          <p className="font-sans text-sm text-muted leading-loose max-w-sm mb-8 sm:mb-10">
            Our terrace opens directly onto the Lungomare promenade, where the
            Adriatic breeze carries the scent of sea salt and citrus. The space
            breathes — warm lights, lush greenery, the distant sound of waves.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-widest2 uppercase text-ivory/70 hover:text-gold transition-colors duration-300 group w-fit"
          >
            <span>View Gallery</span>
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </Link>
        </AnimatedSection>
      </section>

      {/* LABORATORY TEASER */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/nicepic.jpeg"
            alt="The Laboratory — bottles, bitters, and precision"
            fill
            className="object-cover object-[45%_58%]"
            sizes="100vw"
          />
          {/* Radial vignette — darker at edges, barely-there at subject center */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 85% 75% at 45% 58%, rgba(13,13,31,0.12) 0%, rgba(13,13,31,0.55) 100%)",
            }}
          />
          {/* Top fade — full coverage on mobile to blend from previous section, navbar-only on desktop */}
          <div className="absolute inset-x-0 top-0 h-[48%] md:h-[35%] bg-gradient-to-b from-night via-night/35 to-transparent md:from-night/50 md:via-transparent" />
          {/* Bottom fade — section transition */}
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-night to-transparent" />
        </div>

        <AnimatedSection
          direction="none"
          duration={1.2}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        >
          <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-5">
            Behind the Bar
          </p>

          {/* Vertical gold rule — editorial accent */}
          <div className="w-px h-10 bg-gold/40 mx-auto mb-7" />

          <h2
            className="font-display font-light text-ivory leading-[0.95] mb-7"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
          >
            The<br />
            <em>Laboratory</em>
          </h2>

          {/* Horizontal gold rule */}
          <div className="w-14 h-px bg-gold/40 mx-auto mb-8" />

          <p className="font-sans text-sm text-ivory/90 leading-loose mb-12 max-w-sm mx-auto text-shadow-sm">
            Where curiosity meets craft. Our bartenders push boundaries through
            seasonal ingredients, precision techniques, and unexpected textures.
            Every signature cocktail begins as an experiment in pleasure.
          </p>

          <Link
            href="/laboratory"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-widest2 uppercase text-gold hover:text-gold-hover transition-colors duration-300 group"
          >
            <span>Enter the Lab</span>
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </Link>
        </AnimatedSection>
      </section>

      {/* TEAM TEASER */}
      <section className="bg-night overflow-hidden pt-14 sm:pt-20 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[80vh]">

          {/* Text column */}
          <AnimatedSection
            direction="right"
            className="flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-28 md:py-0 order-2 md:order-1"
          >
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-6">
              The Team
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-ivory leading-tight mb-6">
              Passion in<br />
              every pour
            </h2>
            <p className="font-sans text-sm text-muted leading-loose mb-10 max-w-sm">
              Our team lives and breathes craft. Each bartender brings their
              own story, technique, and obsession to the bar — united by a
              shared love for the art of the cocktail.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest2 uppercase text-ivory/70 hover:text-gold transition-colors duration-300 group w-fit"
            >
              <span>Meet the Team</span>
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </AnimatedSection>

          {/* Full-bleed team image */}
          <AnimatedSection
            direction="left"
            className="relative h-[65vh] md:h-auto md:aspect-auto overflow-hidden order-1 md:order-2"
          >
            <Image
              src="/images/staff.jpg"
              alt="The Seasons Team"
              fill
              /* Mobile: 32% centres faces in tall crop; desktop: 22% for wide cinematic frame */
              className="object-cover object-[center_32%] md:object-[center_22%] transition-transform duration-1000 ease-luxury hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Left-side blend into text column */}
            <div className="absolute inset-0 bg-gradient-to-r from-night/30 via-transparent to-transparent" />
            {/* Mobile: top fade — image emerges from the dark chapter break above */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-night to-transparent md:hidden" />
            {/* Mobile bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent md:hidden" />
          </AnimatedSection>

        </div>
      </section>

      {/* BOTTOM CTA STRIP */}
      <section className="bg-night-2 border-t border-white/10 py-16 sm:py-36">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection direction="none" duration={1}>
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-4">
              Come Find Us
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-ivory mb-6">
              Lungomare, Vlorë
            </h2>
            <p className="font-sans text-sm text-muted mb-10">
              Open every evening from 17:00
            </p>
            <Link
              href="/find-us"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest2 uppercase text-ivory/70 hover:text-gold transition-colors duration-300 group"
            >
              <span>Get Directions</span>
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
