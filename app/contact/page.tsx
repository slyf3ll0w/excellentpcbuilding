import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Free PC Build Quote",
  description:
    "Get a free custom PC build quote from Excellent PC Building in Springfield, MO. We serve Springfield, Nixa, Ozark, Branson, and all of Southwest Missouri.",
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-[#060B16]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: info */}
          <div>
            <p className="text-[#0070FF] text-xs font-bold uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-5">
              Request a Free Quote
            </h1>
            <p className="text-gray-400 leading-relaxed mb-8">
              Ready to get your custom PC built? Tell us about your project and budget and we&apos;ll
              put together a detailed quote — usually within a few hours.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  title: "Fast Response",
                  desc: "We respond to every quote request within a few hours during business hours.",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                },
                {
                  title: "No Obligation",
                  desc: "Quotes are completely free with no pressure to commit.",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                },
                {
                  title: "Based in Springfield",
                  desc: "We're local to the Springfield, MO area — easy to reach, easy to trust.",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0070FF]/10 text-[#0070FF] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0D1626] border border-[#1A2840] rounded-xl p-5">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Email Us Directly</p>
              <a
                href="mailto:info@excellentpcbuilding.com"
                className="text-[#0070FF] hover:underline font-medium"
              >
                info@excellentpcbuilding.com
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[#0D1626] border border-[#1A2840] rounded-2xl p-7 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
