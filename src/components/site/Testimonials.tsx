import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    name: "ENDICONTROL S.A.",
    quote:
      "Yudi Torres inició su trayectoria con nosotros en 2007 como Coordinadora de Calidad, asumiendo luego la dirección de todos nuestros sistemas de gestión (HSEQ, PESV y acreditaciones especiales). Su liderazgo fue tan integral que culminó su etapa laboral como Administradora de la empresa. En 2024, al independizarse con su firma G3STIÓN SAS, no dudamos en contratarla como proveedora estratégica. Gracias a su guía constante, hoy contamos con certificaciones y acreditaciones de alto nivel como ISO 9001, ISO 45001, RUC, ISO 17020 e ISO 17024. Su trabajo sigue siendo invaluable para nuestro crecimiento.",
  },
  {
    name: "RET SOLUCIONES SAS",
    quote:
      "Iniciamos nuestro vínculo con Yudi Torres en mayo de 2023 para el servicio de responsable del SG-SST. Sin embargo, gracias a la gran experiencia y visión integral de G3STIÓN SAS, hoy no solo cumplen ese rol, sino que se han convertido en nuestros asesores administrativos clave, orientándonos en contratación de personal y gestión documental. Actualmente, estamos implementando bajo su guía los requisitos de la norma ISO 9001 con miras a la certificación. Un aliado excepcional para nuestra estructura organizacional.",
  },
  {
    name: "TÁCTICA WEB SAS",
    quote:
      "Teníamos muchas dudas sobre cuál era el esquema de contratación ideal para nuestro equipo. G3STIÓN SAS nos brindó la asesoría exacta que necesitábamos, orientándonos con total claridad sobre el tipo de contrato adecuado para nuestros colaboradores. Su respaldo nos dio la tranquilidad legal y administrativa que buscábamos.",
  },
  {
    name: "GYG AUTOMOTORES CTG S.A.S.",
    quote:
      "G3STIÓN SAS llegó a nuestra empresa en noviembre de 2025 en un momento crítico, justo cuando debíamos atender una inspección oficial. Gracias a su sólida experiencia, nos prepararon de manera impecable, logrando que la compañía saliera completamente bien librada del proceso. Tras este excelente resultado, decidimos mantenerlos de forma permanente como los responsables de nuestro SG-SST.",
  },
  {
    name: "CONCIENCIA ORGÁNICA",
    quote:
      "Como empresa nueva, nuestra meta siempre ha sido crecer de manera organizada. Al contratar a nuestro primer colaborador en 2025, G3STIÓN SAS nos brindó la asesoría sobre los estándares mínimos aplicables a nuestra estructura. Iniciamos el proceso bajo su guía y, gracias a su excelente acompañamiento, alcanzamos una evaluación de 100 puntos. Hoy en día, continúan siendo los responsables de nuestro SG-SST, dándonos el respaldo que necesitamos para avanzar con total seguridad.",
  },
  {
    name: "CBM ENERGY S.A.S.",
    quote:
      "Iniciamos nuestra relación laboral con Yudi Torres en 2020 con el firme objetivo de lograr la certificación en ISO 45001, meta que se alcanzó a plena satisfacción. Hoy, varios años después, seguimos confiando plenamente en G3STIÓN SAS para el servicio de responsable de nuestro SG-SST. Su consistencia, rigor técnico y acompañamiento continuo han sido clave para mantener nuestros estándares de seguridad en el nivel más alto.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Lo que dicen nuestros clientes"
          title="Empresas que ya operan con tranquilidad"
          description="Relaciones que se sostienen en el tiempo y se convierten en alianzas estratégicas."
        />

        <Carousel
          opts={{ loop: true, align: "start" }}
          className="mt-14"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card">
                  <Quote className="size-8 shrink-0 text-gold" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy/90">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <p className="font-display font-bold text-navy">{t.name}</p>
                    <p className="text-xs uppercase tracking-wide text-gold-foreground">
                      Cliente G3STION SAS
                    </p>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-center gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
