"use client";

import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useEffect, useRef, useState } from "react";

interface ProjectInfoSectionProps {
  image: string;
  logo: string;
  title: string;
  description: string;
}

export default function ProjectInfoSection({
  image,
  logo,
  title,
  description,
}: ProjectInfoSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const imageRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const imageElementRef = useRef<HTMLImageElement | null>(null);

  const [showReadMore, setShowReadMore] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<{ width?: string; height?: string }>({});

  /* ---------- Measure heights (only collapsed mode) ---------- */
  useEffect(() => {
    if (expanded) return;

    const measure = () => {
      if (!imageRef.current || !descriptionRef.current) return;

      setShowReadMore(
        descriptionRef.current.scrollHeight >
          imageRef.current.offsetHeight - 300
      );

      // Store image dimensions for expanded view (only if not already stored)
      if (imageRef.current && imageElementRef.current) {
        const imgElement = imageElementRef.current;
        const currentWidth = imgElement.offsetWidth || imageRef.current.offsetWidth;
        const currentHeight = imgElement.offsetHeight || imageRef.current.offsetHeight;
        
        if (currentWidth > 0 && currentHeight > 0) {
          setImageDimensions((prev) => prev.width ? prev : {
            width: `${currentWidth}px`,
            height: `${currentHeight}px`,
          });
        }
      }
    };

    // Small delay to ensure image is loaded
    const timeoutId = setTimeout(measure, 100);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", measure);
    };
  }, [description, expanded]);

  return (
    <Box className="bg-black px-6 md:px-16 pt-40 pb-20">
      <Box className="mx-auto text-white">
        {/* ===== COLLAPSED: GRID LAYOUT ===== */}
        {!expanded && (
          <Box className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            {/* Image */}
            <Box
              ref={imageRef}
              className="overflow-hidden rounded-3xl md:col-span-2"
            >
              <img
                ref={imageElementRef}
                src={image}
                alt={title}
                className="h-full w-full object-cover"
                onLoad={() => {
                  if (imageElementRef.current && !expanded && !imageDimensions.width) {
                    setImageDimensions({
                      width: `${imageElementRef.current.offsetWidth}px`,
                      height: `${imageElementRef.current.offsetHeight}px`,
                    });
                  }
                }}
              />
            </Box>

            {/* Text */}
            <Box className="md:col-span-3 flex flex-col gap-2 items-start">
              <img
                src={logo}
                alt={`${title} logo`}
                className="h-14 object-contain brightness-0 invert"
              />

              <Typography variant="h1" className="mb-4 font-serif">
                {title}
              </Typography>

              <Box
                ref={descriptionRef}
                className="overflow-hidden relative"
                style={{
                  maxHeight: imageRef.current?.offsetHeight
                    ? imageRef.current.offsetHeight - 255
                    : undefined,
                }}
              >
                <Typography
                  variant="infoText"
                  className="leading-relaxed text-gray-300"
                >
                  {description}
                </Typography>
                {showReadMore && (
                  <Box 
                    className="absolute bottom-0 right-0 text-gray-300 text-lg font-bold"
                    style={{
                      background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.8) 60%, transparent 100%)',
                      paddingLeft: '1.5rem',
                      paddingRight: '0.25rem',
                      lineHeight: '1.5',
                    }}
                  >
                    ...
                  </Box>
                )}
              </Box>

              {showReadMore && (
                <Typography
                  variant="infoText"
                  onClick={() => setExpanded(true)}
                  className="mt-6 cursor-pointer text-sm text-yellow-500"
                >
                  Read More
                </Typography>
              )}

              <Button
                variant="contained"
                endIcon={<ArrowOutwardIcon />}
                className="mt-10 bg-white text-black normal-case hover:bg-gray-200 w-full md:w-60"
              >
                <Typography variant="body2">Schedule a Visit</Typography>
              </Button>
            </Box>
          </Box>
        )}

        {/* ===== EXPANDED: FLOAT (L-SHAPE) ===== */}
        {expanded && (
          <Box className="relative gap-4">
            {/* Floating Image */}
            <Box
              ref={imageRef}
              className="float-left mr-8 mb-6 overflow-hidden rounded-3xl flex-shrink-0"
              style={{
                width: imageDimensions.width || (isMobile ? '100%' : '40vw'),
                height: imageDimensions.height || 'auto',
                maxWidth: imageDimensions.width || '40rem',
              }}
              sx={
                !isMobile && imageDimensions.width
                  ? {
                      shapeOutside: "inset(0 round 24px)",
                      WebkitShapeOutside: "inset(0 round 24px)",
                    }
                  : !isMobile
                  ? {
                      shapeOutside: "inset(0 round 24px)",
                      WebkitShapeOutside: "inset(0 round 24px)",
                    }
                  : {}
              }
            >
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>

            {/* Text Flow */}
            <img
              src={logo}
              alt={`${title} logo`}
              className="h-14 mb-4 object-contain brightness-0 invert"
            />

            <Typography variant="h1" className="mb-4 font-serif">
              {title}
            </Typography>

            <Typography
              variant="infoText"
              className="leading-relaxed text-gray-300"
            >
              {description}
            </Typography>

            <Box className='mt-1'>
              <Typography
                variant="infoText"
                onClick={() => setExpanded(false)}
                className="mt-6 cursor-pointer text-sm text-yellow-500"
              >
                Read Less
              </Typography>
            </Box>

            <Box className='mt-4'>
              <Button
                variant="contained"
                endIcon={<ArrowOutwardIcon />}
                className="mt-8 bg-white text-black normal-case hover:bg-gray-200 w-full md:w-60"
              >
                <Typography variant="body2">Schedule a Visit</Typography>
              </Button>
            </Box>

            {/* Clear float */}
            <Box className="clear-both" />
          </Box>
        )}
      </Box>
    </Box>
  );
}
