import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Service" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 leading-relaxed mb-6">
            Last updated: October 2026. By using the Growing Finance website and services,
            you agree to the following terms.
          </p>
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">Services</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Growing Finance provides financial advisory and facilitation services including
            loans, investments, tax planning, insurance, GST, and IT returns. Final
            approvals for loans and investments are subject to respective institution
            policies and eligibility criteria.
          </p>
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">Disclaimer</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Investment products are subject to market risks. Past performance is not
            indicative of future results. Please read all scheme-related documents
            carefully before investing. Growing Finance acts as an advisor and facilitator
            and is not liable for decisions made based on general information on this website.
          </p>
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            Questions about these terms? Email us at{" "}
            <a href={`mailto:${contactInfo.email}`} className="text-emerald-600 hover:underline">
              {contactInfo.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
