import { Link } from "@tanstack/react-router";
import {
  ArrowRight, BadgeCheck, Brush, Car, Check, ClipboardList, Droplets, FileText, Globe, Hammer, Home, LayoutTemplate,
  Leaf, LifeBuoy, Lock, Mail, MousePointer2, PaintRoller, RefreshCw, Rocket, Search, Smartphone,
  Sparkles, Briefcase, AlertTriangle, type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { examples, faqs, features, industries, pricing, steps } from "@/lib/site-content";
import heroDevices from "@/assets/hero-devices.jpg";

export function BrowserBar({ url }: { url: string }) {
  return <div className="flex items-center gap-2 border-b border-border bg-muted px-3 py-2" aria-hidden="true">
    <i className="size-2.5 rounded-full bg-orange" /><i className="size-2.5 rounded-full bg-border" /><i className="size-2.5 rounded-full bg-border" />
    <span className="ml-2 truncate rounded-md bg-background px-3 py-0.5 text-[11px] text-muted-foreground">{url}</span>
  </div>;
}

export function Hero() {
  return <section className="overflow-hidden bg-navy text-primary-foreground">
    <div className="wrap grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
      <div className="fade-up">
        <p className="eyebrow flex items-center gap-2 text-orange"><span className="size-1.5 rounded-full bg-orange" />Proudly serving Delaware businesses</p>
        <h1 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.035em]">Your business deserves a great website. <span className="text-orange">Getting one shouldn’t be complicated.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">We build professional websites for Delaware small businesses without the big upfront cost, complicated process, or expensive agency fees.</p>
        <div className="mt-7 inline-flex items-baseline gap-3 rounded-2xl bg-primary-foreground/8 px-5 py-3 ring-1 ring-primary-foreground/15">
          <span className="font-display text-4xl font-extrabold">$20<span className="text-lg font-bold text-primary-foreground/70">/month</span></span>
          <span className="text-sm font-semibold text-orange">No setup fee.</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="kick" size="cta"><Link to="/get-started">Get My Website <ArrowRight /></Link></Button>
          <Button asChild variant="ghostLight" size="cta"><Link to="/" hash="examples">See Example Websites</Link></Button>
        </div>
        <p className="mt-5 text-sm text-primary-foreground/65">Local service businesses. Simple monthly pricing. One less thing to worry about.</p>
      </div>
      <div className="relative fade-up [animation-delay:.15s]">
        <div className="rounded-[1.75rem] bg-cream p-3 shadow-[var(--shadow-lift)]">
          <img src={heroDevices} alt="Laptop and phone showing a sample website for First State Lawn & Landscape" width={1408} height={1056} fetchPriority="high" className="w-full rounded-[1.25rem]" />
        </div>
        <div aria-hidden="true" className="absolute -bottom-5 -left-3 flex items-center gap-2 rounded-full bg-background px-4 py-2.5 text-sm font-semibold text-navy shadow-[var(--shadow-card)] md:-left-6">
          <MousePointer2 className="size-4 fill-orange text-orange" /> Sample site, built by Sitekick
        </div>
      </div>
    </div>
  </section>;
}

export function ProblemSolution() {
  return <section className="bg-cream py-20 md:py-28">
    <div className="wrap">
      <div className="max-w-3xl">
        <h2 className="section-title">You’re great at what you do. Your website should show it.</h2>
        <p className="mt-6 text-lg leading-relaxed text-slate">Whether you’re mowing lawns, cleaning homes, fixing things, painting houses, or running a local business, customers want to find you online.</p>
        <p className="mt-3 text-lg leading-relaxed text-slate">Building a website can be expensive, confusing, and time-consuming. That’s where we come in.</p>
      </div>
      <div className="mt-12 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
        <figure className="browser-frame opacity-90">
          <BrowserBar url="mybusiness.freesite-builder.biz/~page1" />
          <div className="flex h-64 flex-col items-center justify-center gap-3 bg-muted p-6 text-center">
            <AlertTriangle className="size-8 text-orange" />
            <p className="font-mono text-sm text-muted-foreground line-through">Welcome to my homepage!!</p>
            <p className="font-mono text-xs text-muted-foreground">Last updated: 2014 · Under construction 🚧</p>
            <span className="rounded border border-dashed border-input px-3 py-1 font-mono text-[11px] text-muted-foreground">image not found</span>
          </div>
          <figcaption className="px-5 py-4 text-sm font-semibold text-slate">Before: outdated, hard to find, or no website at all.</figcaption>
        </figure>
        <div className="flex items-center justify-center" aria-hidden="true"><span className="flex size-12 items-center justify-center rounded-full bg-orange text-orange-foreground md:rotate-0"><ArrowRight /></span></div>
        <figure className="browser-frame">
          <BrowserBar url="firststatelawn.com" />
          <img src={examples[0]!.image} alt="A polished sample landscaping website" loading="lazy" width={1280} height={896} className="h-64 w-full object-cover object-top" />
          <figcaption className="px-5 py-4 text-sm font-semibold text-navy">After: a professional site customers trust.</figcaption>
        </figure>
      </div>
      <p className="mt-12 text-center font-display text-2xl font-extrabold md:text-3xl">You handle the business. <span className="text-orange">We’ll handle the website.</span></p>
    </div>
  </section>;
}

export function WebsiteExamples() {
  return <section id="examples" className="bg-background py-20 md:py-28">
    <div className="wrap">
      <p className="eyebrow text-orange">Made for local business</p>
      <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="section-title max-w-2xl">Websites that make your business look the part.</h2>
        <p className="max-w-sm text-slate">Every business is different. Your website should reflect what makes yours special.</p>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {examples.map(ex => <Link key={ex.slug} to="/examples/$slug" params={{ slug: ex.slug }} className="group card-lift flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
          <BrowserBar url={`${ex.slug.replace(/-/g, "")}.com`} />
          <div className="aspect-[4/3] overflow-hidden"><img src={ex.image} alt={`${ex.name} sample website`} loading="lazy" width={1280} height={896} className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" /></div>
          <div className="flex flex-1 flex-col p-6">
            <p className="eyebrow text-slate">{ex.category}</p>
            <h3 className="mt-2 text-xl font-extrabold">{ex.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{ex.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-orange">Explore Example <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
          </div>
        </Link>)}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Example websites for fictional businesses, shown to illustrate what we build.</p>
    </div>
  </section>;
}

const stepIcons: LucideIcon[] = [ClipboardList, LayoutTemplate, Rocket];
export function HowItWorks() {
  return <section id="how-it-works" className="bg-mist py-20 md:py-28">
    <div className="wrap">
      <h2 className="section-title text-center">Three simple steps. <span className="text-orange">That’s it.</span></h2>
      <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
        <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-navy/25 md:block" />
        {steps.map((s, i) => { const Icon = stepIcons[i]!; return <li key={s.title} className="relative rounded-2xl bg-background p-7 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-4"><span className="flex size-14 items-center justify-center rounded-2xl bg-navy text-primary-foreground"><Icon className="size-6" /></span><span className="eyebrow text-orange">Step {i + 1}</span></div>
          <h3 className="mt-5 text-xl font-extrabold">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate">{s.text}</p>
        </li>; })}
      </ol>
      <p className="mt-12 text-center font-display text-xl font-bold">You focus on running your business. We’ll take care of the website.</p>
    </div>
  </section>;
}

const featureIcons: LucideIcon[] = [Brush, FileText, Smartphone, Globe, Sparkles, Mail, Search, Lock, RefreshCw, LifeBuoy];
export function Features() {
  return <section id="included" className="bg-background py-20 md:py-28">
    <div className="wrap">
      <h2 className="section-title max-w-2xl">Everything you need to look professional online.</h2>
      <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {features.map((f, i) => { const Icon = featureIcons[i]!; return <li key={f.title} className="border-t-2 border-navy/10 pt-5">
          <Icon className="size-6 text-orange" strokeWidth={1.75} />
          <h3 className="mt-3 text-base font-bold">{f.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate">{f.text}</p>
        </li>; })}
      </ul>
    </div>
  </section>;
}

export function Pricing() {
  return <section id="pricing" className="bg-navy py-20 text-primary-foreground md:py-28">
    <div className="wrap">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="section-title">A great website shouldn’t cost a fortune.</h2>
        <p className="mt-4 text-lg text-primary-foreground/80">One simple price. Everything you need to get your business online.</p>
      </div>
      <div className="mx-auto mt-12 max-w-lg rounded-3xl bg-cream p-8 text-navy shadow-[var(--shadow-lift)] md:p-10">
        <p className="text-center"><span className="font-display text-6xl font-extrabold">${pricing.monthly}</span><span className="text-xl font-bold text-slate"> / month</span></p>
        <p className="mt-2 text-center font-semibold text-slate">No setup fee. No complicated pricing.</p>
        <ul className="mt-8 grid gap-3">
          {pricing.included.map(item => <li key={item} className="flex items-start gap-3 text-[15px]"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange text-orange-foreground"><Check className="size-3.5" strokeWidth={3} /></span>{item}</li>)}
        </ul>
        <Button asChild variant="kick" size="cta" className="mt-8 w-full"><Link to="/get-started">Get Started for $20/Month <ArrowRight /></Link></Button>
        <p className="mt-5 rounded-xl bg-background px-4 py-3 text-center text-sm font-semibold">{pricing.commitment}</p>
        <p className="mt-3 text-center text-xs text-slate">{pricing.domainNote}</p>
      </div>
    </div>
  </section>;
}

const industryIcons: LucideIcon[] = [Leaf, Sparkles, Hammer, PaintRoller, Droplets, Car, Home, Briefcase];
export function Industries() {
  return <section className="bg-background py-20 md:py-28">
    <div className="wrap">
      <h2 className="section-title max-w-3xl">Built for the people who keep Delaware running.</h2>
      <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
        {industries.map((name, i) => { const Icon = industryIcons[i]!; return <li key={name} className="flex items-center gap-3 rounded-2xl border border-border bg-muted px-4 py-5 font-semibold transition-colors hover:border-orange hover:bg-cream">
          <Icon className="size-5 shrink-0 text-orange" />{name}
        </li>; })}
      </ul>
      <p className="mt-8 text-slate">Don’t see your business? <Link to="/get-started" className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-4 hover:text-orange">Let’s talk.</Link></p>
    </div>
  </section>;
}

export function FAQ() {
  return <section id="faq" className="border-t border-border bg-background py-20 md:py-28">
    <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.6fr]">
      <div><p className="eyebrow text-orange">FAQ</p><h2 className="section-title mt-3">Straight answers.</h2><p className="mt-4 text-slate">No fine print surprises. Here’s how it works.</p></div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => <AccordionItem key={f.q} value={`q${i}`}>
          <AccordionTrigger className="py-5 text-left font-display text-lg font-bold hover:no-underline">{f.q}</AccordionTrigger>
          <AccordionContent className="pb-5 text-[15px] leading-relaxed text-slate">{f.a}</AccordionContent>
        </AccordionItem>)}
      </Accordion>
    </div>
  </section>;
}

export function FinalCTA() {
  return <section className="bg-cream py-20 md:py-28">
    <div className="wrap grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
      <div>
        <h2 className="section-title">Ready to give your business a better online presence?</h2>
        <p className="mt-5 max-w-xl text-lg text-slate">You don’t need an expensive agency or a complicated project. You just need a website that works.</p>
        <Button asChild variant="kick" size="cta" className="mt-8"><Link to="/get-started">Get My Website for $20/Month <ArrowRight /></Link></Button>
        <p className="mt-6 text-sm font-semibold text-slate">302 Sitekick. Your Delaware website, made simple.</p>
      </div>
      <div aria-hidden="true" className="relative mx-auto w-full max-w-sm">
        <div className="browser-frame rotate-2">
          <BrowserBar url="yourbusiness.com" />
          <div className="space-y-3 p-6"><div className="h-4 w-2/3 rounded bg-navy" /><div className="h-3 w-full rounded bg-border" /><div className="h-3 w-5/6 rounded bg-border" /><div className="mt-5 flex items-center gap-1 text-sm font-bold text-navy">Your business, online<span className="caret text-orange">|</span></div><div className="h-9 w-32 rounded-full bg-orange" /></div>
        </div>
        <MousePointer2 className="absolute -bottom-4 right-10 size-10 fill-orange text-navy" strokeWidth={1.5} />
        <BadgeCheck className="absolute -left-4 -top-4 size-12 fill-background text-orange" />
      </div>
    </div>
  </section>;
}
