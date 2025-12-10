export default function Hero({ header, subtitle, imageUrl, cta }) {
  return (
    <section
      className="
        relative w-full min-h-[60vh] flex flex-col justify-center 
        px-6 py-20
      "
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="absolute inset-0 bg-blue-100/40 backdrop-blur-[1px]"></div>

      <div className="relative max-w-3xl">
        <h1 className="font-bold text-4xl md:text-5xl drop-shadow-md">
          {header}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg md:text-xl drop-shadow">{subtitle}</p>
        )}

        {cta && cta}
      </div>
    </section>
  );
}
