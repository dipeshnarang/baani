"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { STATS_SECTION } from "@/home/constants/home-carousel.constant";

const COUNT_DURATION = 2000;

/* ---------------- Helpers ---------------- */
const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const lerpColor = (from: number, to: number, progress: number) =>
  Math.round(from + (to - from) * progress);

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  /* ---------- Scroll progress for TEXT ---------- */
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ---------- Number animation (unchanged) ---------- */
  const [numbersVisible, setNumbersVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(
    STATS_SECTION.stats.map(() => 0)
  );

  /* ---------- Scroll listener (TEXT ONLY) ---------- */
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = clamp((viewportHeight - rect.top) / rect.height);

      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- IntersectionObserver for NUMBERS ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNumbersVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------- Number count animation (unchanged) ---------- */
  useEffect(() => {
    if (!numbersVisible) return;

    STATS_SECTION.stats.forEach((stat, index) => {
      const start = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - start) / COUNT_DURATION, 1);

        const value = Math.floor(progress * stat.value);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = value;
          return updated;
        });

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, [numbersVisible]);

  /* ---------- Word animation ---------- */
  const renderAnimatedText = (
    text: string,
    variant: string,
    phaseStart: number,
    phaseEnd: number
  ) => {
    const words = text.split(" ");
    const phaseProgress = clamp(
      (scrollProgress - phaseStart) / (phaseEnd - phaseStart)
    );

    return words.map((word, index) => {
      const wordStart = index / words.length;
      const wordEnd = (index + 1) / words.length;

      const wordProgress = clamp(
        (phaseProgress - wordStart) / (wordEnd - wordStart)
      );

      const color = lerpColor(209, 17, wordProgress);

      return (
        <Box
          key={index}
          component="span"
          className="mr-1 inline-block"
          style={{
            color: `rgb(${color}, ${color}, ${color})`,
          }}
        >
          <Typography component="span" variant={variant as any}>
            {word}
          </Typography>
        </Box>
      );
    });
  };

  return (
    <Box
      ref={sectionRef}
      className="mx-auto max-w-5xl px-6 py-20 flex flex-col gap-16 bg-white"
    >
      {/* ---------- TEXT ---------- */}
      <Box className="flex flex-col gap-8 items-center text-center">
        <Box className="font-serif text-4xl italic leading-tight">
          {renderAnimatedText(
            STATS_SECTION.header,
            "DmSerifH1",
            0,
            0.5 // HEADER FIRST
          )}
        </Box>

        <Box className="max-w-3xl text-sm leading-relaxed">
          {renderAnimatedText(
            STATS_SECTION.description,
            "infoText",
            0.5,
            1 // DESCRIPTION AFTER HEADER
          )}
        </Box>
      </Box>

      {/* ---------- STATS ---------- */}
      <Box
        ref={statsRef}
        className="grid grid-cols-2 gap-x-16 gap-y-20 bg-white"
      >
        {STATS_SECTION.stats.map((stat, index) => (
          <Box key={index} className="flex flex-col items-center">
            <Box className="mb-6 h-px w-full bg-gray-200" />

            <Typography variant="numeric01" color="black">
              {counts[index]}
            </Typography>

            <Typography variant="subtitle1" className="mt-1 px-1 text-gray-700">
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
