import FeatureIcons from "../components/FeatureIcons";
import Hero from "../components/Hero";

export default function Instalaciones() {
  return (
    <>
      <Hero
        header="Conoce nuestras instalaciones"
        subtitle="Tecnología de punta para brindar el mejor cuidado a nuestros pacientes."
        imageUrl="hero-dental.jpeg"
      />
      <h2>Equipo médico</h2>
      <h2>Consultorio</h2>
      <FeatureIcons items={[
        { label: "Wi-Fi gratuito" },
        { label: "Estación de carga" },
        { label: "Estación de té" },
        { label: "Mini coworking" },
        { label: "TV en sala de espera" },
      ]} />
    </>
  );
}
