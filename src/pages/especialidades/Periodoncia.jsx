import Hero from "../../components/Hero";
import CustomSection from "../../components/CustomSection";
import Timeline from "../../components/Timeline";
import Faqs from "../../components/Faqs";
import SimpleCard from "../../components/SimpleCard";

const faqsData = [
  {
    question: "¿Es normal que sangren las encías?",
    answer:
      "No. El sangrado es un signo temprano de enfermedad periodontal y debe evaluarse a tiempo.",
  },
  {
    question: "¿El tratamiento duele?",
    answer:
      "No. Se realiza con anestesia local y las molestias posteriores son leves y controlables.",
  },
  {
    question: "¿La periodontitis tiene cura?",
    answer:
      "Es una condición crónica que puede controlarse con tratamiento y mantenimiento adecuado.",
  },
  {
    question: "¿Cada cuánto debo hacer mantenimiento?",
    answer:
      "Generalmente cada 3 a 6 meses, según la evaluación del especialista.",
  },
];

export default function PeriodonciaPage() {
  return (
    <>
      <Hero
        header="Periodoncia"
        subtitle="Tratamiento y prevención de enfermedades de las encías para conservar tus dientes sanos."
        imageUrl="/especialidades/periodoncia.png"
      />

      <CustomSection
        title="¿Cuándo acudir al periodoncista?"
        subtitle="Estas señales indican que tus encías necesitan evaluación.">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Sangrado de encías al cepillarte",
            "Mal aliento persistente",
            "Encías inflamadas o enrojecidas",
            "Dientes que se ven más largos",
            "Sensibilidad dental frecuente",
          ].map((item) => (
            <SimpleCard key={item} className="text-center">
              {item}
            </SimpleCard>
          ))}
        </div>
      </CustomSection>

      <CustomSection
        title="Tratamientos periodontales"
        subtitle="La opción adecuada depende del estado de tus encías.">
        <div className="grid md:grid-cols-2 gap-4">
          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Limpieza profunda</h3>
            <p className="mt-2 text-gray-600">
              Eliminación de sarro y bacterias debajo de la encía para detener
              la progresión de la enfermedad periodontal.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Injerto de encía</h3>
            <p className="mt-2 text-gray-600">
              Tratamiento para cubrir raíces expuestas, reducir sensibilidad y
              mejorar la estética de la sonrisa.
            </p>
          </SimpleCard>
        </div>
      </CustomSection>

      <CustomSection
        title="¿Cómo es el tratamiento?"
        subtitle="Un proceso claro y progresivo para cuidar tus encías.">
        <Timeline
          steps={[
            "Evaluación periodontal y medición de bolsas",
            "Plan de tratamiento personalizado",
            "Limpieza profunda bajo anestesia local",
            "Reevaluación de cicatrización",
            "Mantenimiento periódico",
          ]}
        />
      </CustomSection>

      <CustomSection
        title="Preguntas frecuentes"
        subtitle="Resolvemos las dudas más comunes antes de iniciar el tratamiento.">
        {faqsData.map((item) => (
          <Faqs key={item.question} item={item} />
        ))}
      </CustomSection>
    </>
  );
}
