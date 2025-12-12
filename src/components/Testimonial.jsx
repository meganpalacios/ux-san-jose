import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Testimonial({
  name,
  treatment,
  timeAgo,
  text,
  rating = 5,
}) {
  const stars = Math.max(0, Math.min(5, rating));

  return (
    <article
      className="
        w-full
        rounded-[1.8rem]
        border border-blue-100
        bg-off-white
        shadow-sm
        px-6 py-6 md:px-8 md:py-8
      "
    >
      <div className="mb-4 text-blue-200">
        <FormatQuoteIcon fontSize="large" />
      </div>

      <div className="mb-4 flex gap-1 text-blue-300">
        {Array.from({ length: stars }).map((_, i) => (
          <StarIcon key={i} fontSize="small" />
        ))}
      </div>

      <p className="text-charcoal-300 italic text-base md:text-lg leading-relaxed">
        {text}
      </p>
      <hr className="my-6 border-blue-100" />
      <div className="space-y-1">
        <p className="font-medium text-base md:text-lg text-black">
          {name}
        </p>
        <p className="text-sm md:text-base text-charcoal-300">
          {treatment}
        </p>
        <p className="text-xs md:text-sm text-charcoal-300">
          {timeAgo}
        </p>
      </div>
    </article>
  );
}
