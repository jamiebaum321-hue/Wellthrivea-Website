"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { CarouselNavigator } from "@/components/watermelon-ui/carousel-navigator";

const SLIDES = [
  {
    src: "/img/hero-building.jpg",
    alt: "Concept rendering of the new Wellthrivea Urgent Care building at dusk with green and blue lighting",
    caption: "A brand-new building, designed for Canarsie",
  },
  {
    src: "/img/lobby.jpg",
    alt: "Bright modern urgent care lobby with digital self-check-in kiosks and a living plant wall",
    caption: "A welcome lobby with digital self check-in",
  },
  {
    src: "/img/exam-room.jpg",
    alt: "Smart exam room with a wall-mounted health dashboard display and green accent wall",
    caption: "Smart exam rooms that keep you in the loop",
  },
  {
    src: "/img/telehealth.jpg",
    alt: "A woman at home having a telehealth video visit with a clinician on a tablet",
    caption: "Telehealth-ready follow-up care",
  },
];

const AUTO_DELAY = 6000;

const THEMES = [
  { bg: "bg-[#e5f2fb]", button: "bg-brand-navy", dot: "bg-sky-300", progress: "bg-brand-blue" },
  { bg: "bg-[#e9f6e3]", button: "bg-brand-green", dot: "bg-green-300", progress: "bg-brand-green" },
  { bg: "bg-[#e5f2fb]", button: "bg-brand-blue", dot: "bg-sky-300", progress: "bg-brand-blue" },
  { bg: "bg-[#fdf1dc]", button: "bg-brand-orange", dot: "bg-amber-300", progress: "bg-brand-orange" },
];

/** Facility tour built on the watermelon "carousel-navigator" module. */
export function FacilityCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      AUTO_DELAY
    );
    return () => clearTimeout(t);
  }, [index]);

  const slide = SLIDES[index];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border shadow-xl">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.src}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/80 to-transparent p-6 pt-16">
              <p className="font-heading text-lg font-bold text-white drop-shadow">
                {slide.caption}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <CarouselNavigator
        totalSlides={SLIDES.length}
        autoDelay={AUTO_DELAY}
        themes={THEMES}
        currentIndex={index}
        onIndexChange={setIndex}
      />
    </div>
  );
}
