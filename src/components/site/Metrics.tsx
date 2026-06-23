import { useEffect, useRef, useState } from "react";

const metrics = [
  { target: 15, prefix: "+", suffix: "", label: "Años de experiencia" },
  { target: 20, prefix: "+", suffix: "", label: "Empresas asesoradas" },
  { target: 40, prefix: "+", suffix: "", label: "Auditorías acompañadas" },
  { target: 100, prefix: "", suffix: "%", label: "Cobertura nacional" },
];

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function Counter({
  target,
  prefix,
  suffix,
  active,
}: {
  target: number;
  prefix: string;
  suffix: string;
  active: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    let raf = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOutExpo(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return (
    <span className="tabular-nums">
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export function Metrics() {
  const ref = useRef<HTMLElement>(null);
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
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 -mt-px bg-gold">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gold-foreground/15 px-5 py-8 sm:py-10 lg:grid-cols-4 lg:px-8">
        {metrics.map((m) => (
          <div key={m.label} className="px-3 text-center sm:px-6">
            <div className="font-display text-3xl font-extrabold text-gold-foreground sm:text-4xl">
              <Counter target={m.target} prefix={m.prefix} suffix={m.suffix} active={active} />
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wide text-gold-foreground/80 sm:text-sm">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
