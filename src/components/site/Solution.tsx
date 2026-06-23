import { ShieldCheck, Handshake, Award, UserCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Cumplimiento legal activo",
    text: "Implementamos, mantenemos y mejoramos sus Sistemas de Gestión, Planes y Programas conforme al Decreto 1072 de 2015, las Resoluciones 0312 de 2019, 0491 de 2020, 4272 de 2021, 40595 de 2022 y las normas sectoriales aplicables.",
  },
  {
    icon: Handshake,
    title: "Acompañamiento de Valor",
    text: "Estamos presentes cuando llega el Ministerio, cuando un cliente le exige un requisito o si ocurre un accidente.",
  },
  {
    icon: Award,
    title: "Certificaciones que abren puertas",
    text: "Cuando necesita ISO 9001, 45001, 14001, RUC u otra norma, la llevamos de principio a fin con un plan claro y plazos reales.",
  },
  {
    icon: UserCheck,
    title: "Talento Humano y Contratación",
    text: "Diseñamos estrategias de contratación de personal y administramos su nómina, blindándote ante la UGPP o demandas laborales.",
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
          title="Acompañamiento que convierte el cumplimiento en ventaja competitiva"
          description="En G3STION SAS nos convertimos en su aliado estratégico: asumimos formalmente la responsabilidad legal de sus sistemas de gestión, programas y planes normativos, diseñando soluciones a la medida de su sector, manteniéndolas actualizadas."
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
