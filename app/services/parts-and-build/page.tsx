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
      <section className="bg-[#0f172a] pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/10 border border-white/18 text-white/85 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              Parts + Build Service
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              We Source the Parts.<br />We Build the PC.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8">{svc.description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0070FF] hover:bg-[#0058CC] text-white font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Get a Free Consultation
            </Link>
          </div>
          <div className="relative rounded-xl overflow-hidden h-72 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=900&q=80"
              alt="PC parts and component selection"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-slate-800 mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { n: "1", title: "You Tell Us Your Needs", desc: "Share your budget, use case (gaming, editing, streaming), and any preferences. We listen." },
              { n: "2", title: "We Build Your Parts List", desc: "We put together the best possible build for your budget and send it to you for approval." },
              { n: "3", title: "We Order, Build & Deliver", desc: "We source everything, professionally assemble, stress test, and get it to you ready to use." },
            ].map((step) => (
              <div key={step.n} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0070FF] text-white text-sm font-bold flex items-center justify-center mb-4">
                  {step.n}
                </div>
                <h3 className="font-semibold text-slate-800 text-sm mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Everything Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {svc.benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#0070FF]/10 text-[#0070FF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 8l3.5 3.5L14 3.5" />
                  </svg>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-slate-800 mb-3 text-center">
            Parts &amp; Build Service Near You
          </h2>
          <p className="text-slate-500 text-center mb-10">
            Select your city for local service details and pricing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/parts-and-build/${city.slug}`}
                className="bg-white border border-gray-200 hover:border-[#0070FF] rounded-lg p-4 text-center text-sm font-semibold text-slate-700 hover:text-[#0070FF] transition-all shadow-sm hover:shadow"
              >
                {city.name}, MO
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">Start your build today</h2>
          <p className="text-slate-500 text-center mb-8">Free consultation — no pressure.</p>
          <div className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm">
            <ContactForm defaultService="parts-and-build" />
          </div>
        </div>
      </section>
    </>
  );
}
