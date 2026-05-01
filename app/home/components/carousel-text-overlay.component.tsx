"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";

interface CarouselTextOverlayComponentProps {
  title: { text: string; variant: string }[];
  subtitle: string[];
}

const CarouselTextOverlayComponent = ({
  title,
  subtitle,
}: CarouselTextOverlayComponentProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box className="flex flex-col gap-6 absolute bottom-[5%] md:bottom-[5%] left-[6%] md:left-[6%] text-white">
      <Box className="flex flex-wrap items-center gap-2">
        {title.map((item, index) => (
          <Fragment key={index}>
            <Box
              component={motion.span}
              initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.16 + index * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Typography
                variant={
                  isMobile ? "fontUbuntuBaseMedium" : (item.variant as any)
                }
                className="mb-0"
              >
                {item.text}
              </Typography>
            </Box>

            {(index + 1) % 2 === 0 && <span className="w-full h-0" />}
          </Fragment>
        ))}
      </Box>

      {subtitle.map((subtitle, index) => (
        <Box
          key={index}
          component={motion.div}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55 + index * 0.08,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Typography variant="fontUbuntuXsRegular" className="">
            {subtitle}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CarouselTextOverlayComponent;
