const metrics = [
  { value: "+15", label: "Años de experiencia" },
  { value: "+20", label: "Empresas asesoradas" },
  { value: "+40", label: "Auditorías acompañadas" },
  { value: "100%", label: "Cobertura nacional" },
];

export function Metrics() {
  return (
    <section className="relative z-10 -mt-px bg-gold">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gold-foreground/15 px-5 py-8 sm:py-10 lg:grid-cols-4 lg:px-8">
        {metrics.map((m) => (
          <div key={m.label} className="px-3 text-center sm:px-6">
            <div className="font-display text-3xl font-extrabold text-gold-foreground sm:text-4xl">
              {m.value}
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
