"use client";

import { Box, Typography, IconButton } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface PropertyTileCardProps {
  image: string;
  title: string;
  subtitle: string;
  href?: string;
}

export function PropertyTileCard({
  image,
  title,
  subtitle,
  href,
}: PropertyTileCardProps) {
  return (
    <Box
      className="
        relative overflow-hidden rounded-2xl
        aspect-[4/5]
        bg-black
      "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* GRADIENT OVERLAY */}
      <Box className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* CONTENT */}
      <Box className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
        <Box>
          <Typography className="text-white font-semibold">{title}</Typography>
          <Typography className="text-sm text-gray-300">{subtitle}</Typography>
        </Box>

        <IconButton
          className="
            bg-white text-black
            hover:bg-gray-200
          "
          size="small"
          component="a"
          href={href}
        >
          <ArrowOutwardIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
