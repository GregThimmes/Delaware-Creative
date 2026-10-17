import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AgencyLogo, ConnectionLogo } from "@/components/agency-logo";
import { InquiryDialog } from "@/components/inquiry-dialog";
import { getService, services } from "@/lib/services";
import { projectsForService } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — Delaware Creative` : "Service — Delaware Creative";
    const description = s ? `${s.tagline} ${s.intro}` : "Design and development services by Delaware Creative.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const [inquiry, setInquiry] = useState(false);
  const others = services.filter(s => s.slug !== service.slug);
  return <>
    <header className="site-header"><div className="site-wrap header-layout"><Link className="header-logo-link" to="/" aria-label="Delaware Creative home"><AgencyLogo /></Link><Button variant="brand" size="cta" onClick={() => setInquiry(true)}>Let’s talk <ArrowUpRight /></Button></div></header>
    <main>
      <section className="section site-wrap">
        <Link to="/" hash="services" className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground"><ArrowLeft size={14} /> All services</Link>
        <div className="eyebrow mb-4 text-primary"><ConnectionLogo className="section-connection" /> DELAWARE CREATIVE SERVICE</div>
        <h1 className="section-title">{service.title}<span className="text-orange">.</span></h1>
        <p className="mt-4 font-display text-xl text-primary">{service.tagline}</p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{service.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button variant="studio" size="cta" onClick={() => setInquiry(true)}>Start this project <ArrowUpRight /></Button></div>
      </section>
      <section className="section site-wrap">
        <div className="eyebrow mb-4 text-primary">01 / WHAT YOU GET</div>
        <div className="service-grid">{service.deliverables.map((d, i) => <article className="service-card" key={d.title}><span className="service-index">/ 0{i + 1}</span><h3>{d.title}</h3><p>{d.text}</p></article>)}</div>
      </section>
      <section className="section site-wrap">
        <div className="eyebrow mb-4 text-primary">02 / HOW IT WORKS</div>
        <div className="process-grid connected-process">{service.steps.map((st, i) => <div key={st.title}><div className="process-number">0{i + 1} <ArrowRight className="float-right" size={17} /></div><h3>{st.title}</h3><p>{st.text}</p></div>)}</div>
      </section>
      <section className="section site-wrap">
        <div className="eyebrow mb-4 text-primary">03 / A GREAT FIT FOR</div>
        <ul className="grid gap-3 md:grid-cols-3">{service.fit.map(f => <li key={f} className="flex gap-3 text-sm leading-6"><Check size={18} className="shrink-0 text-orange" />{f}</li>)}</ul>
        <div className="mt-12 border-t border-border pt-6"><p className="text-xs text-muted-foreground">Pairs well with</p><div className="mt-3 flex flex-wrap gap-2">{others.map(o => <Button key={o.slug} variant="outline" size="sm" asChild><Link to="/services/$slug" params={{ slug: o.slug }}>{o.title} <ArrowUpRight /></Link></Button>)}</div></div>
      </section>
      <section className="section site-wrap"><div className="section-top"><div><div className="eyebrow mb-4 text-primary">04 / RELATED WORK</div><h2 className="section-title">See it in practice.</h2></div><Link to="/work" className="inline-flex items-center gap-2 text-xs font-medium text-primary">View full portfolio <ArrowUpRight size={13} /></Link></div><div className="service-grid">{projectsForService(service.slug).map(p => <ProjectCard key={p.slug} project={p} />)}</div></section>
      <section className="contact-section"><div className="site-wrap flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="contact-title">Ready for the next step?<br /><span className="text-orange">Let’s make it real.</span></h2><Button variant="brand" size="cta" className="w-fit" onClick={() => setInquiry(true)}>Start a conversation <ArrowUpRight /></Button></div></section>
    </main>
    <footer className="footer"><div className="site-wrap flex flex-wrap items-center justify-between gap-4"><Link to="/" aria-label="Delaware Creative home"><AgencyLogo compact /></Link><span>© 2026 Delaware Creative</span></div></footer>
    {inquiry && <InquiryDialog defaultService={service.inquiryOption} onClose={() => setInquiry(false)} />}
  </>;
}
