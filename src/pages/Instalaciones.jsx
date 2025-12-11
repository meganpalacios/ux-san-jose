import FeatureIcons from "../components/FeatureIcons";
import Hero from "../components/Hero";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import WorkIcon from "@mui/icons-material/Work";
import TvIcon from "@mui/icons-material/Tv";

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
    </>
  );
}
