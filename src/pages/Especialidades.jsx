import Card from "../components/Card";
import Hero from "../components/Hero";
import Map from "../components/Map";

const cardItems = [
  {
    title: "Ortodoncia",
    description:
      "Corrige la posición de los dientes y mejora la estética de tu sonrisa con nuestros tratamientos de ortodoncia personalizados.",
    imgUrl: "/especialidades/ortodoncia.png",
    link: "/especialidades/ortodoncia",
  },
  {
    title: "Endodoncia",
    description:
      "Salva tus dientes naturales con nuestros tratamientos de endodoncia, diseñados para eliminar infecciones y preservar la salud bucal.",
    imgUrl: "/especialidades/endodoncia.png",
    link: "/especialidades/endodoncia",
  },
  {
    title: "Implantes Dentales",
    description:
      "Recupera la funcionalidad y estética de tu sonrisa con nuestros implantes dentales de alta calidad y durabilidad.",
    imgUrl: "/especialidades/implantes.png",
    link: "/especialidades/implantes-dentales",
  },
  {
    title: "Odontopediatría",
    description:
      "Cuidamos la salud bucal de los más pequeños con tratamientos especializados y un enfoque amigable para niños.",
    imgUrl: "/especialidades/odontopediatria.jpg",
    link: "/especialidades/odontopediatria",
  },
  {
    title: "Periodoncia",
    description:
      "Mantén tus encías saludables y previene enfermedades periodontales con nuestros tratamientos especializados en periodoncia.",
    imgUrl: "/especialidades/periodoncia.png",
    link: "/especialidades/periodoncia",
  },
  {
    title: "Cirugía",
    description:
      "Realizamos procedimientos quirúrgicos dentales con precisión y cuidado para mejorar tu salud bucal y bienestar general.",
    imgUrl: "/especialidades/cirugia-dental.jpg",
    link: "/especialidades/cirugia",
  },
];

export default function Especialidades() {
  return (
    <>
      <Hero
        header="Nuestras especialidades y servicios"
        imageUrl="hero-dental.jpeg"
      />
      <section>
        <Card items={cardItems} buttonName="Saber más" />
      </section>
      <section>
        <h2>Encuéntranos</h2>
        <Map />
      </section>
    </>
  );
}
