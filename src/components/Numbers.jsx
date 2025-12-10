export default function Numbers({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="number-item">
          <h3>{item.number}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
