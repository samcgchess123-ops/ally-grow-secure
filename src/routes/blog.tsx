import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { BlogArticles } from "@/components/site/BlogArticles";

const title = "Blog | G3STION SAS — Guías de cumplimiento SG-SST, ISO y PESV";
const description =
  "Guías de consulta sobre estándares mínimos de la Resolución 0312 de 2019, auditorías ISO 9001, 14001 y 45001, y obligatoriedad del PESV en Colombia.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CO" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogArticles />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
