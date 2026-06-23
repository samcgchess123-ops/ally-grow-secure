import { useState } from "react";
import {
  ShieldCheck,
  Award,
  Users,
  HardHat,
  ArrowRight,
  Check,
  ChevronDown,
  HelpCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Award,
    title: "Implementación de Sistemas de Gestión",
    text: "Lo acompañamos en el diseño hasta la certificación de sus sistemas en ISO 9001, 45001, 14001, 17020, 17024, 27002, 28000, 39001, RUC, BASC, PESV, habilitaciones y normas sectoriales aplicables.",
    result: "Su empresa escala de nivel, habilitándose para ganar licitaciones de alta exigencia.",
    price: "Desde $4.000.000",
  },
  {
    icon: HardHat,
    title: "Acompañamiento en campo SST",
    text: "Control operativo en campo para alturas, espacios confinados y energías peligrosas adaptado a sus necesidades o las de su cliente. Garantizamos personal con licencia SST y certificaciones vigentes.",
    result: "",
    price: "Desde $550.000 / Día",
  },
  {
    icon: Users,
    title: "Contratación y Gestión de Talento Humano",
    text: "Diseñamos la estrategia de contratación. Administramos su personal y su nómina.",
    result: "Reducción del riesgo laboral y eliminación de costos ocultos.",
    price: "Desde $150.000 mensuales por empleado",
  },
];

const plans = [
  {
    id: "esencial",
    eyebrow: "",
    standards: "7 estándares mínimos",
    price: "$300.000",
    daily: "Empleadores con 10 o menos trabajadores que estén clasificados en riesgo I, II o III en la ARL.",
    features: ["Se enfoca en los pilares fundamentales: afiliación a seguridad social, estructuración del plan de trabajo, ejecuciones de capacitación, realización de evaluaciones médicas ocupacionales e identificación de peligros."],
  },
  {
    id: "integral",
    eyebrow: "",
    standards: "21 estándares mínimos",
    price: "$700.000",
    daily: "Empleadores con 11 a 50 trabajadores que estén clasificados en riesgo I, II o III en la ARL.",
    features: [
      "Suma a la base de siete estándares, la gestión organizativa y de respuesta: conformación del COPASST y del Comité de Convivencia Laboral, estructuración de la brigada de emergencias e investigación obligatoria de accidentes de trabajo.",
    ],
    featured: true,
  },
  {
    id: "corporativo",
    eyebrow: "",
    standards: "60 estándares mínimos",
    price: "$1.500.000",
    daily: "Empleadores con 50 o menos trabajadores siempre y cuando estén clasificados en Riesgo IV o V en la ARL.",
    features: [
      "Contempla el ciclo completo del Sistema de Gestión. Integra los puntos anteriores y añade el control estratégico: auditorías anuales, medición de indicadores obligatorios, control de contratistas y diseño de programas de vigilancia epidemiológica (médicos especializados).",
    ],
  },
];

function PlansBox({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (v: string) => void;
}) {
  const active = plans.find((p) => p.id === selected)!;

  return (
    <div className="rounded-3xl bg-gradient-navy p-7 shadow-elegant sm:p-10">
      <div className="text-center">
        <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
          Planes y precios
        </span>
        <h3 className="mt-2 text-2xl font-extrabold text-navy-foreground sm:text-3xl">
          Configure el nivel de cumplimiento de su empresa
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-navy-foreground/70">
          Seleccione el alcance que mejor se adapte a sus obligaciones legales y objetivos de
          crecimiento.
        </p>
      </div>

      {/* Selector */}
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {plans.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setSelected(p.id)}
            className={cn(
              "relative rounded-2xl border p-4 text-left transition-all",
              selected === p.id
                ? "border-gold bg-gold/10 ring-1 ring-gold"
                : "border-navy-foreground/15 bg-navy-foreground/[0.04] hover:border-gold/50",
            )}
          >
            <p className="text-[0.7rem] font-bold uppercase tracking-wide text-gold">{p.eyebrow}</p>
            <p className="mt-1 font-bold text-navy-foreground">{p.standards}</p>
            <p className="mt-1 text-sm text-navy-foreground/70">{p.price} / mes</p>
          </button>
        ))}
      </div>

      {/* Active plan detail */}
      <div className="mt-6 grid gap-6 rounded-2xl bg-card p-6 sm:grid-cols-2 sm:p-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-gold-foreground">
            {active.eyebrow}
          </p>
          <p className="mt-1 text-lg font-bold text-navy">{active.standards}</p>
          <p className="mt-2 text-sm text-muted-foreground">{active.daily}</p>
          <div className="mt-5 flex items-baseline gap-1">
            <span className="font-display text-4xl font-extrabold text-navy">{active.price}</span>
            <span className="text-muted-foreground">/ mes</span>
          </div>
          <Button asChild variant="gold" size="lg" className="mt-6 w-full sm:w-auto">
            <a href="#diagnostico">Solicitar este plan</a>
          </Button>
        </div>
        <ul className="grid content-center gap-3">
          {active.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-navy">
              <Check className="size-4 shrink-0 text-gold-foreground" strokeWidth={3} /> {f}
            </li>
          ))}
          <li className="mt-2 flex items-center gap-2.5 text-sm font-medium text-navy">
            <CheckCircle2 className="size-4 shrink-0 text-gold-foreground" /> Diagnóstico gratuito
            incluido
          </li>
        </ul>
      </div>

      <p className="mt-6 text-center text-xs text-navy-foreground/60">
        Valores de referencia "desde". El alcance exacto se define en su diagnóstico gratuito.
      </p>
    </div>
  );
}

export function Services() {
  const [showPlans, setShowPlans] = useState(false);
  const [selected, setSelected] = useState("integral");

  return (
    <section id="servicios" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Soluciones diseñadas para el nivel de madurez de su empresa"
          description="Desde el cumplimiento obligatorio hasta certificaciones internacionales. Construimos sistemas empresariales seguros, organizados y preparados para crecer."
        />

        {/* Services grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Principal SG-SST card */}
          <button
            type="button"
            onClick={() => setShowPlans((v) => !v)}
            aria-expanded={showPlans}
            className="group flex flex-col rounded-3xl bg-gradient-navy p-8 text-left shadow-elegant ring-1 ring-gold/40 transition-all hover:ring-gold lg:row-span-2"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-gold-foreground">
              <Sparkles className="size-3.5" /> Solución principal
            </span>
            <div className="mt-6 flex size-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
              <ShieldCheck className="size-8" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-navy-foreground">
              SG-SST · Acompañamiento Permanente
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
              En Colombia, la resolución 0312 de 2019 establece que los empleadores, sin importar su sector y desde un solo trabajador, tenga un Sistema de Gestión de Seguridad y Salud en el Trabajo. Nosotros lo implementamos y asumimos la Responsabilidad legal.
            </p>
            <p className="mt-4 rounded-xl bg-navy-foreground/[0.06] px-4 py-3 text-sm text-navy-foreground/90">
              <span className="font-semibold text-gold">Resultado:</span> Su organización opera en
              cumplimiento legal.
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm text-navy-foreground/70">Desde</span>
              <span className="font-display text-4xl font-extrabold text-gold">$300.000</span>
              <span className="text-navy-foreground/70">/ mes</span>
            </div>

            <span className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-transform group-hover:scale-[1.02]">
              {showPlans ? "Ocultar planes" : "Ver planes y precios"}
              <ChevronDown className={cn("size-4 transition-transform", showPlans && "rotate-180")} />
            </span>
            <p className="mt-3 text-center text-xs text-navy-foreground/55">
              Diagnóstico gratuito incluido
            </p>
          </button>

          {/* Mobile-only plans box: appears right below the SG-SST card */}
          {showPlans && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300 lg:hidden">
              <PlansBox selected={selected} setSelected={setSelected} />
            </div>
          )}

          {/* Other services */}
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-navy text-gold">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              {s.result && (
                <p className="mt-3 rounded-lg bg-secondary px-3 py-2 text-xs font-medium text-navy">
                  <span className="text-gold-foreground">Resultado:</span> {s.result}
                </p>
              )}
              {s.price && <p className="mt-auto pt-4 text-sm font-bold text-navy">{s.price}</p>}
            </article>
          ))}

          {/* Helper card */}
          <article className="flex flex-col justify-center rounded-3xl border border-dashed border-gold/50 bg-card p-6 shadow-card">
            <div className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold-foreground">
              <HelpCircle className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy">
              ¿No sabe qué norma aplica a su empresa?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Las obligaciones legales varían según el número de trabajadores, el nivel de riesgo en
              la ARL, su actividad económica y las exigencias de sus clientes.
            </p>
            <p className="mt-3 text-sm font-medium text-navy">
              <span className="font-bold text-gold-foreground">Nuestra solución:</span> realizamos un
              diagnóstico inicial sin costo.
            </p>
            <Button asChild variant="gold" size="sm" className="mt-4 w-fit">
              <a href="#diagnostico">
                Iniciar el diagnóstico <ArrowRight className="size-4" />
              </a>
            </Button>
          </article>
        </div>

        {/* Desktop-only plans box: full width below the grid */}
        {showPlans && (
          <div
            id="planes"
            className="mt-6 hidden animate-in fade-in slide-in-from-top-2 duration-300 lg:block"
          >
            <PlansBox selected={selected} setSelected={setSelected} />
          </div>
        )}
      </div>
    </section>
  );
}
