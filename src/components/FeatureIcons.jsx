export default function FeatureIcons({ items }) {
  return (
    <div className="flex gap-y-8 gap-x-20 flex-wrap justify-center">
      {items.map((item, index) => (
        <div key={index} className="grid justify-center items-center w-min">
          <div className="rounded-full bg-gray-400 w-24 h-24 flex items-center justify-center">
            {item.icon && item.icon}
          </div>
          <p className="text-center">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
