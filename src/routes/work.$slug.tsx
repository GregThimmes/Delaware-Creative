import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { getProject, projects } from "@/lib/projects";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} case study — Delaware Creative` : "Case study — Delaware Creative";
    const description = p?.summary ?? "A Delaware Creative project.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const used = project.services.map(s => getService(s)!);
  const more = projects.filter(p => p.slug !== project.slug).slice(0, 2);
  return <PageShell defaultService={used[0]?.inquiryOption}>{open => <>
    <section className="section site-wrap">
      <Link to="/work" className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground"><ArrowLeft size={14} /> All work</Link>
      <div className="eyebrow mb-4 text-primary">{project.industry.toUpperCase()} / DESIGN CONCEPT</div>
      <h1 className="section-title">{project.name}<span className="text-orange">.</span></h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{project.summary}</p>
      <img src={project.image} alt={`${project.name} website concept`} className="mt-10 aspect-[16/9] w-full rounded-xl object-cover" />
    </section>
    <section className="section site-wrap grid gap-10 md:grid-cols-3">
      <div><div className="eyebrow mb-3 text-primary">THE CHALLENGE</div><p className="text-sm leading-7">{project.challenge}</p></div>
      <div><div className="eyebrow mb-3 text-primary">OUR APPROACH</div><ul className="space-y-2">{project.approach.map(a => <li key={a} className="flex gap-2 text-sm leading-6"><Check size={16} className="mt-1 shrink-0 text-orange" />{a}</li>)}</ul></div>
      <div><div className="eyebrow mb-3 text-primary">THE OUTCOME</div><p className="text-sm leading-7">{project.outcome}</p></div>
    </section>
    <section className="section site-wrap">
      <div className="eyebrow mb-3 text-primary">SERVICES</div>
      <div className="flex flex-wrap gap-2">{used.map(s => <Button key={s.slug} variant="outline" size="sm" asChild><Link to="/services/$slug" params={{ slug: s.slug }}>{s.title} <ArrowUpRight /></Link></Button>)}</div>
      <div className="eyebrow mb-4 mt-14 text-primary">MORE WORK</div>
      <div className="service-grid">{more.map(p => <ProjectCard key={p.slug} project={p} />)}</div>
    </section>
    <section className="contact-section"><div className="site-wrap flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="contact-title">Want something similar?<br /><span className="text-orange">Let’s make it real.</span></h2><Button variant="brand" size="cta" className="w-fit" onClick={open}>Start a conversation <ArrowUpRight /></Button></div></section>
  </>}</PageShell>;
}
