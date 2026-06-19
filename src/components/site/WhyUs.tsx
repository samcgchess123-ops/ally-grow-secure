import { Check } from "lucide-react";
import ceoImg from "@/assets/why-us-person.jpg";

const credentials = [
  "+15 años de experiencia en sistemas de gestión legales en Colombia",
  "Empresa legalmente constituida hace más de 9 años · G3STION SAS",
  "Asunción formal del rol legal como responsable del SG-SST",
  "Experiencia en construcción, industrial, servicios, salud, logística y comercio",
  "Diagnóstico inicial gratuito para cada empresa",
  "Acompañamiento en visitas del Ministerio de Trabajo e inspecciones",
  "Red de profesionales especializados por área normativa",
];

export function WhyUs() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 -z-0 h-full w-full rounded-3xl bg-gold/20" aria-hidden />
            <img
              src={ceoImg}
              alt="Yudi Andrea Torres Vásquez, CEO y consultora principal de G3STION SAS"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative z-10 rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 left-1/2 z-20 w-[88%] -translate-x-1/2 rounded-2xl bg-navy p-4 text-center shadow-card">
              <p className="font-display font-bold text-navy-foreground">Yudi Andrea Torres Vásquez</p>
              <p className="text-xs uppercase tracking-wide text-gold">CEO & Consultora principal</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Por qué trabajar con nosotros
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Más de 15 años construyendo confianza, empresa por empresa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            G3STION SAS nació de una convicción simple: las pymes colombianas merecen el mismo nivel
            de asesoría especializada que las empresas grandes, sin las inversiones elevadas que solo
            ellas pueden asumir. Nuestros clientes no nos contratan por un trámite, sino porque
            necesitan a alguien en quien confiar.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {credentials.map((c) => (
              <li key={c} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold">
                  <Check className="size-3.5 text-gold-foreground" strokeWidth={3} />
                </span>
                <span className="text-sm text-navy">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
