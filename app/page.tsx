import HomeCarousel from "@/home/components/home-carousel";
import Header from "@/core/components/header.component";
import StatsSection from "@/home/components/stats-section.component";
import ExploreSection from "@/home/components/explore-section.component";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeCarousel />
      <StatsSection />
      <ExploreSection />
    </div>
  );
}
