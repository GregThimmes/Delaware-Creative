import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AgencyLogo } from "@/components/agency-logo";
import { InquiryDialog } from "@/components/inquiry-dialog";

export function PageShell({ children, defaultService }: { children: (openInquiry: () => void) => ReactNode; defaultService?: string | undefined }) {
  const [inquiry, setInquiry] = useState(false);
  const open = () => setInquiry(true);
  return <>
    <header className="site-header"><div className="site-wrap header-layout"><Link className="header-logo-link" to="/" aria-label="Delaware Creative home"><AgencyLogo /></Link><div className="flex items-center gap-6"><Link to="/work" className="nav-link hidden md:inline">Portfolio</Link><Button variant="brand" size="cta" onClick={open}>Let’s talk <ArrowUpRight /></Button></div></div></header>
    <main>{children(open)}</main>
    <footer className="footer"><div className="site-wrap flex flex-wrap items-center justify-between gap-4"><Link to="/" aria-label="Delaware Creative home"><AgencyLogo compact /></Link><Link to="/work">Portfolio</Link><span>© 2026 Delaware Creative</span></div></footer>
    {inquiry && <InquiryDialog defaultService={defaultService} onClose={() => setInquiry(false)} />}
  </>;
}
