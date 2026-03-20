"use client";

import { Box, Typography } from "@mui/material";

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
        <Box className="mb-12 text-center flex flex-col">
          <Typography variant="galleryHeader" className="text-black">
            Property Packed with
          </Typography>
          <Typography
            variant="galleryHeader"
            className="italic text-yellow-500"
          >
            Facilities
          </Typography>
        </Box>

        {/* Facilities Grid */}
        <Box className="flex flex-wrap justify-center gap-x-12 gap-y-20">
          {facilities.map((item, index) => (
            <Box
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
        </Box>
      </Box>
    </Box>
  );
}
