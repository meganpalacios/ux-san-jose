export default function FeatureIcons({ items }) {
  return (
    <div className="feature-icons">
      {items.map((item, index) => (
        <div key={index} className="feature-icon">
          <div className="rounded-full bg-gray-400 w-24 h-24">
            {item.url && <img src={item.url} alt={item.label} />}
          </div>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
