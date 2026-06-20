import { useState } from "react";
import {
  ShieldCheck,
  Award,
  Users,
  GraduationCap,
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
    text: "Lo acompañamos paso a paso hasta obtener ISO 9001, 45001, 14001, 17020, 17024, 27001, 28000, RUC, BASC, PESV, habilitaciones y normas sectoriales.",
    result: "Su empresa escala al nivel de los grandes clientes y se habilita para licitaciones de alta exigencia.",
    price: "Desde $4.000.000",
  },
  {
    icon: Users,
    title: "Contratación y gestión de talento humano",
    text: "Diseñamos la estrategia de contratación más rentable y legal. Administramos nómina, prestaciones y desvinculaciones con blindaje ante la UGPP.",
    result: "Reducción del riesgo laboral, eliminación de costos ocultos y total libertad operativa.",
    price: "Desde $150.000 / mes por empleado",
  },
  {
    icon: GraduationCap,
    title: "Capacitación y consultoría especializada",
    text: "Capacitamos a su equipo en normatividad laboral, sistemas de gestión, manejo de contratistas, COPASST, CCL y brigadas de emergencia.",
    result: "Su equipo sabe qué hacer y responde correctamente ante cualquier auditoría.",
  },
];

const plans = [
  {
    id: "esencial",
    eyebrow: "Cumplimiento esencial",
    standards: "7 estándares mínimos",
    price: "$300.000",
    daily: "Empresas pequeñas de menor nivel de riesgo.",
    features: ["Diseño e implementación", "Mantenimiento mensual", "Apoyo en inspecciones"],
  },
  {
    id: "integral",
    eyebrow: "Cumplimiento integral",
    standards: "21 estándares mínimos",
    price: "$700.000",
    daily: "Empresas en crecimiento que buscan cumplimiento sólido y prevención de riesgos.",
    features: [
      "Todo lo del nivel esencial",
      "Capacitaciones obligatorias",
      "Informes de gestión mensuales",
      "Acompañamiento experto",
    ],
    featured: true,
  },
  {
    id: "corporativo",
    eyebrow: "Cumplimiento corporativo",
    standards: "60 estándares mínimos",
    price: "$1.500.000",
    daily: "Empresas con mayor riesgo o exigencias de grandes clientes.",
    features: [
      "Todo lo del nivel integral",
      "Matriz legal actualizada",
      "Acompañamiento integral",
      "Preparación de auditorías",
    ],
  },
];

export function Services() {
  const [showPlans, setShowPlans] = useState(false);
  const [selected, setSelected] = useState("integral");
  const active = plans.find((p) => p.id === selected)!;

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
            <h3 className="mt-5 text-2xl font-bold text-navy-foreground">SG-SST Gestionado</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
              En Colombia, la resolución 0312 de 2019 exige que toda empresa, sin importar su sector
              y desde un solo trabajador, tenga un Sistema de Gestión de Seguridad y Salud en el
              Trabajo. Nosotros lo diseñamos, lideramos su implementación, lo mantenemos y asumimos
              la Responsabilidad legal de su sistema.
            </p>
            <p className="mt-4 rounded-xl bg-navy-foreground/[0.06] px-4 py-3 text-sm text-navy-foreground/90">
              <span className="font-semibold text-gold">Resultado:</span> Su empresa opera en
              cumplimiento permanente, sin depender de usted.
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm text-navy-foreground/70">Desde</span>
              <span className="font-display text-4xl font-extrabold text-gold">$300.000</span>
              <span className="text-navy-foreground/70">/ mes</span>
            </div>

            <span className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-transform group-hover:scale-[1.02]">
              {showPlans ? "Ocultar planes" : "Ver planes y precios"}
              <ChevronDown
                className={cn("size-4 transition-transform", showPlans && "rotate-180")}
              />
            </span>
            <p className="mt-3 text-center text-xs text-navy-foreground/55">
              Diagnóstico gratuito incluido
            </p>
          </button>

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
              <p className="mt-3 rounded-lg bg-secondary px-3 py-2 text-xs font-medium text-navy">
                <span className="text-gold-foreground">Resultado:</span> {s.result}
              </p>
              {s.price && <p className="mt-auto pt-4 text-sm font-bold text-navy">{s.price}</p>}
            </article>
          ))}

          {/* Helper card */}
          <article className="flex flex-col justify-center rounded-3xl border border-dashed border-gold/50 bg-card p-6 shadow-card">
            <div className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold-foreground">
              <HelpCircle className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy">¿No sabe cuál aplica a su empresa?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Las obligaciones varían según el número de trabajadores, nivel de riesgo ARL, actividad
              económica y exigencias de sus clientes.
            </p>
            <Button asChild variant="gold" size="sm" className="mt-4 w-fit">
              <a href="#diagnostico">
                Descubrir qué aplica <ArrowRight className="size-4" />
              </a>
            </Button>
          </article>
        </div>

        {/* Expandable blue plans box */}
        {showPlans && (
          <div id="planes" className="mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="overflow-hidden">
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
                    <p className="text-[0.7rem] font-bold uppercase tracking-wide text-gold">
                      {p.eyebrow}
                    </p>
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
                    <span className="font-display text-4xl font-extrabold text-navy">
                      {active.price}
                    </span>
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
                    <CheckCircle2 className="size-4 shrink-0 text-gold-foreground" /> Diagnóstico
                    gratuito incluido
                  </li>
                </ul>
              </div>

              <p className="mt-6 text-center text-xs text-navy-foreground/60">
                Valores de referencia "desde". El alcance exacto se define en su diagnóstico gratuito.
              </p>
            </div>
          </div>
          </div>
        )}

        {/* Sistemas de gestión / certificaciones */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-card p-8 text-center shadow-card sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-navy">Sistemas de gestión y certificaciones</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Implementación y certificación ISO, RUC, BASC y más. El servicio termina cuando recibe su
              certificado.
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
