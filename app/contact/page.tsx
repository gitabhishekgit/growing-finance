import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { contactInfo, getFullAddress, getWhatsAppUrl } from "@/lib/data";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Growing Finance for loans, investments, tax, insurance, GST, and IT returns. Free consultation available.",
};

export default function ContactPage() {
  const fullAddress = getFullAddress();

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
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">Get In Touch</h2>
                <p className="text-navy-700/65 leading-relaxed">
                  Fill out the form and our team will respond within 24 hours. For
                  instant support, message us on WhatsApp.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-[#25D366]/5 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">WhatsApp</p>
                    <p className="text-[#128C7E] font-medium">{contactInfo.whatsapp}</p>
                    <p className="text-xs text-navy-700/50 mt-1">Tap to chat instantly</p>
                  </div>
                </a>

                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="flex items-start gap-4 p-5 bg-white border border-gold-400/15 rounded-xl hover:border-gold-400/30 transition-colors group card-premium"
                >
                  <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center text-gold-600 shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Phone</p>
                    <p className="text-navy-700/70">{contactInfo.phone}</p>
                    <p className="text-xs text-navy-700/40 mt-1">{contactInfo.hours}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-4 p-5 bg-white border border-gold-400/15 rounded-xl hover:border-gold-400/30 transition-colors group card-premium"
                >
                  <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center text-gold-600 shrink-0">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Email</p>
                    <p className="text-navy-700/70 text-sm break-all">{contactInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-white border border-gold-400/15 rounded-xl card-premium">
                  <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center text-gold-600 shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Office Address</p>
                    <p className="text-navy-700/70 text-sm leading-relaxed">{fullAddress}</p>
                  </div>
                </div>
              </div>

              <WhatsAppButton variant="inline" className="w-full sm:w-auto" />
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gold-400/15 shadow-sm p-6 lg:p-8">
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">Send Us an Enquiry</h3>
                <p className="text-sm text-navy-700/50 mb-6">
                  Form submissions are emailed to {contactInfo.email}
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
