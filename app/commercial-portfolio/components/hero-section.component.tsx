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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /* ---------- Desktop state ---------- */
  const [scrollY, setScrollY] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  /* ---------- Refs ---------- */
  const desktopImageRef = useRef<HTMLImageElement | null>(null);
  const mobileImageRef = useRef<HTMLImageElement | null>(null);

  /* =========================================================
     MOBILE: Smooth parallax using RAF (NO React state)
     ========================================================= */
  useEffect(() => {
    if (!isMobile || !mobileImageRef.current) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = Math.min(window.scrollY * 0.06, 40);
          mobileImageRef.current!.style.transform = `translate3d(0, ${offset}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  /* =========================================================
     DESKTOP: React-based scroll parallax
     ========================================================= */
  useEffect(() => {
    if (isMobile) return;

    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  const scrollOffset = Math.min(scrollY * 0.12, 80);

  /* =========================================================
     DESKTOP: Pointer tilt
     ========================================================= */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !desktopImageRef.current) return;

    const rect = desktopImageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  /* =========================================================
     RENDER
     ========================================================= */
  return (
    <Box
      className="relative w-full overflow-hidden"
      sx={{
        height: { xs: "78vh", md: "80vh" },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background tint */}
      <Box className="absolute inset-0 bg-black/10 z-0" />

      {/* TEXT — collision-aligned */}
      <Box
        className="absolute z-20 w-full text-center px-6"
        sx={{
          top: {
            xs: "clamp(16vh, 20vh, 24vh)",
            md: "clamp(18vh, 22vh, 26vh)",
          },
        }}
      >
        <Typography
          variant="h1"
          className="font-serif italic text-white"
          sx={{
            fontSize: { xs: "2rem", md: "4rem" },
            lineHeight: 1.1,
          }}
        >
          {titleItalic}
        </Typography>

        <Typography
          variant="h1"
          className="mt-2 text-white"
          sx={{
            fontSize: { xs: "2.2rem", md: "4.5rem" },
            lineHeight: 1.1,
          }}
        >
          {titleNormal}
        </Typography>
      </Box>

      {/* BUILDING IMAGE */}
      <Box
        className="absolute inset-0 z-10 overflow-hidden"
        sx={{
          perspective: isMobile ? "none" : "1200px",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={isMobile ? mobileImageRef : desktopImageRef}
          src={buildingImage}
          alt="Building"
          className="h-full w-full object-cover"
          style={{
            transform: isMobile
              ? "translate3d(0,0,0)"
              : `
                scale(1.08)
                translateY(${scrollOffset}px)
                rotateX(${tilt.x}deg)
                rotateY(${tilt.y}deg)
              `,
            transition: isMobile ? "none" : "transform 0.18s ease-out",
            willChange: "transform",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        />
      </Box>
    </Box>
  );
}
