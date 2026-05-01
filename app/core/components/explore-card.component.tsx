"use client";

import { Box, Typography, IconButton } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useRouter } from "next/navigation";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { staggerItem } from "./motion-reveal.component";

interface ExploreCardProps {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

export default function ExploreCard({
  image,
  title,
  subtitle,
  link,
}: ExploreCardProps) {
  const router = useRouter();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 22 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const imageX = useTransform(smoothX, [-0.5, 0.5], [12, -12]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [12, -12]);

  const handleClick = () => {
    router.push(link);
  };

  return (
    <Box
      component={motion.div}
      variants={staggerItem}
      whileHover={{ y: -6, scale: 1.012 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      onClick={handleClick}
      className="
        relative w-full sm:w-[32rem] flex-shrink-0
        overflow-hidden rounded-2xl group cursor-pointer shadow-sm
      "
      sx={{
        aspectRatio: "107 / 120",
        transformOrigin: "center",
      }}
    >
      {/* Background Image */}
      <Box
        component={motion.div}
        className="
          absolute inset-0
          transition-transform duration-700 ease-out
          group-hover:scale-110
        "
        style={{ x: imageX, y: imageY }}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient */}
      <Box className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-95" />

      {/* Text */}
      <Box className="absolute bottom-4 left-4 z-10 flex flex-col gap-2">
        <Typography
          variant="fontUbuntuMdMedium"
          className="font-semibold text-white"
        >
          {title}
        </Typography>
        <Typography variant="fontUbuntuSmRegular" className="text-gray-300">
          {subtitle}
        </Typography>
      </Box>

      {/* Icon */}
      <Box className="absolute bottom-4 right-4 z-10 bg-white rounded-full transition-transform duration-500 group-hover:scale-110">
        <IconButton
          size="small"
          className="
            rounded-full
            border-2 border-gray-300
            text-gray-800
            hover:bg-white
          "
          onClick={(e) => {
            e.stopPropagation(); // prevents double trigger
            router.push(link);
          }}
        >
          <ArrowOutwardIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
