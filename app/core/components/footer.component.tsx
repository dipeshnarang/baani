"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { FOOTER_CONTENT } from "../constants/core.constant";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MotionReveal } from "./motion-reveal.component";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollNav = (sectionId: string) => {
    if (pathname === "/") {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <Box className="bg-white" sx={{ border: "1px solid white" }}>
      <MotionReveal className="bg-black px-4 py-10 m-2.5 rounded-3xl bg-[url('/images/footer.png')] bg-cover bg-center bg-no-repeat">
        <Box className="flex justify-center">
          <Box
            className={
              isMobile
                ? "flex flex-col gap-8"
                : "flex flex-row w-7xl justify-between space-between"
            }
          >
            {/* LEFT */}
            <Box className="max-w-md">
              <Typography variant="h1" className="italic text-white">
                {FOOTER_CONTENT.title[0]}
                <br />
                <span>{FOOTER_CONTENT.title[1]}</span>
              </Typography>
            </Box>

            {/* QUICK LINKS */}
            <Box>
              <Typography variant='fontUbuntuBaseMedium' className="text-white flex gap-1 pb-4">
                {FOOTER_CONTENT.quickLinks.header[0]}{" "}
                <span className="text-yellow-500">
                  {FOOTER_CONTENT.quickLinks.header[1]}
                </span>
              </Typography>

              <ul className="space-y-1 text-sm text-gray-300">
                {FOOTER_CONTENT.quickLinks.items.map((item) => (
                  <li
                    key={item.label}
                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                    onClick={() => {
                      if (item.scrollTo) {
                        handleScrollNav(item.scrollTo);
                      } else if (item.href) {
                        router.push(item.href);
                      }
                    }}
                  >
                    <Typography variant="fontUbuntuSmRegular">{item.label}</Typography>
                  </li>
                ))}
              </ul>
            </Box>

            {/* CONTACT */}
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

        {/* LOGO */}
        <Box className="w-full justify-center flex mt-16">
          <Image
            src={"/images/baani-logo.png"}
            alt="Baani Logo"
            width={500}
            height={100}
          />
        </Box>
      </MotionReveal>
    </Box>
  );
}
