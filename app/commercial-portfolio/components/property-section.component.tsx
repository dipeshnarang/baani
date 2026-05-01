"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import ExploreCard from "@/core/components/explore-card.component";
import { MotionReveal } from "@/core/components/motion-reveal.component";

interface PropertyGridSectionProps {
  items: {
    image: string;
    title: string;
    subtitle: string;
    link: string;
  }[];
}

export default function PropertyGridSection({
  items,
}: PropertyGridSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));

  // decide number of columns
  const columns = isXL ? 2 : 2;

  if (isMobile) {
    return (
      <Box className="mx-auto max-w-7xl overflow-hidden px-4 py-8">
        <Box className="flex flex-col gap-8">
          {items.map((item, index) => (
            <MotionReveal
              key={item.link}
              direction="up"
              distance={56}
              duration={0.8}
              delay={index * 0.05}
              amount={0.18}
            >
              <ExploreCard {...item} />
            </MotionReveal>
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box className="mx-auto max-w-7xl overflow-hidden px-4 py-8 md:px-32 md:py-20">
      <Box className="flex flex-col gap-8 md:flex-row md:gap-8 xl:gap-8">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Box
            key={colIndex}
            className={`
              flex flex-1 flex-col gap-8 
              ${colIndex === 1 ? "md:mt-24" : "items-end"}
              ${colIndex === 2 ? "xl:mt-40" : ""}
            `}
          >
            {items
              .filter((_, i) => i % columns === colIndex)
              .map((item, index) => (
                <MotionReveal
                  key={`${colIndex}-${index}`}
                  direction={colIndex === 0 ? "right" : "left"}
                  distance={140}
                  duration={0.9}
                  delay={index * 0.08}
                  amount={0.2}
                >
                  <ExploreCard {...item} />
                </MotionReveal>
              ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
