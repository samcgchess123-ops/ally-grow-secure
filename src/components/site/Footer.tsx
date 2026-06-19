import { Mail, Phone, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { EMAIL, PHONE_DISPLAY, INSTAGRAM, whatsappUrl, DEFAULT_WA_MESSAGE } from "./config";

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo variant="light" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-foreground/70">
            G3STION SAS presta servicios de implementación y mantenimiento de SG-SST, auditorías,
            sistemas de gestión ISO, certificación RUC, PESV, gestión documental, capacitación y
            consultoría especializada para empresas de todos los sectores en Colombia.
          </p>
          <p className="mt-4 text-xs text-navy-foreground/50">
            Empresa legalmente constituida en Colombia hace más de 9 años, con consultores de más de
            15 años de experiencia en sistemas de gestión y SST.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-gold">Navegación</h4>
          <ul className="mt-4 grid gap-2.5 text-sm text-navy-foreground/70">
            {[
              ["#servicios", "Servicios"],
              ["#diferenciales", "Por qué nosotros"],
              ["#comunidad", "Comunidad WhatsApp"],
              ["#blog", "Blog"],
              ["#faq", "Preguntas frecuentes"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-gold">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-gold">Contacto</h4>
          <ul className="mt-4 grid gap-3 text-sm text-navy-foreground/70">
            <li>
              <a href={whatsappUrl(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-gold">
                <Phone className="size-4 text-gold" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 transition-colors hover:text-gold">
                <Mail className="size-4 text-gold" /> {EMAIL}
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-gold">
                <Instagram className="size-4 text-gold" /> @{INSTAGRAM}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-navy-foreground/50">
            Yudi Andrea Torres Vásquez — CEO & Consultora
          </p>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-navy-foreground/50 lg:px-8">
          © {new Date().getFullYear()} G3STION SAS · Consultoría Inteligente. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
