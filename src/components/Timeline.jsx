export default function Timeline({ steps = [] }) {
  return (
    <ol className="relative grid gap-6 pl-10">
      <div
        aria-hidden
        className="
          absolute left-[18px] top-0 h-full w-[3px]
          bg-linear-to-b
          from-blue-400
          via-cyan-400
          to-emerald-400
          rounded-full
          opacity-90
        "
      />

      {steps.map((step, idx) => (
        <li key={idx} className="relative flex gap-5 items-center">
          <div
            className="
              relative z-10
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-full
              bg-linear-to-br
              from-blue-500
              to-emerald-400
              text-white font-semibold text-sm
              shadow-md
              ring-4 ring-white
            "
          >
            {idx + 1}
          </div>
            <p className="text-gray-700">
              {step}
            </p>
        </li>
      ))}
    </ol>
  );
}
