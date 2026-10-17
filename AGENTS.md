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
- The home page is one index route with anchored sections; each service has its own page at /services/$slug driven by src/lib/services.ts so service cards link to real follow-through pages.
- Use global semantic design tokens and the shared Button variants for presentation; this keeps branding consistent.
- Keep decorative agency annotations browser-safe, non-interactive, and hidden from assistive technology; they enhance the imagery without implying live AI functionality.
- Render logos through AgencyLogo and ConnectionLogo; shared symbol and transparent original wordmark assets preserve exact brand lettering consistently.
- Keep the wordmark on one horizontal line (symbol, then "Delaware" and "Creative." side by side on a shared baseline); scale the whole lockup with the single --logo-d variable rather than per-part sizes.
- Label sample project designs as concepts, and do not claim them as completed client work.
- Contact inquiry drafts are client-side and not sent or stored; a real recipient must be supplied before enabling delivery.

- Portfolio lives at /work and /work/$slug, driven by src/lib/projects.ts; entries are labeled sample concepts until the owner supplies real project details.
- No Lovable-hosted AI or API features; the site must run on Vercel as a plain static/SSR app.
