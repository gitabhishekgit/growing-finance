import { whyChooseUs } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <SectionHeading
              label="Why Growing Finance"
              title="Your Trusted Partner for Every Financial Need"
              titleHindi="हर वित्तीय आवश्यकता के लिए आपका भरोसेमंद साथी"
              subtitle="We combine deep industry expertise with a client-first approach. No jargon, no hidden fees — just honest advice and results."
              align="left"
            />
            <div className="grid sm:grid-cols-2 gap-5 -mt-6">
              {whyChooseUs.map((item, index) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl hover:bg-cream-100 transition-colors">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-gold-400 font-serif font-bold text-sm shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-navy-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-navy-700/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-gold-400/10 to-navy-900/5 rounded-3xl blur-xl" />
            <div className="relative bg-navy-900 rounded-2xl p-8 lg:p-10 text-white border border-gold-400/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="decorative-diamond" />
                <h3 className="font-serif text-2xl font-bold">How It Works</h3>
              </div>
              <div className="space-y-7">
                {[
                  { step: "01", title: "Free Consultation", desc: "Share your financial goals with our experts" },
                  { step: "02", title: "Customized Plan", desc: "We design a tailored solution for your needs" },
                  { step: "03", title: "Seamless Execution", desc: "We handle documentation and processing" },
                  { step: "04", title: "Ongoing Support", desc: "Continuous guidance as your needs evolve" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 group">
                    <span className="font-serif text-gold-400 font-bold text-lg w-8 shrink-0">{item.step}</span>
                    <div className="pb-7 border-b border-white/[0.06] group-last:border-0 group-last:pb-0 flex-1">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-champagne-400/60 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
