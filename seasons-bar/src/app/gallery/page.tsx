"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const images = [
  // Portrait cocktail — tall glass, full composition
  { src: "/images/cocktailbest.jpeg", alt: "Signature cocktail", aspectRatio: "3/4", objectPosition: "object-[center_20%]" },
  // Frosted glass close-up — more square or portrait
  { src: "/images/tabaka cool.jpeg", alt: "Frosted coupe glass", aspectRatio: "4/5", objectPosition: "object-center" },
  // Interior — landscape, let it breathe wide
  { src: "/images/ambienti.jpg", alt: "Bar ambience", aspectRatio: "16/9", objectPosition: "object-[center_45%]" },
  // Person portrait — tall, face at top
  { src: "/images/Doktori.jpeg", alt: "Bartender at work", aspectRatio: "2/3", objectPosition: "object-top" },
  // Cocktail presentation — portrait, glass centered
  { src: "/images/tabaka.jpeg", alt: "Cocktail presentation", aspectRatio: "3/4", objectPosition: "object-center" },
  // Group photo — wide landscape, faces visible
  { src: "/images/staff.jpg", alt: "The Seasons team", aspectRatio: "16/9", objectPosition: "object-[center_20%]" },
  // Bar detail — portrait or square
  { src: "/images/nicepic.jpeg", alt: "Bar detail", aspectRatio: "4/5", objectPosition: "object-[center_40%]" },
  // Bartender portrait — tall, face visible
  { src: "/images/CoolDoc.jpeg", alt: "Bartender craft", aspectRatio: "2/3", objectPosition: "object-[center_15%]" },
  // Black and white bar — landscape scene
  { src: "/images/blackandwhitepic.jpeg", alt: "The bar", aspectRatio: "4/3", objectPosition: "object-center" },
  // Cocktail moment — portrait
  { src: "/images/superpic.jpeg", alt: "Cocktail moment", aspectRatio: "3/4", objectPosition: "object-[center_30%]" },
  // Beautiful shot — portrait
  { src: "/images/fotobukur.jpeg", alt: "Beautiful shot", aspectRatio: "3/4", objectPosition: "object-center" },
  // Bartender in action — portrait, upper body
  { src: "/images/stafff.jpeg", alt: "Bartender focus", aspectRatio: "3/4", objectPosition: "object-[center_15%]" },
  // Cocktail craft — portrait glass
  { src: "/images/cocktail2.jpeg", alt: "Cocktail craft", aspectRatio: "4/5", objectPosition: "object-center" },
  // Seasonal cocktail — portrait
  { src: "/images/cocktail3.jpeg", alt: "Seasonal cocktail", aspectRatio: "3/4", objectPosition: "object-[center_25%]" },
  // Mixing technique — square or landscape action
  { src: "/images/mix.jpeg", alt: "Mixing technique", aspectRatio: "4/3", objectPosition: "object-[center_35%]" },
  // Bartender mixing — landscape action shot
  { src: "/images/mixing.jpeg", alt: "Bartender mixing", aspectRatio: "16/9", objectPosition: "object-[center_30%]" },
  // Gin bottle — portrait, tall
  { src: "/images/gin.jpeg", alt: "Gin selection", aspectRatio: "3/4", objectPosition: "object-center" },
  // Cocktail detail — portrait
  { src: "/images/cocktail5.jpeg", alt: "Cocktail detail", aspectRatio: "4/5", objectPosition: "object-center" },
  // AI art portrait — full portrait, face at top
  { src: "/images/Doktori AI.jpeg", alt: "Art of mixology", aspectRatio: "2/3", objectPosition: "object-[center_10%]" },
  // Evening cocktail — portrait glass
  { src: "/images/cocktail6.jpeg", alt: "Evening cocktail", aspectRatio: "4/5", objectPosition: "object-[center_20%]" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fotobukur.jpeg"
            alt="Seasons Gallery"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <AnimatedSection direction="up">
            <p className="font-sans text-xs tracking-widest3 text-gold uppercase mb-4">
              Moments
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light text-ivory leading-none">
              Gallery
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-night py-12 sm:py-16 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection direction="none">
            <p className="font-display text-lg sm:text-xl md:text-2xl font-light italic text-ivory/70 leading-relaxed text-balance">
              &ldquo;Every image is a fragment of the Seasons experience —
              the light, the craft, the people, the night.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="bg-night py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3">
            {images.map((img, i) => (
              <AnimatedSection
                key={img.src + i}
                delay={(i % 4) * 0.06}
                direction="none"
                duration={0.7}
                className="break-inside-avoid mb-2 md:mb-3"
              >
                <div
                  className="relative overflow-hidden cursor-pointer group"
                  style={{ aspectRatio: img.aspectRatio }}
                  onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={`object-cover ${img.objectPosition} transition-transform duration-700 ease-luxury group-hover:scale-105`}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-night/0 group-hover:bg-night/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="w-8 h-8 border border-ivory/60 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-ivory"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-night/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
              className="relative max-w-4xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[75vh]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 95vw, 80vw"
                />
              </div>
            </motion.div>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 font-sans text-xs tracking-widest2 uppercase text-ivory/60 hover:text-ivory transition-colors duration-300 flex items-center gap-2 min-w-[44px] min-h-[44px] justify-end"
            >
              Close
              <span className="w-6 h-px bg-current" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
