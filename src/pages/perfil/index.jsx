import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import DashboardCard from "../../components/DashboardCard";

export default function Dashboard() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const name =
          user.displayName ||
          user.email?.split("@")[0].replace(".", " ") ||
          "Usuario";
        setUserName(name);
      }
    });

    return () => unsub();
  }, []);

  const appointment = JSON.parse(localStorage.getItem("appointment"));

  const meses = {
    "01": "Enero",
    "02": "Febrero",
    "03": "Marzo",
    "04": "Abril",
    "05": "Mayo",
    "06": "Junio",
    "07": "Julio",
    "08": "Agosto",
    "09": "Septiembre",
    "10": "Octubre",
    "11": "Noviembre",
    "12": "Diciembre",
  }

  return (
    <main className="section-spacing pb-20">
      <section>
        <header className="mb-8">
          <h1 className="font-medium text-mobile-4xl md:text-desktop-4xl leading-[105%]">
            {userName === "Megan Palacios" ? "Bienvenida" : "Bienvenido"},{" "}
            <br /> {userName}
          </h1>

          <p className="mt-4 text-charcoal-300 text-base md:text-lg max-w-lg">
            Gestiona tus citas y consulta tu información dental
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <DashboardCard
            title="Agendar cita"
            description="Solicita una nueva cita"
            imageBox
            link="/perfil/agendar_cita"
          />

          <DashboardCard
            title="Historial de Citas"
            description="Consulta tus citas pasadas"
            imageBox
            link="/perfil/historial"
          />

          <div>
            <h3>Próximas citas</h3>
            <DashboardCard
              modal={
                <>
                  <h3 className="text-center">¿No podrás asistir a tu cita?</h3>
                  <p className="text-center text-gray-500 mt-2 text-[15px]">
                    Puedes reagendarla o cancelarla según tu disponibilidad.
                  </p>
                  <div className="flex w-full gap-6 my-6 justify-center">
                    <button className="secondary-button text-base">
                      Reagendar cita
                    </button>
                    <button className="secondary-button bg-red-500 hover:bg-red-600 text-base">
                      Cancelar cita
                    </button>
                  </div>
                </>
              }>
              {appointment ? (
                <>
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-charcoal-100/40 rounded-xl w-16 h-16 flex items-center justify-center text-lg font-medium text-black">
                      {appointment.date.split("-")[2]}
                    </div>

                    <div>
                      <p className="font-medium text-black text-lg md:text-xl">
                        {appointment.date.split("-")[2]} {appointment.date.split("-")[1] in meses ? meses[appointment.date.split("-")[1]] : appointment.date.split("-")[1]} {appointment.date.split("-")[0]}
                      </p>
                      <p className="text-black text-base">{appointment.time}</p>
                      <p className="text-black text-base">Consulta inicial</p>
                    </div>
                  </div>

                  <p className="mt-4 text-charcoal-300 text-sm">
                    Recuerda llegar 30 minutos antes
                  </p>
                </>
              ) : (
                <p>No tienes citas programadas.</p>
              )}
            </DashboardCard>
          </div>
        </div>
      </section>
    </main>
  );
}
