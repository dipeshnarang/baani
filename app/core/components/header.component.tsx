"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppHeader } from "@/core/styled/header.styled";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Commercial Portfolio", href: "/commercial" },
  { label: "Hotel Collection", href: "/hotels" },
  { label: "Upcoming Projects", href: "/projects" },
  { label: "Our Story", href: "/about" },
  { label: "Enquire Now", href: "" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (isMobile) setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: scrolled ? "#0A1B3A" : "transparent",
        transition: "background-color 300ms ease",
      }}
      className="pt-2"
    >
      <AppHeader>
        <Box className="mr-6 flex gap-2">
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleMenuOpen}
              aria-label="open menu"
              className=""
            >
              <MenuIcon className="text-white" />
            </IconButton>
          )}
          <Box className="mt-4">
            <Image
              src="/images/baani-logo.png"
              alt="Baani Logo"
              width={150}
              height={32}
              priority
            />
          </Box>
        </Box>

        {!isMobile && (
          <Box className=" flex gap-4 mx-auto">
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                className="font-medium normal-case text-white hover:text-[#F5C518]"
              >
                <Typography color="primary.white">{item.label}</Typography>
              </Button>
            ))}
          </Box>
        )}

        {!isMobile && (
          <Button
            component={Link}
            href="/enquire"
            variant="contained"
            className="inline-flex items-center gap-1.5 rounded-md bg-white px-5 py-2.5 font-semibold normal-case text-black transition hover:bg-gray-200"
          >
            Enquire Now
            <ArrowOutwardIcon fontSize="small" />
          </Button>
        )}

        {/* MOBILE MENU (NO CTA INSIDE) */}
        {isMobile && (
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: 2,
                minWidth: 220,
              },
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.label}
                component={Link}
                href={item.href}
                onClick={handleMenuClose}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        )}
      </AppHeader>
    </AppBar>
  );
}
