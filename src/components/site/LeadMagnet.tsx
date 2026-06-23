import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "./config";

const options = [
  { key: "Gerencial", desc: "Dirección y estrategia" },
  { key: "Gestión Humana", desc: "Selección e inducción" },
  { key: "Compras", desc: "Proveedores y calidad" },
  { key: "Mantenimiento", desc: "Equipos y activos" },
];

export function LeadMagnet() {
  return (
    <section id="guia" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-gold/30 bg-gradient-navy shadow-elegant">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-gold">
                <FileText className="size-4" /> Recurso gratuito de alto valor
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-foreground sm:text-4xl">
                ¿Tu prioridad hoy no es una certificación, sino ordenar tu empresa?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-foreground/75">
                Si lo que necesitas hoy es organizar y estandarizar un área de tu empresa, hagámoslo
                simple. Te enviaremos una <strong className="text-gold">Guía Práctica</strong> para
                estructurarla paso a paso.
              </p>

              <ul className="mt-6 grid gap-2.5">
                {[
                  "Procedimientos listos para aplicar",
                  "Formatos descargables por área",
                  "Acompañamiento de expertos en gestión",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-navy-foreground/85">
                    <CheckCircle2 className="size-5 shrink-0 text-gold" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/[0.05] p-6 sm:p-8">
              <p className="text-sm font-medium text-navy-foreground/85">
                👉 Elige la opción que te urge organizar y te enviaremos la guía por WhatsApp:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {options.map((o) => (
                  <a
                    key={o.key}
                    href={whatsappUrl(`PROCESO ${o.key}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl border border-navy-foreground/15 bg-navy-foreground/[0.04] p-4 transition-all hover:border-gold hover:bg-navy-foreground/[0.08]"
                  >
                    <span className="font-bold text-navy-foreground">{o.key}</span>
                    <span className="mt-0.5 text-xs text-navy-foreground/60">{o.desc}</span>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                      Escribir "PROCESO {o.key}"
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                ))}
              </div>
              <p className="mt-5 text-center text-xs text-navy-foreground/55">
                Sin costo. Recibirás la guía práctica directamente en tu WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
