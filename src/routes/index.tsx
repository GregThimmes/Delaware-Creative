import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Download, Globe2, Menu, MousePointer2, Sparkles, X, PenTool, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AgencyLogo, ConnectionLogo } from "@/components/agency-logo";
import workspace from "@/assets/web-design-workspace.jpg";
import house from "@/assets/coastal-house.jpg";
import cafe from "@/assets/cafe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Delaware Creative — Design Agency & Web Development" },
    { name: "description", content: "Delaware Creative is a design agency for small businesses. Distinctive brand identities, thoughtful website design, and expert web development with a human-first approach." },
    { property: "og:title", content: "Delaware Creative — Design Agency & Web Development" },
    { property: "og:description", content: "Design-led. Expertly built. Brand identity, website design, and web development for your next chapter." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const navigation = [{ label: "Services", id: "services" }, { label: "Our work", id: "work" }, { label: "Our process", id: "process" }, { label: "About us", id: "about" }];
const services = [
  { icon: PenTool, title: "Brand & creative direction", description: "A clear identity. A distinctive point of view. We shape the visual language that makes your business recognizable, online and beyond.", tags: "IDENTITY / ART DIRECTION / STRATEGY" },
  { icon: MousePointer2, title: "Website & digital design", description: "Custom websites where personality meets purpose. Thoughtful layouts, intuitive journeys, and the details that make your brand feel like no one else.", tags: "UI & UX / CUSTOM DESIGN / MOBILE-FIRST" },
  { icon: Code2, title: "Web development", description: "Design brought to life in code. Fast, accessible, responsive websites—carefully built to work beautifully and grow with your business.", tags: "DEVELOPMENT / PERFORMANCE / ACCESSIBILITY" },
];

function InquiryDialog({ onClose }: { onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const previous = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLInputElement>("input")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const elements = panel.current?.querySelectorAll<HTMLElement>('button, input, select, textarea');
        if (!elements?.length) return;
        const first = elements[0]; const last = elements[elements.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKey); if (previous instanceof HTMLElement) previous.focus(); };
  }, [onClose]);
  function saveDraft(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Delaware Creative — Project inquiry\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nBusiness: ${data.get("business")}\nService: ${data.get("service")}\n\n${data.get("details")}`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const a = document.createElement("a"); a.href = url; a.download = "delaware-creative-project-inquiry.txt"; a.click(); URL.revokeObjectURL(url); setSaved(true);
  }
  return <div className="dialog-backdrop" onClick={onClose}><div className="dialog-panel" ref={panel} role="dialog" aria-modal="true" aria-labelledby="inquiry-title" onClick={e => e.stopPropagation()}>
    <div className="flex items-center justify-between gap-4"><h2 id="inquiry-title" className="font-display text-2xl font-medium">Let’s talk about your project.</h2><Button variant="ghost" size="icon" aria-label="Close inquiry" onClick={onClose}><X /></Button></div>
    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Project inquiries aren’t connected to email yet. You can save a draft below; nothing will be sent.</p>
    <form onSubmit={saveDraft}>
      <label className="field">Your name<input name="name" autoComplete="name" required placeholder="Alex Smith" /></label>
      <label className="field">Email address<input name="email" type="email" autoComplete="email" required placeholder="alex@yourbusiness.com" /></label>
      <label className="field">Business name<input name="business" autoComplete="organization" placeholder="Your business" /></label>
      <label className="field">What do you have in mind?<select name="service"><option>A new website</option><option>A website redesign</option><option>Web development</option><option>Brand & creative direction</option><option>Something else</option></select></label>
      <label className="field">A little about your project<textarea name="details" rows={3} required placeholder="Tell us about your business and what you’d love to create." /></label>
      <Button variant="studio" size="cta" type="submit" className="mt-6 w-full">{saved ? <Check /> : <Download />}{saved ? "Draft saved — download again" : "Save project inquiry"}</Button>
      {saved && <p role="status" className="mt-3 text-center text-xs text-muted-foreground">Your inquiry draft has been downloaded. It has not been sent.</p>}
    </form>
  </div></div>;
}

function Project({ kind, onOpen }: { kind: "coastal" | "cafe"; onOpen: () => void }) {
  const coastal = kind === "coastal";
  return <article><div className={`project-stage ${kind}`}><div className="browser-frame">
    <div className="browser-bar"><i /><i /><i /></div>
    <div className="mock-nav"><span className="mock-brand">{coastal ? "shore & stone" : "daybreak."}</span><span>{coastal ? "OUR HOMES　 ABOUT　 GET IN TOUCH" : "OUR STORY　 THE MENU　 VISIT US"}</span></div>
    <div className="mock-hero"><img src={coastal ? house : cafe} alt={coastal ? "Coastal home concept website" : "Artisan café concept website"} loading="lazy" width={1024} height={768} /><div className="mock-overlay"><h4>{coastal ? "A place to call your own." : "Good mornings start here."}</h4><p>{coastal ? "Thoughtfully built. Naturally inspired." : "Small batches. A whole lot of heart."}</p><span className="mock-cta">{coastal ? "EXPLORE OUR HOMES" : "EXPLORE THE MENU"} ↗</span></div></div>
  </div></div><div className="project-meta"><div><h3>{coastal ? "Shore & Stone" : "Daybreak Café"}</h3><p>{coastal ? "REAL ESTATE" : "FOOD & HOSPITALITY"} <span className="mx-2">/</span> DESIGN CONCEPT</p></div><Button variant="outline" size="icon" className="rounded-full" aria-label={`Discuss a website like ${coastal ? "Shore & Stone" : "Daybreak Café"}`} onClick={onOpen}><ArrowUpRight /></Button></div></article>;
}

function Index() {
  const [menu, setMenu] = useState(false);
  const [inquiry, setInquiry] = useState(false);
  const openInquiry = () => { setMenu(false); setInquiry(true); };
  return <>
    <header className="site-header"><div className="site-wrap header-layout"><a className="header-logo-link" href="#home" aria-label="Delaware Creative home"><AgencyLogo /></a><nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">{navigation.map(item => <a key={item.id} className="nav-link" href={`#${item.id}`}>{item.label}</a>)}</nav><Button variant="brand" size="cta" className="hidden md:inline-flex" onClick={openInquiry}>Let’s talk <ArrowUpRight /></Button><Button variant="ghost" size="icon" className="md:hidden" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button></div>{menu && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <a key={item.id} className="nav-link" href={`#${item.id}`} onClick={() => setMenu(false)}>{item.label}</a>)}<Button variant="brand" size="cta" onClick={openInquiry}>Let’s talk <ArrowUpRight /></Button></nav>}</header>
    <main>
      <section className="hero" id="home"><img className="hero-art" src={workspace} alt="Website design workspace with a desktop monitor displaying a small-business website concept" width={1920} height={1024} fetchPriority="high" /><div className="agency-art-notes" aria-hidden="true"><div className="design-selection"><span className="selection-label"><MousePointer2 size={12} /> Design with intention</span><i /><i /><i /><i /></div><div className="code-note"><Braces size={16} /><span>creative vision <span className="text-orange">→</span> clean code</span></div><div className="ai-note"><Sparkles size={14} /><span>Human-led. AI-inspired.</span><span className="signal-pulse" /></div></div><div className="site-wrap"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> DESIGN AGENCY + WEB DEVELOPMENT</div><h1>Delaware Creative<span className="text-orange">.</span><span className="hero-statement">Design-led.<br /><span className="text-primary">Expertly built.</span></span></h1><p className="hero-description">Distinctive brands. Remarkable websites.<br />We bring creative direction and web development together to help your business stand apart.</p><div className="mt-7 flex flex-wrap items-center gap-6"><Button variant="studio" size="cta" onClick={openInquiry}>Let’s create something <ArrowUpRight /></Button><a href="#work" className="flex items-center gap-2 text-xs font-medium">Explore our work <ArrowDown size={14} /></a></div></div><div className="hero-bottom"><span className="flex items-center gap-2"><Globe2 size={13} /> Delaware roots. Digital possibilities.</span><span className="flex items-center gap-2"><Sparkles size={13} className="text-orange" /> HUMAN CREATIVITY. A NEW INTELLIGENCE.</span></div></div></section>
      <div className="capability-rail"><div className="site-wrap"><span><ConnectionLogo className="rail-connection" /> Creative direction</span><span><MousePointer2 size={17} /> Digital design</span><span><Code2 size={17} /> Web development</span><span className="rail-ai"><Sparkles size={17} /> AI-inspired thinking</span></div></div>
      <section className="section site-wrap" id="services"><div className="section-top"><div><div className="eyebrow mb-4 text-primary">01 / DESIGN MEETS DEVELOPMENT</div><h2 className="section-title">Creative thinking.<br />Technical precision.</h2></div><p className="max-w-80 text-sm leading-7 text-muted-foreground">One creative partner, from the first idea to the final line of code. Built around your brand, your customers, and what comes next.</p></div><div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="flex items-center justify-between"><span className="service-icon"><service.icon size={23} strokeWidth={1.6} /></span><span className="service-index">/ 0{index + 1}</span></div><h3>{service.title}</h3><p>{service.description}</p><div className="mt-7 border-t border-border pt-4 text-[9px] font-medium text-muted-foreground">{service.tags}</div></article>)}</div></section>
      <section className="section work-section" id="work"><div className="site-wrap"><div className="section-top"><div><div className="eyebrow mb-4 text-primary">02 / CREATIVE POSSIBILITIES</div><h2 className="section-title">Different businesses.<br />Same thoughtful approach.</h2></div><p className="max-w-72 text-sm leading-7 text-muted-foreground">A glimpse of what’s possible.<br />Original website concepts, made to inspire.</p></div><div className="work-grid"><Project kind="coastal" onOpen={openInquiry} /><Project kind="cafe" onOpen={openInquiry} /></div></div></section>
      <section className="section site-wrap" id="process"><div className="eyebrow mb-4 text-primary"><ConnectionLogo className="section-connection" /> 03 / HOW WE GET THERE</div><h2 className="section-title">A clear process.<br />A creative partnership.</h2><div className="process-grid connected-process">{[{ title: "First, we listen.", text: "Your story, your customers, your goals. We start with a conversation and get to know what makes your business different." }, { title: "Then, we create.", text: "We bring your vision into focus with thoughtful design and purposeful development. You’re part of the conversation at every step." }, { title: "Next, you shine.", text: "We refine the details, test across devices, and get you ready to launch. A new digital home for your next chapter." }].map((step, i) => <div key={step.title}><div className="process-number">0{i + 1} <ArrowRight className="float-right" size={17} /></div><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></section>
      <section className="about-band" id="about"><div className="site-wrap about-layout"><div><div className="eyebrow mb-5"><Sparkles size={14} className="text-orange" /> 04 / HUMAN FIRST. FUTURE FACING.</div><div className="connected-heading"><ConnectionLogo className="about-connection" /><h2 className="section-title">Creative instinct.<br />Modern intelligence.</h2></div></div><div><p className="text-base leading-8">We’re Delaware Creative—a small design agency bringing brand thinking, digital design, and web development together.</p><p className="mt-4 text-sm leading-7 text-muted-foreground">Inspired by the possibilities of AI. Grounded in the things that make great design human: taste, empathy, and a point of view. Your business stays at the center—not the technology.</p><div className="agency-signature"><PenTool size={16} /><span>Human perspective</span><ConnectionLogo className="signature-connection" /><Braces size={16} /><span>Digital craft</span></div></div></div></section>
      <section className="contact-section" id="contact"><div className="site-wrap"><div className="eyebrow mb-6 text-ink-muted"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</div><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><h2 className="contact-title">Have a good idea?<br /><span className="text-orange">Let’s make it real.</span></h2><p className="mt-6 text-sm text-ink-muted">A distinctive brand. A better website. Design and development, together.</p></div><Button variant="brand" size="cta" className="w-fit" onClick={openInquiry}>Start a conversation <ArrowUpRight /></Button></div></div></section>
    </main><footer className="footer"><div className="site-wrap flex flex-wrap items-center justify-between gap-4"><a href="#home" aria-label="Delaware Creative home"><AgencyLogo compact /></a><span>© 2026 Delaware Creative</span><a href="#home" className="flex items-center gap-2" aria-label="Back to top">Back to top <ArrowUpRight size={13} /></a></div></footer>
    {inquiry && <InquiryDialog onClose={() => setInquiry(false)} />}
  </>;
}
