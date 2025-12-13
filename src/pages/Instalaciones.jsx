import FeatureIcons from "../components/FeatureIcons";
import Hero from "../components/Hero";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import WorkIcon from "@mui/icons-material/Work";
import TvIcon from "@mui/icons-material/Tv";
import Gallery from "../components/Gallery";
import Map from "../components/Map";

export default function Instalaciones() {
  return (
    <>
      <Hero
        header="Conoce nuestras instalaciones"
        subtitle="Tecnología de punta para brindar el mejor cuidado a nuestros pacientes."
        imageUrl="hero-dental.jpeg"
      />
      <h2 className="mb-10">Consultorio</h2>
      <Gallery
        items={[
          { src: "/instalaciones/fachada.jpg", alt: "Fachada" },
          { src: "/instalaciones/recepcion.jpg", alt: "Recepción" },
          { src: "/instalaciones/unidad-1.jpg", alt: "Unidad odontológica" },
          { src: "/instalaciones/unidad-2.jpg", alt: "Unidad odontológica" },
          { src: "/instalaciones/recepcion.jpg", alt: "Recepción" },
        ]}
      />
      <section>
        <FeatureIcons
          items={[
            {
              label: "Wi-Fi gratuito",
              icon: <WifiIcon className="text-[3.5rem]!" />,
            },
            {
              label: "Estación de carga",
              icon: <BatteryChargingFullIcon className="text-[3.5rem]!" />,
            },
            {
              label: "Estación de té",
              icon: <EmojiFoodBeverageIcon className="text-[3.5rem]!" />,
            },
            {
              label: "Mini coworking",
              icon: <WorkIcon className="text-[3.5rem]!" />,
            },
            {
              label: "TV en sala de espera",
              icon: <TvIcon className="text-[3.5rem]!" />,
            },
          ]}
        />
      </section>
      <section>
        <h2>Encuéntranos</h2>
        <Map />
      </section>
    </>
  );
}
