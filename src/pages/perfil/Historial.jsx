import Breadcrumb from "../../components/Breadcrumb";

export default function Historial() {
  return (
    <section className="my-10 w-fit">
      <Breadcrumb paths={{ parent: "Perfil", child: "Historial de citas" }} />
      <h1 className="font-medium text-mobile-4xl md:text-desktop-4xl leading-[105%] mb-8">
        Historial de citas
      </h1>
      <p className="text-charcoal-300 text-base md:text-lg">Aún no hay citas que mostrar</p>
    </section>
  );
}
