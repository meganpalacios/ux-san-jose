import Hero from "../../components/Hero";
import CustomSection from "../../components/CustomSection";
import Timeline from "../../components/Timeline";
import Faqs from "../../components/Faqs";
import SimpleCard from "../../components/SimpleCard";

const faqsData = [
  {
    question: "¿Duele colocarse un implante?",
    answer:
      "No debería doler durante el procedimiento porque se realiza con anestesia local. Después puede haber molestia leve controlable con medicación indicada por el especialista.",
  },
  {
    question: "¿Cuánto dura un implante dental?",
    answer:
      "Con buena higiene y controles, está diseñado para durar muchos años. La duración depende también del cuidado del paciente y la salud de encías y hueso.",
  },
  {
    question: "¿Mi cuerpo puede “rechazar” el implante?",
    answer:
      "Los implantes son biocompatibles. En algunos casos puede fallar la integración al hueso, pero es poco frecuente y se evalúa en controles.",
  },
  {
    question: "¿Puedo ponerme el diente el mismo día?",
    answer:
      "En ciertos casos se puede colocar una pieza provisional el mismo día (carga inmediata). Depende de la estabilidad del implante y la evaluación clínica.",
  },
  {
    question: "¿Qué pasa si tengo poco hueso?",
    answer:
      "No necesariamente te descarta. Existen alternativas como injertos o regeneración ósea, que se determinan con evaluación y tomografía.",
  },
];

export default function Implantes() {
  return (
    <>
      <Hero
        header="Implantes Dentales"
        subtitle="Reemplazo de dientes perdidos con una solución fija, estética y funcional, diseñada para durar."
        imageUrl="/especialidades/implantes.png"
      />

      <CustomSection
        title="¿Cuándo considerar un implante?"
        subtitle="Situaciones comunes donde un implante puede ser una buena opción.">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Pérdida de una o varias piezas dentales",
            "Dificultad para masticar correctamente",
            "Incomodidad con prótesis removibles",
            "Espacios que afectan tu mordida o estética",
            "Pérdida de hueso por ausencia prolongada del diente",
          ].map((item) => (
            <SimpleCard key={item} className="text-center">
              {item}
            </SimpleCard>
          ))}
        </div>
      </CustomSection>

      <CustomSection
        title="Tipos de rehabilitación con implantes"
        subtitle="La opción ideal depende de cuántos dientes faltan y del soporte óseo.">
        <div className="grid md:grid-cols-2 gap-4">
          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Implante unitario</h3>
            <p className="mt-2 text-gray-600">
              Reemplaza un solo diente con un implante y una corona. No requiere
              desgastar dientes vecinos.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Puente sobre implantes</h3>
            <p className="mt-2 text-gray-600">
              Para varios dientes consecutivos. Los implantes actúan como pilares
              y sostienen un puente fijo.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Rehabilitación completa fija</h3>
            <p className="mt-2 text-gray-600">
              Para arcadas completas. Se fija una prótesis completa sobre varios
              implantes para mayor estabilidad.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Prótesis removible sobre implantes</h3>
            <p className="mt-2 text-gray-600">
              Alternativa que mejora retención y comodidad: la prótesis se
              sujeta a implantes con sistemas de anclaje.
            </p>
          </SimpleCard>
        </div>
      </CustomSection>

      <CustomSection
        title="¿Cómo es el tratamiento?"
        subtitle="Etapas principales desde el diagnóstico hasta el diente definitivo.">
        <Timeline
          steps={[
            "Evaluación clínica y diagnóstico (radiografía/tomografía si aplica)",
            "Plan de tratamiento según hueso, encías y objetivos estéticos",
            "Colocación del implante bajo anestesia local",
            "Periodo de integración al hueso (oseointegración) según el caso",
            "Colocación de la pieza provisional o definitiva (corona/puente/prótesis)",
            "Controles y mantenimiento para asegurar estabilidad a largo plazo",
          ]}
        />
      </CustomSection>

      <CustomSection
        title="Preguntas frecuentes"
        subtitle="Dudas típicas sobre el procedimiento, tiempos y cuidados.">
        {faqsData.map((item) => (
          <Faqs key={item.question} item={item} />
        ))}
      </CustomSection>
    </>
  );
}
