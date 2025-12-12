import Hero from "../components/Hero";
import { useState } from "react";

export default function Agendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Hero
        header="Agenda tu cita aquí"
        subtitle="Elige tu medio y agenda hoy"
      />
      <h2>Canales de atención</h2>
      <p>Teléfono: 991 780 763</p>
      <a href="" target="_blank">
        WhatsApp
      </a>
      <button onClick={() => setIsModalOpen(!isModalOpen)}>
        Agenda por web
      </button>
      <p>O visítanos en Av. Rafael Escardó 771, San Miguel</p>
      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}>
              X
            </button>
            <h2>
              Agenda tu cita por la web con nosotros de manera fácil y rápida
            </h2>
            <div>
              <a href="/crear-cuenta">Crea una cuenta</a>
              <p>¿Ya tienes una cuenta?</p>
              <a href="/iniciar-sesion">Inicia sesión</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
