import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Growing Finance — your trusted partner for loans, investments, tax, insurance, GST, and IT returns across India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Growing Finance"
        titleHindi="ग्रोइंग फाइनेंस के बारे में"
        subtitle="Empowering individuals and businesses to achieve their financial goals since 2010."
      />

      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, Growing Finance started with a simple mission: make
                  professional financial services accessible to everyone. What began as a
                  small advisory firm in Mumbai has grown into a trusted name serving
                  thousands of clients across India.
                </p>
                <p>
                  We believe that sound financial planning is the foundation of a secure
                  future. Whether you&apos;re a first-time homebuyer seeking a loan, a
                  business owner navigating GST compliance, or a professional looking to
                  optimize your tax returns — our team is here to guide you every step of
                  the way.
                </p>
                <p>
                  Our approach is built on transparency, expertise, and a genuine commitment
                  to our clients&apos; success. We don&apos;t push products — we recommend
                  solutions that align with your goals.
                </p>
              </div>
            </div>

            <div className="bg-navy-900 rounded-2xl p-8 lg:p-10 text-white">
              <h3 className="text-2xl font-bold mb-8">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-2">Mission</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    To provide accessible, transparent, and personalized financial
                    solutions that empower every Indian to build lasting wealth and
                    financial security.
                  </p>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-2">Vision</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    To become India&apos;s most trusted financial services partner,
                    recognized for integrity, innovation, and client-centric excellence.
                  </p>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-2">Values</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Integrity in every interaction</li>
                    <li>• Client success above all</li>
                    <li>• Continuous learning and improvement</li>
                    <li>• Transparency in pricing and advice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Our Track Record
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-white rounded-2xl p-6 border border-gray-100">
                <p className="text-3xl lg:text-4xl font-bold text-emerald-600">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Vikram Desai",
                role: "Founder & CEO",
                bio: "20+ years in banking and financial services. Former VP at a leading private bank.",
              },
              {
                name: "Ananya Reddy",
                role: "Head of Tax & Compliance",
                bio: "Chartered Accountant with expertise in GST, direct tax, and corporate compliance.",
              },
              {
                name: "Rohit Khanna",
                role: "Head of Investments",
                bio: "Certified Financial Planner specializing in wealth management and retirement planning.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="text-center bg-white rounded-2xl p-8 border border-gray-100 card-hover"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-900">{member.name}</h3>
                <p className="text-emerald-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
