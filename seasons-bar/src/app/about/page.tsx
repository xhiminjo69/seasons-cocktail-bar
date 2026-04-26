"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const teamMembers = [
  {
    name: "Doctor Barman",
    role: "Head Bartender & Creative Director",
    image: "/images/Doktori.jpeg",
    quote: "Every cocktail is a sentence in a story only you can finish.",
    objectPosition: "object-top",
    aspectRatio: "aspect-[3/4]",
  },
  {
    name: "The Team",
    role: "Seasons Bar Family",
    image: "/images/stafff.jpeg",
    quote: "We pour passion into everything we create.",
    objectPosition: "object-[center_15%]",
    aspectRatio: "aspect-[3/4]",
  },
  {
    name: "Behind the Bar",
    role: "Where the magic happens",
    image: "/images/blackandwhitepic.jpeg",
    quote: "Precision, creativity, and soul — in that order.",
    objectPosition: "object-center",
    aspectRatio: "aspect-[4/5]",
  },
];

const values = [
  {
    number: "01",
    title: "Craft",
    description:
      "Every cocktail is built with intention. We source thoughtfully, measure precisely, and present beautifully.",
    image: "/images/cocktails13.jpeg",
  },
  {
    number: "02",
    title: "Seasonality",
    description:
      "Our menu breathes with the seasons. What grows in Albania's Mediterranean soil shapes what pours into your glass.",
    image: "/images/cocktailbest.jpeg",
  },
  {
    number: "03",
    title: "Experience",
    description:
      "We believe a great bar is about more than drinks. It is atmosphere, conversation, memory, and the feeling that lingers.",
    image: "/images/fotorandom.jpeg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ambienti.jpg"
            alt="Seasons Bar — Ambience"
            fill
            priority
            className="object-cover object-[center_45%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 sm:pb-20 w-full">
          <AnimatedSection direction="up">
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-4 text-shadow-sm">
              About Us
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light text-ivory leading-none text-shadow-md">
              Our Story
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-night py-16 sm:py-28 md:py-44">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-display text-4xl sm:text-5xl font-light text-ivory leading-tight mb-8">
                Where the sea<br />
                <em className="text-gold">meets craft</em>
              </h2>
              <div className="space-y-5 font-sans text-sm text-muted leading-loose">
                <p>
                  Seasons was born from a simple belief: that the best cocktails
                  are inseparable from their place. Perched on the Lungomare
                  promenade of Vlorë, with the Adriatic as our backdrop, we set
                  out to create something that felt as natural as the landscape
                  around us.
                </p>
                <p>
                  The name Seasons is not incidental. Everything here changes —
                  the menu, the mood, the light — in rhythm with the year. We
                  follow what grows, what blooms, what ripens. We work with local
                  producers, forage when we can, and distill our surroundings into
                  every glass.
                </p>
                <p>
                  What stays constant is the care. Our team has built something
                  special here — a place that feels alive, welcoming, and charged
                  with the energy of people who genuinely love what they do.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/cocktails18.jpeg"
                  alt="Seasons Bar"
                  fill
                  className="object-cover object-[center_40%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-night/5" />
              </div>
              {/* On mobile: positioned inside the image; on md+: decorative bleed outside */}
              <div className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-night-2 border border-white/5 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-display text-5xl text-gold font-light">
                    &apos;21
                  </span>
                  <p className="font-sans text-[10px] tracking-widest2 uppercase text-muted mt-1">
                    Est.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-night-2 py-14 sm:py-28 md:py-40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16 sm:mb-28">
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-ivory">
              Our Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {values.map((value, i) => (
              <AnimatedSection
                key={value.number}
                delay={i * 0.15}
              >
                <div className="mb-8">
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="border-t border-gold/20 pt-8">
                  <span className="font-display text-7xl font-light text-gold/20 block mb-4 leading-none">
                    {value.number}
                  </span>
                  <h3 className="font-display text-3xl font-light text-ivory mb-4">
                    {value.title}
                  </h3>
                  <p className="font-sans text-sm text-muted leading-loose">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-night py-14 sm:py-28 md:py-40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16 sm:mb-24">
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-4">
              The People
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-ivory">
              Meet the Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <AnimatedSection
                key={member.name}
                delay={i * 0.15}
                className="group"
              >
                <div className={`relative ${member.aspectRatio} overflow-hidden mb-6`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.objectPosition} transition-transform duration-700 ease-luxury group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-sans text-[10px] tracking-widest2 uppercase text-gold mb-1">
                      {member.role}
                    </p>
                    <h3 className="font-display text-2xl font-light text-ivory">
                      {member.name}
                    </h3>
                  </div>
                </div>
                <blockquote className="font-display text-lg font-light italic text-ivory/75">
                  &ldquo;{member.quote}&rdquo;
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LARGE TEAM PHOTO
          Mobile: explicit h-[65vh] overrides the 21/9 aspect-ratio so the section is
          tall enough to show the team properly. Desktop: h-auto restores the cinematic crop. */}
      <section
        className="relative overflow-hidden h-[65vh] md:h-auto border-t border-white/5"
        style={{ aspectRatio: "21/9" }}
      >
        <Image
          src="/images/staff.jpg"
          alt="The Seasons Family"
          fill
          /* Mobile: 40% down centres the team faces + raised hands.
             Desktop: 25% keeps the wide cinematic composition. */
          className="object-cover object-[center_40%] md:object-[center_25%]"
          sizes="100vw"
        />
        {/* Top fade — blends from bg-night team section */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-night to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/15 to-transparent" />
        <AnimatedSection
          direction="none"
          className="absolute inset-0 flex items-end justify-center pb-14 sm:pb-20"
        >
          <div className="text-center px-6">
            <div className="w-8 h-px bg-gold/30 mx-auto mb-6" />
            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-light italic text-ivory/90 text-balance">
              One team. One craft. One experience.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
