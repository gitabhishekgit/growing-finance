import Link from "next/link";
import { contactInfo, navLinks, services, siteConfig, getFullAddress } from "@/lib/data";
import BrandName from "./BrandName";
import { LogoIcon, PhoneIcon, MailIcon, MapPinIcon } from "./Icons";

export default function Footer() {
  const fullAddress = getFullAddress();

  return (
    <footer className="bg-navy-950 text-champagne-400/70 relative">
      <div className="gold-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3.5 mb-6">
              <LogoIcon className="w-11 h-11" />
              <BrandName size="md" variant="light" />
            </Link>
            <p className="text-sm leading-relaxed mb-3 text-champagne-400/50">
              {siteConfig.description}
            </p>
            <p className="font-hindi text-sm text-gold-400/60 leading-relaxed mb-4">
              {siteConfig.descriptionHindi}
            </p>
            <p className="text-xs text-champagne-400/30 font-mono tracking-wide">
              GSTIN: {contactInfo.gst}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold-400 transition-colors inline-flex items-center gap-2"
                  >
                    {link.label}
                    <span className="font-hindi text-xs text-gold-400/40">{link.labelHindi}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-wide">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm hover:text-gold-400 transition-colors inline-flex items-center gap-2"
                  >
                    {service.title}
                    <span className="font-hindi text-xs text-gold-400/40">{service.titleHindi}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="flex items-start gap-3 text-sm hover:text-gold-400 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 mt-0.5 shrink-0 text-gold-500" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-sm hover:text-gold-400 transition-colors"
                >
                  <MailIcon className="w-4 h-4 mt-0.5 shrink-0 text-gold-500" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0 text-gold-500" />
                <span>{fullAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-champagne-400/30">
            &copy; {new Date().getFullYear()} Growing Finance · {siteConfig.nameHindi}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <p className="mt-6 text-[11px] text-champagne-400/20 text-center max-w-3xl mx-auto leading-relaxed">
          Disclaimer: Growing Finance is a financial services advisory firm. Loan approvals
          are subject to lender terms and eligibility. Investment products are subject to
          market risks. Please read all scheme-related documents carefully before investing.
        </p>
      </div>
    </footer>
  );
}
