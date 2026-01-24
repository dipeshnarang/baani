import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

interface CarouselTextOverlayComponentProps {
  title: string[];
  subtitle: string[];
}

const CarouselTextOverlayComponent = ({
  title,
  subtitle,
}: CarouselTextOverlayComponentProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box className="flex flex-col gap-6 absolute bottom-[5%] md:bottom-[5%] left-[6%] md:left-[6%] text-white">
      <Box className="flex flex-col">
        {title.map((title, index) => (
          <Typography
            key={index}
            variant={isMobile ? "h4" : "imageOverlay"}
            className="mb-2"
          >
            {title}
          </Typography>
        ))}
      </Box>

      {subtitle.map((subtitle, index) => (
        <Typography key={index} variant="body1" className="">
          {subtitle}
        </Typography>
      ))}
    </Box>
  );
};

export default CarouselTextOverlayComponent;
