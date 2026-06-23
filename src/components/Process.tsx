import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Complete el formulario y agende",
    text: "Responda un breve cuestionario con los datos de su empresa y reserve un espacio en nuestro calendario. Le tomará pocos minutos.",
  },
  {
    n: "02",
    title: "Asista a la reunión",
    text: "Conversamos sobre el estado actual de su empresa, identificamos riesgos y entendemos qué necesita para cumplir.",
  },
  {
    n: "03",
    title: "Presentación de la propuesta",
    text: "Le presentamos una solución a la medida de su sector, con alcance, plazos e inversión claros.",
  },
  {
    n: "04",
    title: "Aprobación y plan de trabajo",
    text: "Una vez aprobada la propuesta, definimos el cronograma y comenzamos la ejecución con un interlocutor directo.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Así empezamos a trabajar juntos"
          description="No necesita preparar nada antes de hablar con nosotros. Solo cuéntenos qué necesita su empresa y nosotros tomamos el control desde ahí."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="font-display text-5xl font-extrabold text-gold/30">{s.n}</span>
              <h3 className="mt-3 text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 text-gold lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="navy" size="lg" className="h-auto max-w-full whitespace-normal py-3 text-center">
            <a href="/#diagnostico">
              Comenzar con el formulario de diagnóstico <ArrowRight className="size-5 shrink-0" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
