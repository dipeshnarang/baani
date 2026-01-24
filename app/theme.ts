import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#4B5563",
    },
  },

  typography: {
    htmlFontSize: 16,
    fontFamily: "DM Sans, sans-serif",

    h1: {
      fontSize: "3.25rem",
      fontWeight: 500,
      lineHeight: 1.2,
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      fontFamily: "DM Serif Text",
    },
    h2: {
      fontSize: "1.6rem",
      fontWeight: 600,
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 400,
      fontFamily: "Ubuntu",
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: 1.2,
      fontFamily: "Ubuntu",
    },
    body2: {
      fontSize: "1rem",
    },
    cardHeader: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: "1.8rem",
    },

    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "none",
    },
    numeric01: {
      fontSize: "6rem",
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      fontFamily: "Ubuntu",
    },
    numeric02: {
      fontSize: "2.25rem",
      fontWeight: 400,
      lineHeight: 1.1,
    },
    imageOverlay: {
      fontFamily: "DM Sans",
      fontSize: "3.75rem",
    },
    infoText: {
      fontFamily: "Ubuntu",
      fontSize: "1.1rem",
      lineHeight: 1,
    },
    galleryHeader: {
      fontSize: "3.25rem",
      fontWeight: 500,
      lineHeight: 1.2,
      fontFamily: "DM Sans",
    },
    locationHeader: {
      fontSize: "1.75rem",
      fontFamily: "Ubuntu",
      fontWeight: "500",
    },
    locationAddress: {
      fontSize: "1rem",
      fontFamily: "Ubuntu",
      fontWeight: "400",
    },
    headerNav: {
      fontFamily: "Ubuntu",
      fontWeight: 500,
      fontSize: "1.4rem",
      lineHeight: "1.8rem",
    },
    DmSerifH1: {
      fontFamily: "DM Serif Text",
      fontSize: "3.25rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
  },

  spacing: (factor: number) => `${0.5 * factor}rem`,

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          padding: "0.5rem 1.25rem",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
