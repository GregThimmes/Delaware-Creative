import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return <Link to="/work/$slug" params={{ slug: project.slug }} className="service-card group block">
    <img src={project.image} alt={`${project.name} website concept`} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
    <div className="mt-5 flex items-start justify-between gap-3"><div><h3>{project.name}</h3><p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{project.industry} / Design concept</p></div><ArrowUpRight className="shrink-0 text-primary" size={18} /></div>
    <p>{project.summary}</p>
  </Link>;
}
