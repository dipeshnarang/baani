"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { STATS_SECTION } from "@/app/home/constants/home-carousel.constant";

const COUNT_DURATION = 2000; // ms

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(
    STATS_SECTION.stats.map(() => 0)
  );

  /* ---------- Intersection Observer ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------- Count-up Animation ---------- */
  useEffect(() => {
    if (!visible) return;

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
  }, [visible]);

  /* ---------- Word-by-word Animation ---------- */
  const renderAnimatedText = (
    text: string,
    textVariant: string,
    baseDelay = 0
  ) =>
    text.split(" ").map((word, index) => (
      <Box
        key={index}
        component="span"
        className={`inline-block mr-1 transition-all duration-1500 ease-out ${
          visible
            ? "text-black opacity-100 translate-y-0"
            : "text-gray-300 opacity-50 translate-y-2"
        }`}
        style={{
          transitionDelay: `${baseDelay + index * 60}ms`,
        }}
      >
        <Typography variant={textVariant as any}>{word}</Typography>
      </Box>
    ));

  return (
    <Box
      ref={sectionRef}
      className="mx-auto max-w-5xl px-6 py-20 flex flex-col gap-8"
    >
      <Box className="flex flex-col gap-4 items-center">
        <Box className="mb-8 text-center font-serif text-4xl italic leading-tight">
          {renderAnimatedText(STATS_SECTION.header, "h1")}
        </Box>

        <Box className="mx-auto mb-20 max-w-3xl text-center text-sm leading-relaxed">
          {renderAnimatedText(STATS_SECTION.description, "body1", 600)}
        </Box>
      </Box>

      <Box className="grid grid-cols-2 gap-x-16 gap-y-20 py-6">
        {STATS_SECTION.stats.map((stat, index) => (
          <Box key={index}>
            <Box className="mb-6 h-px w-full bg-gray-200" />

            <Typography
              variant="numeric01"
              className={`font-light transition-colors duration-700 ${
                visible ? "text-black" : "text-gray-300"
              }`}
            >
              {counts[index]}
            </Typography>

            <Typography
              variant="subtitle1"
              className={`mt-1 px-1 transition-colors duration-700 ${
                visible ? "text-gray-700" : "text-gray-300"
              }`}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
