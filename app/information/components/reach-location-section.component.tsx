"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LocationMap from "./location-map.component";
import { ContainedButton } from "@/core/styled/button.styled";
import { MotionReveal } from "@/core/components/motion-reveal.component";

interface Location {
  title: string;
  address: string;
  coordinates: [number, number];
  placeId: string;
}

export default function HowToReachSection({
  title,
  address,
  coordinates,
  placeId,
}: Location) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    title
  )}&query_place_id=${placeId}`;

  return (
    <Box className="mx-auto items-center px-6 py-24 bg-white">
      <MotionReveal className="mb-12" amount={0.35}>
        <Typography variant="h1" className="mb-30 text-center italic text-black">
          How to reach?
        </Typography>
      </MotionReveal>

      <Box
        className={
          isMobile
            ? "flex flex-col gap-6"
            : "flex flex-row gap-12 justify-center"
        }
      >
        <MotionReveal
          className={isMobile ? "h-[24rem]" : "h-[24rem] w-[52rem]"}
          direction="right"
          amount={0.25}
        >
          <LocationMap coordinates={coordinates} />
        </MotionReveal>

        <MotionReveal
          className="flex flex-col justify-center gap-4"
          direction="left"
          amount={0.25}
          delay={0.12}
        >
          <Box className="flex flex-col gap-2">
            <Typography variant="locationHeader" className="text-black">{title}</Typography>
            <Typography variant="locationAddress" className="text-gray-600">{address}</Typography>
          </Box>

          <ContainedButton
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            className="w-fit bg-black text-white normal-case hover:bg-gray-900"
            component="a"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </ContainedButton>
        </MotionReveal>
      </Box>
    </Box>
  );
}
