import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "¿A qué empresas les aplica el SG-SST?",
    a: "En Colombia, toda empresa con al menos un trabajador vinculado está obligada por ley a tener un SG-SST activo, sin importar su tamaño o sector. La Resolución 0312 de 2019 establece estándares mínimos diferenciados según el número de empleados y el nivel de riesgo.",
  },
  {
    q: "¿Qué sanciones puede recibir mi empresa si no cumple?",
    a: "El Ministerio de Trabajo puede imponer multas de hasta 500 salarios mínimos mensuales legales vigentes. En casos de accidentes graves o mortales sin sistema en regla, la responsabilidad puede volverse penal para el representante legal, además de la pérdida de contratos y licitaciones.",
  },
  {
    q: "¿Cuánto tarda la implementación de un sistema de gestión?",
    a: "La implementación inicial toma entre 2 y 3 meses. A partir de ahí, el sistema requiere mantenimiento permanente: administración documental, capacitaciones, inspecciones, seguimiento de indicadores y preparación de auditorías. Por eso ofrecemos acompañamiento mensual continuo.",
  },
  {
    q: "¿Qué incluye exactamente el acompañamiento permanente?",
    a: "Incluye la asunción formal del rol legal de responsable del SG-SST, el diseño e implementación del sistema según su nivel de riesgo, la actualización permanente de la documentación, las capacitaciones obligatorias, el apoyo en inspecciones del Ministerio y los informes de gestión periódicos.",
  },
  {
    q: "¿Ofrecen planes con precio definido?",
    a: "Sí. Tenemos planes mensuales según el tamaño y nivel de riesgo de su empresa: desde $300.000/mes para 7 estándares mínimos hasta $1.500.000/mes para 60 estándares. Para certificaciones e implementación tipo ISO o RUC, los valores parten desde $4.000.000 por proyecto.",
  },
  {
    q: "¿Trabajan solo en una ciudad o en todo el país?",
    a: "Atendemos empresas en todo el territorio colombiano. Gran parte del trabajo se realiza de forma remota, lo que permite un acompañamiento ágil sin costos adicionales de desplazamiento. Las visitas presenciales se evalúan según ubicación y alcance.",
  },
  {
    q: "¿Necesito saber de normas o de SST para trabajar con ustedes?",
    a: "No. Ese es precisamente nuestro trabajo. Usted nos cuenta cómo funciona su empresa, cuántas personas tiene y qué le preocupa; nosotros lo traducimos en un plan de cumplimiento claro y lo ejecutamos.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos las dudas más comunes"
        />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="mb-3 rounded-xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
