import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/layout";
import { industries, pricing } from "@/lib/site-content";

export const Route = createFileRoute("/get-started")({
  head: () => ({ meta: [
    { title: "Get My Website | 302 Sitekick" },
    { name: "description", content: "Tell 302 Sitekick about your Delaware business and get a professional website for $20/month." },
    { property: "og:title", content: "Get My Website | 302 Sitekick" },
    { property: "og:description", content: "Start your $20/month Delaware business website." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: GetStarted,
});

const field = "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-[15px] outline-none focus:border-orange focus:ring-2 focus:ring-orange/30";

function GetStarted() {
  const [saved, setSaved] = useState(false);
  function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = `302 Sitekick — Website request\n\nName: ${d.get("name")}\nBusiness: ${d.get("business")}\nType: ${d.get("type")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\n\n${d.get("details")}`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const a = document.createElement("a"); a.href = url; a.download = "302-sitekick-website-request.txt"; a.click(); URL.revokeObjectURL(url);
    setSaved(true);
  }
  return <SiteShell>
    <section className="bg-cream py-16 md:py-24"><div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <p className="eyebrow text-buff-foreground">Step 1</p>
        <h1 className="section-title mt-3 text-buff-foreground">Tell us about your business.</h1>
        <p className="mt-4 text-lg text-buff-foreground/75">Share the basics and we’ll take it from there. ${pricing.monthly}/month, no setup fee.</p>
        <p className="mt-6 text-sm text-buff-foreground/75">{pricing.commitment}</p>
      </div>
      <form onSubmit={save} className="rounded-3xl bg-background p-6 shadow-[var(--shadow-card)] md:p-8">
        <p className="mb-5 rounded-xl bg-mist px-4 py-3 text-sm">Online sign-up isn’t live yet. This saves your details as a file on your device — nothing is sent.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold">Your name<input name="name" required autoComplete="name" className={field} /></label>
          <label className="text-sm font-semibold">Business name<input name="business" required autoComplete="organization" className={field} /></label>
          <label className="text-sm font-semibold">Email<input name="email" type="email" required autoComplete="email" className={field} /></label>
          <label className="text-sm font-semibold">Phone<input name="phone" type="tel" autoComplete="tel" className={field} /></label>
        </div>
        <label className="mt-4 block text-sm font-semibold">Type of business<select name="type" className={field}>{industries.map(i => <option key={i}>{i}</option>)}<option>Something else</option></select></label>
        <label className="mt-4 block text-sm font-semibold">Your services and what makes you different<textarea name="details" rows={4} required className={field} /></label>
        <Button type="submit" variant="kick" size="cta" className="mt-6 w-full">{saved ? <Check /> : <Download />}{saved ? "Saved — download again" : "Save my details"}</Button>
        {saved && <p role="status" className="mt-3 text-center text-sm text-slate">Your details were saved to your device. They have not been sent.</p>}
      </form>
    </div></section>
  </SiteShell>;
}
