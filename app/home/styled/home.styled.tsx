"use client";

import { Button, styled } from "@mui/material";

export const ExploreButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  width: "17rem",
  "&:hover": {
    backgroundColor: "#1f1f1f",
  },
  "&.MuiButton-contained": {
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1f1f1f",
    },
  },
}));
