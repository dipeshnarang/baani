"use client";

import { Button, styled } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";
import type { AnchorHTMLAttributes } from "react";

/**
 * Allow Button props + Anchor props
 */
type AnchorButtonProps = ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const ContainedButton = styled((props: AnchorButtonProps) => (
  <Button {...props} />
))(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  width: "17rem",
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "#1f1f1f",
    textDecoration: "none",
  },

  "&.MuiButton-contained": {
    backgroundColor: "#000",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#1f1f1f",
    },
  },
}));
