"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import LandmarkCard from "@/home/components/landmark-card.component";
import { LANDMARK_SECTION } from "../constants/home-carousel.constant";
import {
  MotionReveal,
  StaggerReveal,
} from "@/core/components/motion-reveal.component";

export default function LandmarkSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box className="mx-auto px-6 py-16 bg-[#F2F2F2] justify-center flex ">
      <Box className=" md:px-12 flex flex-col gap-8 overflow-auto">
        <MotionReveal className="flex flex-col" direction="right" amount={0.35}>
          <Box>
            <Typography variant="fontDmSansXlMedium" className="text-gray-900">
              {LANDMARK_SECTION.header[0]}{" "}
            </Typography>
            <Typography
              variant="fontDmSerifXlRegular"
              className="italic text-yellow-500"
            >
              {LANDMARK_SECTION.header[1]}
            </Typography>
          </Box>

          <Typography
            variant="fontDmSansXlMedium"
            className="font-medium text-gray-900"
          >
            {LANDMARK_SECTION.subheader[0]}
          </Typography>
        </MotionReveal>

        <StaggerReveal
          className={isMobile ? "flex flex-col gap-4" : "flex flex-row gap-8"}
          stagger={0.14}
        >
          {LANDMARK_SECTION.landmarks.map((item, index) => (
            <LandmarkCard key={index} {...item} />
          ))}
        </StaggerReveal>
      </Box>
    </Box>
  );
}
