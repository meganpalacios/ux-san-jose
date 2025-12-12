import Card from "../components/Card";
import Hero from "../components/Hero";
import Map from "../components/Map";
import Testimonial from "../components/Testimonial";

const cardItems = [
  {
    title: "Carlos Jibaja",
    description:
      "Especialista en Ortodoncia con más de 10 años de experiencia en la corrección de la posición dental y mejora estética.",
    imgUrl: "/cards/ortodoncia.jpg",
    link: "/especialidades/ortodoncia",
  },
  {
    title: "Ana Martínez",
    description:
      "Especialista en Endodoncia con amplia experiencia en tratamientos para salvar dientes naturales.",
    imgUrl: "/cards/endodoncia.jpg",
    link: "/especialidades/endodoncia",
  },
  {
    title: "Luis Gómez",
    description:
      "Especialista en Implantes Dentales con amplia experiencia en la recuperación de funcionalidad y estética de la sonrisa.",
    imgUrl: "/cards/implantes.jpg",
    link: "/especialidades/implantes-dentales",
  },
  {
    title: "María Rodríguez",
    description:
      "Especialista en Odontopediatría con un enfoque amigable para el cuidado de la salud bucal de los más pequeños.",
    imgUrl: "/cards/odontopediatria.jpg",
    link: "/especialidades/odontopediatria",
  },
  {
    title: "Sofía López",
    description:
      "Especialista en Periodoncia con amplia experiencia en el mantenimiento de la salud de las encías y prevención de enfermedades periodontales.",
    imgUrl: "/cards/periodoncia.jpg",
    link: "/especialidades/periodoncia",
  },
  {
    title: "Miguel Fernández",
    description:
      "Cirujano dental con gran experiencia en procedimientos quirúrgicos para mejorar la salud bucal y el bienestar general.",
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
      <section>
        <Card items={cardItems} buttonName="Agendar" />
      </section>
      <section>
        <h2>Encuéntranos</h2>
        <Map />
      </section>
      <section>
        <Testimonial
          name="María González"
          treatment="Ortodoncia Invisible"
          timeAgo="Hace 2 meses"
          text={`"Excelente atención desde el primer día. El Dr. Jibaja y su equipo son muy profesionales y me explicaron cada paso del tratamiento. Los resultados superaron mis expectativas."`}
        />
      </section>
    </>
  );
}
