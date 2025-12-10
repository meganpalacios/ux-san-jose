import Card from "../components/Card";
import Hero from "../components/Hero";

const cardItems = [
  {
    title: "Ortodoncia",
    description:
      "Corrige la posición de los dientes y mejora la estética de tu sonrisa con nuestros tratamientos de ortodoncia personalizados.",
    imgUrl: "/cards/ortodoncia.jpg",
    link: "/especialidades/ortodoncia",
  },
  {
    title: "Endodoncia",
    description:
      "Salva tus dientes naturales con nuestros tratamientos de endodoncia, diseñados para eliminar infecciones y preservar la salud bucal.",
    imgUrl: "/cards/endodoncia.jpg",
    link: "/especialidades/endodoncia",
  },
  {
    title: "Implantes Dentales",
    description:
      "Recupera la funcionalidad y estética de tu sonrisa con nuestros implantes dentales de alta calidad y durabilidad.",
    imgUrl: "/cards/implantes.jpg",
    link: "/especialidades/implantes-dentales",
  },
  {
    title: "Odontopediatría",
    description:
      "Cuidamos la salud bucal de los más pequeños con tratamientos especializados y un enfoque amigable para niños.",
    imgUrl: "/cards/odontopediatria.jpg",
    link: "/especialidades/odontopediatria",
  },
  {
    title: "Periodoncia",
    description:
      "Mantén tus encías saludables y previene enfermedades periodontales con nuestros tratamientos especializados en periodoncia.",
    imgUrl: "/cards/periodoncia.jpg",
    link: "/especialidades/periodoncia",
  },
  {
    title: "Cirugía",
    description:
      "Realizamos procedimientos quirúrgicos dentales con precisión y cuidado para mejorar tu salud bucal y bienestar general.",
    imgUrl: "/cards/cirugia.jpg",
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
      {cardItems.map((items, index) => (
        <Card
          key={index}
          title={items.title}
          description={items.description}
          imgUrl={items.imgUrl}
          link={items.link}
        />
      ))}
    </>
  );
}
