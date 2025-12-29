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
    },
    h2: {
      fontSize: "1.6rem",
      fontWeight: 600,
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
    },
    h3: {
      fontSize: "1.4rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
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
    },
    numeric02: {
      fontSize: "2.25rem",
      fontWeight: 400,
      lineHeight: 1.1,
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
