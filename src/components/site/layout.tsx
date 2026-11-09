import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, MousePointer2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, navLinks } from "@/lib/site-content";

export function Logo({ light = false }: { light?: boolean }) {
  return <span className="inline-flex items-center gap-2.5" aria-label={brand.name} role="img">
    <span aria-hidden="true" className={`relative inline-flex h-9 items-center rounded-lg px-2 font-display text-xl font-extrabold tracking-tight ${light ? "bg-primary-foreground text-navy" : "bg-navy text-primary-foreground"}`}>
      302<MousePointer2 className="absolute -right-2 -bottom-2 size-4 fill-orange text-orange" strokeWidth={2.5} />
    </span>
    <span aria-hidden="true" className={`font-display text-lg font-extrabold tracking-[0.12em] ${light ? "text-primary-foreground" : "text-foreground"}`}>SITEKICK</span>
  </span>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
    <div className="wrap flex h-[72px] items-center justify-between gap-6">
      <Link to="/" aria-label="302 Sitekick home" onClick={() => setOpen(false)}><Logo /></Link>
      <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
        {navLinks.map(l => <Link key={l.id} to="/" hash={l.id} className="text-sm font-semibold text-slate transition-colors hover:text-orange">{l.label}</Link>)}
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild variant="kick" size="nav" className="hidden sm:inline-flex"><Link to="/get-started">Get My Website</Link></Button>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open && <nav aria-label="Mobile" className="wrap flex flex-col gap-1 border-t border-border pb-5 pt-3 lg:hidden">
      {navLinks.map(l => <Link key={l.id} to="/" hash={l.id} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 font-semibold text-foreground hover:bg-muted">{l.label}</Link>)}
      <Button asChild variant="kick" size="cta" className="mt-2"><Link to="/get-started" onClick={() => setOpen(false)}>Get My Website</Link></Button>
    </nav>}
  </header>;
}

export function Footer() {
  return <footer className="ai-grid bg-navy-deep text-primary-foreground">
    <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><Logo light /><p className="mt-4 text-sm text-primary-foreground/75">{brand.tagline}</p><p className="mt-6 font-display text-xl font-bold">{brand.footerMessage}</p></div>
      <nav aria-label="Footer" className="flex flex-col gap-2.5 text-sm">
        <span className="eyebrow mb-1 text-orange">Explore</span>
        {navLinks.map(l => <Link key={l.id} to="/" hash={l.id} className="text-primary-foreground/80 hover:text-primary-foreground">{l.label}</Link>)}
      </nav>
      <nav aria-label="Company" className="flex flex-col gap-2.5 text-sm">
        <span className="eyebrow mb-1 text-orange">Company</span>
        <Link to="/" hash="pricing" className="text-primary-foreground/80 hover:text-primary-foreground">Pricing</Link>
        <Link to="/get-started" className="text-primary-foreground/80 hover:text-primary-foreground">Contact</Link>
        <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground">Terms of Service</Link>
        <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground">Privacy Policy</Link>
      </nav>
    </div>
    <div className="border-t border-primary-foreground/10"><p className="wrap py-5 text-xs text-primary-foreground/60">© 2026 302 Sitekick. All rights reserved.</p></div>
  </footer>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}
