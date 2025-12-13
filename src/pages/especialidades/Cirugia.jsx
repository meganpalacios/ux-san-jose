import Hero from "../../components/Hero";
import CustomSection from "../../components/CustomSection";
import Timeline from "../../components/Timeline";
import Faqs from "../../components/Faqs";
import SimpleCard from "../../components/SimpleCard";

const faqsData = [
  {
    question: "¿Voy a sentir dolor durante la cirugía?",
    answer:
      "No. Se realiza con anestesia local, por lo que no deberías sentir dolor durante el procedimiento. Puedes sentir presión o movimiento.",
  },
  {
    question: "¿Cuánto dura la recuperación?",
    answer:
      "Depende del procedimiento. En muchos casos, la molestia baja en pocos días y se controla con cuidados e indicaciones postoperatorias.",
  },
  {
    question: "¿Qué puedo comer después de la cirugía?",
    answer:
      "Al inicio se recomienda dieta blanda y, si corresponde, alimentos fríos. Evita comidas duras o muy calientes según indicación del especialista.",
  },
  {
    question: "¿Es normal que se hinche la cara?",
    answer:
      "Sí, puede ser normal. La inflamación suele aumentar las primeras 48 horas y luego disminuir progresivamente.",
  },
  {
    question: "¿Puedo fumar después de la cirugía?",
    answer:
      "No es recomendable. Fumar puede retrasar la cicatrización y aumentar el riesgo de complicaciones.",
  },
];

export default function Cirugia() {
  return (
    <>
      <Hero
        header="Cirugía Oral"
        subtitle="Procedimientos seguros para resolver infecciones, extracciones complejas y rehabilitación, priorizando tu recuperación."
        imageUrl="/especialidades/cirugia-dental.jpg"
      />

      <CustomSection
        title="¿Cuándo se recomienda una cirugía oral?"
        subtitle="Motivos frecuentes por los que se indica evaluación quirúrgica.">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Muelas del juicio con dolor, inflamación o poco espacio",
            "Dientes fracturados sin posibilidad de restauración",
            "Infecciones recurrentes o abscesos",
            "Quistes o lesiones asociadas a la raíz",
            "Preparación para implantes (hueso o encía)",
            "Dientes retenidos o erupción anómala",
          ].map((item) => (
            <SimpleCard key={item} className="text-center">
              {item}
            </SimpleCard>
          ))}
        </div>
      </CustomSection>

      <CustomSection
        title="Tipos de cirugía"
        subtitle="El tratamiento se define según diagnóstico clínico y radiográfico.">
        <div className="grid md:grid-cols-2 gap-4">
          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Extracciones quirúrgicas</h3>
            <p className="mt-2 text-gray-600">
              Extracción de piezas complejas (incluye muelas del juicio) cuando
              están retenidas, con raíces difíciles o con infección asociada.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Cirugía pre-implante</h3>
            <p className="mt-2 text-gray-600">
              Procedimientos para optimizar el soporte antes de implantes, como
              regeneración/injerto óseo o acondicionamiento de encía.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Cirugía de tejidos blandos</h3>
            <p className="mt-2 text-gray-600">
              Correcciones en encía o frenillos cuando afectan estética, higiene,
              funcionalidad o comodidad.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Manejo de infecciones</h3>
            <p className="mt-2 text-gray-600">
              Tratamiento de infecciones y lesiones asociadas a piezas dentales,
              con enfoque en control del dolor y resolución del foco.
            </p>
          </SimpleCard>
        </div>
      </CustomSection>

      <CustomSection
        title="¿Cómo es el procedimiento?"
        subtitle="Etapas típicas desde la evaluación hasta el control postoperatorio.">
        <Timeline
          steps={[
            "Evaluación clínica y revisión de radiografías (o tomografía si aplica)",
            "Planificación del procedimiento y explicación de cuidados",
            "Anestesia local para trabajar sin dolor",
            "Procedimiento quirúrgico según el caso",
            "Indicaciones postoperatorias (medicación, higiene y alimentación)",
            "Control de evolución y retiro de puntos si corresponde",
          ]}
        />
      </CustomSection>

      <CustomSection
        title="Preguntas frecuentes"
        subtitle="Resolvemos dudas típicas antes de una cirugía oral.">
        {faqsData.map((item) => (
          <Faqs key={item.question} item={item} />
        ))}
      </CustomSection>
    </>
  );
}
