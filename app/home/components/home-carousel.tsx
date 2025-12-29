"use client";

import { useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { homeCarouselSlides } from "../constants/home-carousel.constant";
import CarouselImageComponent from "./carousel-image.component";
import CarouselTextOverlayComponent from "./carousel-text-overlay.component";
import CarouselIndicator from "./carousel-indicator.component";

export default function HeroCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % homeCarouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box className="p-0">
      <Box className="relative h-[80vh] w-full overflow-hidden">
        {homeCarouselSlides.map((slide, index) => (
          <Box
            key={index}
            className="absolute inset-0 transition-opacity duration-800"
            sx={{
              opacity: index === current ? 1 : 0,
            }}
          >
            <CarouselImageComponent
              src={slide.image}
              alt={slide.title.join(" ")}
              priority={index === 0}
            />

            <Box className="absolute inset-0 bg-gradient-to-r from-black/55 to-black/15" />
          </Box>
        ))}

        <CarouselTextOverlayComponent
          title={homeCarouselSlides[current].title}
          subtitle={homeCarouselSlides[current].subtitle}
        />
        {!isMobile && (
          <CarouselIndicator
            currentIndex={current}
            total={homeCarouselSlides.length}
            onChange={setCurrent}
          />
        )}
      </Box>
    </Box>
  );
}
