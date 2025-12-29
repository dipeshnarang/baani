import Image from "next/image";

interface CarouselImageComponentProps {
  src: string;
  alt: string;
  priority: boolean;
}

const CarouselImageComponent = ({
  src,
  alt,
  priority,
}: CarouselImageComponentProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className="object-cover"
    />
  );
};

export default CarouselImageComponent;
