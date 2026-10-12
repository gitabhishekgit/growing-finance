"use client";

import { useState } from "react";

const serviceOptions = [
  "Loans",
  "Investments",
  "Tax Planning",
  "Insurance",
  "GST Services",
  "IT Returns",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-gold-400/5 border border-gold-400/20 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-gold-400/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">Thank You!</h3>
        <p className="font-hindi text-gold-500 mb-2">धन्यवाद!</p>
        <p className="text-navy-700/60 text-sm">
          We&apos;ve received your enquiry. Our team will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-navy-700/70 uppercase tracking-wider mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-gold-400/15 bg-cream-50 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all text-sm"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-navy-700/70 uppercase tracking-wider mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-gold-400/15 bg-cream-50 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all text-sm"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-navy-700/70 uppercase tracking-wider mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3.5 rounded-xl border border-gold-400/15 bg-cream-50 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all text-sm"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-semibold text-navy-700/70 uppercase tracking-wider mb-2">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-3.5 rounded-xl border border-gold-400/15 bg-cream-50 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all text-sm"
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-navy-700/70 uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3.5 rounded-xl border border-gold-400/15 bg-cream-50 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all resize-none text-sm"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 btn-gold rounded-xl text-sm"
      >
        Submit Enquiry
      </button>

      <p className="text-[11px] text-navy-700/40 text-center">
        By submitting, you agree to our privacy policy. We never share your data with third parties.
      </p>
    </form>
  );
}
