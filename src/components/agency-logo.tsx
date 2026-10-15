import connectionLogo from "@/assets/dc-connection-logo.png";
import delawareLettering from "@/assets/logo-delaware.png.asset.json";
import creativeLettering from "@/assets/logo-creative.png.asset.json";

export function ConnectionLogo({ className = "" }: { className?: string }) {
  return <img src={connectionLogo} className={`connection-logo ${className}`} alt="" aria-hidden="true" width={538} height={580} />;
}

export function AgencyLogo({ compact = false }: { compact?: boolean }) {
  return <span className={`agency-logo ${compact ? "agency-logo-compact" : ""}`} role="img" aria-label="Delaware Creative"><ConnectionLogo /><span className="agency-logo-name" aria-hidden="true"><img src={delawareLettering.url} alt="" className="logo-delaware" /><img src={creativeLettering.url} alt="" className="logo-creative" /></span></span>;
}