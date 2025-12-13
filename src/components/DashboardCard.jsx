export default function DashboardCard({
  title,
  description,
  children,
  imageBox = false,
  onClick,
}) {
  return (
    <article
      onClick={onClick}
      className="
        rounded-[1.8rem] border border-charcoal-200 
        bg-white px-6 py-5 md:px-8 md:py-6 
        shadow-sm cursor-pointer transition-all

        hover:shadow-md hover:border-purple-300
        active:scale-[0.98]
      "
    >
      <div className="flex gap-4 items-start">
        {imageBox && (
          <div className="w-16 h-16 rounded-xl bg-charcoal-100/40" />
        )}

        <div className="flex-1">
          {title && (
            <h3 className="font-medium text-black text-lg md:text-xl">
              {title}
            </h3>
          )}

          {description && (
            <p className="text-charcoal-300 text-sm md:text-base mt-1">
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </article>
  );
}
