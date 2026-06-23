import ceoImg from "@/assets/why-us-person.jpg";

export function WhyUs() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 -z-0 h-full w-full rounded-3xl bg-gold/20" aria-hidden />
            <img
              src={ceoImg}
              alt="Yudi Andrea Torres Vásquez, CEO y consultora principal de G3STION SAS"
              loading="lazy"
              width={1086}
              height={1448}
              className="relative z-10 aspect-[3/4] w-full rounded-3xl object-cover object-top shadow-elegant"
            />
            <div className="absolute -bottom-6 left-1/2 z-20 w-[88%] -translate-x-1/2 rounded-2xl bg-navy p-4 text-center shadow-card">
              <p className="font-display font-bold text-navy-foreground">Yudi Andrea Torres Vásquez</p>
              <p className="text-xs uppercase tracking-wide text-gold">CEO & Consultora principal</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Por qué trabajar con nosotros
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Más de 15 años de trayectoria profesional
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nos especializamos en transformar el cumplimiento normativo en crecimiento para las empresas. Nuestra gestión combina la responsabilidad con la capacidad para optimizar los recursos.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Contamos con experiencia comprobada liderando y superando con éxito auditorías ante entes gubernamentales, organismos de certificación internacional y la ONAC.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A través de G3STION SAS, firma legalmente constituida hace más de 9 años, demostramos que las empresas pueden operar con el estándar de las grandes Organizaciones sin asumir costos desproporcionados. Nosotros creamos valor y aportamos al crecimiento de las empresas.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Experiencia en sectores como construcción, industria, servicios, salud, logística, comercio, entre otras.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Evaluamos su estado actual sin compromiso para trazar la hoja de ruta exacta hacia su blindaje total.
          </p>
        </div>
      </div>
    </section>
  );
}
