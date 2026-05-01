"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerItem } from "@/core/components/motion-reveal.component";

interface LandmarkCardProps {
  image: string;
  title: string;
  description: string;
}

export default function LandmarkCard({
  image,
  title,
  description,
}: LandmarkCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      component={motion.div}
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-3xl bg-white p-8 shadow-sm h-[29rem] ${isMobile ? "w-full" : "w-[23rem]"}`}
    >
      {/* Image */}
      <Box className="mb-10 flex justify-center">
        <Image
          src={image}
          alt={title}
          width={474}
          height={474}
          className="object-contain transition-transform duration-700 hover:scale-105"
        />
      </Box>

      <Box className="flex flex-col gap-2">
        <Typography
          variant="fontUbuntuLgBold"
          className="font-semibold text-gray-900"
        >
          {title}
        </Typography>

        <Typography variant="fontUbuntuSmRegular" className="text-gray-600">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
