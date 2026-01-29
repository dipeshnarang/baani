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
    headerNav: React.CSSProperties;
    DmSerifH1: React.CSSProperties;

    fontUbuntuXsRegular: React.CSSProperties;
    fontUbuntuXsMedium: React.CSSProperties;
    fontUbuntuSmMedium: React.CSSProperties;
    fontUbuntuSmRegular: React.CSSProperties;
    fontUbuntuBaseMedium: React.CSSProperties;
    fontUbuntuMdMedium: React.CSSProperties;
    fontUbuntuLgMedium: React.CSSProperties;
    fontUbuntuLgBold: React.CSSProperties;
    fontUbuntu3xlRegular: React.CSSProperties;

    fontDmSansXsRegular: React.CSSProperties;
    fontDmSansSmMedium: React.CSSProperties;
    fontDmSansXlMedium: React.CSSProperties;
    fontDmSansHeroMedium: React.CSSProperties;

    fontDmSerifXlRegular: React.CSSProperties;
    fontDmSerifXlRegularItalic: React.CSSProperties;
    fontDmSerifHeroRegularItalic: React.CSSProperties;
    fontDmSerifDisplayRegular: React.CSSProperties;
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
    headerNav: React.CSSProperties;
    DmSerifH1: React.CSSProperties;

    fontUbuntuXsRegular: React.CSSProperties;
    fontUbuntuXsMedium: React.CSSProperties;
    fontUbuntuSmMedium: React.CSSProperties;
    fontUbuntuSmRegular: React.CSSProperties;
    fontUbuntuBaseMedium: React.CSSProperties;
    fontUbuntuMdMedium: React.CSSProperties;
    fontUbuntuLgMedium: React.CSSProperties;
    fontUbuntuLgBold: React.CSSProperties;
    fontUbuntu3xlRegular: React.CSSProperties;

    fontDmSansXsRegular: React.CSSProperties;
    fontDmSansSmMedium: React.CSSProperties;
    fontDmSansXlMedium: React.CSSProperties;
    fontDmSansHeroMedium: React.CSSProperties;

    fontDmSerifXlRegular: React.CSSProperties;
    fontDmSerifXlRegularItalic: React.CSSProperties;
    fontDmSerifHeroRegularItalic: React.CSSProperties;
    fontDmSerifDisplayRegular: React.CSSProperties;
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
    headerNav: true;
    DmSerifH1: true;
    
    fontUbuntuXsRegular: true;
    fontUbuntuXsMedium: true;
    fontUbuntuSmMedium: true;
    fontUbuntuSmRegular: true;
    fontUbuntuBaseMedium: true;
    fontUbuntuMdMedium: true;
    fontUbuntuLgMedium: true;
    fontUbuntuLgBold: true;
    fontUbuntu3xlRegular: true

    fontDmSansXsRegular: true;
    fontDmSansSmMedium: true;
    fontDmSansXlMedium: true;
    fontDmSansHeroMedium: true;

    fontDmSerifXlRegular: true;
    fontDmSerifXlRegularItalic: true;
    fontDmSerifHeroRegularItalic: true;
    fontDmSerifDisplayRegular: true;
  }
}
