import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

interface LandmarkCardProps {
  image: string;
  title: string;
  description: string;
}

export default function LandmarkCard({
  image,
  title,
  description,
}: LandmarkCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      className={`rounded-3xl bg-white p-8 shadow-sm h-[29rem] ${isMobile ? "w-full" : "w-[23rem]"}`}
    >
      {/* Image */}
      <Box className="mb-10 flex justify-center">
        <Image
          src={image}
          alt={title}
          width={224}
          height={224}
          className=" object-contain"
        />
      </Box>

      <Box className="flex flex-col gap-2">
        <Typography
          variant="fontUbuntuLgBold"
          className="font-semibold text-gray-900"
        >
          {title}
        </Typography>

        <Typography variant="fontUbuntuSmRegular" className="text-gray-600">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
