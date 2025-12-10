import clsx from "clsx";

type GalleryVariant = "primary" | "secondary";

interface GalleryItem {
  src: string;
  alt: string;
  noPadding?: boolean;
}

interface GalleryProps {
  variant?: GalleryVariant;
  items: GalleryItem[];
  className?: string;
}

export default function Gallery({
  variant = "primary",
  items,
  className,
}: GalleryProps) {
  if (variant === "secondary") {
    return (
      <div className={className}>
        <div>Gallery Secondary</div>
      </div>
    );
  }

  if (variant !== "primary") return null;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={clsx("aspect-5/4 bg-white text-black rounded-lg flex items-center justify-center overflow-hidden", item.noPadding ? "p-0" : "p-8")}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-auto w-auto"
            />
          </div>
        ))}
      </div>
      <a href="/instalaciones">Ver más</a>
    </div>
  );
}
