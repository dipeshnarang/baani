import HomeCarousel from "@/home/components/home-carousel";
import Header from "@/core/components/header.component";
import StatsSection from "@/home/components/stats-section.component";
import ExploreSection from "@/home/components/explore-section.component";
import LandmarkSection from "./home/components/landmark-section.component";
import IconicLandmarksSection from "./home/components/explore-landmark-section.component";
import PdfDocSection from "./home/components/pdf-section.component";
import Footer from "./core/components/footer.component";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className="bg-white">
      <Header />
      <HomeCarousel />
      <StatsSection />
      <ExploreSection />
      <LandmarkSection />
      <IconicLandmarksSection />
      <PdfDocSection />
      <Footer />
    </Box>
  );
}
