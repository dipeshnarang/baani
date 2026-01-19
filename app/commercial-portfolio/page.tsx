import Header from "@/core/components/header.component";
import Footer from "@/core/components/footer.component";
import HeroBusinessSection from "./components/hero-section.component";
import { HERO_IMAGE_URL } from "./constants/commerical-portfolio.constant";
import PropertyGridSection from "./components/property-section.component";
import { Box } from "@mui/material";
import { COMMERCIAL_PORTFOLIO } from "./constants/commerical-portfolio.constant";

export default function Home() {
  return (
    <Box className="bg-white">
      <Header />
      <HeroBusinessSection
        backgroundImage="/images/blue-bg.png"
        buildingImage="/images/commercial-portfolio.png"
        titleItalic="Shaping the future of"
        titleNormal="business districts"
      />
      <PropertyGridSection items={COMMERCIAL_PORTFOLIO} />

      <Footer />
    </Box>
  );
}
