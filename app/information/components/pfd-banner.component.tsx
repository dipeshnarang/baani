"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import PdfModal from "./pdf-section.component";

interface Document {
    title: string;
    file: string;
}

interface Props {
    documents: Document[];
}

export default function SustainableBannerWithModal({ documents }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <Box className='mb-8'>
            {/* BANNER */}
            <Box
                className="
          relative
          max-w-7xl mx-auto
          rounded-full
          px-6 md:px-10
          py-7
          flex items-center justify-center
          overflow-hidden
        "
                sx={{
                    background: "#DFFFEF",
                }}
            >
                {/* LEFT TREE */}
                <Box className="absolute left-4 bottom-0 opacity-80">
                    <Image
                        src="/images/background/tree-left.svg"
                        alt="left tree"
                        width={150}
                        height={80}
                        className="h-10 md:h-16 w-auto object-contain"
                    />
                </Box>

                {/* RIGHT TREE */}
                <Box className="absolute right-4 bottom-0 opacity-80">
                    <Image
                        src="/images/background/tree-right.svg"
                        alt="right tree"
                        width={100}
                        height={60}
                        className="h-10 md:h-16 w-auto object-contain"
                    />
                </Box>

                {/* TEXT */}
                <Box className="relative z-10 flex items-center gap-2 flex-wrap justify-center">
                    <Typography
                        variant="fontUbuntuBaseMedium"
                        className="text-black text-center"
                    >
                        Sustainable Development for a better tomorrow.
                    </Typography>

                    {/* CTA */}
                    <Typography
                        variant="fontUbuntuSmRegularMedium"
                        onClick={() => setOpen(true)}
                        className="
              text-yellow-600 cursor-pointer
              relative
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-yellow-600 
              hover:after:w-full after:transition-all
            "
                    >
                        Know more
                    </Typography>
                </Box>
            </Box>

            <PdfModal
                open={open}
                onClose={() => setOpen(false)}
                documents={documents}
            />
        </Box>
    );
}