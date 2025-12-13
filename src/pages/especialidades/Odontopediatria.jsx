import Hero from "../../components/Hero";
import CustomSection from "../../components/CustomSection";
import Timeline from "../../components/Timeline";
import Faqs from "../../components/Faqs";
import SimpleCard from "../../components/SimpleCard";

const faqsData = [
  {
    question: "¿A qué edad debe ser la primera visita al dentista?",
    answer:
      "Idealmente cuando aparece el primer diente o, como máximo, al cumplir el primer año. Sirve para prevención y guía a los padres.",
  },
  {
    question: "¿Por qué tratar dientes de leche si se van a caer?",
    answer:
      "Porque ayudan a masticar, hablar y mantener el espacio de los dientes permanentes. Una caries avanzada puede generar dolor e infecciones.",
  },
  {
    question: "¿Qué pasa si mi hijo tiene miedo?",
    answer:
      "Se trabaja con adaptación progresiva y técnicas amigables para que se sienta seguro. La idea es crear confianza desde la primera cita.",
  },
  {
    question: "¿Cada cuánto deben ser los controles?",
    answer:
      "Generalmente cada 4 a 6 meses, según riesgo de caries y recomendaciones del especialista.",
  },
  {
    question: "¿Qué hago si mi hijo se golpea un diente?",
    answer:
      "Si hay sangrado, presiona con una gasa limpia. Si hay fractura o el diente se movió, es importante evaluar lo antes posible para prevenir complicaciones.",
  },
];

export default function Odontopediatria() {
  return (
    <>
      <Hero
        header="Odontopediatría"
        subtitle="Cuidado dental para niños con enfoque preventivo, amable y adaptado a cada etapa de crecimiento."
        imageUrl="/especialidades/odontopediatria.jpg"
      />

      <CustomSection
        title="¿Cuándo acudir al odontopediatra?"
        subtitle="Señales comunes y motivos por los que conviene una evaluación.">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Primera visita: al salir el primer diente o antes del año",
            "Caries o manchas en dientes de leche",
            "Dolor al comer, sensibilidad o inflamación",
            "Miedo o ansiedad al dentista",
            "Golpes o traumatismos en dientes",
            "Hábitos como chuparse el dedo o uso prolongado de chupón",
          ].map((item) => (
            <SimpleCard key={item} className="text-center">
              {item}
            </SimpleCard>
          ))}
        </div>
      </CustomSection>

      <CustomSection
        title="Tipos de atención en odontopediatría"
        subtitle="La prevención siempre es el punto de partida; el tratamiento se ajusta a cada niño.">
        <div className="grid md:grid-cols-2 gap-4">
          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Prevención</h3>
            <p className="mt-2 text-gray-600">
              Evaluación, enseñanza de higiene, aplicación de flúor y sellantes
              para reducir el riesgo de caries.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Restauraciones</h3>
            <p className="mt-2 text-gray-600">
              Tratamiento de caries con resinas o coronitas pediátricas para
              recuperar la función y evitar dolor o infecciones.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Control de hábitos</h3>
            <p className="mt-2 text-gray-600">
              Orientación y, si corresponde, aparatos para hábitos (chupón/dedo)
              que pueden afectar mordida y crecimiento.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Mantenedores de espacio</h3>
            <p className="mt-2 text-gray-600">
              Solución cuando un diente de leche se pierde antes de tiempo, para
              evitar que los dientes se muevan y afecten la erupción futura.
            </p>
          </SimpleCard>
        </div>
      </CustomSection>

      <CustomSection
        title="¿Cómo es la atención?"
        subtitle="Un proceso pensado para que el niño se sienta seguro y acompañado.">
        <Timeline
          steps={[
            "Primera visita de adaptación (explicación simple y enfoque amable)",
            "Evaluación de dientes, encías y mordida",
            "Plan preventivo según edad y riesgo de caries",
            "Tratamiento (si aplica) con técnicas para reducir miedo y molestias",
            "Recomendaciones para casa: higiene, alimentación y hábitos",
            "Controles periódicos para seguimiento y prevención",
          ]}
        />
      </CustomSection>

      <CustomSection
        title="Preguntas frecuentes"
        subtitle="Resolvemos dudas típicas para padres y cuidadores.">
        {faqsData.map((item) => (
          <Faqs key={item.question} item={item} />
        ))}
      </CustomSection>
    </>
  );
}
