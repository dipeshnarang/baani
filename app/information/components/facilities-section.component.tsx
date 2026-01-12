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
        <Box className="grid grid-cols-1 gap-y-20 gap-x-12 sm:grid-cols-2 md:grid-cols-3">
          {facilities.map((item, index) => (
            <Box key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <Box className="mb-6 h-24 w-24">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </Box>
              <Box className="flex flex-col gap-1">
                <Typography className="font-semibold text-black">
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
