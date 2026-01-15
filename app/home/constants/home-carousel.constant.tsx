import { Gem, Building, Pyramid, Rocket, UserStar } from "lucide-react";

export const homeCarouselSlides = [
  {
    image: "/images/home-1.jpg",
    title: ["Finest Work of Architecture", "with Ample Prospects"],
    subtitle: ["Live your best life and find your perfect property"],
  },
  {
    image: "/images/home-2.jpg",
    title: ["Finest Work of Architecture", "with Ample Prospects"],
    subtitle: ["Live your best life and find your perfect property"],
  },
  {
    image: "/images/home-3.jpg",
    title: ["Finest Work of Architecture", "with Ample Prospects"],
    subtitle: ["Live your best life and find your perfect property"],
  },
];

export const STATS_SECTION = {
  header: "Baani Group — Transforming Spaces Into Experiences",
  description:
    "At Baani, we always think ahead but our focus remains unerringly on delighting our customers and stakeholders. Functioning through an array of best-of-class practices and utilizing leading technologies, we believe either in staying ahead of the wave or riding it.",
  stats: [
    { value: 35, label: "Years" },
    { value: 15, label: "Projects" },
    // { value: 8, label: "Awards" },
    // { value: 24, label: "Projects" },
  ],
};

export const EXPLORE_SECTION = {
  header: "Explore our curated",
  subHeader: "hotel collection",
  items: [
    {
      image: "/images/baani-city-center.png",
      title: "Hilton - Baani City Centre",
      subtitle: "Sector - 63",
      link: "/information/hilton-baani-city-centre",
    },
    {
      image: "/images/double-tree-hilton.jpg",
      title: "Double Tree by Hilton",
      subtitle: "Sector - 50",
      link: "/information/double-tree-by-hilton",
    },
  ],
};

export const LANDMARK_SECTION = {
  header: ["Building", "signature landmarks"],
  subheader: ["across urban landscapes"],
  landmarks: [
    {
      image: "/images/retail.png",
      title: "Retail",
      description: "Spaces enabling seamless business–customer interaction.",
    },
    {
      image: "/images/office.png",
      title: "Offices",
      description: "Environments that ignite productivity and elevate success.",
    },
    {
      image: "/images/hotel.png",
      title: "Hotels",
      description:
        "Properties meticulously crafted to enrich every moment of your stay.",
    },
  ],
};

export const EXPLORE_LANDMARK = {
  header: ["Elevating the Cityscape", "with"],
  subheader: ["Iconic Landmarks"],
  imageList: [
    "/images/l-2.jpg",
    "/images/l-3.jpg",
    "/images/l-4.jpg",
    "/images/l-5.jpg",
    "/images/l-6.jpg",
    "/images/l-7.jpg",
    "/images/l-8.jpg",
    "/images/l-9.jpg",
    "/images/l-10.jpg",
  ],
  pointers: [
    {
      icon: <Gem />,
      text: "Premium High Street Retail and Service Apartments",
    },
    {
      icon: <Building />,
      text: "Luxurious Architectural Design",
    },
    {
      icon: <Pyramid />,
      text: "Timeless landscapes with elegance",
    },
    {
      icon: <Rocket />,
      text: "Blend of Technology and Creativity",
    },
    {
      icon: <UserStar />,
      text: "Impeccable craftsmanship",
    },
  ],
};
