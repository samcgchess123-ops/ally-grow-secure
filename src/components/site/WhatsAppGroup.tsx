import { ShieldCheck, BellRing, Lock, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import qrImg from "@/assets/whatsapp-qr.png";
import { whatsappUrl } from "./config";

const benefits = [
  {
    icon: BellRing,
    title: "Alertas tempranas",
    text: "Te avisamos sobre los cambios normativos que impactan tu matriz legal antes de que sean un problema.",
  },
  {
    icon: Lock,
    title: "Cero spam",
    text: "Grupo cerrado donde únicamente los administradores expertos en SST publican información clara y útil.",
  },
  {
    icon: Users,
    title: "Comunidad exclusiva",
    text: "No llenaremos tu celular de mensajes innecesarios. Solo contenido relevante para tu cumplimiento.",
  },
];

export function WhatsAppGroup() {
  return (
    <section id="comunidad" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
          <div className="grid items-center gap-8 p-6 sm:p-12 lg:grid-cols-12 lg:gap-10 lg:p-16">
            <div className="lg:col-span-7">
              <span className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-[#25D366]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1c7a44]">
                <ShieldCheck className="size-4 shrink-0" /> Comunidad de cumplimiento legal
              </span>
              <h2 className="mt-5 text-balance text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                ¿Tu empresa es Riesgo IV o V, o tiene más de 51 empleados?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Sabes que por ley debes tener una matriz legal. Únete a nuestra comunidad exclusiva de
                WhatsApp y mantén tu <strong className="text-navy">Matriz de Requisitos Legales</strong>{" "}
                al día. Cumplir con los estándares mínimos de la Resolución 0312 de 2019 no es opcional.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                No tienes que revisar el Diario Oficial todos los días ni pagar consultorías costosas
                solo para saber qué norma cambió. <strong className="text-navy">Nosotros lo hacemos por ti.</strong>
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {benefits.map((b) => (
                  <div key={b.title} className="rounded-2xl border border-border bg-secondary p-4">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-navy text-gold">
                      <b.icon className="size-5" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-navy">{b.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{b.text}</p>
                  </div>
                ))}
              </div>

              <Button asChild variant="whatsapp" size="lg" className="mt-8 h-auto w-full whitespace-normal py-3 text-center sm:w-auto">
                <a
                  href="https://chat.whatsapp.com/JJX7GBLVS7EBl7tPt7jPDx?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5 shrink-0" /> ¡Quiero unirme al Grupo de WhatsApp
                  Gratis!
                </a>
              </Button>

              <p className="mt-4 text-sm text-muted-foreground">
                <strong className="text-navy">¿Tiene algún costo?</strong> El acceso a la comunidad y a
                las alertas informativas es 100% gratuito.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="mx-auto flex max-w-xs flex-col items-center rounded-3xl bg-gradient-navy p-8 text-center shadow-card">
                <p className="text-sm font-bold uppercase tracking-wide text-gold">
                  Marco legal SST Colombia
                </p>
                <p className="mt-1 text-xs text-navy-foreground/60">Grupo de WhatsApp</p>
                <div className="mt-5 rounded-2xl bg-white p-4 shadow-card">
                  <img
                    src={qrImg}
                    alt="Código QR para unirse al grupo de WhatsApp Marco legal SST Colombia"
                    width={282}
                    height={282}
                    loading="lazy"
                    className="size-full"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-navy-foreground/65">
                  Escanea este código QR con la cámara de WhatsApp para unirte al grupo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
