import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Nos acompañaron en toda la preparación frente a los requisitos de nuestros clientes. Hoy operamos tranquilos y sin sorpresas en las auditorías.",
    name: "ENDICONTROL S.A",
    role: "Sector servicios",
  },
  {
    quote:
      "El acompañamiento permanente marcó la diferencia. No solo entregaron documentos: respondieron por nosotros cuando más lo necesitábamos.",
    name: "CBM Energy S.A.S",
    role: "Sector energía",
  },
  {
    quote:
      "Pudimos acceder a contratos que antes no podíamos por falta de certificaciones. G3STION nos llevó de principio a fin.",
    name: "RET Soluciones",
    role: "Sector industrial",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Prueba social"
          title="Empresas que ya operan con tranquilidad"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <Quote className="size-8 text-gold" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-bold text-navy">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
