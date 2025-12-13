import { useEffect, useMemo, useState } from "react";
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

  const slideWrapperStyle = { transform: `translateX(-${current * 100}%)` };

  useEffect(() => {
    if (variant !== "secondary") return;
    const id = setInterval(next, AUTO_SCROLL_MS);
    return () => clearInterval(id);
  }, [variant, total]);

  const dots = useMemo(() => Array.from({ length: total }), [total]);

  if (variant === "primary") {
    return (
      <section className={clsx("w-full", className)}>
        <div className="mx-auto w-full max-w-4xl">
          <div className="relative">
            <div
              aria-hidden
              className="
                absolute -inset-3 md:-inset-4
                rounded-[2.25rem]
                bg-linear-to-br from-blue-200 via-cyan-200 to-emerald-200
                blur-2xl opacity-70
              "
            />

            <div
              className="
                relative overflow-hidden
                rounded-[2.25rem]
                border border-blue-100/70
                bg-white/80 backdrop-blur
                shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]
              ">
              <div className="w-full aspect-video">
                <div
                  className="h-full flex transition-transform duration-700 ease-out will-change-transform"
                  style={slideWrapperStyle}>
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="w-full shrink-0 h-full flex items-center justify-center">
                      <div
                        className={clsx(
                          "flex items-center justify-center",
                          item.noPadding ? "p-0" : "p-4 sm:p-6 md:p-10"
                        )}>
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="max-h-full max-w-full object-contain drop-shadow-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3 sm:px-4 md:px-5">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Anterior"
                  className="
                    pointer-events-auto
                    grid place-items-center
                    h-11 w-11 sm:h-12 sm:w-12
                    rounded-full
                    bg-white/85 backdrop-blur
                    border border-gray-200
                    shadow-md
                    hover:bg-white
                    hover:shadow-lg
                    active:scale-[0.98]
                    transition
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                  ">
                  <ArrowBackIosNewIcon
                    fontSize="small"
                    className="text-gray-700"
                  />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Siguiente"
                  className="
                    pointer-events-auto
                    grid place-items-center
                    h-11 w-11 sm:h-12 sm:w-12
                    rounded-full
                    bg-white/85 backdrop-blur
                    border border-gray-200
                    shadow-md
                    hover:bg-white
                    hover:shadow-lg
                    active:scale-[0.98]
                    transition
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                  ">
                  <ArrowForwardIosIcon
                    fontSize="small"
                    className="text-gray-700"
                  />
                </button>
              </div>

              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {dots.map((_, i) => {
                  const active = i === current;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-label={`Ir a la imagen ${i + 1}`}
                      aria-current={active ? "true" : undefined}
                      className={clsx(
                        "h-2.5 rounded-full transition-all",
                        active
                          ? "w-7 bg-linear-to-rrom-blue-500 to-emerald-400 shadow-sm"
                          : "w-2.5 bg-gray-300/80 hover:bg-gray-400/80"
                      )}
                    />
                  );
                })}
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-linear-to-b from-white/60 to-transparent"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const containerClasses =
    "relative overflow-hidden rounded-[2.5rem] bg-charcoal-100 w-[20rem] max-w-[60vw]";

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
                  item.noPadding ? "p-0" : "p-6"
                )}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
