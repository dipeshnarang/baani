import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    numeric01: React.CSSProperties;
    numeric02: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    numeric01?: React.CSSProperties;
    numeric02?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    numeric01: true;
    numeric02: true;
  }
}
