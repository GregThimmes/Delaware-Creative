export type Service = {
  slug: "brand-creative-direction" | "website-digital-design" | "web-development";
  title: string;
  tagline: string;
  intro: string;
  deliverables: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  fit: string[];
  inquiryOption: string;
};

export const services: Service[] = [
  {
    slug: "brand-creative-direction",
    title: "Brand & creative direction",
    tagline: "A clear identity. A distinctive point of view.",
    intro: "We shape the visual language that makes your business recognizable — from logo and color to voice and art direction — so every touchpoint feels unmistakably yours.",
    deliverables: [
      { title: "Brand discovery", text: "A focused conversation about your story, audience, and what sets you apart." },
      { title: "Visual identity", text: "Logo, color palette, typography, and supporting graphic elements." },
      { title: "Brand guidelines", text: "A simple, usable guide so your brand stays consistent as you grow." },
    ],
    steps: [
      { title: "Listen", text: "We learn your goals, customers, and competitors." },
      { title: "Explore", text: "We present creative directions and refine one together." },
      { title: "Deliver", text: "You receive final files and guidelines, ready to use everywhere." },
    ],
    fit: ["New businesses launching their first identity", "Established businesses ready for a refresh", "Teams who want a brand that matches their ambition"],
    inquiryOption: "Brand & creative direction",
  },
  {
    slug: "website-digital-design",
    title: "Website & digital design",
    tagline: "Where personality meets purpose.",
    intro: "Custom website designs built around your customers — thoughtful layouts, intuitive journeys, and details that make your brand feel like no one else.",
    deliverables: [
      { title: "Site structure", text: "A clear sitemap and user journeys that guide visitors to act." },
      { title: "Custom page designs", text: "Mobile-first designs for every key page, made for your brand." },
      { title: "Interactive prototype", text: "Click through your new site before a line of code is written." },
    ],
    steps: [
      { title: "Plan", text: "We map your content, pages, and goals." },
      { title: "Design", text: "We design key pages and refine them with your feedback." },
      { title: "Handoff", text: "Approved designs move seamlessly into development." },
    ],
    fit: ["Businesses with an outdated or generic website", "New ventures needing a strong online first impression", "Anyone who wants more inquiries from their site"],
    inquiryOption: "A new website",
  },
  {
    slug: "web-development",
    title: "Web development",
    tagline: "Design brought to life in code.",
    intro: "Fast, accessible, responsive websites — carefully built to work beautifully on every device and grow with your business.",
    deliverables: [
      { title: "Responsive build", text: "A polished site that works on phones, tablets, and desktops." },
      { title: "Performance & accessibility", text: "Quick load times and inclusive, standards-based code." },
      { title: "Launch support", text: "Testing, go-live, and guidance so you can update with confidence." },
    ],
    steps: [
      { title: "Build", text: "We develop your site from approved designs." },
      { title: "Test", text: "We check every page across devices and browsers." },
      { title: "Launch", text: "We go live together and make sure everything runs smoothly." },
    ],
    fit: ["Businesses with designs ready to build", "Sites that are slow or hard to update", "Projects that need forms, menus, or bookings"],
    inquiryOption: "Web development",
  },
];

export const getService = (slug: string) => services.find(s => s.slug === slug);
