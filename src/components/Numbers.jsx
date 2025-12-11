import clsx from "clsx";

export default function Numbers({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 items-baseline">
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
