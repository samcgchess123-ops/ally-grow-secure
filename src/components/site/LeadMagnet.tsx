import { FileText, Download } from "lucide-react";

const options = [
  { key: "Gerencial", desc: "Dirección y estrategia", file: "/guias/Gerencial.docx" },
  { key: "Gestión Humana", desc: "Selección e inducción", file: "/guias/Gestion_Humana.docx" },
  { key: "Compras", desc: "Proveedores y calidad", file: "/guias/Compras.docx" },
  { key: "Mantenimiento", desc: "Equipos y activos", file: "/guias/Mantenimiento.docx" },
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
                simple. Descarga la <strong className="text-gold">Guía Práctica</strong> del área que
                necesitas estructurar — lista para aplicar, sin costo.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/[0.05] p-6 sm:p-8">
              <p className="text-sm font-medium text-navy-foreground/85">
                👉 Elige el área que necesitas organizar y descarga la guía:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {options.map((o) => (
                  <a
                    key={o.key}
                    href={o.file}
                    download
                    className="group flex flex-col rounded-xl border border-navy-foreground/15 bg-navy-foreground/[0.04] p-4 transition-all hover:border-gold hover:bg-navy-foreground/[0.08]"
                  >
                    <span className="font-bold text-navy-foreground">{o.key}</span>
                    <span className="mt-0.5 text-xs text-navy-foreground/60">{o.desc}</span>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                      <Download className="size-3.5 transition-transform group-hover:translate-y-0.5" />
                      Descargar guía gratis
                    </span>
                  </a>
                ))}
              </div>
              <p className="mt-5 text-center text-xs text-navy-foreground/55">
                Sin costo. Descarga directa, sin necesidad de registrarte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
