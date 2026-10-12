import Link from "next/link";
import { services } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { ServiceIcon, ChevronRightIcon, CheckIcon } from "./Icons";

interface ServicesGridProps {
  showAll?: boolean;
  limit?: number;
}

export default function ServicesGrid({ showAll = false, limit = 6 }: ServicesGridProps) {
  const displayed = showAll ? services : services.slice(0, limit);

  return (
    <section className={showAll ? "" : "py-24 bg-cream-100"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showAll && (
          <SectionHeading
            label="What We Offer"
            title="Comprehensive Financial Services"
            titleHindi="संपूर्ण वित्तीय सेवाएं"
            subtitle="Whether you need a loan, want to grow your investments, or require tax and compliance support — we have you covered."
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayed.map((service) => (
            <div
              key={service.id}
              id={showAll ? service.id : undefined}
              className="card-premium rounded-2xl p-7 lg:p-8 scroll-mt-24 group"
            >
              <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-400 group-hover:text-navy-900 transition-all duration-300">
                <ServiceIcon type={service.icon} />
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="font-serif text-xl font-bold text-navy-900">{service.title}</h3>
                <span className="font-hindi text-gold-500 text-base">{service.titleHindi}</span>
              </div>
              <p className="text-gold-600 text-xs font-semibold uppercase tracking-wider mb-3">
                {service.subtitle}
              </p>
              <p className="text-navy-700/65 text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2.5 mb-7">
                {service.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-navy-700/70">
                    <CheckIcon className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-gold-600 font-semibold text-sm hover:text-gold-500 transition-colors group/link"
              >
                Enquire Now
                <ChevronRightIcon className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
