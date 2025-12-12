import { useState } from "react";
import Hero from "../components/Hero";
import Map from "../components/Map";

export default function Agendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <Hero
        header="Agenda tu cita aquí"
        subtitle="Elige el canal que prefieras y reserva tu cita hoy."
      />

      <main className="section-spacing">
        <section className="max-w-5xl mx-auto space-y-10">
          <header className="text-center space-y-3">
            <h2>Canales de atención</h2>
            <p className="text-charcoal-300 text-sm md:text-base">
              Estamos listos para ayudarte a agendar tu cita por el canal que te resulte más cómodo.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="rounded-3xl bg-white border border-charcoal-100 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-lg text-black mb-2">Teléfono</h3>
                <p className="text-charcoal-300 text-sm md:text-base">
                  Llámanos y agenda tu cita con nuestro equipo de recepción.
                </p>
              </div>
              <a
                href="tel:+51991780763"
                className="main-link mt-4 w-full justify-center"
              >
                Llamar al 991 780 763
              </a>
            </article>

            <article className="rounded-3xl bg-white border border-charcoal-100 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-lg text-black mb-2">WhatsApp</h3>
                <p className="text-charcoal-300 text-sm md:text-base">
                  Escríbenos por WhatsApp para coordinar tu cita de forma rápida.
                </p>
              </div>
              <a
                href="https://wa.me/51991780763"
                target="_blank"
                rel="noreferrer"
                className="main-link mt-4 w-full justify-center"
              >
                Abrir WhatsApp
              </a>
            </article>

            <article className="rounded-3xl bg-white border border-charcoal-100 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-lg text-black mb-2">
                  Portal web
                </h3>
                <p className="text-charcoal-300 text-sm md:text-base">
                  Crea una cuenta o inicia sesión para gestionar tus citas en línea.
                </p>
              </div>
              <button
                type="button"
                onClick={toggleModal}
                className="main-button mt-4 w-full"
              >
                Agenda por web
              </button>
            </article>
          </div>

          <section className="rounded-3xl bg-off-white border border-charcoal-100 p-6 md:p-8 shadow-sm">
            <h3 className="font-medium text-lg md:text-xl text-black mb-2">
              También puedes visitarnos
            </h3>
            <p className="text-charcoal-300 text-sm md:text-base mb-1">
              Av. Rafael Escardó 771, San Miguel
            </p>
            <p className="text-charcoal-300 text-sm">
              Te esperamos para ayudarte a encontrar el tratamiento ideal para ti.
            </p>
            <Map />
          </section>
        </section>
      </main>

      {isModalOpen && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/40 backdrop-blur-sm
          "
          onClick={toggleModal}
        >
          <div
            className="
              relative w-full max-w-lg mx-4
              rounded-3xl bg-white
              p-6 md:p-8
              shadow-xl
            "
            onClick={(e) => e.stopPropagation()}
          >
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
              aria-label="Cerrar"
            >
              ✕
            </button>

            <h2 className="mb-4">
              Agenda tu cita por la web de manera fácil y rápida
            </h2>

            <p className="text-charcoal-300 text-sm md:text-base mb-6">
              Crea una cuenta para llevar el control de tus citas o inicia sesión
              si ya formas parte de nuestros pacientes.
            </p>

            <div className="space-y-4">
              <a href="/crear-cuenta" className="main-button w-full text-center">
                Crear una cuenta
              </a>

              <div className="text-center text-sm md:text-base text-charcoal-300">
                <p className="mb-1">¿Ya tienes una cuenta?</p>
                <a href="/iniciar-sesion" className="inline-flex text-base">
                  Inicia sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
