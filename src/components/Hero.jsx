export default function Hero({ header, subtitle, imageUrl, cta }) {
  const hasImage = Boolean(imageUrl);

  return (
    <section
      className={`
        relative w-full 
        min-h-[50vh] md:min-h-[70vh]
        flex flex-col justify-center
        px-10 md:px-25 py-20 
        text-black
      `}
      style={{
        backgroundImage: hasImage
          ? `url(${imageUrl})`
          : `linear-gradient(135deg, var(--color-blue-200), var(--color-green))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      {hasImage && (
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      )}

      <div className="relative max-w-3xl">
        <h1 className="font-bold text-mobile-5xl md:text-desktop-4xl drop-shadow-md">
          {header}
        </h1>

        {subtitle && (
          <p className="mt-4 text-mobile-xl md:text-desktop-xl drop-shadow">
            {subtitle}
          </p>
        )}

        {cta && <div className="mt-6">{cta}</div>}
      </div>
    </section>
  );
}
