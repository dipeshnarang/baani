import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    numeric01: React.CSSProperties;
    numeric02: React.CSSProperties;
    cardHeader: React.CSSProperties;
    imageOverlay: React.CSSProperties;
    infoText: React.CSSProperties;
    galleryHeader: React.CSSProperties;
    locationHeader: React.CSSProperties;
    locationAddress: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    numeric01?: React.CSSProperties;
    numeric02?: React.CSSProperties;
    cardHeader: React.CSSProperties;
    imageOverlay: React.CSSProperties;
    infoText: React.CSSProperties;
    galleryHeader: React.CSSProperties;
    locationHeader: React.CSSProperties;
    locationAddress: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    numeric01: true;
    numeric02: true;
    cardHeader: true;
    imageOverlay: true;
    infoText: true;
    galleryHeader: true;
    locationHeader: true;
    locationAddress: true;
  }
}
