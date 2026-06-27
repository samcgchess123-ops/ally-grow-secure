import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { B as Button, w as whatsappUrl, D as DEFAULT_WA_MESSAGE, c as cn, P as PHONE_DISPLAY, N as Navbar, F as Footer, W as WhatsAppFloat } from "./WhatsAppFloat-j-_4Iiwb.js";
import { ShieldCheck, ArrowRight, MessageCircle, CheckCircle2, Scale, Users, HeartPulse, AlertTriangle, Handshake, Award, UserCheck, Sparkles, ChevronDown, HardHat, HelpCircle, Check, BellRing, Lock, ArrowLeft, Quote, FileText, Download, Gavel, FolderCheck, Repeat, Briefcase, ScrollText, AlertCircle, ChevronUp, Send, CalendarClock } from "lucide-react";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import * as SelectPrimitive from "@radix-ui/react-select";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
const heroImg = "/assets/hero-CnmF05-w.jpg";
const proofs = [
  "+15 años de experiencia",
  "Diagnóstico inicial sin costo",
  "Cobertura en todo el país"
];
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "inicio", className: "relative overflow-hidden bg-navy", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImg,
          alt: "Consultora de seguridad y salud en el trabajo de G3STION SAS",
          width: 1920,
          height: 1080,
          className: "h-full w-full object-cover opacity-90"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/30" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-12 lg:px-8 lg:pb-28 lg:pt-40", children: /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "size-4" }),
        " ALIADO PERMANENTE EN LA GESTIÓN DE SU EMPRESA"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-balance text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl", children: [
        "Cumpla con los requisitos legales y de sus clientes y",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: "crezca con tranquilidad" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/80", children: "En G3STION SAS garantizamos el cumplimiento normativo. Asumimos la responsabilidad legal de sus Sistemas de Gestión, para que pueda centrar su enfoque en la operación y rentabilidad de su negocio." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "gold", size: "xl", className: "h-auto w-full whitespace-normal py-3.5 text-center sm:w-auto", children: /* @__PURE__ */ jsxs("a", { href: "/#diagnostico", children: [
          "Agendar mi diagnóstico gratuito ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "size-5 shrink-0" })
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outlineLight", size: "xl", className: "h-auto w-full whitespace-normal py-3.5 text-center sm:w-auto", children: /* @__PURE__ */ jsxs("a", { href: whatsappUrl(DEFAULT_WA_MESSAGE), target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "size-5 shrink-0" }),
          " Escribir por WhatsApp"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-8 flex flex-wrap gap-x-6 gap-y-3", children: proofs.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm font-medium text-navy-foreground/85", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "size-5 text-gold" }),
        " ",
        p
      ] }, p)) })
    ] }) })
  ] });
}
const metrics = [
  { target: 15, prefix: "+", suffix: "", label: "Años de experiencia" },
  { target: 20, prefix: "+", suffix: "", label: "Empresas asesoradas" },
  { target: 40, prefix: "+", suffix: "", label: "Auditorías acompañadas" },
  { target: 100, prefix: "", suffix: "%", label: "Cobertura nacional" }
];
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}
function Counter({
  target,
  prefix,
  suffix,
  active
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    let raf = 0;
    let start = null;
    const tick = (now) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOutExpo(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return /* @__PURE__ */ jsxs("span", { className: "tabular-nums", children: [
    prefix,
    value,
    suffix
  ] });
}
function Metrics() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("section", { ref, className: "relative z-10 -mt-px bg-gold", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gold-foreground/15 px-5 py-8 sm:py-10 lg:grid-cols-4 lg:px-8", children: metrics.map((m) => /* @__PURE__ */ jsxs("div", { className: "px-3 text-center sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "font-display text-3xl font-extrabold text-gold-foreground sm:text-4xl", children: /* @__PURE__ */ jsx(Counter, { target: m.target, prefix: m.prefix, suffix: m.suffix, active }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs font-medium uppercase tracking-wide text-gold-foreground/80 sm:text-sm", children: m.label })
  ] }, m.label)) }) });
}
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      ),
      children: [
        eyebrow && /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "inline-block text-sm font-bold uppercase tracking-[0.18em]",
              invert ? "text-gold" : "text-gold"
            ),
            children: eyebrow
          }
        ),
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: cn(
              "mt-3 text-balance text-3xl font-extrabold leading-tight sm:text-4xl",
              invert ? "text-navy-foreground" : "text-navy"
            ),
            children: title
          }
        ),
        description && /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "mt-4 text-base leading-relaxed sm:text-lg",
              invert ? "text-navy-foreground/75" : "text-muted-foreground"
            ),
            children: description
          }
        )
      ]
    }
  );
}
const pains = [
  {
    icon: Scale,
    title: "Multas y sanciones legales",
    text: "Una auditoría o un requerimiento pueden traducirse en multas económicas e, incluso, en el cierre de su negocio."
  },
  {
    icon: Users,
    title: "Pérdida de clientes y contratos",
    text: "Las empresas exigen requisitos como RUC, BASC o normas ISO. Operar sin estos sistemas lo deja fuera de mejores oportunidades comerciales."
  },
  {
    icon: HeartPulse,
    title: "Accidentes y responsabilidad legal",
    text: "Ante un siniestro laboral, la gestión documental es el mejor soporte, de lo contrario la ARL puede objetar la cobertura de las prestaciones, trasladando la responsabilidad sobre la empresa."
  }
];
function PainPoints() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "El costo de no actuar",
        title: "¿Qué le cuesta seguir aplazando las obligaciones legales?",
        description: "Muchas empresas operan sin un sistema de gestión en regla... hasta que el riesgo se materializa. Esperar a que ocurra una emergencia, una inspección o una exigencia de un cliente multiplica los costos drásticamente."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: pains.map((p) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold/50",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex size-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive", children: /* @__PURE__ */ jsx(p.icon, { className: "size-6" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 text-lg font-bold text-navy", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: p.text })
        ]
      },
      p.title
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-12 flex max-w-2xl items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-5", children: [
      /* @__PURE__ */ jsx(AlertTriangle, { className: "mt-0.5 size-5 shrink-0 text-gold-foreground" }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-navy", children: [
        /* @__PURE__ */ jsx("strong", { children: "El marco legal colombiano cambia con frecuencia." }),
        " No conocer una norma —o aplicarla a medias— no lo exime del cumplimiento. Sin orientación especializada, el riesgo siempre está presente."
      ] })
    ] })
  ] }) });
}
const pillars = [
  {
    icon: ShieldCheck,
    title: "Cumplimiento legal activo",
    text: "Implementamos, mantenemos y mejoramos sus Sistemas de Gestión, Planes y Programas conforme al Decreto 1072 de 2015, las Resoluciones 0312 de 2019, 0491 de 2020, 4272 de 2021, 40595 de 2022 y las normas sectoriales aplicables."
  },
  {
    icon: Handshake,
    title: "Acompañamiento de Valor",
    text: "Estamos presentes cuando llega el Ministerio, cuando un cliente le exige un requisito o si ocurre un accidente."
  },
  {
    icon: Award,
    title: "Certificaciones que abren puertas",
    text: "Cuando necesita ISO 9001, 45001, 14001, RUC u otra norma, la llevamos de principio a fin con un plan claro y plazos reales."
  },
  {
    icon: UserCheck,
    title: "Talento Humano y Contratación",
    text: "Diseñamos estrategias de contratación de personal y administramos su nómina, blindándote ante la UGPP o demandas laborales."
  }
];
function Solution() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-navy py-20 lg:py-28", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-gold/10 blur-3xl",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          invert: true,
          eyebrow: "La solución",
          title: "Acompañamiento que convierte el cumplimiento en ventaja competitiva",
          description: "En G3STION SAS nos convertimos en su aliado estratégico: asumimos formalmente la responsabilidad legal de sus sistemas de gestión, programas y planes normativos, diseñando soluciones a la medida de su sector, manteniéndolas actualizadas."
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2", children: pillars.map((p) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex gap-5 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/[0.04] p-6 transition-colors hover:border-gold/40",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold text-gold-foreground", children: /* @__PURE__ */ jsx(p.icon, { className: "size-6" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-navy-foreground", children: p.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-navy-foreground/75", children: p.text })
            ] })
          ]
        },
        p.title
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "gold", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: "#diagnostico", children: [
        "Quiero este acompañamiento ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "size-5" })
      ] }) }) })
    ] })
  ] });
}
const points = [
  "Asumimos la responsabilidad legal del SG-SST, la administración del PESV y de los programas como trabajo en alturas y espacios confinados.",
  "Diseñamos e implementamos sus Sistemas de Gestión a la medida, adaptándonos al sector económico, el tamaño y el nivel de riesgo de su empresa.",
  "Garantizamos el mantenimiento y la mejora de su ecosistema de gestión, manteniéndolo actualizado y listo para cualquier auditoría.",
  "Optimizamos su presupuesto apalancándonos en los recursos de las ARL, cajas de compensación e intermediarios.",
  "Respondemos ante el Ministerio de Trabajo, entes certificadores y exigencias de sus clientes."
];
function SgSstHighlight() {
  return /* @__PURE__ */ jsx("section", { id: "diferenciales", className: "bg-background py-20 lg:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl bg-gradient-navy shadow-elegant", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-gold", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "size-4" }),
        " Nuestra principal diferencia"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-5 text-3xl font-extrabold leading-tight text-navy-foreground sm:text-4xl", children: "Asumimos la responsabilidad legal de su sistema" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-navy-foreground/75", children: "Cuando firma con G3STION SAS, contrata a un aliado que ejecuta con usted, asume la responsabilidad y responde ante el Ministerio de Trabajo, otros entes legales, sus clientes y las auditorías de certificación." }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "gold", size: "lg", className: "mt-8", children: /* @__PURE__ */ jsxs("a", { href: "#diagnostico", children: [
        "Conocer cómo funciona ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "size-5" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "grid gap-4", children: points.map((p) => /* @__PURE__ */ jsxs(
      "li",
      {
        className: "flex items-start gap-3 rounded-xl border border-navy-foreground/10 bg-navy-foreground/[0.05] p-4",
        children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 size-6 shrink-0 text-gold" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-navy-foreground/90", children: p })
        ]
      },
      p
    )) })
  ] }) }) }) });
}
const services = [
  {
    icon: Award,
    title: "Implementación de Sistemas de Gestión",
    text: "Lo acompañamos en el diseño hasta la certificación de sus sistemas en ISO 9001, 45001, 14001, 17020, 17024, 27002, 28000, 39001, RUC, BASC, PESV, habilitaciones y normas sectoriales aplicables.",
    result: "Su empresa escala de nivel, habilitándose para ganar licitaciones de alta exigencia.",
    price: "Desde $4.000.000"
  },
  {
    icon: HardHat,
    title: "Acompañamiento en campo SST",
    text: "Control operativo en campo para alturas, espacios confinados y energías peligrosas adaptado a sus necesidades o las de su cliente. Garantizamos personal con licencia SST y certificaciones vigentes.",
    result: "",
    price: "Desde $550.000 / Día"
  },
  {
    icon: Users,
    title: "Contratación y Gestión de Talento Humano",
    text: "Diseñamos la estrategia de contratación. Administramos su personal y su nómina.",
    result: "Reducción del riesgo laboral y eliminación de costos ocultos.",
    price: "Desde $150.000 mensuales por empleado"
  }
];
const plans = [
  {
    id: "esencial",
    eyebrow: "",
    standards: "7 estándares mínimos",
    price: "$300.000",
    daily: "Empleadores con 10 o menos trabajadores que estén clasificados en riesgo I, II o III en la ARL.",
    features: ["Se enfoca en los pilares fundamentales: afiliación a seguridad social, estructuración del plan de trabajo, ejecuciones de capacitación, realización de evaluaciones médicas ocupacionales e identificación de peligros."]
  },
  {
    id: "integral",
    eyebrow: "",
    standards: "21 estándares mínimos",
    price: "$700.000",
    daily: "Empleadores con 11 a 50 trabajadores que estén clasificados en riesgo I, II o III en la ARL.",
    features: ["Suma a la base de siete estándares, la gestión organizativa y de respuesta: conformación del COPASST y del Comité de Convivencia Laboral, estructuración de la brigada de emergencias e investigación obligatoria de accidentes de trabajo."],
    featured: true
  },
  {
    id: "corporativo",
    eyebrow: "",
    standards: "60 estándares mínimos",
    price: "$1.500.000",
    daily: "Empleadores con 50 o menos trabajadores siempre y cuando estén clasificados en Riesgo IV o V en la ARL.",
    features: ["Contempla el ciclo completo del Sistema de Gestión. Integra los puntos anteriores y añade el control estratégico: auditorías anuales, medición de indicadores obligatorios, control de contratistas y diseño de programas de vigilancia epidemiológica (médicos especializados)."]
  }
];
function PlansBox({
  selected,
  setSelected
}) {
  const active = plans.find((p) => p.id === selected);
  return /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-gradient-navy p-7 shadow-elegant sm:p-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-bold uppercase tracking-[0.18em] text-gold", children: "Planes y precios" }),
      /* @__PURE__ */ jsx("h3", { className: "mt-2 text-2xl font-extrabold text-navy-foreground sm:text-3xl", children: "Acompañamiento de acuerdo con el tamaño y nivel de riesgo de su empresa." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-3 sm:grid-cols-3", children: plans.map((p) => /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setSelected(p.id),
        className: cn(
          "relative rounded-2xl border p-4 text-left transition-all",
          selected === p.id ? "border-gold bg-gold/10 ring-1 ring-gold" : "border-navy-foreground/15 bg-navy-foreground/[0.04] hover:border-gold/50"
        ),
        children: [
          /* @__PURE__ */ jsx("p", { className: "mt-1 font-bold text-navy-foreground", children: p.standards }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-navy-foreground/70", children: [
            p.price,
            " / mes"
          ] })
        ]
      },
      p.id
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-6 rounded-2xl bg-card p-6 sm:grid-cols-2 sm:p-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-lg font-bold text-navy", children: active.standards }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: active.daily }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "font-display text-4xl font-extrabold text-navy", children: active.price }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "/ mes" })
        ] }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "gold", size: "lg", className: "mt-6 w-full sm:w-auto", children: /* @__PURE__ */ jsx("a", { href: "#diagnostico", children: "Solicitar este plan" }) })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "grid content-center gap-3", children: [
        active.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm text-navy", children: [
          /* @__PURE__ */ jsx(Check, { className: "mt-0.5 size-4 shrink-0 text-gold-foreground", strokeWidth: 3 }),
          " ",
          f
        ] }, f)),
        /* @__PURE__ */ jsxs("li", { className: "mt-2 flex items-center gap-2.5 text-sm font-medium text-navy", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "size-4 shrink-0 text-gold-foreground" }),
          " Diagnóstico gratuito incluido"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-center text-xs text-navy-foreground/60", children: 'Valores de referencia "desde". El alcance exacto se define en su diagnóstico gratuito.' })
  ] });
}
function Services() {
  const [showPlans, setShowPlans] = useState(false);
  const [selected, setSelected] = useState("integral");
  return /* @__PURE__ */ jsx("section", { id: "servicios", className: "bg-secondary py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Nuestros servicios",
        title: "Soluciones diseñadas para el nivel de madurez de su empresa",
        description: "Desde el cumplimiento obligatorio hasta certificaciones internacionales. Construimos sistemas empresariales seguros, organizados y preparados para crecer."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 grid gap-5 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowPlans((v) => !v),
          "aria-expanded": showPlans,
          className: "group flex flex-col rounded-3xl bg-gradient-navy p-8 text-left shadow-elegant ring-1 ring-gold/40 transition-all hover:ring-gold lg:row-span-2",
          children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex w-fit items-center gap-2 rounded-full bg-gold px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-gold-foreground", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "size-3.5" }),
              " Solución principal"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flex size-14 items-center justify-center rounded-2xl bg-gold/15 text-gold", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "size-8" }) }),
            /* @__PURE__ */ jsx("h3", { className: "mt-5 text-2xl font-bold text-navy-foreground", children: "SG-SST · Acompañamiento Permanente" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-navy-foreground/75", children: "En Colombia, la resolución 0312 de 2019 establece que los empleadores, sin importar su sector y desde un solo trabajador, tenga un Sistema de Gestión de Seguridad y Salud en el Trabajo. Nosotros lo implementamos y asumimos la Responsabilidad legal." }),
            /* @__PURE__ */ jsxs("p", { className: "mt-4 rounded-xl bg-navy-foreground/[0.06] px-4 py-3 text-sm text-navy-foreground/90", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-gold", children: "Resultado:" }),
              " Su organización opera en cumplimiento legal."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-navy-foreground/70", children: "Desde" }),
              /* @__PURE__ */ jsx("span", { className: "font-display text-4xl font-extrabold text-gold", children: "$300.000" }),
              /* @__PURE__ */ jsx("span", { className: "text-navy-foreground/70", children: "/ mes" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-transform group-hover:scale-[1.02]", children: [
              showPlans ? "Ocultar planes" : "Ver planes y precios",
              /* @__PURE__ */ jsx(ChevronDown, { className: cn("size-4 transition-transform", showPlans && "rotate-180") })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-center text-xs text-navy-foreground/55", children: "Diagnóstico gratuito incluido" })
          ]
        }
      ),
      showPlans && /* @__PURE__ */ jsx("div", { className: "animate-in fade-in slide-in-from-top-2 duration-300 lg:hidden", children: /* @__PURE__ */ jsx(PlansBox, { selected, setSelected }) }),
      services.map((s) => /* @__PURE__ */ jsxs(
        "article",
        {
          className: "flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold/40",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex size-11 items-center justify-center rounded-xl bg-navy text-gold", children: /* @__PURE__ */ jsx(s.icon, { className: "size-5" }) }),
            /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-bold text-navy", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.text }),
            s.result && /* @__PURE__ */ jsxs("p", { className: "mt-3 rounded-lg bg-secondary px-3 py-2 text-xs font-medium text-navy", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gold-foreground", children: "Resultado:" }),
              " ",
              s.result
            ] }),
            s.price && /* @__PURE__ */ jsx("p", { className: "mt-auto pt-4 text-sm font-bold text-navy", children: s.price })
          ]
        },
        s.title
      )),
      /* @__PURE__ */ jsxs("article", { className: "flex flex-col justify-center rounded-3xl border border-dashed border-gold/50 bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsx("div", { className: "flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold-foreground", children: /* @__PURE__ */ jsx(HelpCircle, { className: "size-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-bold text-navy", children: "¿No sabe qué norma aplica a su empresa?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: "Las obligaciones legales varían según el número de trabajadores, el nivel de riesgo en la ARL, su actividad económica y las exigencias de sus clientes." }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm font-medium text-navy", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-foreground", children: "Nuestra solución:" }),
          " realizamos un diagnóstico inicial sin costo."
        ] }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "gold", size: "sm", className: "mt-4 w-fit", children: /* @__PURE__ */ jsxs("a", { href: "#diagnostico", children: [
          "Iniciar el diagnóstico ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
        ] }) })
      ] })
    ] }),
    showPlans && /* @__PURE__ */ jsx(
      "div",
      {
        id: "planes",
        className: "mt-6 hidden animate-in fade-in slide-in-from-top-2 duration-300 lg:block",
        children: /* @__PURE__ */ jsx(PlansBox, { selected, setSelected })
      }
    )
  ] }) });
}
const ceoImg = "/assets/why-us-person-B4cYaCuC.jpg";
function WhyUs() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-5 -left-5 -z-0 h-full w-full rounded-3xl bg-gold/20", "aria-hidden": true }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: ceoImg,
          alt: "Yudi Andrea Torres Vásquez, CEO y consultora principal de G3STION SAS",
          loading: "lazy",
          width: 1086,
          height: 1448,
          className: "relative z-10 aspect-[3/4] w-full rounded-3xl object-cover object-top shadow-elegant"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 left-1/2 z-20 w-[88%] -translate-x-1/2 rounded-2xl bg-navy p-4 text-center shadow-card", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-navy-foreground", children: "Yudi Andrea Torres Vásquez" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wide text-gold", children: "CEO & Consultora principal" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-bold uppercase tracking-[0.18em] text-gold", children: "Por qué trabajar con nosotros" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl", children: "Más de 15 años de trayectoria profesional" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "Nos especializamos en transformar el cumplimiento normativo en crecimiento para las empresas. Nuestra gestión combina la responsabilidad con la capacidad para optimizar los recursos." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "Contamos con experiencia comprobada liderando y superando con éxito auditorías ante entes gubernamentales, organismos de certificación internacional y la ONAC." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "A través de G3STION SAS, firma legalmente constituida hace más de 9 años, demostramos que las empresas pueden operar con el estándar de las grandes Organizaciones sin asumir costos desproporcionados. Nosotros creamos valor y aportamos al crecimiento de las empresas." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "Experiencia en sectores como construcción, industria, servicios, salud, logística, comercio, entre otras." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "Evaluamos su estado actual sin compromiso para trazar la hoja de ruta exacta hacia su blindaje total." })
    ] })
  ] }) });
}
const steps = [
  {
    n: "01",
    title: "Complete el formulario y agende",
    text: "Responda un breve cuestionario con los datos de su empresa y reserve un espacio en nuestro calendario. Le tomará pocos minutos."
  },
  {
    n: "02",
    title: "Asista a la reunión",
    text: "Conversamos sobre el estado actual de su empresa, identificamos riesgos y entendemos qué necesita para cumplir."
  },
  {
    n: "03",
    title: "Presentación de la propuesta",
    text: "Le presentamos una solución a la medida de su sector, con alcance, plazos e inversión claros."
  },
  {
    n: "04",
    title: "Aprobación y plan de trabajo",
    text: "Una vez aprobada la propuesta, definimos el cronograma y comenzamos la ejecución con un interlocutor directo."
  }
];
function Process() {
  return /* @__PURE__ */ jsx("section", { id: "proceso", className: "bg-secondary py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Cómo trabajamos",
        title: "Así empezamos a trabajar juntos",
        description: "No necesita preparar nada antes de hablar con nosotros. Solo cuéntenos qué necesita su empresa y nosotros tomamos el control desde ahí."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: steps.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsx("span", { className: "font-display text-5xl font-extrabold text-gold/30", children: s.n }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 text-lg font-bold text-navy", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.text }),
      i < steps.length - 1 && /* @__PURE__ */ jsx(ArrowRight, { className: "absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 text-gold lg:block" })
    ] }, s.n)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "navy", size: "lg", className: "h-auto max-w-full whitespace-normal py-3 text-center", children: /* @__PURE__ */ jsxs("a", { href: "/#diagnostico", children: [
      "Comenzar con el formulario de diagnóstico ",
      /* @__PURE__ */ jsx(ArrowRight, { className: "size-5 shrink-0" })
    ] }) }) })
  ] }) });
}
const qrImg = "/assets/whatsapp-qr-DEftb7Q3.png";
const benefits$1 = [
  {
    icon: BellRing,
    title: "Alertas tempranas",
    text: "Te avisamos sobre los cambios normativos que impactan tu matriz legal antes de que sean un problema."
  },
  {
    icon: Lock,
    title: "Cero spam",
    text: "Grupo cerrado donde únicamente los administradores expertos en SST publican información clara y útil."
  },
  {
    icon: Users,
    title: "Comunidad exclusiva",
    text: "No llenaremos tu celular de mensajes innecesarios. Solo contenido relevante para tu cumplimiento."
  }
];
function WhatsAppGroup() {
  return /* @__PURE__ */ jsx("section", { id: "comunidad", className: "bg-secondary py-20 lg:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-card shadow-elegant", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-8 p-6 sm:p-12 lg:grid-cols-12 lg:gap-10 lg:p-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxs("span", { className: "inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-[#25D366]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1c7a44]", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "size-4 shrink-0" }),
        " Comunidad de cumplimiento legal"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-5 text-balance text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl", children: "¿Tu empresa es Riesgo IV o V, o tiene más de 51 empleados?" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: [
        "Sabes que por ley debes tener una matriz legal. Únete a nuestra comunidad exclusiva de WhatsApp y mantén tu ",
        /* @__PURE__ */ jsx("strong", { className: "text-navy", children: "Matriz de Requisitos Legales" }),
        " ",
        "al día. Cumplir con los estándares mínimos de la Resolución 0312 de 2019 no es opcional."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 text-base leading-relaxed text-muted-foreground", children: [
        "No tienes que revisar el Diario Oficial todos los días ni pagar consultorías costosas solo para saber qué norma cambió. ",
        /* @__PURE__ */ jsx("strong", { className: "text-navy", children: "Nosotros lo hacemos por ti." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-3", children: benefits$1.map((b) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-secondary p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex size-9 items-center justify-center rounded-lg bg-navy text-gold", children: /* @__PURE__ */ jsx(b.icon, { className: "size-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 text-sm font-bold text-navy", children: b.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs leading-relaxed text-muted-foreground", children: b.text })
      ] }, b.title)) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "whatsapp", size: "lg", className: "mt-8 h-auto w-full whitespace-normal py-3 text-center sm:w-auto", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://chat.whatsapp.com/JJX7GBLVS7EBl7tPt7jPDx?mode=gi_t",
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "size-5 shrink-0" }),
            " ¡Quiero unirme al Grupo de WhatsApp Gratis!"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx("strong", { className: "text-navy", children: "¿Tiene algún costo?" }),
        " El acceso a la comunidad y a las alertas informativas es 100% gratuito."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-xs flex-col items-center rounded-3xl bg-gradient-navy p-8 text-center shadow-card", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-wide text-gold", children: "Marco legal SST Colombia" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-navy-foreground/60", children: "Grupo de WhatsApp" }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 rounded-2xl bg-white p-4 shadow-card", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: qrImg,
          alt: "Código QR para unirse al grupo de WhatsApp Marco legal SST Colombia",
          width: 282,
          height: 282,
          loading: "lazy",
          className: "size-full"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs leading-relaxed text-navy-foreground/65", children: "Escanea este código QR con la cámara de WhatsApp para unirte al grupo." })
    ] }) })
  ] }) }) }) });
}
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const testimonials = [
  {
    name: "ENDICONTROL S.A.",
    quote: "Yudi Torres inició su trayectoria con nosotros en 2007 como Coordinadora de Calidad, asumiendo luego la dirección de todos nuestros sistemas de gestión (HSEQ, PESV y acreditaciones especiales). Su liderazgo fue tan integral que culminó su etapa laboral como Administradora de la empresa. En 2024, al independizarse con su firma G3STIÓN SAS, no dudamos en contratarla como proveedora estratégica. Gracias a su guía constante, hoy contamos con certificaciones y acreditaciones de alto nivel como ISO 9001, ISO 45001, RUC, ISO 17020 e ISO 17024. Su trabajo sigue siendo invaluable para nuestro crecimiento."
  },
  {
    name: "RET SOLUCIONES SAS",
    quote: "Iniciamos nuestro vínculo con Yudi Torres en mayo de 2023 para el servicio de responsable del SG-SST. Sin embargo, gracias a la gran experiencia y visión integral de G3STIÓN SAS, hoy no solo cumplen ese rol, sino que se han convertido en nuestros asesores administrativos clave, orientándonos en contratación de personal y gestión documental. Actualmente, estamos implementando bajo su guía los requisitos de la norma ISO 9001 con miras a la certificación. Un aliado excepcional para nuestra estructura organizacional."
  },
  {
    name: "TÁCTICA WEB SAS",
    quote: "Teníamos muchas dudas sobre cuál era el esquema de contratación ideal para nuestro equipo. G3STIÓN SAS nos brindó la asesoría exacta que necesitábamos, orientándonos con total claridad sobre el tipo de contrato adecuado para nuestros colaboradores. Su respaldo nos dio la tranquilidad legal y administrativa que buscábamos."
  },
  {
    name: "GYG AUTOMOTORES CTG S.A.S.",
    quote: "G3STIÓN SAS llegó a nuestra empresa en noviembre de 2025 en un momento crítico, justo cuando debíamos atender una inspección oficial. Gracias a su sólida experiencia, nos prepararon de manera impecable, logrando que la compañía saliera completamente bien librada del proceso. Tras este excelente resultado, decidimos mantenerlos de forma permanente como los responsables de nuestro SG-SST."
  },
  {
    name: "CONCIENCIA ORGÁNICA",
    quote: "Como empresa nueva, nuestra meta siempre ha sido crecer de manera organizada. Al contratar a nuestro primer colaborador en 2025, G3STIÓN SAS nos brindó la asesoría sobre los estándares mínimos aplicables a nuestra estructura. Iniciamos el proceso bajo su guía y, gracias a su excelente acompañamiento, alcanzamos una evaluación de 100 puntos. Hoy en día, continúan siendo los responsables de nuestro SG-SST, dándonos el respaldo que necesitamos para avanzar con total seguridad."
  },
  {
    name: "CBM ENERGY S.A.S.",
    quote: "Iniciamos nuestra relación laboral con Yudi Torres en 2020 con el firme objetivo de lograr la certificación en ISO 45001, meta que se alcanzó a plena satisfacción. Hoy, varios años después, seguimos confiando plenamente en G3STIÓN SAS para el servicio de responsable de nuestro SG-SST. Su consistencia, rigor técnico y acompañamiento continuo han sido clave para mantener nuestros estándares de seguridad en el nivel más alto."
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { id: "testimonios", className: "bg-background py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Lo que dicen nuestros clientes",
        title: "Empresas que ya operan con tranquilidad",
        description: "Relaciones que se sostienen en el tiempo y se convierten en alianzas estratégicas."
      }
    ),
    /* @__PURE__ */ jsxs(
      Carousel,
      {
        opts: { loop: true, align: "start" },
        className: "mt-14",
        children: [
          /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-4", children: testimonials.map((t) => /* @__PURE__ */ jsx(CarouselItem, { className: "pl-4 md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxs("figure", { className: "flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card", children: [
            /* @__PURE__ */ jsx(Quote, { className: "size-8 shrink-0 text-gold" }),
            /* @__PURE__ */ jsx("blockquote", { className: "mt-4 flex-1 text-sm leading-relaxed text-navy/90", children: t.quote }),
            /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 border-t border-border pt-4", children: [
              /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-navy", children: t.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wide text-gold-foreground", children: "Cliente G3STION SAS" })
            ] })
          ] }) }, t.name)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsx(CarouselPrevious, { className: "static translate-y-0" }),
            /* @__PURE__ */ jsx(CarouselNext, { className: "static translate-y-0" })
          ] })
        ]
      }
    )
  ] }) });
}
const options = [
  { key: "Gerencial", desc: "Dirección y estrategia", file: "/guias/Gerencial.docx" },
  { key: "Gestión Humana", desc: "Selección e inducción", file: "/guias/Gestion_Humana.docx" },
  { key: "Compras", desc: "Proveedores y calidad", file: "/guias/Compras.docx" },
  { key: "Mantenimiento", desc: "Equipos y activos", file: "/guias/Mantenimiento.docx" }
];
function LeadMagnet() {
  return /* @__PURE__ */ jsx("section", { id: "guia", className: "bg-background py-20 lg:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-gold/30 bg-gradient-navy shadow-elegant", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-gold", children: [
        /* @__PURE__ */ jsx(FileText, { className: "size-4" }),
        " Recurso gratuito de alto valor"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-5 text-3xl font-extrabold leading-tight text-navy-foreground sm:text-4xl", children: "¿Tu prioridad hoy no es una certificación, sino ordenar tu empresa?" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-base leading-relaxed text-navy-foreground/75", children: [
        "Si lo que necesitas hoy es organizar y estandarizar un área de tu empresa, hagámoslo simple. Descarga la ",
        /* @__PURE__ */ jsx("strong", { className: "text-gold", children: "Guía Práctica" }),
        " del área que necesitas estructurar — lista para aplicar, sin costo."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-navy-foreground/10 bg-navy-foreground/[0.05] p-6 sm:p-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-navy-foreground/85", children: "👉 Elige el área que necesitas organizar y descarga la guía:" }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-3 sm:grid-cols-2", children: options.map((o) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: o.file,
          download: true,
          className: "group flex flex-col rounded-xl border border-navy-foreground/15 bg-navy-foreground/[0.04] p-4 transition-all hover:border-gold hover:bg-navy-foreground/[0.08]",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-navy-foreground", children: o.key }),
            /* @__PURE__ */ jsx("span", { className: "mt-0.5 text-xs text-navy-foreground/60", children: o.desc }),
            /* @__PURE__ */ jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold", children: [
              /* @__PURE__ */ jsx(Download, { className: "size-3.5 transition-transform group-hover:translate-y-0.5" }),
              "Descargar guía gratis"
            ] })
          ]
        },
        o.key
      )) }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-center text-xs text-navy-foreground/55", children: "Sin costo. Descarga directa, sin necesidad de registrarte." })
    ] })
  ] }) }) }) });
}
const benefits = [
  { icon: ShieldCheck, title: "Reduce al máximo la exposición a multas.", text: "" },
  { icon: Gavel, title: "Cumplimiento legal y acompañamiento permanente.", text: "" },
  { icon: FolderCheck, title: "Documentación almacenada cumpliendo con la norma.", text: "" },
  { icon: Repeat, title: "Un sistema de gestión con resultados continuos.", text: "" },
  { icon: Briefcase, title: "Oportunidad de ingreso a nuevos y mejores mercados.", text: "" },
  { icon: ScrollText, title: "Un equipo competente que asume el rol legal.", text: "" }
];
function Benefits() {
  return /* @__PURE__ */ jsx("section", { className: "bg-navy py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        invert: true,
        eyebrow: "Resultados",
        title: "Lo que gana al contratar a G3STION",
        description: "No describimos procesos: comunicamos lo que realmente cambia para su empresa."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: benefits.map((b) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-start gap-4 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/[0.04] p-6 transition-colors hover:border-gold/40",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold text-gold-foreground", children: /* @__PURE__ */ jsx(b.icon, { className: "size-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-navy-foreground", children: b.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-navy-foreground/70", children: b.text })
          ] })
        ]
      },
      b.title
    )) })
  ] }) });
}
const ctaImg = "/assets/cta-building-CGS-_N2T.jpg";
const sectors = [
  "Construcción",
  "Energía",
  "Industrial",
  "Manufactura",
  "Logística",
  "Salud",
  "Comercio",
  "Servicios",
  "Agroindustria",
  "Inmobiliario"
];
function MinisterioCta() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden py-20 lg:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("img", { src: ctaImg, alt: "", loading: "lazy", width: 1920, height: 1080, className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-navy/85" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-5 text-center lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto flex size-14 items-center justify-center rounded-2xl bg-gold text-gold-foreground", children: /* @__PURE__ */ jsx(AlertCircle, { className: "size-7" }) }),
      /* @__PURE__ */ jsx("h2", { className: "mt-6 text-balance text-3xl font-extrabold leading-tight text-navy-foreground sm:text-4xl", children: "¿Visita del Ministerio o exigencias de un cliente?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-navy-foreground/80", children: "No deje el futuro de su empresa al azar. Evaluamos su estado actual, estructuramos el plan ideal e iniciamos el proyecto hoy mismo." }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "gold", size: "xl", className: "mt-8", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: whatsappUrl("Hola G3STION SAS, necesito una revisión urgente de mi situación normativa."),
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            "Solicitar revisión urgente ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "size-5" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-gold", children: "Sectores que atendemos" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap justify-center gap-2.5", children: sectors.map((s) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "rounded-full border border-navy-foreground/20 bg-navy-foreground/5 px-4 py-1.5 text-sm font-medium text-navy-foreground/85",
          children: s
        },
        s
      )) })
    ] })
  ] });
}
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const faqs = [
  {
    q: "¿A qué empresas les aplica el SG-SST?",
    a: "En Colombia, toda empresa con al menos un trabajador vinculado está obligada por ley a tener un SG-SST activo, sin importar su tamaño o sector. La Resolución 0312 de 2019 establece estándares mínimos diferenciados según el número de empleados y el nivel de riesgo."
  },
  {
    q: "¿Qué sanciones puede recibir mi empresa si no cumple?",
    a: "El Ministerio de Trabajo puede imponer multas de hasta 500 salarios mínimos mensuales legales vigentes. En casos de accidentes graves o mortales sin sistema en regla, la responsabilidad puede volverse penal para el representante legal, además de la pérdida de contratos y licitaciones."
  },
  {
    q: "¿Cuánto tarda la implementación de un sistema de gestión?",
    a: "La implementación inicial toma entre 2 y 3 meses. A partir de ahí, el sistema requiere mantenimiento permanente: administración documental, capacitaciones, inspecciones, seguimiento de indicadores y preparación de auditorías. Por eso ofrecemos acompañamiento mensual continuo."
  },
  {
    q: "¿Qué incluye exactamente el acompañamiento permanente?",
    a: "Incluye la asunción formal del rol legal de responsable del SG-SST, el diseño e implementación del sistema según su nivel de riesgo, la actualización permanente de la documentación, las capacitaciones obligatorias, el apoyo en inspecciones del Ministerio y los informes de gestión periódicos."
  },
  {
    q: "¿Ofrecen planes con precio definido?",
    a: "Sí. Tenemos planes mensuales según el tamaño y nivel de riesgo de su empresa: desde $300.000/mes para 7 estándares mínimos hasta $1.500.000/mes para 60 estándares. Para certificaciones e implementación tipo ISO o RUC, los valores parten desde $4.000.000 por proyecto."
  },
  {
    q: "¿Trabajan solo en una ciudad o en todo el país?",
    a: "Atendemos empresas en todo el territorio colombiano. Gran parte del trabajo se realiza de forma remota, lo que permite un acompañamiento ágil sin costos adicionales de desplazamiento. Las visitas presenciales se evalúan según ubicación y alcance."
  },
  {
    q: "¿Necesito saber de normas o de SST para trabajar con ustedes?",
    a: "No. Ese es precisamente nuestro trabajo. Usted nos cuenta cómo funciona su empresa, cuántas personas tiene y qué le preocupa; nosotros lo traducimos en un plan de cumplimiento claro y lo ejecutamos."
  }
];
function Faq() {
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "bg-secondary py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-5 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Preguntas frecuentes",
        title: "Resolvemos las dudas más comunes"
      }
    ),
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "mt-10", children: faqs.map((f, i) => /* @__PURE__ */ jsxs(
      AccordionItem,
      {
        value: `item-${i}`,
        className: "mb-3 rounded-xl border border-border bg-card px-5",
        children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-base font-semibold text-navy hover:no-underline", children: f.q }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "text-sm leading-relaxed text-muted-foreground", children: f.a })
        ]
      },
      i
    )) })
  ] }) });
}
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
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
  "Otro"
];
const CALENDLY_BASE = "https://calendly.com/g3stion-info/30min";
function DiagnosticForm() {
  const [step, setStep] = useState("form");
  const [form, setForm] = useState({
    empresa: "",
    nombre: "",
    email: "",
    telefono: "",
    sector: "",
    empleados: "",
    riesgo: "",
    situacion: ""
  });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const calendlyUrl = () => {
    const params = new URLSearchParams({
      hide_gdpr_banner: "1",
      background_color: "ffffff",
      primary_color: "f0a500"
    });
    if (form.nombre) params.set("name", form.nombre);
    if (form.email) params.set("email", form.email);
    return `${CALENDLY_BASE}?${params.toString()}`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("calendar");
    setTimeout(() => {
      document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };
  return /* @__PURE__ */ jsx("section", { id: "diagnostico", className: "bg-background py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Diagnóstico gratuito",
        title: step === "form" ? "Cuéntenos cómo está su empresa y le decimos qué necesita" : "Último paso: reserve su llamada de diagnóstico",
        description: step === "form" ? "Evaluamos la situación de su empresa para definir el plan para dar cumplimiento. Responda el cuestionario. Con la información realizamos un análisis para ofrecerle la solución precisa." : "Elija el día y la hora que más le convenga. La reserva se confirma al instante, sin salir del sitio."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-8 flex max-w-md items-center justify-center gap-3 text-xs font-semibold", children: [
      /* @__PURE__ */ jsx("span", { className: step === "form" ? "text-gold-foreground" : "text-muted-foreground", children: "1. Cuestionario" }),
      /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-border" }),
      /* @__PURE__ */ jsx("span", { className: step === "calendar" ? "text-gold-foreground" : "text-muted-foreground", children: "2. Agendar" }),
      /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-border" }),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "3. Confirmación" })
    ] }),
    step === "form" ? /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "empresa", children: "Nombre de la empresa" }),
                /* @__PURE__ */ jsx(Input, { id: "empresa", required: true, maxLength: 100, value: form.empresa, onChange: (e) => set("empresa", e.target.value), className: "mt-1.5", placeholder: "Su empresa S.A.S" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "nombre", children: "Su nombre" }),
                /* @__PURE__ */ jsx(Input, { id: "nombre", required: true, maxLength: 100, value: form.nombre, onChange: (e) => set("nombre", e.target.value), className: "mt-1.5", placeholder: "Nombre y apellido" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Correo electrónico" }),
                /* @__PURE__ */ jsx(Input, { id: "email", type: "email", required: true, maxLength: 255, value: form.email, onChange: (e) => set("email", e.target.value), className: "mt-1.5", placeholder: "correo@empresa.com" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "telefono", children: "Teléfono / WhatsApp" }),
                /* @__PURE__ */ jsx(Input, { id: "telefono", type: "tel", required: true, maxLength: 20, value: form.telefono, onChange: (e) => set("telefono", e.target.value), className: "mt-1.5", placeholder: "+57 300 000 0000", inputMode: "tel" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { children: "Sector" }),
                /* @__PURE__ */ jsxs(Select, { value: form.sector, onValueChange: (v) => set("sector", v), children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { className: "mt-1.5", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Seleccione su sector" }) }),
                  /* @__PURE__ */ jsx(SelectContent, { children: SECTORS.map((s) => /* @__PURE__ */ jsx(SelectItem, { value: s, children: s }, s)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "empleados", children: "N° de empleados" }),
                /* @__PURE__ */ jsx(Input, { id: "empleados", value: form.empleados, onChange: (e) => set("empleados", e.target.value), className: "mt-1.5", placeholder: "Ej: 15", inputMode: "numeric", maxLength: 6 })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsx(Label, { children: "Nivel de riesgo ARL" }),
                /* @__PURE__ */ jsxs(Select, { value: form.riesgo, onValueChange: (v) => set("riesgo", v), children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { className: "mt-1.5", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Seleccione su nivel de riesgo" }) }),
                  /* @__PURE__ */ jsx(SelectContent, { children: ["No lo sé", "Riesgo I", "Riesgo II", "Riesgo III", "Riesgo IV", "Riesgo V"].map((r) => /* @__PURE__ */ jsx(SelectItem, { value: r, children: r }, r)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "situacion", children: "¿Qué situación lo llevó a buscar asesoría?" }),
                /* @__PURE__ */ jsx(Textarea, { id: "situacion", value: form.situacion, onChange: (e) => set("situacion", e.target.value), className: "mt-1.5", rows: 3, maxLength: 1e3, placeholder: "Ej: tengo una visita del Ministerio, un cliente me exige RUC..." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Button, { type: "submit", variant: "gold", size: "lg", className: "mt-6 w-full", children: [
              /* @__PURE__ */ jsx(Send, { className: "size-5" }),
              " Continuar al calendario"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-center text-xs text-muted-foreground", children: "Al continuar, pasará al calendario para reservar su cita aquí mismo." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-gradient-navy p-7 shadow-elegant sm:p-9", children: [
          /* @__PURE__ */ jsx("div", { className: "flex size-12 items-center justify-center rounded-xl bg-gold text-gold-foreground", children: /* @__PURE__ */ jsx(CalendarClock, { className: "size-6" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 text-xl font-bold text-navy-foreground", children: "Cómo funciona el agendamiento" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-5 grid gap-4", children: [
            "Complete el cuestionario con los datos de su empresa.",
            "Reserve un espacio de 30 minutos en nuestro calendario.",
            "Recibimos el contexto y llegamos a la reunión con una solución preliminar."
          ].map((t, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "flex size-7 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-gold-foreground", children: i + 1 }),
            /* @__PURE__ */ jsx("span", { className: "text-sm leading-relaxed text-navy-foreground/80", children: t })
          ] }, t)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-navy", children: "¿Prefiere contacto inmediato?" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
            "Escríbanos por WhatsApp al ",
            PHONE_DISPLAY,
            ". Le responderemos en el menor tiempo posible."
          ] }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "whatsapp", size: "lg", className: "mt-5 w-full", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: whatsappUrl("Hola G3STION SAS, quiero hablar sobre el diagnóstico para mi empresa."),
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                /* @__PURE__ */ jsx(MessageCircle, { className: "size-5" }),
                " Escribir por WhatsApp ahora"
              ]
            }
          ) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5 flex flex-col items-center gap-3 rounded-2xl border border-gold/30 bg-secondary p-4 text-center sm:flex-row sm:justify-between sm:text-left", children: [
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-sm font-medium text-navy", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "size-5 text-gold-foreground" }),
          " Datos recibidos. Ahora elija su horario en el calendario."
        ] }),
        /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: () => setStep("form"), children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }),
          " Volver al cuestionario"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-card shadow-card", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          title: "Agendar diagnóstico — Calendly",
          src: calendlyUrl(),
          className: "h-[720px] w-full border-0",
          loading: "lazy"
        }
      ) })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Metrics, {}),
      /* @__PURE__ */ jsx(PainPoints, {}),
      /* @__PURE__ */ jsx(Solution, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(SgSstHighlight, {}),
      /* @__PURE__ */ jsx(WhyUs, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(WhatsAppGroup, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(LeadMagnet, {}),
      /* @__PURE__ */ jsx(Benefits, {}),
      /* @__PURE__ */ jsx(MinisterioCta, {}),
      /* @__PURE__ */ jsx(DiagnosticForm, {}),
      /* @__PURE__ */ jsx(Faq, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppFloat, {})
  ] });
}
export {
  Index as component
};
