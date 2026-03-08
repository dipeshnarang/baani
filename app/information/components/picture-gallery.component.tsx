"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PictureGallerySectionProps {
  images: string[];
}

export default function PictureGallerySection({
  images,
}: PictureGallerySectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [hasOverflow, setHasOverflow] = useState(false);

  /* ---------- Detect overflow ---------- */
  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current || !trackRef.current) return;

      setHasOverflow(
        trackRef.current.scrollWidth > containerRef.current.clientWidth
      );
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [images]);

  return (
    <Box className="relative bg-black pb-24 pt-8 overflow-hidden">
      {/* HEADER */}
      {/* <Box
        className="mb-16 text-center flex flex-col"
        sx={{ border: "1px solid red" }}
      >
        <Typography variant="galleryHeader" className="font-medium text-white">
          Highlights and
        </Typography>

        <Typography variant="galleryHeader" className="italic text-yellow-500">
          Picture Gallery
        </Typography>
      </Box> */}

      <Box
        className="relative pt-6 mb-16 flex flex-col items-center text-center"
      >
        {/* Top Image */}
        <Image
          src="/images/background/picture-top.png"
          alt="top decoration"
          width={600}
          height={400}
          className="absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none"
        />

        {/* Left Image */}
        <Image
          src="/images/background/picture-left.png"
          alt="left decoration"
          width={270}
          height={274}
          className="absolute left-0 -top-25 pointer-events-none"
        />

        {/* Right Image */}
        <Image
          src="/images/background/picture-left.png"
          alt="left decoration"
          width={270}
          height={274}
          className="absolute right-0 -top-25 pointer-events-none"
        />

        {/* Header Text */}
        <Typography variant="galleryHeader" className="font-medium text-white">
          Highlights and
        </Typography>

        <Typography variant="galleryHeader" className="italic text-yellow-500">
          Picture Gallery
        </Typography>
      </Box>

      {/* GALLERY */}
      <Box ref={containerRef} className="relative overflow-hidden">
        {/* STATIC MODE */}
        {!hasOverflow && (
          <Box ref={trackRef} className="flex justify-center gap-8">
            {images.map((src, index) => (
              <GalleryCard key={index} src={src} />
            ))}
          </Box>
        )}

        {/* MARQUEE MODE */}
        {hasOverflow && (
          <Box className="flex w-max picture-gallery-marquee">
            <Box ref={trackRef} className="flex gap-8 pr-8">
              {images.map((src, index) => (
                <GalleryCard key={`a-${index}`} src={src} />
              ))}
            </Box>

            <Box className="flex gap-8 pr-8" aria-hidden="true">
              {images.map((src, index) => (
                <GalleryCard key={`b-${index}`} src={src} />
              ))}
            </Box>
          </Box>
        )}

        {/* EDGE FADES */}
        {hasOverflow && (
          <>
            <Box className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <Box className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          </>
        )}
      </Box>
    </Box>
  );
}

/* ---------- CARD ---------- */
function GalleryCard({ src }: { src: string }) {
  return (
    <Box
      className="
        h-[22rem] w-[22rem]
        flex-shrink-0
        overflow-hidden rounded-3xl
      "
    >
      <img src={src} alt="gallery" className="h-full w-full object-cover" />
    </Box>
  );
}
