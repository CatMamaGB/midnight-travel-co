import Image from "next/image";
import { SITE_NAME } from "@/lib/site";

interface BrandLogoProps {
  dark?: boolean;
  showTagline?: boolean;
}

export default function BrandLogo({
  dark = false,
  showTagline = true,
}: BrandLogoProps) {
  const titleClassName = dark ? "text-white" : "text-midnight";
  const subtitleClassName = dark ? "text-cloud/80" : "text-charcoal/70";

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo-mark.svg"
        alt={SITE_NAME}
        width={56}
        height={56}
        className="h-14 w-14 shrink-0"
        priority
      />
      <div className="min-w-0">
        <p className={`text-lg font-semibold tracking-tight ${titleClassName}`}>
          {SITE_NAME}
        </p>
        {showTagline && (
          <p className={`text-sm ${subtitleClassName}`}>
            Curated journeys with elevated care
          </p>
        )}
      </div>
    </div>
  );
}
