import clsx from "clsx";

export default function SimpleCard({ className, children }) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-blue-100 bg-white shadow-sm",
        "p-5 md:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
