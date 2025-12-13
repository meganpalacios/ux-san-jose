import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si el usuario tiene displayName, úsalo. Si no, usa el correo.
        const name =
          user.displayName ||
          user.email?.split("@")[0].replace(".", " ") ||
          "Usuario";
        setUserName(name);
      }
    });

    return () => unsub();
  }, []);

  return (
    <main className="section-spacing pb-20">
      <section>
        <header className="mb-8">
          <h1 className="font-medium text-mobile-4xl md:text-desktop-4xl leading-[105%]">
            Bienvenido, <br /> {userName}
          </h1>

          <p className="mt-4 text-charcoal-300 text-base md:text-lg max-w-lg">
            Gestiona tus citas y consulta tu información dental
          </p>
        </header>

        <div className="flex flex-col gap-6 md:gap-8">
          <DashboardCard
            title="Agendar cita"
            description="Solicita una nueva cita"
            imageBox
            onClick={() => (window.location.href = "/agendar")}
          />

          <DashboardCard
            title="Historial de Citas"
            description="Consulta tus citas pasadas"
            imageBox
            onClick={() => (window.location.href = "/historial")}
          />

          <DashboardCard>
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-charcoal-100/40 rounded-xl w-16 h-16 flex items-center justify-center text-lg font-medium text-black">
                25
              </div>

              <div>
                <p className="font-medium text-black text-lg md:text-xl">
                  25 de noviembre
                </p>
                <p className="text-black text-base">6pm</p>
                <p className="text-black text-base">Consulta inicial</p>
              </div>
            </div>

            <p className="mt-4 text-charcoal-300 text-sm">
              Recuerda llegar 30 minutos antes
            </p>
          </DashboardCard>
        </div>
      </section>
    </main>
  );
}
