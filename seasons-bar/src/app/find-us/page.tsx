"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const hours = [
  { days: "Monday — Thursday", time: "17:00 — 01:00" },
  { days: "Friday", time: "17:00 — 03:00" },
  { days: "Saturday", time: "16:00 — 03:00" },
  { days: "Sunday", time: "16:00 — 01:00" },
];

const socials = [
  { label: "Instagram", handle: "@seasons.cocktail.bar", href: "https://www.instagram.com/seasons.cocktail.bar/" },
];

export default function FindUsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blackandwhitepic.jpeg"
            alt="Find Seasons Bar"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <AnimatedSection direction="up">
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-4">
              Location
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light text-ivory leading-none">
              Find Us
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* INFO + MAP */}
      <section className="bg-night py-0 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          {/* Info Panel */}
          <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-20 sm:py-28 bg-night-2 order-2 lg:order-1">
            <AnimatedSection direction="left">
              {/* Address */}
              <div className="mb-14">
                <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-5">
                  Address
                </p>
                <address className="not-italic font-display text-2xl sm:text-3xl md:text-4xl font-light text-ivory leading-snug">
                  Lungomare<br />
                  Vlorë, Albania
                </address>
                <p className="font-sans text-sm text-muted mt-4">
                  On the seafront promenade, steps from the Adriatic
                </p>
                <a
                  href="https://share.google/JPRcTbHRethFFcEyg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 font-sans text-xs tracking-widest2 uppercase text-gold hover:text-ivory transition-colors duration-300"
                >
                  <span>Get Directions</span>
                  <span className="text-base leading-none">↗</span>
                </a>
              </div>

              {/* Hours */}
              <div className="mb-14">
                <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-5">
                  Opening Hours
                </p>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex justify-between items-baseline gap-3 sm:gap-6 border-b border-white/5 pb-3"
                    >
                      <span className="font-sans text-sm text-ivory/70">{h.days}</span>
                      <span className="font-display text-base sm:text-lg font-light text-ivory/90 shrink-0 tabular-nums">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-5">
                  Follow Us
                </p>
                <div className="space-y-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <span className="font-sans text-[10px] tracking-widest2 uppercase text-muted/60 w-20">
                        {s.label}
                      </span>
                      <span className="font-display text-xl font-light text-ivory/80 group-hover:text-gold transition-colors duration-300">
                        {s.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection
            direction="right"
            className="relative min-h-[50vh] lg:min-h-full order-1 lg:order-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1518.2521360843964!2d19.49561609325407!3d40.44197461194943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1345334c8bb7048f%3A0x777d45673c56ac17!2sSeasons%20Cocktail%20Bar!5e0!3m2!1sen!2s!4v1776955207823!5m2!1sen!2s"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Seasons Cocktail Bar — Location"
            />
            <a
              href="https://share.google/JPRcTbHRethFFcEyg"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-10 bg-night/80 backdrop-blur-sm border border-gold/30 px-4 py-2 font-sans text-[10px] tracking-widest2 uppercase text-gold hover:bg-gold hover:text-night transition-all duration-300"
            >
              Open in Google Maps ↗
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW TO FIND US */}
      <section className="bg-night py-28 sm:py-40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16 sm:mb-20">
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-4">
              Getting Here
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-ivory">
              How to Find Us
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                icon: "◉",
                title: "On Foot",
                text: "Walk along the Lungomare promenade heading south from the city centre. We are on the right side, directly facing the sea.",
              },
              {
                icon: "◎",
                title: "By Car",
                text: "Follow Rruga Lungomare. Parking is available along the promenade. Look for the warm light and the sound of good music.",
              },
              {
                icon: "◯",
                title: "Landmarks",
                text: "We are near the central stretch of the seafront. The Seasons logo is visible from the promenade path.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <span className="font-display text-4xl text-gold/30 block mb-4">{item.icon}</span>
                <h3 className="font-display text-2xl font-light text-ivory mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-muted leading-loose">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENCE STRIP */}
      <section
        className="relative overflow-hidden h-[55vh] md:h-auto border-t border-white/5"
        style={{ aspectRatio: "21/9" }}
      >
        <Image
          src="/images/ambienti.jpg"
          alt="Seasons — Come visit us"
          fill
          className="object-cover object-[center_45%]"
          sizes="100vw"
        />
        {/* Top fade from bg-night directions section */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-night to-transparent" />
        <div className="absolute inset-0 bg-night/65" />
        <AnimatedSection
          direction="none"
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-6"
        >
          <div className="w-8 h-px bg-gold/30" />
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold">
            Open every evening
          </p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light italic text-ivory text-balance">
            We&rsquo;ll see you tonight
          </h2>
        </AnimatedSection>
      </section>
    </>
  );
}
