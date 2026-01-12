import { notFound } from "next/navigation";

import Header from "@/core/components/header.component";
import Footer from "@/core/components/footer.component";

import ProjectInfoSection from "../components/info-section.component";
import PictureGallerySection from "../components/picture-gallery.component";
import FacilitiesSection from "../components/facilities-section.component";
import HowToReachSection from "../components/reach-location-section.component";

import data from "../data/hotels.data.json";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function InformationPage({ params }: PageProps) {
  const { slug } = await params; // ✅ REQUIRED

  const hotel = data.hotels.find((h) => h.slug === slug);

  if (!hotel) {
    notFound();
  }

  return (
    <>
      <Header />

      <ProjectInfoSection {...hotel.info} />

      <PictureGallerySection images={hotel.gallery.images} />

      <FacilitiesSection facilities={hotel.facilities} />

      <HowToReachSection
        title={hotel.location.title}
        address={hotel.location.address}
        coordinates={hotel.location.coordinates as [number, number]}
      />

      <Footer />
    </>
  );
}
