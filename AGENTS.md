<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- The site is the 302 Sitekick marketing site: home is one index route of anchored sections built from src/components/site/sections.tsx, with shared Header/Footer in src/components/site/layout.tsx.
- Copy, pricing, examples, features and FAQs live in src/lib/site-content.ts so messaging and pricing change without touching layout.
- Use global semantic design tokens and the shared Button variants for presentation; this keeps branding consistent.
- Example websites are fictional businesses at /examples/$slug and must be labeled as examples, never as client work.
- CTAs go to /get-started, which only saves a local draft; nothing is sent until a real signup/checkout flow and recipient are supplied.
- Never hide the 12-month commitment or promise guaranteed rankings or unlimited changes.
- No Lovable-hosted AI or API features; the site must run on Vercel as a plain static/SSR app.
