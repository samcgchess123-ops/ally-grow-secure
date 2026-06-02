import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Responda unas preguntas rápidas",
    text: "Complete un formulario breve de diagnóstico. Le tomará menos de 5 minutos y nos permite entender el tamaño, sector y nivel de riesgo de su empresa.",
  },
  {
    n: "02",
    title: "Evaluamos su situación",
    text: "Revisamos sus respuestas y confirmamos si podemos ayudarle. Si hay un encaje claro, le asignamos un espacio en el calendario de un consultor experto.",
  },
  {
    n: "03",
    title: "Llamada de diagnóstico gratuita",
    text: "Una conversación de 20 minutos donde revisamos el estado actual frente a la normativa, identificamos riesgos inmediatos y le presentamos opciones. Sin compromiso.",
  },
  {
    n: "04",
    title: "Implementamos la solución",
    text: "Si decide avanzar, entregamos un plan de trabajo con cronograma e informes de gestión periódicos. Tiene un interlocutor directo desde el primer día.",
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
          <Button asChild variant="navy" size="lg">
            <a href="#diagnostico">
              Comenzar con el formulario de diagnóstico <ArrowRight className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
