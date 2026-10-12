import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Growing Finance services: loans, investments, tax planning, insurance, GST compliance, and IT returns filing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        titleHindi="हमारी सेवाएं"
        subtitle="End-to-end financial solutions designed to help you grow, protect, and optimize your wealth."
      />
      <div className="py-24 bg-cream-100">
        <ServicesGrid showAll />
      </div>
      <CTA />
    </>
  );
}
