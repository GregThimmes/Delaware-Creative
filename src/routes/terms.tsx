import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/layout";
import { pricing } from "@/lib/site-content";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms of Service | 302 Sitekick" },
    { name: "description", content: "Terms of Service summary for the 302 Sitekick website subscription." },
    { property: "og:title", content: "Terms of Service | 302 Sitekick" },
    { property: "og:description", content: "Terms of Service summary for 302 Sitekick." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => <SiteShell><article className="wrap max-w-3xl py-20">
    <h1 className="section-title">Terms of Service</h1>
    <p className="mt-4 rounded-xl bg-cream px-4 py-3 text-sm text-buff-foreground">Draft summary — full terms are being finalized.</p>
    <ul className="mt-8 grid list-disc gap-3 pl-5 text-slate">
      <li>Subscription: ${pricing.monthly}/month, no setup fee.</li>
      <li>{pricing.commitment}</li>
      <li>{pricing.domainNote}</li>
      <li>Includes one small content update per quarter and basic technical support.</li>
      <li>We do not guarantee specific search engine rankings.</li>
    </ul>
  </article></SiteShell>,
});
