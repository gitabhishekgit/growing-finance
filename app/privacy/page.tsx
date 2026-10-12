import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <p className="text-gray-600 leading-relaxed mb-6">
            Last updated: October 2026. Growing Finance (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;) is committed to protecting your privacy. This policy explains
            how we collect, use, and safeguard your personal information.
          </p>
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may collect personal information such as your name, phone number, email
            address, and financial details when you enquire about our services or use our
            website contact form.
          </p>
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your information is used solely to provide financial advisory services,
            process your requests, and communicate with you about our offerings. We do
            not sell or share your data with third parties for marketing purposes.
          </p>
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For privacy-related queries, contact us at{" "}
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
