import { useState } from "react";
import { CalendarClock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "./SectionHeading";
import { whatsappUrl, PHONE_DISPLAY } from "./config";

export function DiagnosticForm() {
  const [form, setForm] = useState({
    empresa: "",
    nombre: "",
    sector: "",
    empleados: "",
    riesgo: "",
    situacion: "",
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hola G3STION SAS, quiero agendar mi diagnóstico gratuito.\n\n` +
      `Empresa: ${form.empresa}\n` +
      `Nombre: ${form.nombre}\n` +
      `Sector: ${form.sector}\n` +
      `N° de empleados: ${form.empleados}\n` +
      `Nivel de riesgo ARL: ${form.riesgo}\n` +
      `Situación a resolver: ${form.situacion}`;
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="diagnostico" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Diagnóstico gratuito"
          title="Cuéntenos cómo está su empresa y le decimos qué necesita"
          description="Responda unas preguntas rápidas. Con esa información llegamos a la llamada de diagnóstico con todo el contexto. Sin costo y sin compromiso."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <Label htmlFor="empresa">Nombre de la empresa</Label>
                <Input id="empresa" required value={form.empresa} onChange={(e) => set("empresa", e.target.value)} className="mt-1.5" placeholder="Su empresa S.A.S" />
              </div>
              <div className="sm:col-span-1">
                <Label htmlFor="nombre">Su nombre</Label>
                <Input id="nombre" required value={form.nombre} onChange={(e) => set("nombre", e.target.value)} className="mt-1.5" placeholder="Nombre y apellido" />
              </div>
              <div>
                <Label htmlFor="sector">Sector</Label>
                <Input id="sector" value={form.sector} onChange={(e) => set("sector", e.target.value)} className="mt-1.5" placeholder="Ej: Construcción" />
              </div>
              <div>
                <Label htmlFor="empleados">N° de empleados</Label>
                <Input id="empleados" value={form.empleados} onChange={(e) => set("empleados", e.target.value)} className="mt-1.5" placeholder="Ej: 15" inputMode="numeric" />
              </div>
              <div className="sm:col-span-2">
                <Label>Nivel de riesgo ARL</Label>
                <Select value={form.riesgo} onValueChange={(v) => set("riesgo", v)}>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Seleccione su nivel de riesgo" />
                  </SelectTrigger>
                  <SelectContent>
                    {["No lo sé", "Riesgo I", "Riesgo II", "Riesgo III", "Riesgo IV", "Riesgo V"].map((r) => (
                      <SelectItem key={r} value={r}>{r}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="situacion">¿Qué situación lo llevó a buscar asesoría?</Label>
                <Textarea id="situacion" value={form.situacion} onChange={(e) => set("situacion", e.target.value)} className="mt-1.5" rows={3} placeholder="Ej: tengo una visita del Ministerio, un cliente me exige RUC..." />
              </div>
            </div>

            <Button type="submit" variant="gold" size="lg" className="mt-6 w-full">
              <Send className="size-5" /> Enviar y agendar mi diagnóstico
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Al enviar abrirá WhatsApp con sus datos listos para confirmar la cita.
            </p>
          </form>

          {/* Scheduling / contact side */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-gradient-navy p-7 shadow-elegant sm:p-9">
              <div className="flex size-12 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                <CalendarClock className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy-foreground">
                Agende directamente en el calendario
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">
                Reserve un espacio de 20 minutos con un consultor experto. Confirmamos disponibilidad
                según las respuestas de su diagnóstico.
              </p>
              {/* Google Calendar scheduling embed — replace src with your Appointment Schedule URL */}
              <div className="mt-6 flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-navy-foreground/25 bg-navy-foreground/[0.04] p-6 text-center">
                <p className="text-sm font-medium text-navy-foreground/80">
                  Espacio reservado para el calendario de agendamiento (Google Calendar).
                </p>
                <p className="mt-1 text-xs text-navy-foreground/55">
                  Pegue aquí el enlace de su "Programación de citas" de Google Calendar para activarlo.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
              <h3 className="text-lg font-bold text-navy">¿Prefiere hablar directamente?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Escríbanos por WhatsApp al {PHONE_DISPLAY}. Le respondemos en horario laboral.
              </p>
              <Button asChild variant="whatsapp" size="lg" className="mt-5 w-full">
                <a
                  href={whatsappUrl("Hola G3STION SAS, quiero hablar sobre el diagnóstico para mi empresa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" /> Escribir por WhatsApp ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
