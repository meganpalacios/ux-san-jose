import Card from "../../components/Card";
import Hero from "../../components/Hero";
import Map from "../../components/Map";

const cardItems = [
  {
    title: "Ortodoncia",
    description:
      "Transforma tu imagen y eleva tu seguridad con una sonrisa perfectamente alineada y armónica. Diseñamos tu tratamiento ideal fusionando estética y salud dental con la última tecnología.",
    imgUrl: "/especialidades/ortodoncia.png",
    link: "/especialidades/ortodoncia",
  },
  {
    title: "Endodoncia",
    description:
      "Preserva la belleza auténtica de tu sonrisa salvando tus dientes naturales desde la raíz. Evita extracciones innecesarias y mantén tu dentadura completa, sana y radiante por más tiempo.",
    imgUrl: "/especialidades/endodoncia.png",
    link: "/especialidades/endodoncia",
  },
  {
    title: "Implantes Dentales",
    description:
      "Completa tu sonrisa y recupera la libertad de reír a carcajadas sin inseguridades ni huecos. Diseñamos nuevas piezas que lucen y se sienten tan naturales como tú, devolviéndote tu estética y autoestima.",
    imgUrl: "/especialidades/implantes.png",
    link: "/especialidades/implantes-dentales",
  },
  {
    title: "Odontopediatría",
    description:
      "Transformamos la visita al dentista en una aventura divertida para que tus hijos crezcan amando cuidar su salud. Construimos cimientos fuertes para un futuro brillante, regalándoles sonrisas sanas y libres de miedo.",
    imgUrl: "/especialidades/odontopediatria.jpg",
    link: "/especialidades/odontopediatria",
  },
  {
    title: "Periodoncia",
    description:
      "Dale a tu sonrisa el marco perfecto luciendo unas encías sanas, rosadas y armónicas. Cuidamos la base de tu belleza dental para que tus dientes brillen con total seguridad.",
    imgUrl: "/especialidades/periodoncia.png",
    link: "/especialidades/periodoncia",
  },
  {
    title: "Cirugía",
    description:
      "Libera tu sonrisa de molestias y protege la alineación perfecta de tus dientes eliminando lo que te sobra. Vive una experiencia segura y tranquila, diseñada para que recuperes tu bienestar y estética facial.",
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
