"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

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
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const imageRef = useRef<HTMLImageElement | null>(null);

  /* ---------- Scroll Parallax ---------- */
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollOffset = Math.min(scrollY * 0.12, 80);

  /* ---------- Pointer Tilt ---------- */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -12.5;
    const rotateY = (x / rect.width - 0.5) * 12.5;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <Box
      className="relative w-full overflow-hidden"
      sx={{
        height: "80vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box className="absolute inset-0 bg-black/10 z-0" />

      {/* TEXT — collision-controlled */}
      <Box
        className="absolute z-20 w-full text-center px-6"
        sx={{
          top: "clamp(18vh, 22vh, 26vh)", // 👈 THIS is the key
        }}
      >
        <Typography
          variant="h1"
          className="font-serif italic text-white"
          sx={{ fontSize: { xs: "2.4rem", md: "4rem" } }}
        >
          {titleItalic}
        </Typography>

        <Typography
          variant="h1"
          className="mt-3 text-white"
          sx={{ fontSize: { xs: "2.6rem", md: "4.5rem" } }}
        >
          {titleNormal}
        </Typography>
      </Box>

      {/* BUILDING IMAGE */}
      <Box
        className="absolute inset-0 z-10 pt-50 overflow-hidden"
        sx={{ perspective: "1200px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          src={buildingImage}
          alt="Building"
          className="h-full w-full  object-cover"
          style={{
            transform: `
              scale(1.08)
              translateY(${scrollOffset}px)
              rotateX(${tilt.x}deg)
              rotateY(${tilt.y}deg)
            `,
            transition: "transform 0.18s ease-out",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
      </Box>
    </Box>
  );
}
