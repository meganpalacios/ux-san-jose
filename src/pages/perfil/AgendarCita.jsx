import AppointmentBooking from "../../components/AppointmentBooking";
import data from "../../lib/data.json";

export default function AgendarCita() {
  return (
    <main>
      <AppointmentBooking doctors={data.doctors} />
    </main>
  );
}
