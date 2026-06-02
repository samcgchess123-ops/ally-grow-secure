import { AlertTriangle, FileWarning, HeartPulse, Scale, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pains = [
  {
    icon: Scale,
    title: "Multas y sanciones legales",
    text: "Una auditoría o requerimiento inesperado puede traducirse en sanciones, retrasos operativos y pérdida de contratos.",
  },
  {
    icon: Users,
    title: "Pérdida de clientes y contratos",
    text: "Cada vez más empresas exigen a sus proveedores estándares como RUC, BASC o normas ISO. Sin un sistema funcionando, pierde oportunidades.",
  },
  {
    icon: HeartPulse,
    title: "Accidentes y responsabilidad",
    text: "Sin gestión documental legal, la responsabilidad recae sobre usted y la ARL puede negarse a asumir las prestaciones.",
  },
  {
    icon: FileWarning,
    title: "Documentación inexistente",
    text: "Una inspección no avisada sin evidencias de gestión pone en riesgo la continuidad de su operación.",
  },
];

export function PainPoints() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="El costo de no actuar"
          title="Lo que le puede costar seguir aplazando este tema"
          description="Muchas empresas operan meses sin un sistema de gestión en regla, hasta que llega una visita del Ministerio o un cliente exige nuevos requisitos. Para entonces, el costo de no haber actuado a tiempo es mucho mayor."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
