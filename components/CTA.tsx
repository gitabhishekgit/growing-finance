import Link from "next/link";
import { contactInfo, siteConfig } from "@/lib/data";
import { PhoneIcon } from "./Icons";

export default function CTA() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden hero-noise">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="decorative-diamond" />
          <p className="section-label">Get Started Today</p>
          <div className="decorative-diamond" />
        </div>
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-3">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="font-hindi text-xl text-gold-300 mb-2">
          अपने वित्त पर नियंत्रण रखने के लिए तैयार हैं?
        </p>
        <p className="text-champagne-400/70 text-base mb-10 max-w-2xl mx-auto leading-relaxed">
          Book a free consultation with our financial experts today. No
          obligations — just honest advice tailored to your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 btn-gold rounded-xl text-sm"
          >
            Schedule Free Consultation
          </Link>
          <a
            href={`tel:${contactInfo.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-outline-light rounded-xl text-sm font-semibold"
          >
            <PhoneIcon className="w-4 h-4" />
            Call {contactInfo.phone}
          </a>
        </div>
        <p className="mt-8 text-xs text-champagne-400/40 tracking-wider uppercase">
          {siteConfig.domain}
        </p>
      </div>
    </section>
  );
}
