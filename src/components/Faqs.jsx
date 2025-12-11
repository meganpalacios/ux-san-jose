import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import clsx from "clsx";
import { useState } from "react";

export default function Faqs({ item }) {
  const [open, setOpen] = useState(false);

  const handleToggle = (e) => {
    setOpen(e.currentTarget.open);
  };

  return (
    <details
      open={open}
      onToggle={handleToggle}
      className={clsx(
        "w-full rounded-xl border border-blue-200 bg-white transition-all my-4",
        open ? "shadow-md" : "shadow-sm"
      )}
    >
      <summary
        className="
          flex items-center justify-between cursor-pointer
          p-4 text-left font-medium text-black select-none
          hover:bg-blue-100/40 transition-colors
          rounded-xl
        "
      >
        {item.question}

        <ArrowForwardIosIcon
          className={clsx(
            "transition-transform duration-300 text-gray-500",
            open ? "rotate-90" : "rotate-0"
          )}
          fontSize="small"
        />
      </summary>

      <div className="px-4 pb-4 pt-1 text-gray-700 leading-relaxed">
        {item.answer}
      </div>
    </details>
  );
}
