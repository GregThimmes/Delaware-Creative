import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/layout";
import { Counties, FAQ, Features, FinalCTA, Hero, HowItWorks, Industries, Pricing, ProblemSolution, WebsiteExamples } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "302 Sitekick — Your Delaware Website, Made Simple | $20/Month" },
    { name: "description", content: "302 Sitekick builds professional websites for Delaware small businesses for just $20/month. No setup fee, no agency prices." },
    { property: "og:title", content: "302 Sitekick — Your Delaware Website, Made Simple" },
    { property: "og:description", content: "Professional websites for Delaware small businesses. Just $20/month, no setup fee." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <SiteShell>
    <Hero /><Counties /><ProblemSolution /><WebsiteExamples /><HowItWorks /><Features /><Pricing /><Industries /><FAQ /><FinalCTA />
  </SiteShell>;
}
