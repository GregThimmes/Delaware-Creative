import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy | 302 Sitekick" },
    { name: "description", content: "How 302 Sitekick handles your information." },
    { property: "og:title", content: "Privacy Policy | 302 Sitekick" },
    { property: "og:description", content: "How 302 Sitekick handles your information." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => <SiteShell><article className="wrap max-w-3xl py-20">
    <h1 className="section-title">Privacy Policy</h1>
    <p className="mt-4 rounded-xl bg-cream px-4 py-3 text-sm">Draft summary — full policy is being finalized.</p>
    <p className="mt-8 text-slate">This website does not currently collect or store personal information. The “Get My Website” form saves details only to your own device; nothing is sent to us.</p>
  </article></SiteShell>,
});
