"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { FOOTER_CONTENT } from "../constants/core.constant";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box className="bg-black px-4 py-10">
      <Box className="flex justify-center">
        <Box
          className={
            isMobile
              ? "flex flex-col gap-8"
              : "flex flex-row w-7xl justify-between space-between"
          }
          //   sx={{ border: "1px solid red" }}
        >
          <Box className="max-w-md">
            <Typography variant="h1" className="italic text-white">
              {FOOTER_CONTENT.title[0]}
              <br />
              <span>{FOOTER_CONTENT.title[1]}</span>
            </Typography>
          </Box>

          <Box>
            <Typography className="text-white flex gap-1 pb-4">
              {FOOTER_CONTENT.quickLinks.header[0]}{" "}
              <span className="text-yellow-500">
                {FOOTER_CONTENT.quickLinks.header[1]}
              </span>
            </Typography>

            <ul className="space-y-1 text-sm text-gray-300">
              {FOOTER_CONTENT.quickLinks.items.map((item) => {
                return <li key={item.label}>{item.label}</li>;
              })}
            </ul>
          </Box>

          {/* Right */}
          <Box className="space-y-4 text-sm text-gray-300">
            <Box className="flex items-start gap-3">
              <LocationOnIcon className="text-yellow-500" fontSize="small" />
              <Typography>
                {FOOTER_CONTENT.contact.address.title} <br />
                {FOOTER_CONTENT.contact.address.description[0]} <br />
                {FOOTER_CONTENT.contact.address.description[1]}
              </Typography>
            </Box>

            <Box className="flex items-center gap-3">
              <EmailIcon className="text-yellow-500" fontSize="small" />
              <Typography className="underline">
                {FOOTER_CONTENT.contact.email}
              </Typography>
            </Box>

            <Box className="flex items-center gap-3">
              <PhoneIcon className="text-yellow-500" fontSize="small" />
              <Typography>{FOOTER_CONTENT.contact.mobile}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
