import { Box, Typography } from "@mui/material";

interface CarouselTextOverlayComponentProps {
  title: string[];
  subtitle: string[];
}

const CarouselTextOverlayComponent = ({
  title,
  subtitle,
}: CarouselTextOverlayComponentProps) => {
  return (
    <Box className="flex flex-col gap-2 absolute bottom-[5%] md:bottom-[10%] left-[6%] md:left-[6%] text-white">
      {title.map((title, index) => (
        <Typography key={index} variant="h2" className="font-bold mb-2">
          {title}
        </Typography>
      ))}

      {subtitle.map((subtitle, index) => (
        <Typography key={index} variant="h4" className="font-normal">
          {subtitle}
        </Typography>
      ))}
    </Box>
  );
};

export default CarouselTextOverlayComponent;
