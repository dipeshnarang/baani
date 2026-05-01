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
))(() => ({
  backgroundColor: "#000",
  color: "#fff",
  maxWidth: "17rem",
  textDecoration: "none",
  overflow: "hidden",
  transform: "translate3d(0, 0, 0)",
  transition:
    "transform 260ms cubic-bezier(0.22, 1, 0.36, 1), background-color 260ms ease, box-shadow 260ms ease",

  "&:hover": {
    backgroundColor: "#1f1f1f",
    textDecoration: "none",
    transform: "translate3d(0, -3px, 0)",
    boxShadow: "0 18px 42px rgba(0, 0, 0, 0.18)",
  },

  "& .MuiButton-endIcon": {
    transition: "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",
  },

  "&:hover .MuiButton-endIcon": {
    transform: "translate3d(4px, -4px, 0)",
  },

  "&.MuiButton-contained": {
    backgroundColor: "#000",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#1f1f1f",
    },
  },
}));
