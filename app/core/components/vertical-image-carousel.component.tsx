import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

interface VerticalImageMarqueeProps {
  images: string[];
  speed?: number;
}

export default function VerticalImageMarquee({
  images,
  speed = 50,
}: VerticalImageMarqueeProps) {
  const loopImages = [...images, ...images];

  return (
    <Box className="relative h-[540px] overflow-hidden rounded-3xl">
      <Box
        className="flex flex-col gap-6"
        sx={{
          animation: `scrollY ${speed}s linear infinite`,
        }}
      >
        {loopImages.map((src, index) => (
          <Box
            key={index}
            component={motion.div}
            whileHover={{ scale: 0.985 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="h-90 w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={`l-${index}`}
              height={300}
              width={200}
              className="h-full w-full object-cover"
              priority
              loading="eager"
              unoptimized
            />
          </Box>
        ))}
      </Box>

      <Box className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <Box className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <style jsx>{`
        @keyframes scrollY {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </Box>
  );
}
