import { useState } from "react";

export default function DashboardCard({
  title,
  description,
  children,
  imageBox = false,
  link,
  modal,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const card = (
    <article
      className="
          rounded-[1.8rem] border border-blue-200
          bg-white px-6 py-5 md:px-8 md:py-6 
          shadow-sm cursor-pointer transition-all
          min-w-fit max-w-[80vw] smL:max-w-[60vw]
          hover:shadow-md hover:border-blue-400
          active:scale-[0.98]
        "
      onClick={modal && toggleModal}>
      <div className="flex gap-4 items-start">
        {imageBox && (
          <div className="w-16 h-16 rounded-xl bg-charcoal-100/40" />
        )}

        <div className="flex-1">
          {title && (
            <h3 className="font-medium text-black text-lg md:text-xl">
              {title}
            </h3>
          )}

          {description && (
            <p className="text-charcoal-300 text-sm md:text-base mt-1">
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </article>
  );

  return (
    <>
      {link ? <a href={link} className="no-underline">{card}</a> : card}
      {isModalOpen && modal && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/40 backdrop-blur-sm
          "
          onClick={toggleModal}>
          <div
            className="
              relative w-full max-w-lg mx-4
              rounded-3xl bg-white
              p-6 md:p-8
              shadow-xl
            "
            onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="
                absolute right-4 top-4
                h-8 w-8 rounded-full
                flex items-center justify-center
                text-charcoal-300 hover:text-black
                hover:bg-charcoal-100/60
                transition-colors
              "
              onClick={toggleModal}
              aria-label="Cerrar">
              ✕
            </button>

            {modal}

            <div className="flex justify-end">
              <button className="main-button" onClick={toggleModal}>Volver</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
