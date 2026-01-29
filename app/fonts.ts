import {
  DM_Sans,
  Ubuntu,
  DM_Serif_Text,
  Playfair_Display,
} from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: true,
});

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: true,
});

export const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  style: ["normal", "italic"],
});

export const dmSerifItalic = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});
