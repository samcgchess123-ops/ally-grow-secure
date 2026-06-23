import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  "Asumimos la responsabilidad legal del SG-SST, la administración del PESV y de los programas como trabajo en alturas y espacios confinados.",
  "Diseñamos e implementamos sus Sistemas de Gestión a la medida, adaptándonos al sector económico, el tamaño y el nivel de riesgo de su empresa.",
  "Garantizamos el mantenimiento y la mejora de su ecosistema de gestión, manteniéndolo actualizado y listo para cualquier auditoría.",
  "Optimizamos su presupuesto apalancándonos en los recursos de las ARL, cajas de compensación e intermediarios.",
  "Respondemos ante el Ministerio de Trabajo, entes certificadores y exigencias de sus clientes.",
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
                Cuando firma con G3STION SAS, contrata a un aliado que ejecuta con usted, asume la responsabilidad y responde ante el Ministerio de Trabajo, otros entes legales, sus clientes y las auditorías de certificación.
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
