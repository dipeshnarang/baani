import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Fragment } from "react/jsx-runtime";

interface CarouselTextOverlayComponentProps {
  title: { text: string; variant: string }[];
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
      <Box className="flex flex-wrap items-center gap-2">
        {title.map((item, index) => (
          <Fragment key={index}>
            <Typography
              variant={
                isMobile ? "fontUbuntuBaseMedium" : (item.variant as any)
              }
              className="mb-0"
            >
              {item.text}
            </Typography>

            {(index + 1) % 2 === 0 && <span className="w-full h-0" />}
          </Fragment>
        ))}
      </Box>

      {subtitle.map((subtitle, index) => (
        <Typography key={index} variant="fontUbuntuXsRegular" className="">
          {subtitle}
        </Typography>
      ))}
    </Box>
  );
};

export default CarouselTextOverlayComponent;
