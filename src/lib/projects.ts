import house from "@/assets/coastal-house.jpg";
import cafe from "@/assets/cafe.jpg";
import workspace from "@/assets/web-design-workspace.jpg";
import type { Service } from "@/lib/services";

// SAMPLE CONTENT: these are design concepts, not completed client work.
// Replace each entry with real project details (client, summary, results, images) when available.
export type Project = {
  slug: string;
  name: string;
  industry: string;
  image: string;
  summary: string;
  services: Service["slug"][];
  challenge: string;
  approach: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "shore-and-stone",
    name: "Shore & Stone",
    industry: "Real estate",
    image: house,
    summary: "A calm, image-led website concept for a coastal home builder.",
    services: ["brand-creative-direction", "website-digital-design"],
    challenge: "Sample brief: a coastal builder needs a site that feels as considered as its homes and turns browsers into serious buyers.",
    approach: ["Natural, sand-and-sea palette with refined serif typography", "Large photography with simple, guided home listings", "A clear “Get in touch” journey on every page"],
    outcome: "Concept goal: more qualified inquiries from visitors who already love the brand. Replace with real results.",
  },
  {
    slug: "daybreak-cafe",
    name: "Daybreak Café",
    industry: "Food & hospitality",
    image: cafe,
    summary: "A warm, mobile-first website concept for a neighborhood café.",
    services: ["website-digital-design", "web-development"],
    challenge: "Sample brief: a busy café needs customers to find the menu, hours, and location in seconds on their phones.",
    approach: ["Mobile-first menu that's easy to scan", "Fast-loading pages built for on-the-go visits", "Friendly copy and photography with personality"],
    outcome: "Concept goal: more foot traffic and fewer “are you open?” calls. Replace with real results.",
  },
  {
    slug: "harbor-studio",
    name: "Harbor Studio",
    industry: "Professional services",
    image: workspace,
    summary: "A full identity and website concept for a growing consultancy.",
    services: ["brand-creative-direction", "website-digital-design", "web-development"],
    challenge: "Sample brief: a consultancy has outgrown its DIY website and wants a brand that signals expertise.",
    approach: ["New logo, color, and type system", "Service pages structured around client questions", "Accessible, fast development with an easy-to-update setup"],
    outcome: "Concept goal: a credible first impression that wins bigger clients. Replace with real results.",
  },
];

export const getProject = (slug: string) => projects.find(p => p.slug === slug);
export const projectsForService = (slug: Service["slug"]) => projects.filter(p => p.services.includes(slug));
