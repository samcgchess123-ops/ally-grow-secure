import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { whatsappUrl } from "./config";

const posts = [
  {
    title: "¿Es obligatorio implementar SG-SST en Colombia?",
    excerpt:
      "Toda empresa con trabajadores está obligada a implementar el SG-SST. Le explicamos qué dice la ley y desde cuándo aplica para su negocio.",
    date: "12 de junio, 2026",
    tag: "Normativa",
  },
  {
    title: "¿Qué sanciones puede recibir una empresa por incumplir la Resolución 0312?",
    excerpt:
      "Las multas por incumplir los estándares mínimos pueden llegar a cifras millonarias e incluso al cierre. Conozca los rangos y cómo evitarlas.",
    date: "5 de junio, 2026",
    tag: "Cumplimiento",
  },
  {
    title: "Diferencia entre ISO 45001 y SG-SST",
    excerpt:
      "Aunque se complementan, no son lo mismo. Aclaramos cuándo necesita cada uno y cómo aprovecharlos para crecer comercialmente.",
    date: "28 de mayo, 2026",
    tag: "Certificaciones",
  },
  {
    title: "¿Qué es el RUC y cuándo se necesita?",
    excerpt:
      "El Registro Único de Contratistas es exigido por muchas empresas del sector hidrocarburos y energía. Vea si su empresa lo requiere.",
    date: "20 de mayo, 2026",
    tag: "Certificaciones",
  },
  {
    title: "Cómo prepararse para una visita del Ministerio de Trabajo",
    excerpt:
      "Una inspección no avisada puede llegar en cualquier momento. Le compartimos la lista de documentos y evidencias que debe tener listos.",
    date: "14 de mayo, 2026",
    tag: "Inspecciones",
  },
  {
    title: "¿Cuántos estándares mínimos aplican a mi empresa?",
    excerpt:
      "7, 21 o 60 estándares: depende de su número de trabajadores y nivel de riesgo. Le ayudamos a identificar cuál es su caso.",
    date: "7 de mayo, 2026",
    tag: "SG-SST",
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Recursos y conocimiento"
          title="Aprenda a proteger y hacer crecer su empresa"
          description="Artículos prácticos sobre cumplimiento normativo, certificaciones y gestión empresarial en Colombia."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="relative flex h-36 items-center justify-center bg-gradient-navy">
                <span className="absolute left-5 top-5 rounded-full bg-gold px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-gold-foreground">
                  {p.tag}
                </span>
                <span className="font-display text-5xl font-extrabold text-navy-foreground/15">
                  G3
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="size-3.5" /> {p.date}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-navy">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <a
                  href={whatsappUrl(`Hola G3STION SAS, me interesa el artículo "${p.title}". ¿Pueden ampliarme la información?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-gold-foreground"
                >
                  Leer más
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="navy" size="lg">
            <a
              href={whatsappUrl("Hola G3STION SAS, quiero recibir sus artículos y novedades normativas.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero recibir más contenido <ArrowRight className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
