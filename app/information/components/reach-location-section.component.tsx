"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LocationMap from "./location-map.component";
import { ContainedButton } from "@/core/styled/button.styled";

interface Location {
  title: string;
  address: string;
  coordinates: [number, number];
}

export default function HowToReachSection({
  title,
  address,
  coordinates,
}: Location) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box className="mx-auto items-center px-6 py-24">
      {/* Heading */}
      <Box className="mb-12">
        <Typography variant="h1" className="mb-30 text-center italic">
          How to reach?
        </Typography>
      </Box>
      {/* Content */}
      <Box
        className={
          isMobile
            ? "flex flex-col gap-6"
            : "flex flex-row gap-12 justify-center"
        }
      >
        {/* Map */}
        <Box className={isMobile ? "h-[24rem]" : "h-[24rem] w-[52rem]"}>
          <LocationMap coordinates={coordinates} />
        </Box>

        {/* Address */}
        <Box className="flex flex-col justify-center gap-4">
          <Box className="flex flex-col gap-2">
            <Typography variant="locationHeader">{title}</Typography>

            <Typography variant="locationAddress" className="text-gray-600">
              {address}
            </Typography>
          </Box>
          <ContainedButton
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            className="w-fit bg-black text-white normal-case hover:bg-gray-900"
            component="a"
            href={`https://www.google.com/maps?q=${coordinates.join(",")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </ContainedButton>
        </Box>
      </Box>
    </Box>
  );
}
