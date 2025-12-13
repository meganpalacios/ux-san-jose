import Hero from "../../components/Hero";
import CustomSection from "../../components/CustomSection";
import Timeline from "../../components/Timeline";
import Faqs from "../../components/Faqs";
import SimpleCard from "../../components/SimpleCard";

const faqsData = [
  {
    question: "¿La endodoncia duele?",
    answer:
      "No debería. Se realiza con anestesia local, y el objetivo es aliviar el dolor causado por la infección o inflamación del nervio.",
  },
  {
    question: "¿Por qué no es mejor extraer el diente?",
    answer:
      "Conservar el diente natural suele ser la mejor opción. La extracción puede causar movimientos dentales, problemas de mordida y pérdida de hueso.",
  },
  {
    question: "¿Cuántas citas toma una endodoncia?",
    answer:
      "Depende del caso. Muchas se realizan en una sesión, pero en infecciones más complejas puede requerirse una segunda visita.",
  },
  {
    question: "¿El diente queda más frágil después?",
    answer:
      "Puede quedar más vulnerable si no se restaura bien. Por eso suele recomendarse una restauración definitiva (resina o corona) para protegerlo.",
  },
  {
    question: "¿Qué cuidados debo tener después?",
    answer:
      "Evita masticar duro con ese diente hasta su restauración final y espera que pase la anestesia antes de comer para no morderte.",
  },
];

export default function Endodoncia() {
  return (
    <>
      <Hero
        header="Endodoncia"
        subtitle="Tratamiento de conducto para eliminar infección, aliviar dolor y conservar tu diente natural."
        imageUrl="/especialidades/endodoncia.png"
      />

      <CustomSection
        title="¿Cuándo necesito una endodoncia?"
        subtitle="Estas señales suelen indicar que el nervio del diente está comprometido.">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Dolor intenso al masticar o morder",
            "Sensibilidad prolongada al frío o al calor",
            "Oscurecimiento del diente",
            "Hinchazón o sensibilidad en la encía cercana",
            "Molestia que aparece y desaparece, pero vuelve con más fuerza",
          ].map((item) => (
            <SimpleCard key={item} className="text-center">
              {item}
            </SimpleCard>
          ))}
        </div>
      </CustomSection>

      <CustomSection
        title="Tipos de endodoncia"
        subtitle="La complejidad depende de la anatomía del diente y el estado de la infección.">
        <div className="grid md:grid-cols-2 gap-4">
          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Unirradicular</h3>
            <p className="mt-2 text-gray-600">
              Para dientes de una sola raíz (incisivos y caninos). Generalmente
              es más rápida y sencilla.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Multirradicular</h3>
            <p className="mt-2 text-gray-600">
              Para premolares y molares con dos o más raíces. Requiere mayor
              precisión para limpiar todos los conductos.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Retratamiento</h3>
            <p className="mt-2 text-gray-600">
              Si una endodoncia previa no sanó o reaparece la infección, se
              realiza una nueva limpieza y sellado para salvar la pieza.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h3 className="font-semibold text-gray-900">Endodoncia en urgencia</h3>
            <p className="mt-2 text-gray-600">
              En casos de dolor severo, se controla la infección y se estabiliza
              la pieza para completar el tratamiento según evaluación.
            </p>
          </SimpleCard>
        </div>
      </CustomSection>

      <CustomSection
        title="¿Cómo es el tratamiento?"
        subtitle="Etapas clave para eliminar la infección y proteger el diente.">
        <Timeline
          steps={[
            "Evaluación y diagnóstico (radiografía/escaneo según el caso)",
            "Anestesia local para trabajar sin dolor",
            "Aislamiento del diente y acceso al conducto",
            "Limpieza y desinfección de los conductos",
            "Sellado hermético con material biocompatible",
            "Restauración final (resina o corona) para recuperar fuerza y función",
          ]}
        />
      </CustomSection>

      <CustomSection
        title="Preguntas frecuentes"
        subtitle="Dudas típicas antes de realizar un tratamiento de conducto.">
        {faqsData.map((item) => (
          <Faqs key={item.question} item={item} />
        ))}
      </CustomSection>
    </>
  );
}
