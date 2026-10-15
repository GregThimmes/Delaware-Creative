import connectionLogo from "@/assets/dc-connection-logo.png";

export function ConnectionLogo({ className = "" }: { className?: string }) {
  return <img src={connectionLogo} className={`connection-logo ${className}`} alt="" aria-hidden="true" width={538} height={580} />;
}

export function AgencyLogo({ compact = false }: { compact?: boolean }) {
  return <span className={`agency-logo ${compact ? "agency-logo-compact" : ""}`}><ConnectionLogo /><span className="agency-logo-name"><span>Delaware</span><span>Creative<span className="logo-period">.</span></span></span></span>;
}