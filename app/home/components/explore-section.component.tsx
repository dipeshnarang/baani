"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExploreCard from "./explore-card.component";
import { EXPLORE_SECTION } from "../constants/home-carousel.constant";

export default function ExploreSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const overflow = el.scrollWidth > el.clientWidth;

    setHasOverflow(overflow);
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollState();

    const el = scrollRef.current;
    el?.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el?.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <Box className="mx-auto px-6 pb-14">
      <Box className="mb-12 text-center">
        <Typography variant="h1">{EXPLORE_SECTION.header}</Typography>
        <Typography variant="h1" className="font-serif italic text-yellow-500">
          {EXPLORE_SECTION.subHeader}
        </Typography>
      </Box>
      <Box className="relative flex justify-center">
        {hasOverflow && (
          <Box className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2">
            <IconButton
              onClick={() => scrollByAmount("left")}
              disabled={!canScrollLeft}
              className="pointer-events-auto bg-white/90 shadow-md backdrop-blur disabled:opacity-100"
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={() => scrollByAmount("right")}
              disabled={!canScrollRight}
              className="pointer-events-auto bg-white/90 shadow-md backdrop-blur disabled:opacity-100"
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        )}

        <Box
          ref={scrollRef}
          className="flex gap-10 overflow-x-scroll py-2 scroll-smooth scrollbar-hide w-full justify-center"
          sx={{
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {EXPLORE_SECTION.items.map((item, index) => (
            <ExploreCard key={index} {...item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
