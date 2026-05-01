"use client";

import { Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import VerticalImageMarquee from "@/core/components/vertical-image-carousel.component";
import { EXPLORE_LANDMARK } from "../constants/home-carousel.constant";
import { ContainedButton } from "@/core/styled/button.styled";
import {
  MotionReveal,
  StaggerReveal,
  staggerItem,
} from "@/core/components/motion-reveal.component";
import { motion } from "framer-motion";

export default function IconicLandmarksSection() {
  return (
    <Box className="mx-auto px-4 md:px-24 py-10 bg-[#FAFAFA]">
      {/* Header */}
      <MotionReveal className="mb-14 text-center flex flex-col" amount={0.35}>
        <Typography variant="fontDmSerifXlRegular" className="font-serif italic text-yellow-500">
          {EXPLORE_LANDMARK.header[0]}{" "}
          <span className="text-black">{EXPLORE_LANDMARK.header[1]}</span>
        </Typography>
        <Typography variant="fontDmSerifXlRegular" className="font-semibold text-black">
          {EXPLORE_LANDMARK.subheader[0]}
        </Typography>
      </MotionReveal>

      {/* Content */}
      <Box className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left – Scrolling Images */}
        <MotionReveal direction="right" amount={0.25}>
          <VerticalImageMarquee images={EXPLORE_LANDMARK.imageList} />
        </MotionReveal>

        <MotionReveal className="md:p-8" direction="left" amount={0.25}>
          <Box className="flex flex-col gap-6 rounded-3xl bg-white p-10 shadow-sm">
            <Box className="flex flex-col gap-4">
              <Typography
                variant="fontUbuntuMdMedium"
                className="mb-2 font-semibold text-black"
              >
                Experiential Landmarks Crafted
              </Typography>

              <Typography variant="body2" className="mb-6 text-gray-600">
                Strategically designed landmarks that drive businesses while
                also enriching the customer experience.
              </Typography>
            </Box>
            <Box>
              <StaggerReveal
                className="mb-8 space-y-3 text-sm text-gray-700"
                stagger={0.08}
              >
                {EXPLORE_LANDMARK.pointers.map((pointer, index) => {
                  return (
                    <motion.div
                      className="flex items-center gap-2"
                      key={index}
                      variants={staggerItem}
                    >
                      {pointer.icon}
                      {pointer.text}
                    </motion.div>
                  );
                })}
              </StaggerReveal>
            </Box>
            <ContainedButton variant="contained" endIcon={<ArrowOutwardIcon />} href="/commercial-portfolio">
              Explore commercial portfolio
            </ContainedButton>
          </Box>
        </MotionReveal>
      </Box>
    </Box>
  );
}
