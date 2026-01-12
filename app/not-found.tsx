"use client";

import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 gap-8">
      <Typography variant="h1" className="mb-4 font-serif italic">
        404
      </Typography>

      <Typography className="mb-6 text-center text-gray-400">
        The page you are looking for does not exist.
      </Typography>

      <Button
        component={Link}
        href="/"
        variant="contained"
        className="bg-white text-black normal-case hover:bg-gray-200"
      >
        Go back home
      </Button>
    </Box>
  );
}
