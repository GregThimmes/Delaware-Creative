import { useEffect, useRef, useState, type FormEvent } from "react";
import { Check, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InquiryDialog({ onClose, defaultService }: { onClose: () => void; defaultService?: string | undefined }) {
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
      <label className="field">What do you have in mind?<select name="service" defaultValue={defaultService}><option>A new website</option><option>A website redesign</option><option>Web development</option><option>Brand & creative direction</option><option>Something else</option></select></label>
      <label className="field">A little about your project<textarea name="details" rows={3} required placeholder="Tell us about your business and what you’d love to create." /></label>
      <Button variant="studio" size="cta" type="submit" className="mt-6 w-full">{saved ? <Check /> : <Download />}{saved ? "Draft saved — download again" : "Save project inquiry"}</Button>
      {saved && <p role="status" className="mt-3 text-center text-xs text-muted-foreground">Your inquiry draft has been downloaded. It has not been sent.</p>}
    </form>
  </div></div>;
}
