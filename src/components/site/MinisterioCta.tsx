import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaImg from "@/assets/cta-building.jpg";
import { whatsappUrl } from "./config";

const sectors = [
  "Construcción", "Energía", "Industrial", "Manufactura", "Logística",
  "Salud", "Comercio", "Servicios", "Agroindustria", "Inmobiliario",
];

export function MinisterioCta() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0">
        <img src={ctaImg} alt="" loading="lazy" width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gold text-gold-foreground">
          <AlertCircle className="size-7" />
        </div>
        <h2 className="mt-6 text-balance text-3xl font-extrabold leading-tight text-navy-foreground sm:text-4xl">
          ¿Recibió una visita del Ministerio o un cliente le exige RUC?
        </h2>
        <p className="mt-4 text-lg text-navy-foreground/80">
          No espere a que el problema crezca. Revisamos su situación y le ayudamos a preparar la
          documentación necesaria antes de que sea tarde.
        </p>
        <Button asChild variant="gold" size="xl" className="mt-8">
          <a
            href={whatsappUrl("Hola G3STION SAS, necesito una revisión urgente de mi situación normativa.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar revisión urgente <ArrowRight className="size-5" />
          </a>
        </Button>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
          Sectores que atendemos
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2.5">
          {sectors.map((s) => (
            <span
              key={s}
              className="rounded-full border border-navy-foreground/20 bg-navy-foreground/5 px-4 py-1.5 text-sm font-medium text-navy-foreground/85"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
