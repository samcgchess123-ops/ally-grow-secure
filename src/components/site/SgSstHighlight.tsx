import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  "Asumimos formalmente el rol legal de responsable de sus sistemas de gestión",
  "Administrador PESV y de programas de alturas y espacios confinados",
  "Diseño del sistema según el sector y nivel de riesgo de su empresa",
  "Sistema activo y actualizado mes a mes, sin depender de usted",
];

export function SgSstHighlight() {
  return (
    <section id="diferenciales" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-navy shadow-elegant">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-gold">
                <ShieldCheck className="size-4" /> Nuestra principal diferencia
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-foreground sm:text-4xl">
                Asumimos la responsabilidad legal de su sistema
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-foreground/75">
                Cuando firma con G3STION SAS no contrata a alguien que le explica qué hacer. Contrata
                a alguien que lo hace con usted y responde por ello ante el Ministerio, sus clientes y
                las auditorías.
              </p>
              <Button asChild variant="gold" size="lg" className="mt-8">
                <a href="#diagnostico">
                  Conocer cómo funciona <ArrowRight className="size-5" />
                </a>
              </Button>
            </div>

            <ul className="grid gap-4">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-navy-foreground/10 bg-navy-foreground/[0.05] p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-gold" />
                  <span className="text-sm font-medium text-navy-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
