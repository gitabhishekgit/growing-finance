import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { ChevronRightIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero-gradient hero-noise relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07]">
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          <circle cx="200" cy="200" r="180" stroke="#c9a962" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="140" stroke="#c9a962" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" stroke="#c9a962" strokeWidth="0.5" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="#c9a962" strokeWidth="0.5" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="#c9a962" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-gold-400/10 border border-gold-400/20 rounded-full mb-8 animate-fade-in-up">
              <div className="decorative-diamond" />
              <span className="text-champagne-300 text-xs font-medium tracking-[0.15em] uppercase">
                Est. 2010 · Trusted Nationwide
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-4 animate-fade-in-up animation-delay-100">
              Grow Your Wealth with{" "}
              <span className="gradient-text">Expert Financial</span>{" "}
              Guidance
            </h1>

            <p className="font-hindi text-2xl lg:text-3xl text-gold-300 mb-6 animate-fade-in-up animation-delay-200">
              {siteConfig.taglineHindi}
            </p>

            <p className="text-base sm:text-lg text-champagne-400/75 leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-300">
              {siteConfig.description}. From loans and investments to tax,
              insurance, GST, and IT returns — tailored for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-gold rounded-xl text-sm"
              >
                Get Free Consultation
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-outline-light rounded-xl text-sm font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in-up animation-delay-500">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-navy-800/40 backdrop-blur-sm border border-gold-400/15 rounded-2xl p-8">
                <div className="gold-line mb-8" />
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { label: "Loans", labelHindi: "ऋण", desc: "All types" },
                    { label: "Investments", labelHindi: "निवेश", desc: "Wealth growth" },
                    { label: "Tax & GST", labelHindi: "कर एवं जीएसटी", desc: "Full compliance" },
                    { label: "Insurance", labelHindi: "बीमा", desc: "Protection" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="group p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-gold-400/25 transition-all duration-300"
                    >
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="font-hindi text-gold-300/80 text-sm mt-0.5">{item.labelHindi}</p>
                      <p className="text-champagne-400/50 text-xs mt-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <p className="text-champagne-400/60 text-xs uppercase tracking-wider">Since</p>
                    <p className="font-serif text-2xl text-gold-400 font-bold">2010</p>
                  </div>
                  <div className="text-right">
                    <p className="text-champagne-400/60 text-xs uppercase tracking-wider">Clients</p>
                    <p className="font-serif text-2xl text-gold-400 font-bold">5,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
