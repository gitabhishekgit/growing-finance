import { partners } from "@/lib/data";

export default function Partners() {
  return (
    <section className="py-14 bg-cream-50 border-y border-gold-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="gold-line flex-1 max-w-[80px]" />
          <p className="section-label whitespace-nowrap">Partner Institutions</p>
          <div className="gold-line flex-1 max-w-[80px]" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-5">
          {partners.map((partner) => (
            <span
              key={partner}
              className="font-serif text-navy-700/30 font-semibold text-lg hover:text-gold-500 transition-colors duration-300 cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
