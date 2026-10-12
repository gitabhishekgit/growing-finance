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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError(
        "Email service is not configured yet. Please use WhatsApp or call us directly."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Enquiry — Growing Finance Website",
          from_name: formData.get("name"),
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email") || "Not provided",
          service: formData.get("service"),
          message: formData.get("message") || "No message",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(result.message || "Something went wrong. Please try WhatsApp or call us.");
      }
    } catch {
      setError("Network error. Please try again or contact us on WhatsApp.");
    } finally {
      setLoading(false);
    }
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
          Your enquiry has been sent. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

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
            disabled={loading}
            className="w-full px-4 py-3.5 rounded-xl border border-gold-400/15 bg-cream-50 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all text-sm disabled:opacity-60"
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
            disabled={loading}
            className="w-full px-4 py-3.5 rounded-xl border border-gold-400/15 bg-cream-50 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all text-sm disabled:opacity-60"
            placeholder="+91 83688 56402"
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
          disabled={loading}
          className="w-full px-4 py-3.5 rounded-xl border border-gold-400/15 bg-cream-50 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all text-sm disabled:opacity-60"
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
          disabled={loading}
          className="w-full px-4 py-3.5 rounded-xl border border-gold-400/15 bg-cream-50 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all text-sm disabled:opacity-60"
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
          disabled={loading}
          className="w-full px-4 py-3.5 rounded-xl border border-gold-400/15 bg-cream-50 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all resize-none text-sm disabled:opacity-60"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 btn-gold rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Submit Enquiry"}
      </button>

      <p className="text-[11px] text-navy-700/40 text-center">
        By submitting, you agree to our privacy policy. We never share your data with third parties.
      </p>
    </form>
  );
}
