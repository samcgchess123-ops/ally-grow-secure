import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { Phone, X, Menu, Mail, Instagram, MessageCircle } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-gold text-gold-foreground font-semibold shadow-gold hover:brightness-105 active:brightness-95",
        navy: "bg-navy text-navy-foreground font-semibold shadow-card hover:bg-navy-soft",
        outlineLight: "border border-navy-foreground/40 bg-transparent text-navy-foreground hover:bg-navy-foreground/10",
        whatsapp: "bg-[#25D366] text-white font-semibold shadow-card hover:brightness-105"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-9 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function Logo({
  className,
  variant = "light"
}) {
  const word = variant === "light" ? "text-navy-foreground" : "text-navy";
  return /* @__PURE__ */ jsxs("span", { className: cn("inline-flex items-baseline gap-1.5 font-display font-extrabold tracking-tight", className), children: [
    /* @__PURE__ */ jsxs("span", { className: cn("text-2xl leading-none", word), children: [
      "G",
      /* @__PURE__ */ jsx("span", { className: "text-gold", children: "3" }),
      "STION"
    ] }),
    /* @__PURE__ */ jsx("span", { className: "rounded-[4px] bg-gold px-1 py-0.5 text-[0.6rem] font-bold uppercase leading-none text-gold-foreground", children: "s.a.s" })
  ] });
}
const WHATSAPP_NUMBER = "573216989013";
const EMAIL = "info@g3stion.com";
const PHONE_DISPLAY = "+57 321 698 9013";
const INSTAGRAM = "g3stionsas";
function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
const DEFAULT_WA_MESSAGE = "Hola G3STION SAS, quiero agendar mi diagnóstico gratuito para mi empresa.";
const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#diferenciales", label: "Por qué nosotros" },
  { href: "/#comunidad", label: "Comunidad" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "Preguntas" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy/95 backdrop-blur shadow-card" : "bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8", children: [
          /* @__PURE__ */ jsx("a", { href: "/", "aria-label": "G3STION SAS inicio", children: /* @__PURE__ */ jsx(Logo, { variant: "light" }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden items-center gap-8 lg:flex", children: links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "text-sm font-medium text-navy-foreground/80 transition-colors hover:text-gold",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-3 lg:flex", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outlineLight", size: "sm", children: /* @__PURE__ */ jsxs("a", { href: whatsappUrl(DEFAULT_WA_MESSAGE), target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(Phone, { className: "size-4" }),
              " WhatsApp"
            ] }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "gold", size: "sm", children: /* @__PURE__ */ jsx("a", { href: "/#diagnostico", children: "Diagnóstico gratuito" }) })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "text-navy-foreground lg:hidden",
              onClick: () => setOpen((v) => !v),
              "aria-label": "Abrir menú",
              children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxs("div", { className: "border-t border-navy-foreground/10 bg-navy px-5 pb-6 pt-2 lg:hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1", children: links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "rounded-md px-3 py-2.5 text-sm font-medium text-navy-foreground/85 hover:bg-navy-foreground/10",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "gold", children: /* @__PURE__ */ jsx("a", { href: "/#diagnostico", onClick: () => setOpen(false), children: "Diagnóstico gratuito" }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "whatsapp", children: /* @__PURE__ */ jsx("a", { href: whatsappUrl(DEFAULT_WA_MESSAGE), target: "_blank", rel: "noopener noreferrer", children: "Escribir por WhatsApp" }) })
          ] })
        ] })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-navy", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx(Logo, { variant: "light" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-md text-sm leading-relaxed text-navy-foreground/70", children: "G3STION SAS es una firma legalmente constituida con más de 9 años de trayectoria, respaldada por un equipo con más de 15 años de experiencia. Proveemos soluciones integrales en gestión humana, Sistemas de Gestión, RUC, ISO y sistemas de gestión legales como SG-SST, PESV, entre otros." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold uppercase tracking-wide text-gold", children: "Navegación" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-2.5 text-sm text-navy-foreground/70", children: [
          ["/#servicios", "Servicios"],
          ["/#diferenciales", "Por qué nosotros"],
          ["/#comunidad", "Comunidad WhatsApp"],
          ["/blog", "Blog"],
          ["/#faq", "Preguntas frecuentes"]
        ].map(([href, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href, className: "transition-colors hover:text-gold", children: label }) }, href)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold uppercase tracking-wide text-gold", children: "Contacto" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 grid gap-3 text-sm text-navy-foreground/70", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: whatsappUrl(DEFAULT_WA_MESSAGE), target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 transition-colors hover:text-gold", children: [
            /* @__PURE__ */ jsx(Phone, { className: "size-4 text-gold" }),
            " ",
            PHONE_DISPLAY
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: `mailto:${EMAIL}`, className: "flex items-center gap-2 transition-colors hover:text-gold", children: [
            /* @__PURE__ */ jsx(Mail, { className: "size-4 text-gold" }),
            " ",
            EMAIL
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: `https://instagram.com/${INSTAGRAM}`, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 transition-colors hover:text-gold", children: [
            /* @__PURE__ */ jsx(Instagram, { className: "size-4 text-gold" }),
            " @",
            INSTAGRAM
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-navy-foreground/50", children: "Yudi Andrea Torres Vásquez — CEO & Consultora" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-navy-foreground/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 py-6 text-center text-xs text-navy-foreground/50 lg:px-8", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " G3STION SAS · Consultoría Inteligente. Todos los derechos reservados."
    ] }) })
  ] });
}
function WhatsAppFloat() {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: whatsappUrl(DEFAULT_WA_MESSAGE),
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Escribir por WhatsApp",
      className: "fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold transition-transform hover:scale-110",
      children: /* @__PURE__ */ jsx(MessageCircle, { className: "size-7" })
    }
  );
}
export {
  Button as B,
  DEFAULT_WA_MESSAGE as D,
  Footer as F,
  Navbar as N,
  PHONE_DISPLAY as P,
  WhatsAppFloat as W,
  cn as c,
  whatsappUrl as w
};
