import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AppointmentBooking = ({ doctors }) => {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 11));

  useEffect(() => {
    const bookWith = localStorage.getItem("bookWith");
    if (bookWith && doctors.length > 0) {
      const doctor = doctors.find((d) => d.id === bookWith);
      if (doctor) {
        setSelectedDoctor(doctor);
        localStorage.removeItem("bookWith");
      }
    }
  }, [doctors]);

  const saveDate = () => {
    localStorage.setItem("appointment", JSON.stringify({
      doctorId: selectedDoctor,
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
    }));
    navigate("/perfil");
  }

  // Festivos peruanos (2025-2026)
  const holidays = [
    "2025-12-25", // Navidad
    "2026-01-01", // Año Nuevo
    "2026-01-06", // Reyes Magos
    "2026-04-09", // Jueves Santo
    "2026-04-10", // Viernes Santo
    "2026-05-01", // Día del Trabajo
    "2026-06-29", // San Pedro y San Pablo
    "2026-07-28", // Fiestas Patrias
    "2026-07-29", // Fiestas Patrias
    "2026-08-30", // Santa Rosa de Lima
    "2026-10-08", // Combate de Angamos
    "2026-11-01", // Todos los Santos
    "2026-12-08", // Inmaculada Concepción
    "2026-12-25", // Navidad
  ];

  // Generar slots de tiempo
  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = 9; hour <= 18; hour++) {
      slots.push(`${hour.toString().padStart(2, "0")}:00`);
      if (hour < 18) {
        slots.push(`${hour.toString().padStart(2, "0")}:30`);
      }
    }
    return slots;
  }, []);

  // Obtener días del mes
  const getCalendarDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Días del mes anterior
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  // Verificar si un día está disponible
  const isDayAvailable = (date) => {
    if (!date || !selectedDoctor) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    // Verificar si es antes de hoy
    if (checkDate < today) return false;

    // Verificar si es antes del 13 de diciembre 2025
    const minDate = new Date(2025, 11, 13);
    if (checkDate < minDate) return false;

    // Verificar si es después de febrero 2026
    const maxDate = new Date(2026, 2, 0); // Último día de febrero
    if (checkDate > maxDate) return false;

    // Verificar si es fin de semana
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return false;

    // Verificar si es festivo
    const dateStr = date.toISOString().split("T")[0];
    if (holidays.includes(dateStr)) return false;

    // Verificar si tiene todas las horas ocupadas
    const bookedOnDate = selectedDoctor.booked.filter(
      (booking) => booking.date === dateStr
    );

    return bookedOnDate.length < timeSlots.length;
  };

  // Obtener horas disponibles para una fecha
  const getAvailableTimeSlots = () => {
    if (!selectedDate || !selectedDoctor) return [];

    const dateStr = selectedDate.toISOString().split("T")[0];
    const bookedTimes = selectedDoctor.booked
      .filter((booking) => booking.date === dateStr)
      .map((booking) => booking.time);

    return timeSlots.filter((slot) => !bookedTimes.includes(slot));
  };

  const calendarDays = getCalendarDays(currentMonth);
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const handlePrevMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    if (newMonth >= new Date(2025, 11, 1)) {
      setCurrentMonth(newMonth);
    }
  };

  const handleNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    if (newMonth <= new Date(2026, 1, 1)) {
      setCurrentMonth(newMonth);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <Breadcrumb paths={{ parent: "Perfil", child: "Agendar Cita" }} />
      <div>
        <p className="text-2xl font-light mb-4">Doctor</p>
        <div className="relative min-w-fit max-w-[50vw] md:max-w-[30vw]">
          <select
            value={selectedDoctor?.id || ""}
            onChange={(e) => {
              const doctor = doctors.find((d) => d.id === e.target.value);
              setSelectedDoctor(doctor);
              setSelectedDate(null);
              setSelectedTime(null);
            }}
            className="w-full px-6 py-4 text-lg border-2 border-black rounded-full appearance-none bg-white focus:outline-none focus:ring-0">
            <option value="">Selecciona un doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.title} - {doctor.specialty}
              </option>
            ))}
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400 text-white rounded-full pointer-events-none flex items-center justify-center">
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>

      {selectedDoctor && (
        <div>
          <p className="text-2xl font-light mb-4">Fecha</p>
          <div className="border-2 border-black rounded-3xl p-8 w-full sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[40vw]">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handlePrevMonth}
                disabled={currentMonth <= new Date(2025, 11, 1)}
                className="text-2xl disabled:opacity-30">
                ←
              </button>
              <h3 className="text-2xl font-normal">
                {monthNames[currentMonth.getMonth()]}{" "}
                {currentMonth.getFullYear()}
              </h3>
              <button
                onClick={handleNextMonth}
                disabled={currentMonth >= new Date(2026, 1, 1)}
                className="text-2xl disabled:opacity-30">
                →
              </button>
            </div>

            <div className="grid grid-cols-7 gap-4">
              {calendarDays.map((date, index) => {
                if (!date) {
                  return <div key={`empty-${index}`} />;
                }

                const isAvailable = isDayAvailable(date);
                const isSelected =
                  selectedDate?.toDateString() === date.toDateString();

                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (isAvailable) {
                        setSelectedDate(date);
                        setSelectedTime(null);
                      }
                    }}
                    disabled={!isAvailable}
                    className={`
                      aspect-square flex items-center justify-center text-2xl font-light rounded-lg
                      transition-colors
                      ${
                        isAvailable
                          ? "hover:bg-blue-50 cursor-pointer"
                          : "text-gray-300 cursor-not-allowed"
                      }
                      ${isSelected ? "bg-blue-400 text-white" : ""}
                    `}>
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {selectedDate && (
        <div>
          <p className="text-2xl font-light mb-4">Hora</p>
          <div className="relative min-w-fit max-w-[50vw] md:max-w-[30vw]">
            <select
              value={selectedTime || ""}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 border-black rounded-full appearance-none bg-white focus:outline-none focus:ring-0">
              <option value="">Selecciona una hora</option>
              {getAvailableTimeSlots().map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400 text-white rounded-full pointer-events-none flex items-center justify-center">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
      )}

      {selectedDoctor && selectedDate && selectedTime && (
        <button onClick={saveDate} className="w-fit py-4 px-8 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
          Confirmar Cita
        </button>
      )}
    </div>
  );
};

export default AppointmentBooking;
