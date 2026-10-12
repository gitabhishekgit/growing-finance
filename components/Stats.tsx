import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="bg-navy-900 py-14 relative">
      <div className="gold-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="text-3xl lg:text-4xl font-serif font-bold stat-value mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-champagne-400/70 font-medium">{stat.label}</p>
              <p className="font-hindi text-xs text-gold-400/50 mt-0.5">{stat.labelHindi}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="gold-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
