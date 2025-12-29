import HomeCarousel from "@/app/home/components/home-carousel";
import Header from "@/app/core/components/header.component";
import StatsSection from "@/app/home/components/stats-section.component";
import ExploreSection from "@/app/home/components/explore-section.component";

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
