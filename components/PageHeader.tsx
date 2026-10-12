interface PageHeaderProps {
  title: string;
  subtitle?: string;
  titleHindi?: string;
}

export default function PageHeader({ title, subtitle, titleHindi }: PageHeaderProps) {
  return (
    <section className="hero-gradient hero-noise py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="decorative-diamond" />
          <div className="gold-line w-16" />
          <div className="decorative-diamond" />
        </div>
        <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-3">{title}</h1>
        {titleHindi && (
          <p className="font-hindi text-xl lg:text-2xl text-gold-300 mb-4">{titleHindi}</p>
        )}
        {subtitle && (
          <p className="text-champagne-400/70 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
