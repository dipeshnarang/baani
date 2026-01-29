"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import LandmarkCard from "@/home/components/landmark-card.component";
import { LANDMARK_SECTION } from "../constants/home-carousel.constant";

export default function LandmarkSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box className="mx-auto px-6 py-16 bg-[#F2F2F2] justify-center flex ">
      <Box className=" md:px-12 flex flex-col gap-8 overflow-auto">
        <Box className="flex flex-col">
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
        </Box>

        <Box
          className={isMobile ? "flex flex-col gap-4" : "flex flex-row gap-8"}
        >
          {LANDMARK_SECTION.landmarks.map((item, index) => (
            <LandmarkCard key={index} {...item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
