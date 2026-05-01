"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  MotionReveal,
  StaggerReveal,
  staggerItem,
} from "@/core/components/motion-reveal.component";

interface Facilities {
  icon: string;
  title: string;
  subtitle: string;
}

interface FacilitiesSectionProps {
  facilities: Facilities[];
}

export default function FacilitiesSection({
  facilities,
}: FacilitiesSectionProps) {
  return (
    <Box className="bg-[#F2F2F2] ">
      <Box className='max-w-7xl mx-auto px-6 py-24'>
        {/* Header */}
        <MotionReveal className="mb-12 text-center flex flex-col" amount={0.35}>
          <Typography variant="galleryHeader" className="text-black">
            Property Packed with
          </Typography>
          <Typography
            variant="galleryHeader"
            className="italic text-yellow-500"
          >
            Facilities
          </Typography>
        </MotionReveal>

        {/* Facilities Grid */}
        <StaggerReveal className="flex flex-wrap justify-center gap-x-12 gap-y-20">
          {facilities.map((item, index) => (
            <Box
              component={motion.div}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              key={index}
              className="flex flex-col items-center text-center 
                 w-full sm:w-[45%] md:w-[30%]"
            >
              {/* Icon */}
              <Box className="h-48 w-48">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </Box>

              <Box className="flex flex-col gap-1">
                <Typography variant='fontUbuntuBaseMedium' className="text-black">
                  {item.title}
                </Typography>

                {item.subtitle && (
                  <Typography className="text-sm text-gray-600">
                    {item.subtitle}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </StaggerReveal>
      </Box>
    </Box>
  );
}
