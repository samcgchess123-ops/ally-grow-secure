import { ShieldCheck, Handshake, Award, UserCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Cumplimiento legal activo",
    text: "Implementamos, mantenemos y actualizamos su SG-SST conforme a la Resolución 0312 de 2019, el Decreto 1072 y las normas sectoriales que apliquen.",
  },
  {
    icon: Handshake,
    title: "Acompañamiento real, no solo papeles",
    text: "Estamos presentes cuando llega el Ministerio, cuando un cliente pide un informe o cuando hay un incidente. No manejamos carpetas, manejamos su tranquilidad.",
  },
  {
    icon: Award,
    title: "Certificaciones que abren puertas",
    text: "Cuando necesita ISO 9001, 45001, 14001, RUC u otra norma, la llevamos de principio a fin con un plan claro y plazos reales.",
  },
  {
    icon: UserCheck,
    title: "Talento humano y contratación",
    text: "Diseñamos estrategias de contratación legales, administramos nómina y prestaciones, blindándolo ante la UGPP.",
  },
];

export function Solution() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          invert
          eyebrow="La solución"
          title="Acompañamiento permanente que convierte el cumplimiento en ventaja competitiva"
          description="G3STION SAS no llega, entrega un documento firmado y desaparece. Asumimos formalmente el rol legal de responsables del SG-SST, diseñamos el sistema según su sector y lo mantenemos activo y actualizado mes a mes."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="flex gap-5 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/[0.04] p-6 transition-colors hover:border-gold/40"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                <p.icon className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="gold" size="lg">
            <a href="#diagnostico">
              Quiero este acompañamiento <ArrowRight className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
