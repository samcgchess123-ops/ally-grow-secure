import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "./config";

export function BlogArticles() {
  return (
    <article className="bg-background">
      {/* Header */}
      <header className="bg-gradient-navy pb-16 pt-32 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Recursos y conocimiento
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-navy-foreground sm:text-4xl">
            Blog G3STION SAS
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-foreground/75">
            Guías de consulta práctica sobre cumplimiento normativo, certificaciones y seguridad en
            el trabajo en Colombia.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-12 px-5 py-16 lg:px-8 lg:py-20">
        {/* ================= ARTÍCULO 1 ================= */}
        <section className="article-prose rounded-3xl border border-border bg-card p-6 shadow-card sm:p-9 lg:p-12">
          <p className="article-kicker">Artículo 1: Guía de Consulta sobre Estándares Mínimos</p>
          <h2>
            ABC de la Resolución 0312 de 2019: Tabla de consulta rápida de Estándares Mínimos en
            SG-SST
          </h2>
          <p>
            El Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) es obligatorio para
            todas las empresas en Colombia, pero la ley reconoce que una microempresa no tiene los
            mismos recursos ni riesgos que una multinacional. Por eso, la{" "}
            <strong>Resolución 0312 de 2019</strong> define los estándares mínimos aplicables según
            el tamaño y la actividad económica de la organización. Guarda este artículo como una
            guía de consulta rápida para verificar si tu empresa está cumpliendo con los requisitos
            legales correctos:
          </p>

          <h3>1. Empresas con 10 o menos trabajadores (Riesgo I, II o III)</h3>
          <p>
            Si tu empresa pertenece a este grupo, la ley te exige cumplir únicamente con{" "}
            <strong>7 estándares mínimos</strong>:
          </p>
          <ul>
            <li>
              Asignación de una persona que diseñe el SG-SST (puede ser un técnico en SST con 1 año
              de experiencia y curso de 50 horas).
            </li>
            <li>Afiliación al Sistema de Seguridad Social Integral.</li>
            <li>Capacitación en SST.</li>
            <li>Plan Anual de Trabajo.</li>
            <li>Evaluaciones médicas ocupacionales.</li>
            <li>Identificación de peligros, evaluación y valoración de riesgos.</li>
            <li>Medidas de prevención y control frente a los peligros identificados.</li>
          </ul>

          <h3>2. Empresas de 11 a 50 trabajadores (Riesgo I, II o III)</h3>
          <p>
            Para este segmento, la exigencia sube a <strong>21 estándares mínimos</strong>. Además
            de los anteriores, se deben incluir de forma obligatoria:
          </p>
          <ul>
            <li>Asignación de recursos financieros, técnicos y de personal para el sistema.</li>
            <li>
              Conformación y funcionamiento del COPASST (Comité Paritario de Seguridad y Salud en el
              Trabajo) y del Comité de Convivencia Laboral.
            </li>
            <li>Archivo y retención documental de los soportes del sistema.</li>
            <li>Matriz de requisitos legales actualizada.</li>
            <li>Procedimientos e instructivos internos de seguridad.</li>
            <li>Plan de Prevención, Preparación y Respuesta ante Emergencias.</li>
            <li>Reporte e investigación de accidentes de trabajo y enfermedades laborales.</li>
          </ul>

          <h3>3. Empresas con más de 50 trabajadores (O empresas de Riesgo IV o V)</h3>
          <p>
            Sin importar si tienes 5 o 500 empleados, si tu actividad económica está clasificada en{" "}
            <strong>Riesgo IV o V</strong> (como empresas de energía, transporte, construcción o
            inspección), debes cumplir con la totalidad de la norma: 60 estándares mínimos.
          </p>
          <ul>
            <li>
              <em>Nota de consulta:</em> Este nivel requiere la firma obligatoria de un profesional
              o especialista en SST con licencia vigente y curso virtual de 50 horas.
            </li>
          </ul>
          <p>
            <strong>Regla de oro para auditorías:</strong> No basta con tener los documentos
            creados; el mayor peso en una revisión de entes de control radica en los registros y
            evidencias de la ejecución real de las capacitaciones, inspecciones y comités del último
            año.
          </p>
        </section>

        {/* ================= ARTÍCULO 2 ================= */}
        <section className="article-prose border-t border-border pt-16">
          <p className="article-kicker">Artículo 2: Guía de Consulta sobre Auditorías ISO</p>
          <h2>
            Guía técnica: ¿Qué evalúa un auditor en las normas ISO 9001, 14001 y 45001?
          </h2>
          <p>
            Cuando una organización decide certificar o mantener sus Sistemas de Gestión bajo
            estándares internacionales como <strong>ISO 9001 (Calidad)</strong>,{" "}
            <strong>ISO 14001 (Medio Ambiente)</strong> o{" "}
            <strong>ISO 45001 (Seguridad y Salud)</strong>, la auditoría externa suele generar
            incertidumbre.
          </p>
          <p>
            Para abordar un proceso de auditoría con seguridad, es fundamental comprender que los
            auditores se basan en una estructura común de alto nivel. A continuación, resumimos qué
            buscan evaluar específicamente en cada una de las tres normas principales:
          </p>

          <h3>1. El núcleo común: Lo que evalúan en TODAS las normas ISO</h3>
          <p>
            Antes de revisar los detalles de cada especialidad, el auditor comprobará los
            fundamentos del sistema:
          </p>
          <ul>
            <li>
              <strong>Contexto de la organización:</strong> Si la empresa identificó sus riesgos
              externos e internos y las necesidades de sus partes interesadas.
            </li>
            <li>
              <strong>Liderazgo y compromiso:</strong> Evidencia clara de que la alta gerencia se
              involucra en el sistema y no lo delegó como un simple papeleo.
            </li>
            <li>
              <strong>Competencia del personal:</strong> Soportes que demuestren que el personal que
              ejecuta tareas críticas cuenta con la educación, formación o experiencia requerida.
            </li>
          </ul>

          <h3>2. ISO 9001: Enfoque en la Calidad y los Procesos</h3>
          <p>
            En esta norma, el auditor se centrará en la consistencia de la operación para garantizar
            la satisfacción del cliente:
          </p>
          <ul>
            <li>
              <strong>Estandarización:</strong> Que existan procedimientos e instructivos claros que
              eviten errores repetitivos en el servicio o producto.
            </li>
            <li>
              <strong>Trazabilidad:</strong> Capacidad de rastrear un error desde su origen hasta la
              entrega final.
            </li>
            <li>
              <strong>Evaluación de proveedores:</strong> Soportes de cómo la empresa califica y
              controla a sus contratistas externos.
            </li>
          </ul>

          <h3>3. ISO 45001: Enfoque en la Seguridad en el trabajo</h3>
          <p>
            Aquí el foco normativo cambia radicalmente hacia la protección de la integridad del
            trabajador:
          </p>
          <ul>
            <li>
              <strong>Participación y consulta:</strong> Evidencias de que los trabajadores y sus
              comités (como el COPASST) son consultados activamente en las decisiones de seguridad.
            </li>
            <li>
              <strong>Matriz de Identificación de Peligros:</strong> Validación de que los controles
              definidos en el papel realmente se aplican en los puestos de trabajo.
            </li>
            <li>
              <strong>Preparación ante emergencias:</strong> Simulacros realizados, estado de los
              equipos de rescate y conocimiento del personal sobre los planes de evacuación.
            </li>
          </ul>

          <h3>4. ISO 14001: Enfoque en la Gestión Ambiental</h3>
          <p>El auditor buscará comprobar cómo la operación interactúa con su entorno natural:</p>
          <ul>
            <li>
              <strong>Matriz de Aspectos e Impactos Ambientales:</strong> Identificación técnica de
              cómo el consumo de agua, energía, la generación de residuos o las emisiones afectan al
              medio ambiente.
            </li>
            <li>
              <strong>Gestión de residuos:</strong> Certificados de disposición final de residuos
              peligrosos y convencionales emitidos por gestores autorizados.
            </li>
          </ul>
        </section>

        {/* ================= ARTÍCULO 3 ================= */}
        <section className="article-prose border-t border-border pt-16">
          <p className="article-kicker">Artículo 3: Guía de Consulta sobre Seguridad Vial</p>
          <h2>
            Guía de consulta: ¿Está tu empresa obligada a implementar el PESV? (Criterios y Pasos
            Clave)
          </h2>
          <p>
            La seguridad vial en el entorno corporativo ya no es un asunto exclusivo de las empresas
            de transporte público o de carga. En Colombia, cualquier organización, sin importar su
            sector económico, puede estar obligada por ley a diseñar e implementar un{" "}
            <strong>Plan Estratégico de Seguridad Vial (PESV)</strong> si cumple con ciertos
            criterios específicos de operación logística o administrativa.
          </p>
          <p>
            Si en tu empresa se desplazan personas o mercancías, guarda esta guía de consulta rápida
            para verificar tu nivel de obligatoriedad y los pasos para su articulación.
          </p>

          <h3>1. El criterio de obligatoriedad (¿Quiénes deben cumplir?)</h3>
          <p>
            De acuerdo con la normatividad vigente (Ley 1503 de 2011, modificada por el Decreto 1252
            de 2021 y reglamentada por la Resolución 20223040040595 de 2022), están obligadas a
            diseñar e implementar el PESV todas las empresas que posean, subcontraten, administren o
            tengan bajo su servicio una flota de vehículos automotores o no automotores superior a{" "}
            <strong>diez (10) unidades</strong>, o que contraten o administren personal de
            conductores que supere los <strong>dos (2) trabajadores</strong>.
          </p>
          <p>Para hacer el cálculo correcto en tu organización, debes aplicar la siguiente tabla de consulta:</p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy text-navy-foreground">
                  <th className="border border-border p-3 font-bold">Tipo de Empresa</th>
                  <th className="border border-border p-3 font-bold">
                    Criterio de Vehículos (Propios, contratados, leasing o en renting)
                  </th>
                  <th className="border border-border p-3 font-bold">
                    Criterio de Personal (Conductores contratados, terceros o personal que use su
                    vehículo para trabajar)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">
                    <strong>Empresas de Transporte</strong> (Carga, pasajeros, mixto, etc.)
                  </td>
                  <td className="border border-border p-3">
                    <strong>10 o más vehículos</strong>
                  </td>
                  <td className="border border-border p-3">
                    <strong>2 o más conductores</strong>
                  </td>
                </tr>
                <tr className="bg-secondary">
                  <td className="border border-border p-3">
                    <strong>Empresas de otros sectores</strong> (Comercio, servicios, manufactura,
                    etc.)
                  </td>
                  <td className="border border-border p-3">
                    <strong>10 o más vehículos</strong>
                  </td>
                  <td className="border border-border p-3">
                    <strong>2 o más conductores</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Nota de consulta:</strong> Un error común es pensar que si los vehículos son
            propiedad de los empleados (por ejemplo, asesores comerciales que usan su propia moto o
            carro), la empresa no tiene responsabilidad. <strong>Falso.</strong> Si el vehículo se
            utiliza para la ejecución de las funciones laborales, entra directamente en el conteo de
            la empresa para determinar la obligatoriedad.
          </p>

          <h3>2. Los 3 niveles de implementación</h3>
          <p>
            La metodología de la actual Resolución 20223040040595 clasifica a las empresas obligadas
            en tres niveles (Básico, Estándar y Avanzado) según su tamaño y actividad, definiendo el
            número de pasos técnicos que deben cumplir obligatoriamente:
          </p>
          <ul>
            <li>
              <strong>Nivel Básico:</strong> Aplica para empresas de transporte con entre 10 y 19
              vehículos (o 2 a 19 conductores) y empresas de otros sectores con entre 10 y 49
              vehículos (o 2 a 49 conductores). Deben implementar <strong>16 pasos</strong>.
            </li>
            <li>
              <strong>Nivel Estándar:</strong> Aplica para empresas de transporte con entre 20 y 49
              vehículos (o 20 a 49 conductores) y organizaciones de otros sectores con entre 50 y 99
              vehículos (o 50 a 99 conductores). Deben cumplir con <strong>24 pasos</strong>.
            </li>
            <li>
              <strong>Nivel Avanzado:</strong> Aplica para empresas de transporte con 50 o más
              vehículos (o 50 o más conductores) y otros sectores con 100 o más vehículos (o 100 o
              más conductores). Deben certificar el cumplimiento de los{" "}
              <strong>24 pasos con criterios de profundización e indicadores más estrictos</strong>.
            </li>
          </ul>

          <h3>3. La articulación con el SG-SST</h3>
          <p>
            El PESV ya no es un sistema aislado. La ley exige que esté{" "}
            <strong>
              articulado con el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST)
            </strong>
            . Esto significa que el Comité de Seguridad Vial puede fusionarse o trabajar en llave
            con el COPASST, y que los riesgos viales identificados deben estar completamente
            integrados en la Matriz de Identificación de Peligros de la empresa.
          </p>

          <h3>¿Cómo te ayuda G3STIÓN SAS?</h3>
          <p>
            Diseñar un PESV sin la asesoría técnica adecuada puede sobrecargar administrativamente a
            tu equipo con formatos innecesarios o, peor aún, dejar vacíos legales que expongan a la
            gerencia a sanciones económicas.
          </p>
          <p>
            En <strong>G3STIÓN SAS</strong> nos encargamos de diseñar, implementar y auditar tu Plan
            Estratégico de Seguridad Vial de forma integrada con tus sistemas actuales, garantizando
            el cumplimiento legal y la seguridad de tu operación vial.
          </p>
          <div className="mt-6">
            <Button asChild variant="gold" size="lg" className="h-auto max-w-full whitespace-normal py-3 text-center">
              <a href="/#diagnostico">
                Solicitar un diagnóstico del estado de seguridad vial de tu flota{" "}
                <ArrowRight className="size-5 shrink-0" />
              </a>
            </Button>
          </div>
        </section>

        {/* Volver / CTA */}
        <div className="border-t border-border pt-12 text-center">
          <Button asChild variant="navy" size="lg">
            <a
              href={whatsappUrl(
                "Hola G3STION SAS, quiero recibir más contenido y novedades normativas.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero recibir más contenido <ArrowRight className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
