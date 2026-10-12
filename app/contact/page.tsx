import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contactInfo } from "@/lib/data";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Growing Finance for loans, investments, tax, insurance, GST, and IT returns. Free consultation available.",
};

export default function ContactPage() {
  const fullAddress = `${contactInfo.address.line1}, ${contactInfo.address.line2}, ${contactInfo.address.city}, ${contactInfo.address.state} - ${contactInfo.address.pincode}`;

  return (
    <>
      <PageHeader
        title="Contact Us"
        titleHindi="संपर्क करें"
        subtitle="Have a question or ready to get started? Reach out — we're here to help."
      />

      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form and our team will respond within 24 hours. For
                  urgent queries, call us directly during business hours.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Phone</p>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                    <p className="text-xs text-gray-400 mt-1">{contactInfo.hours}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Email</p>
                    <p className="text-gray-600">{contactInfo.email}</p>
                    <p className="text-gray-600 text-sm">{contactInfo.supportEmail}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Office Address</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{fullAddress}</p>
                  </div>
                </div>

                <div className="p-4 bg-navy-900 rounded-xl text-white">
                  <p className="font-semibold mb-1">GSTIN</p>
                  <p className="text-emerald-400 font-mono">{contactInfo.gst}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-6">Send Us an Enquiry</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
