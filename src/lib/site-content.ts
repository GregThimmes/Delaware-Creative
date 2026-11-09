import lawn from "@/assets/example-lawn.jpg";
import cleaning from "@/assets/example-cleaning.jpg";
import handyman from "@/assets/example-handyman.jpg";

export const brand = {
  name: "302 Sitekick",
  tagline: "Your Delaware website, made simple.",
  footerMessage: "Local websites for local businesses.",
};

export const pricing = {
  monthly: 20,
  termMonths: 12,
  get minimumTotal() { return this.monthly * this.termMonths; },
  commitment: "12-month initial commitment. $240 total minimum subscription commitment, billed monthly.",
  domainNote: "Domain registration and renewal fees, if applicable, are paid separately.",
  included: [
    "Website design and setup",
    "Up to five standard pages",
    "Mobile-friendly layout",
    "Website hosting and SSL",
    "Basic SEO setup",
    "Contact form",
    "One small content update per quarter",
    "Basic technical support",
  ],
};

export const navLinks = [
  { label: "How It Works", id: "how-it-works" },
  { label: "Examples", id: "examples" },
  { label: "What’s Included", id: "included" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
] as const;

export type Example = {
  slug: "first-state-lawn" | "coastal-clean-home" | "delaware-homeworks";
  name: string;
  category: string;
  description: string;
  image: string;
  pages: string[];
  highlights: string[];
};

export const examples: Example[] = [
  {
    slug: "first-state-lawn", name: "First State Lawn & Landscape", category: "Landscaping / Lawn Care", image: lawn,
    description: "A green-and-navy site with bold outdoor photography, clear services, service areas, and a quote button on every page.",
    pages: ["Home", "Services", "Service Area", "About", "Contact"],
    highlights: ["Service area strip for New Castle, Kent & Sussex", "Free-quote button in the header", "Seasonal services front and center"],
  },
  {
    slug: "coastal-clean-home", name: "Coastal Clean Home", category: "Residential Cleaning", image: cleaning,
    description: "Bright, welcoming, and calm — soft blue and cream with simple service cards and an easy quote request.",
    pages: ["Home", "Services", "About", "Reviews", "Contact"],
    highlights: ["Service cards for every kind of clean", "Trust details right under the headline", "Quote request that takes a minute"],
  },
  {
    slug: "delaware-homeworks", name: "Delaware HomeWorks", category: "Handyman / Home Services", image: handyman,
    description: "Navy, orange, and charcoal with trade-strong photography, a clear service list, and request-a-quote throughout.",
    pages: ["Home", "Services", "Our Work", "About", "Contact"],
    highlights: ["Services at a glance", "Phone number always one tap away", "Request-a-quote in the header"],
  },
];

export const getExample = (slug: string) => examples.find(e => e.slug === slug);

export const steps = [
  { title: "Tell us about your business", text: "Share your business name, services, contact details, and a little about what makes you different." },
  { title: "We build your website", text: "We create a professional website designed around your business and send you a preview to review." },
  { title: "Go live", text: "Once you approve it, we’ll help connect your domain and publish your website." },
];

export const features = [
  { title: "Professional website design", text: "Designed around your business, not a cookie-cutter template." },
  { title: "Up to five standard pages", text: "Home, services, about, contact — whatever you need." },
  { title: "Mobile-friendly design", text: "Looks great on phones, where most customers find you." },
  { title: "Your own business domain", text: "A web address with your name on it." },
  { title: "AI-assisted website copy", text: "Help putting your business into clear, friendly words." },
  { title: "Contact form", text: "Let customers reach you straight from your site." },
  { title: "Basic SEO setup", text: "Page titles, descriptions, and the basics search engines look for." },
  { title: "Secure hosting and SSL", text: "Fast, secure hosting with the padlock in the browser." },
  { title: "Quarterly content update", text: "One small content update per quarter." },
  { title: "Basic technical support", text: "Questions? A real local person will help." },
];

export const industries = [
  "Landscaping and lawn care", "Cleaning services", "Handyman and home repair", "Painting contractors",
  "Pressure washing", "Auto detailing", "Home improvement", "Independent professionals",
];

export const faqs = [
  { q: "Do I have to pay a setup fee?", a: "No. There’s no setup fee. Your website design and setup are included in the $20/month subscription." },
  { q: "Is there a contract?", a: "Yes — a 12-month initial commitment, billed monthly at $20/month ($240 total minimum). We keep it upfront so there are no surprises." },
  { q: "Do I own my domain?", a: "Yes. Your domain is registered in your business’s name. Domain registration and renewal fees, if applicable, are paid separately." },
  { q: "Can I make changes to my website?", a: "Your plan includes one small content update per quarter, like updating hours, a service, or a photo. Bigger changes can be discussed separately." },
  { q: "Will my website show up on Google?", a: "We handle basic SEO setup so search engines can find and understand your site. No one can honestly guarantee specific rankings, and we won’t pretend to." },
  { q: "Can I cancel?", a: "After your 12-month initial commitment, you can cancel. We’ll walk you through what happens to your site and domain." },
  { q: "What’s included in the $20/month?", a: "Website design and setup, up to five standard pages, mobile-friendly layout, hosting and SSL, basic SEO setup, a contact form, one small content update per quarter, and basic technical support." },
];

import newCastle from "@/assets/county-new-castle.jpg";
import kent from "@/assets/county-kent.jpg";
import sussex from "@/assets/county-sussex.jpg";

export const counties = [
  { name: "New Castle County", places: "Wilmington · Newark · Middletown", text: "From the Riverfront to Main Street, businesses up north get a website as sharp as the city.", image: newCastle, alt: "Wilmington skyline over the Christina Riverfront at sunset" },
  { name: "Kent County", places: "Dover · Smyrna · Milford", text: "Farm stands, trades, and family shops in the heart of the First State, found online.", image: kent, alt: "Historic brick hall with a white clock tower on a green in Dover" },
  { name: "Sussex County", places: "Rehoboth · Lewes · Georgetown", text: "Beach-town businesses and year-round locals, ready for every visitor searching nearby.", image: sussex, alt: "Rehoboth Beach boardwalk, dunes, and a lighthouse at golden hour" },
];
