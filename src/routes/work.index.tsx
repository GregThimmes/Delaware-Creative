import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({ meta: [
    { title: "Portfolio — Delaware Creative" },
    { name: "description", content: "Brand, website design, and web development work from Delaware Creative." },
    { property: "og:title", content: "Portfolio — Delaware Creative" },
    { property: "og:description", content: "Brand, website design, and web development work from Delaware Creative." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: WorkPage,
});

function WorkPage() {
  return <PageShell>{open => <>
    <section className="section site-wrap">
      <div className="eyebrow mb-4 text-primary">PORTFOLIO</div>
      <h1 className="section-title">Our work<span className="text-orange">.</span></h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">Brand identities, websites, and builds for small businesses. The projects shown here are design concepts.</p>
      <div className="service-grid mt-10">{projects.map(p => <ProjectCard key={p.slug} project={p} />)}</div>
    </section>
    <section className="contact-section"><div className="site-wrap flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="contact-title">Your project could be next.<br /><span className="text-orange">Let’s make it real.</span></h2><Button variant="brand" size="cta" className="w-fit" onClick={open}>Start a conversation <ArrowUpRight /></Button></div></section>
  </>}</PageShell>;
}
