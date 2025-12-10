import { Carousel } from "../components/Carousel";
import Faqs from "../components/Faqs";
import Gallery from "../components/Gallery";
import Hero from "../components/hero";
import Numbers from "../components/numbers";

const faqItems = [
  {
    question: "¿Cuáles son los horarios de atención?",
    answer:
      "Nuestro centro dental está abierto de lunes a viernes de 9:00 a.m. a 9:00 p.m. y los sábados de 9:00 a.m. a 7:00 p.m.",
  },
  {
    question: "¿Cómo puedo saber la cobertura de mi seguro dental?",
    answer:
      "Puedes contactarnos directamente o consultar con tu aseguradora para verificar la cobertura de tu plan.",
  },
  {
    question: "¿Qué medidas de seguridad e higiene se implementan?",
    answer:
      "Seguimos estrictos protocolos de limpieza y desinfección para garantizar la seguridad de nuestros pacientes y personal.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        header="Tu sonrisa merece el mejor cuidado"
        subtitle="En el centro dental San José sede San Miguel ofrecemos servicios de calidad y atención de primera."
        cta={
          <a href="/agendar" className="button-primary">
            Agenda una cita
          </a>
        }
        imageUrl="hero-dental.jpeg"
      />
      <h2>Sonríe con orgullo</h2>
      <Numbers
        items={[
          { number: "10+", label: "Años de experiencia" },
          { number: "500+", label: "Pacientes satisfechos" },
          { number: "20", label: "Especialistas en odontología" },
        ]}
      />
      <h2>Nuestros convenios</h2>
      <Carousel
        speed="medium"
        logos={[
          { logoUrl: "rimac.svg", alt: "Rímac" },
          { logoUrl: "pacifico.svg", alt: "Pacífico" },
          { logoUrl: "la_positiva.png", alt: "La Positiva" },
          { logoUrl: "mapfre.webp", alt: "Mapfre", noPadding: true },
          { logoUrl: "sanitas.jpg", alt: "Sanitas" },
        ]}
      />
      <h2>Preguntas frecuentes</h2>
      {faqItems.map((item, index) => (
        <Faqs key={index} item={item} />
      ))}
      <h2>Conoce nuestras instalaciones</h2>
      <Gallery
        items={[
          { src: "rimac.svg", alt: "Rímac" },
          { src: "pacifico.svg", alt: "Pacífico" },
          { src: "la_positiva.png", alt: "La Positiva" },
          { src: "mapfre.webp", alt: "Mapfre", noPadding: true },
          { src: "sanitas.jpg", alt: "Sanitas" },
        ]}
      />
    </>
  );
}
