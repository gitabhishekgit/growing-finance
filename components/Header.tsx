"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, contactInfo } from "@/lib/data";
import BrandName from "./BrandName";
import { LogoIcon, PhoneIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-xl border-b border-gold-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem] lg:h-20">
          <Link href="/" className="flex items-center gap-3.5 group">
            <LogoIcon className="w-11 h-11 group-hover:scale-105 transition-transform duration-300" />
            <BrandName size="md" showDomain />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "text-gold-600 bg-gold-400/10"
                    : "text-navy-700/80 hover:text-navy-900 hover:bg-cream-200/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-navy-700/70 hover:text-gold-600 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              {contactInfo.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 btn-gold text-sm rounded-lg"
            >
              Free Consultation
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-navy-700 hover:bg-cream-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gold-400/10 bg-cream-50 animate-fade-in">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                  pathname === link.href
                    ? "text-gold-600 bg-gold-400/10"
                    : "text-navy-700 hover:bg-cream-200"
                }`}
              >
                {link.label}
                <span className="font-hindi text-gold-500/70 ml-2 text-xs">{link.labelHindi}</span>
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 btn-gold text-sm rounded-lg text-center"
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
