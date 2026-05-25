import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cities, SERVICES } from "@/lib/cities";
import { ContactForm } from "@/components/ContactForm";

const svc = SERVICES[1];

export const metadata: Metadata = {
  title: "Parts & Build Service — We Source, We Build | Springfield, MO",
  description:
    "Don't know what parts to buy? We'll consult on your budget, source the best components, build your PC, and deliver a fully tested machine. Serving Springfield, MO and Southwest Missouri.",
};

export default function PartsAndBuildPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060B16] pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_20%_50%,rgba(0,112,255,0.08),transparent)]" />
        <div className="max-w-6xl mx-auto px-5 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#0070FF]/15 text-[#0070FF] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              Parts + Build Service
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              We Source the Parts.<br />We Build the PC.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{svc.description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0070FF] hover:bg-[#0058CC] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#0070FF]/20 hover:-translate-y-px"
            >
              Get a Free Consultation →
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1547628641-ec2090d0e60f?auto=format&fit=crop&w=900&q=80"
              alt="PC parts and component selection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#060B16]/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#0A1220]">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-extrabold text-white mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { n: "01", title: "You Tell Us Your Needs", desc: "Share your budget, use case (gaming, editing, streaming), and any preferences. We listen." },
              { n: "02", title: "We Build Your Parts List", desc: "We put together the best possible build for your budget and send it to you for approval." },
              { n: "03", title: "We Order, Build & Deliver", desc: "We source everything, professionally assemble, stress test, and get it to you ready to use." },
            ].map((step) => (
              <div key={step.n} className="bg-[#0D1626] border border-[#1A2840] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-[#0070FF] text-white text-sm font-extrabold flex items-center justify-center mb-4">
                  {step.n}
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-[#060B16]">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-extrabold text-white mb-8 text-center">Everything Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {svc.benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-[#0D1626] border border-[#1A2840] rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-[#0070FF]/15 text-[#0070FF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 8l3.5 3.5L14 3.5" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-[#0A1220]">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl font-extrabold text-white mb-3 text-center">
            Parts &amp; Build Service Near You
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Select your city for local service details and pricing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/parts-and-build/${city.slug}`}
                className="bg-[#0D1626] border border-[#1A2840] hover:border-[#0070FF]/50 hover:bg-[#0070FF]/5 rounded-xl p-4 text-center text-sm font-semibold text-white hover:text-[#0070FF] transition-all"
              >
                {city.name}, MO
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA form */}
      <section className="py-20 bg-[#060B16]">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-2xl font-extrabold text-white mb-2 text-center">Start your build today</h2>
          <p className="text-gray-500 text-center mb-8">Free consultation — no pressure.</p>
          <div className="bg-[#0D1626] border border-[#1A2840] rounded-2xl p-7">
            <ContactForm defaultService="parts-and-build" />
          </div>
        </div>
      </section>
    </>
  );
}
