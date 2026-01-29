import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { dmSans, ubuntu, dmSerif } from "./fonts";


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


    fontUbuntuXsRegular: {
      fontFamily: ubuntu.style.fontFamily,
      fontSize: "1.2rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
    fontUbuntuXsMedium: {
      fontFamily: ubuntu.style.fontFamily,
      fontSize: "1.2rem",
      fontWeight: 500,
      lineHeight: "1rem",
    },
    fontUbuntuSmMedium: {
      fontFamily: ubuntu.style.fontFamily,
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: "1rem",
    },
    fontUbuntuSmRegular: {
      fontFamily: ubuntu.style.fontFamily,
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: "1.75rem",
      letterSpacing: '-0.36px'
    },
    fontUbuntuBaseMedium: {
      fontFamily: ubuntu.style.fontFamily,
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: "100%",
    },
    fontUbuntuMdMedium: {
      fontFamily: ubuntu.style.fontFamily,
      fontSize: "1.75rem",
      fontWeight: 500,
      lineHeight: "1.75rem",
    },
    fontUbuntuLgMedium: {
      fontFamily: ubuntu.style.fontFamily,
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: "3.75rem",
    },
    fontUbuntuLgBold: {
      fontFamily: ubuntu.style.fontFamily,
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: "3.75rem",
    },
    fontUbuntu3xlRegular: {
      fontFamily: ubuntu.style.fontFamily,
      fontSize: "6.25rem",
      fontWeight: 400,
      lineHeight: "3.75rem",
    },
  
    /* ================================
       DM Sans
    ================================= */
    fontDmSansXsRegular: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
    fontDmSansSmMedium: {
      fontFamily: "DM Sans",
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: "1.75rem",
    },
    fontDmSansXlMedium: {
      fontFamily: "DM Sans",
      fontSize: "3.25rem",
      fontWeight: 400,
      lineHeight: "3.75rem",
      letterSpacing: '-2.2px'
    },
    fontDmSansHeroMedium: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "3.75rem",
      fontWeight: 500,
      lineHeight: "4.5rem",
    },
  
    /* ================================
       DM Serif Text
    ================================= */
    fontDmSerifXlRegular: {
      fontFamily: dmSerif.style.fontFamily,
      fontSize: "3.25rem",
      fontWeight: 400,
      lineHeight: "3.75rem",
      fontStyle: 'italic'
    },
    fontDmSerifXlRegularItalic: {
      fontFamily: dmSerif.style.fontFamily,
      fontSize: "3.25rem",
      fontWeight: 400,
      lineHeight: "3.75rem",
      fontStyle: 'italic'
    },
    fontDmSerifHeroRegularItalic: {
      fontFamily: dmSerif.style.fontFamily,
      fontSize: "3.75rem",
      fontWeight: 400,
      lineHeight: "3.75rem",
      fontStyle: 'italic'
    },
    fontDmSerifDisplayRegular: {
      fontFamily: dmSerif.style.fontFamily,
      fontSize: "6.25rem",
      fontWeight: 400,
      lineHeight: "4.5rem",
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
