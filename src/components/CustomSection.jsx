export default function CustomSection({ title, subtitle, children }) {
  return (
    <section className="max-w-5xl mx-auto">
      <header className="mb-6 md:mb-8">
        {title && <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{title}</h2>}
        {subtitle && <p className="mt-2 text-gray-600 leading-relaxed">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
