import Hero from "../../components/Hero";
import CustomSection from "../../components/CustomSection";
import Timeline from "../../components/Timeline";
import Faqs from "../../components/Faqs";
import SimpleCard from "../../components/SimpleCard";

const faqsData = [
  {
    question: "¿La ortodoncia es solo estética?",
    answer:
      "No. Además de mejorar la apariencia, ayuda a corregir la mordida, distribuir fuerzas al masticar y facilitar la higiene (al reducir apiñamiento).",
  },
  {
    question: "¿Duele ponerse brackets o iniciar alineadores?",
    answer:
      "Puede haber molestia o presión los primeros días (y tras ajustes), pero suele ser temporal y manejable.",
  },
  {
    question: "¿Cuánto dura un tratamiento de ortodoncia?",
    answer:
      "Depende del caso. Un especialista lo define tras evaluación; algunos tratamientos duran meses y otros más de un año.",
  },
  {
    question: "¿Hay edad ideal para empezar?",
    answer:
      "Se puede tratar a adolescentes y adultos. En niños, una evaluación temprana ayuda a detectar necesidades de ortodoncia interceptiva.",
  },
  {
    question: "¿Por qué necesito retenedores al final?",
    answer:
      "Porque los dientes tienden a moverse con el tiempo. La retención ayuda a mantener el resultado logrado.",
  },
];

export default function Ortodoncia() {
  return (
    <>
      <Hero
        header="Ortodoncia"
        subtitle="Corrección de la alineación dental y la mordida para mejorar función, estética y salud oral."
        imageUrl="/especialidades/ortodoncia.png"
      />

      <CustomSection
        title="¿Cuándo acudir al ortodoncista?"
        subtitle="Estas señales suelen indicar que vale la pena una evaluación.">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Dientes apiñados o montados",
            "Separaciones notorias entre dientes",
            "Mordida cruzada, abierta o profunda",
            "Dificultad al masticar o morder",
            "Desgaste dental o dolor mandibular frecuente",
          ].map((item) => (
            <SimpleCard key={item} className="text-center">
              {item}
            </SimpleCard>
          ))}
        </div>
      </CustomSection>

      <CustomSection
        title="Tipos de tratamientos de ortodoncia"
        subtitle="La opción ideal depende de tu mordida, objetivos y estilo de vida.">
        <div className="grid md:grid-cols-2 gap-4">
          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Brackets (metálicos o estéticos)</h3>
            <p className="mt-2 text-gray-600">
              Sistema fijo que mueve los dientes de forma progresiva mediante
              brackets y arcos. Útil para una amplia variedad de casos.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Alineadores transparentes</h3>
            <p className="mt-2 text-gray-600">
              Placas removibles y discretas que guían el movimiento dental por
              etapas. Requieren constancia de uso diario.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Ortodoncia interceptiva</h3>
            <p className="mt-2 text-gray-600">
              En niños: aparatos que ayudan a guiar crecimiento y prevenir
              problemas mayores en etapas tempranas.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Retención (final del tratamiento)</h3>
            <p className="mt-2 text-gray-600">
              Retenedores fijos o removibles para mantener la alineación lograda
              y estabilizar la mordida.
            </p>
          </SimpleCard>
        </div>
      </CustomSection>

      <CustomSection
        title="¿Cómo es el tratamiento?"
        subtitle="Un flujo claro para planificar, ejecutar y mantener resultados.">
        <Timeline
          steps={[
            "Evaluación inicial y diagnóstico de mordida/alineación",
            "Registros: fotografías, escaneo o modelos, y radiografías si aplica",
            "Plan de tratamiento personalizado y elección del sistema (brackets o alineadores)",
            "Colocación/inicio del tratamiento y seguimiento con controles periódicos",
            "Fase de finalización: ajustes finos para lograr estabilidad y estética",
            "Retención: entrega de retenedores y controles para mantenimiento",
          ]}
        />
      </CustomSection>

      <CustomSection
        title="Preguntas frecuentes"
        subtitle="Resolvemos dudas típicas antes de iniciar ortodoncia.">
        {faqsData.map((item) => (
          <Faqs key={item.question} item={item} />
        ))}
      </CustomSection>
    </>
  );
}
