import { ArrowRight, MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl, DEFAULT_WA_MESSAGE } from "./config";
import heroImg from "@/assets/hero.jpg";

const proofs = [
  "+15 años de experiencia",
  "Diagnóstico inicial sin costo",
  "Cobertura en todo el país",
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Consultora de seguridad y salud en el trabajo de G3STION SAS"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-12 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold">
            <ShieldCheck className="size-4" /> Aliado permanente en SG-SST y certificaciones
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
            Cumpla con la normativa SST{" "}
            <span className="text-gold">sin complicaciones</span> y siga creciendo con tranquilidad.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
            En G3STION SAS acompañamos a pymes y microempresas colombianas a cumplir las normativas
            legales y de clientes de forma permanente. Podemos asumir formal y legalmente la
            responsabilidad de su SG-SST, para que usted enfoque su energía en su negocio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <a href="#diagnostico">
                Agendar mi diagnóstico gratuito <ArrowRight className="size-5" />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href={whatsappUrl(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" /> Escribir por WhatsApp
              </a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {proofs.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-navy-foreground/85">
                <CheckCircle2 className="size-5 text-gold" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
