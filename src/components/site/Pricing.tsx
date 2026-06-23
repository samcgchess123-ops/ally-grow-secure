import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    name: "7 estándares mínimos",
    price: "$300.000",
    period: "/ mes",
    desc: "Empleadores con 10 o menos trabajadores que estén clasificados en riesgo I, II o III en la ARL.",
    features: ["Se enfoca en los pilares fundamentales: afiliación a seguridad social, estructuración del plan de trabajo, ejecuciones de capacitación, realización de evaluaciones médicas ocupacionales e identificación de peligros."],
  },
  {
    name: "21 estándares mínimos",
    price: "$700.000",
    period: "/ mes",
    desc: "Empleadores con 11 a 50 trabajadores que estén clasificados en riesgo I, II o III en la ARL.",
    features: ["Suma a la base de siete estándares, la gestión organizativa y de respuesta: conformación del COPASST y del Comité de Convivencia Laboral, estructuración de la brigada de emergencias e investigación obligatoria de accidentes de trabajo."],
    featured: true,
  },
  {
    name: "60 estándares mínimos",
    price: "$1.500.000",
    period: "/ mes",
    desc: "Empleadores con 50 o menos trabajadores siempre y cuando estén clasificados en Riesgo IV o V en la ARL.",
    features: ["Contempla el ciclo completo del Sistema de Gestión. Integra los puntos anteriores y añade el control estratégico: auditorías anuales, medición de indicadores obligatorios, control de contratistas y diseño de programas de vigilancia epidemiológica (médicos especializados)."],
  },
];

export function Pricing() {
  return (
    <section id="planes" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Planes y precios"
          title="Acompañamiento de acuerdo con el tamaño y nivel de riesgo de su empresa."
          description="Valores de referencia 'desde'; el alcance exacto se define en su diagnóstico gratuito."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                p.featured
                  ? "border-gold bg-gradient-navy text-navy-foreground shadow-elegant lg:-mt-4 lg:mb-4"
                  : "border-border bg-card shadow-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wide text-gold-foreground">
                  Más solicitado
                </span>
              )}
              <h3 className={`text-lg font-bold ${p.featured ? "text-navy-foreground" : "text-navy"}`}>
                {p.name}
              </h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-navy-foreground/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className={`font-display text-4xl font-extrabold ${p.featured ? "text-gold" : "text-navy"}`}>
                  {p.price}
                </span>
                <span className={p.featured ? "text-navy-foreground/70" : "text-muted-foreground"}>
                  {p.period}
                </span>
              </div>
              <ul className="mt-6 grid gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`mt-0.5 size-4 shrink-0 ${p.featured ? "text-gold" : "text-gold-foreground"}`} strokeWidth={3} />
                    <span className={p.featured ? "text-navy-foreground/90" : "text-navy"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.featured ? "gold" : "navy"} className="mt-8 w-full">
                <a href="#diagnostico">Solicitar este plan</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-secondary p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-navy">Sistemas de gestión y certificaciones</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Implementación y certificación ISO, RUC, BASC y más. El servicio termina cuando recibe
              su certificado.
            </p>
          </div>
          <div className="shrink-0 text-center">
            <p className="font-display text-3xl font-extrabold text-navy">Desde $4.000.000</p>
            <Button asChild variant="gold" size="sm" className="mt-2">
              <a href="#diagnostico">
                Cotizar proyecto <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
