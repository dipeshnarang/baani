"use client";

import { useEffect, useRef, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { homeCarouselSlides } from "../constants/home-carousel.constant";
import CarouselImageComponent from "./carousel-image.component";
import CarouselTextOverlayComponent from "./carousel-text-overlay.component";
import CarouselIndicator from "./carousel-indicator.component";

export default function HeroCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [current, setCurrent] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % homeCarouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box className="p-2.5" ref={heroRef}>
      <Box className="relative h-[80vh] w-full overflow-hidden rounded-[1.25rem] bg-black">
        <AnimatePresence mode="sync">
          {homeCarouselSlides.map(
            (slide, index) =>
              index === current && (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ scale: heroScale, y: heroY }}
                  >
                    <CarouselImageComponent
                      src={slide.image}
                      alt={slide.title.map((item) => item.text).join(" ")}
                      priority={index === 0}
                    />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10"
                    style={{ opacity: overlayOpacity }}
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>

        <motion.div
          className="pointer-events-none absolute inset-0 z-20"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <CarouselTextOverlayComponent
            title={homeCarouselSlides[current].title}
            subtitle={homeCarouselSlides[current].subtitle}
          />
        </motion.div>

        {!isMobile && (
          <motion.div
            className="absolute inset-0 z-30"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <CarouselIndicator
              currentIndex={current}
              total={homeCarouselSlides.length}
              onChange={setCurrent}
            />
          </motion.div>
        )}
      </Box>
    </Box>
  );
}
