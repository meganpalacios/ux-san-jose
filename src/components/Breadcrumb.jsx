export default function Breadcrumb({ paths }) {
  const currentLink = window.location.pathname;
  const parentLink = currentLink.split("/").slice(0, -1).join("/");
  return (
    <p className="text-charcoal-300 mb-4">
      <a href={parentLink}>{paths.parent}</a> &gt;{" "}
      <span className="text-black">{paths.child}</span>
    </p>
  );
}
