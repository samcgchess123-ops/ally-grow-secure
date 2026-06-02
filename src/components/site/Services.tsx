import {
  ShieldCheck,
  Award,
  Workflow,
  Users,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: ShieldCheck,
    title: "SG-SST · Acompañamiento permanente",
    text: "Asumimos el rol legal de responsable de seguridad y salud en el trabajo. Diseñamos, implementamos y mantenemos su sistema mes a mes según la Resolución 0312 de 2019.",
    result: "Su empresa opera en cumplimiento permanente, sin depender de usted.",
    price: "Desde $300.000 / mes",
    featured: true,
  },
  {
    icon: Award,
    title: "Implementación de Sistemas de Gestión",
    text: "Lo acompañamos paso a paso hasta obtener ISO 9001, 45001, 14001, 17020, 17024, 28000, RUC, BASC, PESV, habilitaciones y normas sectoriales.",
    result: "Accede a clientes de mayor nivel y gana licitaciones que antes no podía tocar.",
    price: "Desde $4.000.000",
  },
  {
    icon: Workflow,
    title: "Optimización y documentación de procesos",
    text: "Estandarizamos y documentamos los procesos clave de su operación para reducir errores y dejar registros auditables en cualquier momento.",
    result: "Más orden, menos reprocesos y mayor capacidad de escalar.",
  },
  {
    icon: Users,
    title: "Contratación y gestión de talento humano",
    text: "Diseñamos la estrategia de contratación más rentable y legal. Administramos nómina, prestaciones, vacaciones y desvinculaciones con blindaje ante la UGPP.",
    result: "Menos riesgo laboral, menos costos ocultos, más tiempo para usted.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación y consultoría especializada",
    text: "Capacitamos a su equipo en normatividad laboral, sistemas de gestión, manejo de contratistas, COPASST, CCL, brigadas de emergencia y más.",
    result: "Su equipo sabe qué hacer y responde correctamente ante cualquier auditoría.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="¿Qué necesita su empresa hoy?"
          description="No todas las empresas necesitan lo mismo. Por eso realizamos un diagnóstico gratuito antes de recomendar cualquier servicio."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={`flex flex-col rounded-2xl border p-7 shadow-card transition-all hover:-translate-y-1 ${
                s.featured
                  ? "border-gold/60 bg-card ring-1 ring-gold/40"
                  : "border-border bg-card hover:border-gold/40"
              }`}
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-navy text-gold">
                <s.icon className="size-6" />
              </div>
              {s.featured && (
                <span className="mt-4 w-fit rounded-full bg-gold px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-gold-foreground">
                  Servicio estrella
                </span>
              )}
              <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <p className="mt-4 rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-navy">
                <span className="text-gold-foreground">Resultado:</span> {s.result}
              </p>
              <div className="mt-auto pt-5">
                {s.price && (
                  <p className="text-sm font-bold text-navy">{s.price}</p>
                )}
              </div>
            </article>
          ))}

          <div className="flex flex-col justify-center rounded-2xl bg-gradient-navy p-7 shadow-elegant">
            <h3 className="text-xl font-bold text-navy-foreground">
              ¿No sabe cuál aplica a su empresa?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">
              Las obligaciones cambian según número de trabajadores, nivel de riesgo ARL, actividad
              económica y requisitos de sus clientes.
            </p>
            <Button asChild variant="gold" className="mt-6 w-fit">
              <a href="#diagnostico">
                Descubrir qué aplica <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Los valores se muestran como precios de referencia "desde" y pueden variar según el alcance
          del proyecto.
        </p>
      </div>
    </section>
  );
}
