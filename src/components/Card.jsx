export default function Card({ items, buttonName }) {
  return (
    <div className="flex gap-y-8 gap-x-20 flex-wrap justify-center">
      {items.map((item, index) => (
        <article
          key={index}
          className="
            flex flex-col
            rounded-[1.6rem]
            overflow-hidden
            border border-charcoal-100 
            bg-white
            shadow-sm
            max-w-[518px]
            md:max-w-lg
          ">
          <div className="w-full aspect-2/1">
            {item.imgUrl && (
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex items-center justify-between px-5 py-4 bg-white">
            <div className="flex-1 pr-3">
              <h3 className="font-medium text-base md:text-lg text-black">
                {item.title}
              </h3>

              <p className="mt-1 text-sm md:text-base text-charcoal-300 leading-snug">
                {item.description}
              </p>
            </div>

            {buttonName && item.link && (
              <a
                href={item.link}
                className="
                shrink-0 px-4 py-2
                rounded-full bg-blue-200 text-black 
                text-sm md:text-base 
                font-medium
                hover:bg-blue-300 transition
              ">
                {buttonName || "Ver más"}
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
