import { useState } from "react";
import { CalendarClock, MessageCircle, Send, ArrowLeft, CheckCircle2 } from "lucide-react";
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

const SECTORS = [
  "Construcción",
  "Energía",
  "Industrial",
  "Manufactura",
  "Logística",
  "Salud",
  "Comercio",
  "Servicios",
  "Agroindustria",
  "Inmobiliario",
  "Otro",
];

const CALENDLY_BASE = "https://calendly.com/g3stion-info/30min";

export function DiagnosticForm() {
  const [step, setStep] = useState<"form" | "calendar">("form");
  const [form, setForm] = useState({
    empresa: "",
    nombre: "",
    email: "",
    telefono: "",
    sector: "",
    empleados: "",
    riesgo: "",
    situacion: "",
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const calendlyUrl = () => {
    const params = new URLSearchParams({
      hide_gdpr_banner: "1",
      background_color: "ffffff",
      primary_color: "f0a500",
    });
    if (form.nombre) params.set("name", form.nombre);
    if (form.email) params.set("email", form.email);
    return `${CALENDLY_BASE}?${params.toString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("calendar");
    setTimeout(() => {
      document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section id="diagnostico" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Diagnóstico gratuito"
          title={
            step === "form"
              ? "Cuéntenos cómo está su empresa y le decimos qué necesita"
              : "Último paso: reserve su llamada de diagnóstico"
          }
          description={
            step === "form"
              ? "Evaluamos la situación de su empresa para definir el plan para dar cumplimiento. Responda el cuestionario. Con la información realizamos un análisis para ofrecerle la solución precisa."
              : "Elija el día y la hora que más le convenga. La reserva se confirma al instante, sin salir del sitio."
          }
        />

        {/* Step indicator */}
        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 text-xs font-semibold">
          <span className={step === "form" ? "text-gold-foreground" : "text-muted-foreground"}>
            1. Cuestionario
          </span>
          <span className="h-px w-8 bg-border" />
          <span className={step === "calendar" ? "text-gold-foreground" : "text-muted-foreground"}>
            2. Agendar
          </span>
          <span className="h-px w-8 bg-border" />
          <span className="text-muted-foreground">3. Confirmación</span>
        </div>

        {step === "form" ? (
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="empresa">Nombre de la empresa</Label>
                  <Input id="empresa" required maxLength={100} value={form.empresa} onChange={(e) => set("empresa", e.target.value)} className="mt-1.5" placeholder="Su empresa S.A.S" />
                </div>
                <div>
                  <Label htmlFor="nombre">Su nombre</Label>
                  <Input id="nombre" required maxLength={100} value={form.nombre} onChange={(e) => set("nombre", e.target.value)} className="mt-1.5" placeholder="Nombre y apellido" />
                </div>
                <div>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" required maxLength={255} value={form.email} onChange={(e) => set("email", e.target.value)} className="mt-1.5" placeholder="correo@empresa.com" />
                </div>
                <div>
                  <Label htmlFor="telefono">Teléfono / WhatsApp</Label>
                  <Input id="telefono" type="tel" required maxLength={20} value={form.telefono} onChange={(e) => set("telefono", e.target.value)} className="mt-1.5" placeholder="+57 300 000 0000" inputMode="tel" />
                </div>
                <div>
                  <Label>Sector</Label>
                  <Select value={form.sector} onValueChange={(v) => set("sector", v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Seleccione su sector" />
                    </SelectTrigger>
                    <SelectContent>
                      {SECTORS.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="empleados">N° de empleados</Label>
                  <Input id="empleados" value={form.empleados} onChange={(e) => set("empleados", e.target.value)} className="mt-1.5" placeholder="Ej: 15" inputMode="numeric" maxLength={6} />
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
                  <Textarea id="situacion" value={form.situacion} onChange={(e) => set("situacion", e.target.value)} className="mt-1.5" rows={3} maxLength={1000} placeholder="Ej: tengo una visita del Ministerio, un cliente me exige RUC..." />
                </div>
              </div>

              <Button type="submit" variant="gold" size="lg" className="mt-6 w-full">
                <Send className="size-5" /> Continuar al calendario
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Al continuar, pasará al calendario para reservar su cita aquí mismo.
              </p>
            </form>

            {/* Scheduling / contact side */}
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-gradient-navy p-7 shadow-elegant sm:p-9">
                <div className="flex size-12 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                  <CalendarClock className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-foreground">
                  Cómo funciona el agendamiento
                </h3>
                <ul className="mt-5 grid gap-4">
                  {[
                    "Complete el cuestionario con los datos de su empresa.",
                    "Reserve un espacio de 30 minutos en nuestro calendario.",
                    "Recibimos el contexto y llegamos a la reunión con una solución preliminar.",
                  ].map((t, i) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-gold-foreground">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-navy-foreground/80">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
                <h3 className="text-lg font-bold text-navy">¿Prefiere contacto inmediato?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Escríbanos por WhatsApp al {PHONE_DISPLAY}. Le responderemos en el menor tiempo
                  posible.
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
        ) : (
          <div className="mt-10">
            <div className="mb-5 flex flex-col items-center gap-3 rounded-2xl border border-gold/30 bg-secondary p-4 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="flex items-center gap-2 text-sm font-medium text-navy">
                <CheckCircle2 className="size-5 text-gold-foreground" /> Datos recibidos. Ahora elija
                su horario en el calendario.
              </p>
              <Button variant="outline" size="sm" onClick={() => setStep("form")}>
                <ArrowLeft className="size-4" /> Volver al cuestionario
              </Button>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <iframe
                title="Agendar diagnóstico — Calendly"
                src={calendlyUrl()}
                className="h-[720px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
