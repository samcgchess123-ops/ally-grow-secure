import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Metrics } from "@/components/site/Metrics";
import { PainPoints } from "@/components/site/PainPoints";
import { Solution } from "@/components/site/Solution";
import { SgSstHighlight } from "@/components/site/SgSstHighlight";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { Benefits } from "@/components/site/Benefits";
import { MinisterioCta } from "@/components/site/MinisterioCta";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { DiagnosticForm } from "@/components/site/DiagnosticForm";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const title = "G3STION SAS | Consultoría SG-SST y certificaciones ISO en Colombia";
const description =
  "Aliado permanente en SG-SST, sistemas de gestión y certificaciones ISO 9001, 45001, 14001, RUC y PESV. Asumimos la responsabilidad legal de su SG-SST. Diagnóstico gratuito.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "SG-SST Colombia, sistemas de gestión, consultoría SST, certificación ISO, ISO 9001, ISO 45001, ISO 14001, PESV, RUC, implementación de sistemas de gestión",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CO" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <PainPoints />
        <Solution />
        <SgSstHighlight />
        <Services />
        <WhyUs />
        <Process />
        <Pricing />
        <Benefits />
        <MinisterioCta />
        <Testimonials />
        <Faq />
        <DiagnosticForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
