import { siteConfig } from "@/lib/data";

interface BrandNameProps {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  showDomain?: boolean;
}

export default function BrandName({
  size = "md",
  variant = "dark",
  showDomain = false,
}: BrandNameProps) {
  const sizes = {
    sm: {
      english: "text-base",
      hindi: "text-sm",
      domain: "text-[10px]",
    },
    md: {
      english: "text-lg",
      hindi: "text-base",
      domain: "text-xs",
    },
    lg: {
      english: "text-2xl sm:text-3xl",
      hindi: "text-xl sm:text-2xl",
      domain: "text-xs",
    },
  };

  const colors = {
    dark: {
      english: "text-navy-900",
      hindi: "text-gold-500",
      domain: "text-navy-700/60",
    },
    light: {
      english: "text-white",
      hindi: "text-gold-300",
      domain: "text-champagne-400/70",
    },
  };

  const s = sizes[size];
  const c = colors[variant];

  return (
    <div>
      <div className="flex items-baseline gap-2.5 flex-wrap">
        <span className={`font-serif font-bold ${s.english} ${c.english} leading-tight tracking-tight`}>
          {siteConfig.name}
        </span>
        <span className={`font-hindi ${s.hindi} ${c.hindi} leading-tight`}>
          {siteConfig.nameHindi}
        </span>
      </div>
      {showDomain && (
        <span className={`${s.domain} ${c.domain} font-medium tracking-wider uppercase mt-0.5 block`}>
          {siteConfig.domain}
        </span>
      )}
    </div>
  );
}
