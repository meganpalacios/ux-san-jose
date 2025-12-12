import { useEffect, useState } from "react";
import clsx from "clsx";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

const AUTO_SCROLL_MS = 5000;

export default function Gallery({
  variant = "primary",
  items,
  className,
}: GalleryProps) {
  const [current, setCurrent] = useState(0);

  if (!items?.length) return null;

  const total = items.length;
  const next = () => setCurrent((p) => (p + 1) % total);
  const prev = () => setCurrent((p) => (p - 1 + total) % total);

  const containerClasses =
    "relative overflow-hidden rounded-[2.5rem] bg-charcoal-100";

  const slideWrapperStyle = {
    transform: `translateX(-${current * 100}%)`,
  };

  // ─── Secondary: Autoscroll only ──────────────────────────────
  useEffect(() => {
    if (variant !== "secondary") return;

    const id = setInterval(next, AUTO_SCROLL_MS);
    return () => clearInterval(id);
  }, [variant, total]);

  if (variant === "secondary") {
    return (
      <div className={clsx("w-full relative", className)}>
        <div className={containerClasses}>
          <div
            className="flex transition-transform duration-700 ease-out"
            style={slideWrapperStyle}>
            {items.map((item, i) => (
              <div
                key={i}
                className="w-full shrink-0 flex items-center justify-center">
                <div
                  className={clsx(
                    "w-full h-full flex items-center justify-center",
                    item.noPadding ? "p-0" : "p-10 md:p-14"
                  )}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <a href="/instalaciones" className="main-button absolute bottom-13 right-13">
          Ver más
        </a>
      </div>
    );
  }

  // ─── Primary Variant (Manual controls) ────────────────────────
  return (
    <div className={clsx("flex items-center gap-4 max-w-200", className)}>
      <button
        type="button"
        onClick={prev}
        aria-label="Anterior"
        className="
          flex h-12 w-12 items-center justify-center rounded-full
          bg-linear-to-br from-blue-200 to-green text-off-white shadow-md
          hover:brightness-110 hover:shadow-lg
          focus-visible:outline focus-visible:outline-purple-300
          transition-all
        ">
        <ArrowBackIosNewIcon fontSize="small" />
      </button>

      <div className="flex-1">
        <div className={containerClasses}>
          <div
            className="flex transition-transform duration-700 ease-out"
            style={slideWrapperStyle}>
            {items.map((item, i) => (
              <div
                key={i}
                className="w-full shrink-0 flex items-center justify-center">
                <div
                  className={clsx(
                    "w-full h-full flex items-center justify-center",
                    item.noPadding ? "p-0" : "p-10 md:p-14"
                  )}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={next}
        aria-label="Siguiente"
        className="
          flex h-12 w-12 items-center justify-center rounded-full
          bg-linear-to-br from-blue-200 to-green text-off-white shadow-md
          hover:brightness-110 hover:shadow-lg
          focus-visible:outline focus-visible:outline-purple-300
          transition-all
        ">
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </div>
  );
}
