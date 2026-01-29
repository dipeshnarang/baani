import { Box, Typography, IconButton } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useRouter } from "next/navigation";

interface ExploreCardProps {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

export default function ExploreCard({
  image,
  title,
  subtitle,
  link,
}: ExploreCardProps) {
  const router = useRouter();
  return (
    <Box
      className="
        relative w-full sm:w-[32rem] flex-shrink-0
        overflow-hidden rounded-2xl group
      "
      sx={{ aspectRatio: "107 / 120" }}
    >
      <Box
        className="
          absolute inset-0
          transition-transform duration-500 ease-out
          group-hover:scale-105
        "
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Box className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      <Box className="absolute bottom-4 left-4 z-10 flex flex-col gap-2">
        <Typography variant="fontUbuntuMdMedium" className="font-semibold text-white">
          {title}
        </Typography>
        <Typography variant="fontUbuntuSmRegular" className="text-gray-300">{subtitle}</Typography>
      </Box>

      <Box className="absolute bottom-4 right-4 z-10 bg-white rounded-full">
        <IconButton
          size="small"
          className="
            rounded-full
            border-2 border-gray-300
            text-gray-800
            hover:bg-white
          "
          onClick={() => {
            router.push(link);
          }}
        >
          <ArrowOutwardIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
