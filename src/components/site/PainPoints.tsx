import { Scale, Users, HeartPulse, AlertTriangle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pains = [
  {
    icon: Scale,
    title: "Multas y sanciones legales",
    text: "Una auditoría o un requerimiento pueden traducirse en multas económicas e, incluso, en el cierre de su negocio.",
  },
  {
    icon: Users,
    title: "Pérdida de clientes y contratos",
    text: "Las empresas exigen requisitos como RUC, BASC o normas ISO. Operar sin estos sistemas lo deja fuera de mejores oportunidades comerciales.",
  },
  {
    icon: HeartPulse,
    title: "Accidentes y responsabilidad civil o penal",
    text: "Ante un siniestro laboral, la gestión documental es el mejor soporte, de lo contrario la ARL puede objetar la cobertura de las prestaciones, trasladando la responsabilidad sobre la empresa.",
  },
];

export function PainPoints() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="El costo de no actuar"
          title="¿Qué le cuesta seguir aplazando las obligaciones legales?"
          description="Muchas empresas operan sin un sistema de gestión en regla... hasta que el riesgo se materializa. Esperar a que ocurra una emergencia, una inspección o una exigencia de un cliente multiplica los costos drásticamente."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold/50"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <p.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-2xl items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-5">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-gold-foreground" />
          <p className="text-sm leading-relaxed text-navy">
            <strong>El marco legal colombiano cambia con frecuencia.</strong> No conocer una norma —o
            aplicarla a medias— no lo exime del cumplimiento. Sin orientación especializada, el riesgo
            siempre está presente.
          </p>
        </div>
      </div>
    </section>
  );
}
