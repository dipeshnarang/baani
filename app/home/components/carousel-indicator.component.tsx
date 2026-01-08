"use client";

interface CarouselIndicatorProps {
  currentIndex: number; // 0-based
  total: number;
  onChange: (index: number) => void;
}

export default function CarouselIndicator({
  currentIndex,
  total,
  onChange,
}: CarouselIndicatorProps) {
  return (
    <div className="absolute bottom-20 right-30 flex flex-col items-end gap-3 text-white">
      <div className="flex items-center gap-4 text-sm tracking-widest">
        <span>{String(currentIndex + 1).padStart(2, "0")}</span>
        <div className="h-px w-20 bg-white/60" />
        <span>{String(total).padStart(2, "0")}</span>
      </div>

      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onChange(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-12 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
