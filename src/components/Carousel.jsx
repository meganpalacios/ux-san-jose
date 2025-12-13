import clsx from "clsx";

export const Carousel = ({ logos, speed = "medium" }) => {
  const minimumLogos = 14;
  const extras = Math.ceil(minimumLogos / logos.length) - 1;

  const speedAnimation = {
    slow: "animate-[scrolling_30s_linear_infinite]",
    medium: "animate-[scrolling_10s_linear_infinite]",
    fast: "animate-[scrolling_5s_linear_infinite]",
  };
  const animatedGroupClass = clsx(
    "flex gap-5 pr-5 will-change-transform",
    speedAnimation[speed]
  );
  const logoBoxClass =
    "aspect-[5/4] h-50 bg-white text-black rounded-lg flex items-center justify-center";

  const logoItems = logos.map((logo, i) => (
    <div key={i} className={clsx(logoBoxClass, logo.noPadding ? "p-0" : "p-8")}>
      {logo.href ? (
        <a href={logo.href} title={logo.title} target="_blank">
          <img
            width={20}
            height={20}
            src={logo.logoUrl}
            alt={logo.alt}
            className="h-auto w-auto"
          />
        </a>
      ) : (
        <img
          width={20}
          height={20}
          src={logo.logoUrl}
          alt={logo.alt}
          className="h-auto w-auto"
        />
      )}
    </div>
  ));

  const extraGroups = Array.from({ length: extras }, (_, idx) => (
    <div aria-hidden className={animatedGroupClass} key={`extra-${idx}`}>
      {logoItems}
    </div>
  ));

  return (
    <div className="flex w-full overflow-hidden my-8">
      <div className={animatedGroupClass}>{logoItems}</div>
      {extraGroups}
    </div>
  );
};
