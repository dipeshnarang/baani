"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

interface HeroBusinessSectionProps {
  backgroundImage: string;
  buildingImage: string;
  titleItalic: string;
  titleNormal: string;
}

export default function HeroBusinessSection({
  backgroundImage,
  buildingImage,
  titleItalic,
  titleNormal,
}: HeroBusinessSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  /* ---------- Parallax ---------- */
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // subtle, clamped parallax
  const parallaxOffset = Math.min(scrollY * 0.12, 80);

  return (
    <Box
      className="relative w-full overflow-hidden"
      sx={{
        height: "80vh", // fixed hero height
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box className="absolute inset-0 bg-black/10 z-0" />

      {/* Text */}
      <Box className="relative z-10 flex flex-col items-center pt-40 text-center px-6">
        <Typography
          variant="h1"
          className="font-serif italic text-white"
          sx={{ fontSize: { xs: "2.4rem", md: "4rem" } }}
        >
          {titleItalic}
        </Typography>

        <Typography
          variant="h1"
          className="mt-4 text-white"
          sx={{ fontSize: { xs: "2.6rem", md: "4.5rem" } }}
        >
          {titleNormal}
        </Typography>
      </Box>

      {/* Building crop window */}
      <Box
        className="
          absolute
          left-0
          top-30
          w-full
          overflow-hidden
        "
        sx={{
          height: "80vh", // fixed crop height
        }}
      >
        <img
          src={buildingImage}
          alt="Building"
          className="h-full w-full object-cover"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            transition: "transform 0.05s linear",
          }}
        />
      </Box>
    </Box>
  );
}
