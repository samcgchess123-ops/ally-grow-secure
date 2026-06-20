import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { whatsappUrl, DEFAULT_WA_MESSAGE } from "./config";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#diferenciales", label: "Por qué nosotros" },
  { href: "/#comunidad", label: "Comunidad" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "Preguntas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy/95 backdrop-blur shadow-card" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/" aria-label="G3STION SAS inicio">
          <Logo variant="light" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy-foreground/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outlineLight" size="sm">
            <a href={whatsappUrl(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer">
              <Phone className="size-4" /> WhatsApp
            </a>
          </Button>
          <Button asChild variant="gold" size="sm">
            <a href="/#diagnostico">Diagnóstico gratuito</a>
          </Button>
        </div>

        <button
          className="text-navy-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy-foreground/10 bg-navy px-5 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-navy-foreground/85 hover:bg-navy-foreground/10"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button asChild variant="gold">
              <a href="/#diagnostico" onClick={() => setOpen(false)}>
                Diagnóstico gratuito
              </a>
            </Button>
            <Button asChild variant="whatsapp">
              <a href={whatsappUrl(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
