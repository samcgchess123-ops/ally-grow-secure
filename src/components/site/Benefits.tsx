import { ShieldCheck, FolderCheck, Repeat, Briefcase, Gavel, ScrollText } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  { icon: ShieldCheck, title: "Blindaje ante sanciones", text: "Reduzca la exposición a multas y requerimientos legales." },
  { icon: Gavel, title: "Tranquilidad ante auditorías", text: "Llegue preparado a cualquier inspección o visita." },
  { icon: FolderCheck, title: "Evidencias en orden", text: "Soportes auditables y al día en todo momento." },
  { icon: Repeat, title: "Cumplimiento continuo", text: "Un sistema activo mes a mes, no solo una implementación puntual." },
  { icon: Briefcase, title: "Apertura comercial", text: "Cumpla los requisitos que exigen clientes y licitaciones." },
  { icon: ScrollText, title: "Rol legal cubierto", text: "Asumimos formalmente la responsabilidad de sus sistemas." },
];

export function Benefits() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          invert
          eyebrow="Resultados"
          title="Lo que obtiene al trabajar con G3STION"
          description="No describimos procesos: comunicamos lo que realmente cambia para su empresa."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/[0.04] p-6 transition-colors hover:border-gold/40"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                <b.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-bold text-navy-foreground">{b.title}</h3>
                <p className="mt-1 text-sm text-navy-foreground/70">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
