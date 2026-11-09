import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/layout";
import { BrowserBar } from "@/components/site/sections";
import { examples, getExample } from "@/lib/site-content";

export const Route = createFileRoute("/examples/$slug")({
  loader: ({ params }) => { const example = getExample(params.slug); if (!example) throw notFound(); return { example }; },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.example.name} — Example Website | 302 Sitekick` },
    { name: "description", content: loaderData.example.description },
    { property: "og:title", content: `${loaderData.example.name} — Example Website | 302 Sitekick` },
    { property: "og:description", content: loaderData.example.description },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] : [{ title: "Example not found | 302 Sitekick" }, { name: "robots", content: "noindex" }] }),
  component: ExamplePage,
  notFoundComponent: () => <SiteShell><div className="wrap py-28 text-center"><h1 className="section-title">Example not found</h1><Button asChild variant="kick" size="cta" className="mt-8"><Link to="/" hash="examples">See all examples</Link></Button></div></SiteShell>,
});

function ExamplePage() {
  const { example } = Route.useLoaderData();
  const others = examples.filter(e => e.slug !== example.slug);
  return <SiteShell>
    <section className="bg-cream py-14 md:py-20"><div className="wrap">
      <Link to="/" hash="examples" className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-orange"><ArrowLeft className="size-4" /> All examples</Link>
      <p className="eyebrow mt-8 text-orange">{example.category} · Example website</p>
      <h1 className="section-title mt-3">{example.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate">{example.description}</p>
      <div className="browser-frame mt-10"><BrowserBar url={`${example.slug.replace(/-/g, "")}.com`} /><img src={example.image} alt={`${example.name} sample website homepage`} width={1280} height={896} className="w-full" /></div>
      <p className="mt-4 text-xs text-muted-foreground">A sample website for a fictional business, showing what a $20/month Sitekick site can look like.</p>
    </div></section>
    <section className="py-16 md:py-20"><div className="wrap grid gap-10 md:grid-cols-2">
      <div><h2 className="text-2xl font-extrabold">What’s on the site</h2><ul className="mt-5 flex flex-wrap gap-2">{example.pages.map(p => <li key={p} className="rounded-full bg-mist px-4 py-2 text-sm font-semibold">{p}</li>)}</ul></div>
      <div><h2 className="text-2xl font-extrabold">Why it works</h2><ul className="mt-5 grid gap-3">{example.highlights.map(h => <li key={h} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-orange" />{h}</li>)}</ul></div>
    </div></section>
    <section className="ai-grid bg-navy py-16 text-primary-foreground"><div className="wrap flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
      <div><h2 className="text-3xl font-extrabold">Want one like this for your business?</h2><p className="mt-2 text-primary-foreground/75">Just $20/month. No setup fee.</p></div>
      <Button asChild variant="kick" size="cta"><Link to="/get-started">Get My Website <ArrowRight /></Link></Button>
    </div></section>
    <section className="py-16"><div className="wrap"><h2 className="text-xl font-extrabold">More examples</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{others.map(o => <Link key={o.slug} to="/examples/$slug" params={{ slug: o.slug }} className="card-lift flex items-center gap-4 rounded-2xl border border-border p-4"><img src={o.image} alt="" loading="lazy" className="h-16 w-24 rounded-lg object-cover object-top" /><span><span className="block font-bold">{o.name}</span><span className="text-sm text-slate">{o.category}</span></span></Link>)}</div></div></section>
  </SiteShell>;
}
