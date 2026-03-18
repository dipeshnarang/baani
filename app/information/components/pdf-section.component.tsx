"use client";

import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Image from "next/image";

interface Document {
  title: string;
  file: string;
}

interface PdfModalProps {
  open: boolean;
  onClose: () => void;
  documents: Document[];
}

export default function PdfModal({
  open,
  onClose,
  documents,
}: PdfModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "24px",
          overflow: "hidden",
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 20,
          background: "#fff",
          "&:hover": { background: "#f5f5f5" },
        }}
      >
        <CloseIcon fontSize="small"/>
      </IconButton>

      <DialogContent sx={{ p: 0 }}>
        {/* HEADER */}
        <Box
          className="relative text-center py-14 px-6 overflow-hidden"
          sx={{
            background: "#DFFFEF",
          }}
        >
          {/* LEFT TREE */}
          <Box className="absolute left-0 bottom-0 opacity-80">
            <Image
              src="/images/background/tree-left.svg"
              alt="left tree"
              width={120}
              height={80}
              className="h-16 md:h-20 w-auto object-contain ml-6"
            />
          </Box>

          {/* RIGHT TREE */}
          <Box className="absolute right-0 bottom-0 opacity-80">
            <Image
              src="/images/background/tree-right.svg"
              alt="right tree"
              width={120}
              height={80}
              className="h-16 md:h-20 w-auto object-contain mr-6"
            />
          </Box>

          {/* TEXT */}
          <Box className="relative z-10 flex flex-col items-center">
            <Typography
              variant="fontUbuntuBaseMedium"
              className="text-black"
            >
              Sustainable Development for a better tomorrow.
            </Typography>
          </Box>
        </Box>

        {/* DOCUMENT CARDS */}
        <Box className="py-10 px-6 flex flex-col md:flex-row gap-6 justify-center items-center">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3 
                border border-gray-300 
                rounded-xl px-6 py-4 
                bg-white 
                hover:shadow-md transition 
                cursor-pointer min-w-[260px]
              "
            >
              <PictureAsPdfIcon className="text-red-500" />

              <Typography
                variant="fontUbuntuSmMedium"
                className="text-black"
              >
                {doc.title}
              </Typography>
            </a>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}