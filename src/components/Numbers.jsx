import clsx from "clsx";

export default function Numbers({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 place-items-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={clsx(
            "flex flex-col items-center justify-center text-center p-4",
            items.length % 2 === 1 && index === items.length - 1 && "col-span-2 md:col-span-1"
          )}>
          <h3 className="display-large pb-0 mb-1">{item.number}</h3>
          <span className="mb-3 h-1 w-8 rounded-full bg-purple-500" />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

/*
type NumbersItem = {
  number: string | number;
  label: string;
};

export default function Numbers({ items }: { items: NumbersItem[] }) {
  return (
    <section className="w-full">
      <div
        className="
          bg-off-white rounded-3xl 
          px-6 py-8 md:px-10 md:py-12 
          shadow-sm
        "
      >
        <div
          className="
            grid grid-cols-1 md:grid-cols-3 
            gap-8 md:gap-12 
            text-center
          "
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center justify-start
                gap-2
              "
            >
              <span className="mb-1 h-1 w-8 rounded-full bg-purple-500" />

              <h3 className="display-small md:display-large text-black">
                {item.number}
              </h3>

              <p className="mt-1 text-sm md:text-base text-charcoal-300 leading-snug max-w-[14rem]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

*/
