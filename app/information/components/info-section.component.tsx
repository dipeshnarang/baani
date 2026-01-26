"use client";

import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useEffect, useRef, useState } from "react";

interface ProjectInfoSectionProps {
  image: string;
  logo: string;
  title: string;
  description: string;
}

/**
 * Desktop image size: 535 x 600 px
 * Aspect ratio: 107 / 120
 */
const IMAGE_CONTAINER_SX = {
  width: "clamp(33.44rem, 35vw, 40rem)",
  aspectRatio: "107 / 120",
  marginRight: "2rem",
  marginBottom: "1.5rem",
};

const LINE_HEIGHT = 1.6;
const INFO_TEXT_FONT_SIZE = 16;
const MOBILE_WORD_LIMIT = 150;

function truncateWords(text: string, limit: number) {
  const words = text.split(/\s+/);
  return {
    truncated: words.length > limit,
    text: words.slice(0, limit).join(" "),
  };
}

export default function ProjectInfoSection({
  image,
  logo,
  title,
  description,
}: ProjectInfoSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  /* ---------- Desktop overflow detection ---------- */
  useEffect(() => {
    if (isMobile) return;
    if (!imageRef.current || !textRef.current) return;

    const imageHeight = imageRef.current.offsetHeight;
    const textHeight = textRef.current.scrollHeight;

    setShowReadMore(textHeight > imageHeight);
  }, [description, isMobile]);

  /* ================= MOBILE LAYOUT ================= */
  if (isMobile) {
    const { truncated, text } = truncateWords(description, MOBILE_WORD_LIMIT);

    return (
      <Box className="bg-black px-6 pt-32 pb-10 text-white">
        {/* Image */}
        <Box
          className="overflow-hidden rounded-3xl mb-6"
          sx={{ aspectRatio: "107 / 120" }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </Box>

        {/* Content */}
        <img
          src={logo}
          alt={`${title} logo`}
          className="h-12 mb-4 object-contain brightness-0 invert"
        />

        <Typography variant="h1" className="mb-4 font-serif">
          {title}
        </Typography>

        <Typography
          variant="infoText"
          className="text-gray-300 leading-relaxed"
        >
          {expanded || !truncated ? description : `${text}…`}
        </Typography>

        {/* Actions */}
        <Box className="mt-4">
          {truncated && (
            <Typography
              variant="infoText"
              onClick={() => setExpanded((v) => !v)}
              className="cursor-pointer text-sm text-yellow-500 mb-4 inline-block"
            >
              {expanded ? "Read Less" : "Read More"}
            </Typography>
          )}

          <Button
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            className="bg-white text-black normal-case hover:bg-gray-200 w-full"
          >
            <Typography variant="body2">Schedule a Visit</Typography>
          </Button>
        </Box>
      </Box>
    );
  }

  /* ================= DESKTOP LAYOUT ================= */
  return (
    <Box className="bg-black px-6 md:px-16 pt-40 pb-10 text-white">
      <Box className="relative">
        {/* ===== FLOATING IMAGE ===== */}
        <Box
          ref={imageRef}
          className="float-left overflow-hidden rounded-3xl"
          sx={{
            ...IMAGE_CONTAINER_SX,
            shapeOutside: "inset(0 round 24px)",
            WebkitShapeOutside: "inset(0 round 24px)",
          }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </Box>

        {/* ===== TEXT FLOW ===== */}
        <Box
          ref={textRef}
          sx={{
            maxHeight:
              !expanded && imageRef.current
                ? (() => {
                    const imageHeight = imageRef.current.offsetHeight - 128; // 8rem
                    const lineHeightPx = INFO_TEXT_FONT_SIZE * LINE_HEIGHT;
                    const fullLines = Math.floor(imageHeight / lineHeightPx);
                    return `${fullLines * lineHeightPx}px`;
                  })()
                : "none",
            overflow: !expanded ? "hidden" : "visible",
          }}
        >
          <Box sx={{ paddingTop: "2rem" }}>
            <img
              src={logo}
              alt={`${title} logo`}
              className="h-14 mb-4 object-contain brightness-0 invert"
            />
          </Box>

          <Typography variant="h1" className="mb-4 font-serif">
            {title}
          </Typography>

          <Typography
            variant="infoText"
            className="text-gray-300"
            sx={{ lineHeight: LINE_HEIGHT }}
          >
            {description}
          </Typography>
        </Box>

        {/* ===== ACTIONS ===== */}
        <Box className="mt-2">
          {showReadMore && (
            <Typography
              variant="infoText"
              onClick={() => setExpanded((v) => !v)}
              className="cursor-pointer text-sm text-yellow-500 block mb-4"
            >
              {expanded ? "Read Less" : "Read More"}
            </Typography>
          )}

          <Box className="h-4" />

          <Button
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            className="bg-white text-black normal-case hover:bg-gray-200"
          >
            <Typography variant="body2">Schedule a Visit</Typography>
          </Button>

          <Box sx={{ paddingBottom: "2rem" }} />
        </Box>

        <Box className="clear-both" />
      </Box>
    </Box>
  );
}
