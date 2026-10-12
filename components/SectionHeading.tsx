interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  titleHindi?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  titleHindi,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-14 max-w-3xl ${alignClass}`}>
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <div className="decorative-diamond" />
        <p className="section-label">{label}</p>
        <div className="decorative-diamond" />
      </div>
      <h2
        className={`font-serif text-3xl lg:text-[2.75rem] font-bold leading-tight mb-2 ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {titleHindi && (
        <p className={`font-hindi text-xl lg:text-2xl mb-4 ${light ? "text-gold-300" : "text-gold-500"}`}>
          {titleHindi}
        </p>
      )}
      {subtitle && (
        <p className={`text-base leading-relaxed ${light ? "text-champagne-400/80" : "text-navy-700/70"}`}>
          {subtitle}
        </p>
      )}
      <div className={`gold-line w-24 mt-6 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
