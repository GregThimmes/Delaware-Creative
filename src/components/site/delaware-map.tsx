import { useId } from "react";
const outline = "M28 2 C38 0 46 6 44 16 L52 40 L60 62 L66 84 L76 108 L84 128 L92 150 L100 176 L100 198 L18 198 L18 60 L22 20 Z";

/** Decorative Delaware outline split into its three counties. */
export function DelawareMap({ className = "", active }: { className?: string; active?: number }) {
  const id = useId().replace(/:/g, "");
  const fill = (i: number) => (active === undefined ? "currentColor" : active === i ? "var(--orange)" : "currentColor");
  return <svg viewBox="0 0 104 200" className={className} aria-hidden="true" fill="none">
    <defs><clipPath id={id}><path d={outline} /></clipPath></defs>
    <g clipPath={`url(#${id})`}>
      <rect x="0" y="0" width="104" height="62" fill={fill(0)} opacity={active === 0 ? 1 : 0.18} />
      <rect x="0" y="62" width="104" height="58" fill={fill(1)} opacity={active === 1 ? 1 : 0.12} />
      <rect x="0" y="120" width="104" height="80" fill={fill(2)} opacity={active === 2 ? 1 : 0.07} />
    </g>
    <path d={outline} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M18 62 H60 M18 120 H81" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
  </svg>;
}
