import Image from "next/image";
import Link from "next/link";
import { cities, SERVICES } from "@/lib/cities";
import { ContactForm } from "@/components/ContactForm";

const whyUs = [
  {
    title: "Expert Technicians",
    desc: "Every build is assembled by experienced PC technicians who care about quality, cable management, and long-term reliability.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Local & Trusted",
    desc: "Based in Springfield, MO — we're your neighbors. Real people you can call, visit, and trust with your build.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Stress Tested",
    desc: "Every PC we build is put through a full stress test before it leaves our hands. We don't cut corners.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "90-Day Guarantee",
    desc: "Our workmanship is backed by a 90-day guarantee. If something's wrong with our build, we fix it free.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Any Budget",
    desc: "Whether you're building a $500 starter rig or a $3,000 enthusiast machine, we'll help you get the most from your money.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: "Serving SW Missouri",
    desc: "We serve Springfield and 13 surrounding communities across Southwest Missouri — from Branson to Bolivar.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Jason M.",
    city: "Springfield, MO",
    text: "He built my son's gaming PC and the quality is outstanding. Clean cable management, everything runs perfectly, and he answered every question I had. Will absolutely use again.",
  },
  {
    name: "Ashley R.",
    city: "Nixa, MO",
    text: "I had all my parts ready and just needed someone I could trust to put it together right. Fast turnaround, great communication, and the PC has been running flawlessly.",
  },
  {
    name: "Tyler B.",
    city: "Ozark, MO",
    text: "They helped me pick parts that fit my budget and built a machine that crushes every game I play. Honest pricing, no hidden fees, and they genuinely care about getting it right.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative text-center py-28 sm:py-36"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      >
        <div className="absolute inset-0 bg-[#080c18]/78" />
        <div className="relative max-w-5xl mx-auto px-5">
          <p className="inline-block bg-white/10 border border-white/20 text-white/85 text-sm font-medium px-4 py-1.5 rounded-full mb-6 tracking-wide">
            Springfield, Missouri&apos;s Custom PC Experts
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
            Professional <span className="text-blue-300">PC Building</span>
            <br />
            You Can Trust
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Expert assembly, cable management, and stress testing for gamers, creators, and businesses
            across Southwest Missouri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-[#0070FF] hover:bg-[#0058CC] text-white font-semibold px-8 py-4 rounded-lg text-base transition-all"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#services"
              className="border-2 border-white/30 hover:border-white/60 text-white/85 hover:text-white font-semibold px-8 py-4 rounded-lg text-base transition-all"
            >
              View Services
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-8 border-t border-white/12">
            {["14 Cities Served", "Gaming & Workstation Builds", "90-Day Guarantee", "Based in Springfield, MO"].map(
              (s) => (
                <span key={s} className="text-sm text-white/55 font-medium">
                  {s}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="flex items-center justify-center gap-2 text-[#0070FF] text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="block w-4 h-0.5 bg-[#0070FF]" />
              What We Do
              <span className="block w-4 h-0.5 bg-[#0070FF]" />
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
              Two ways we can help you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.slug}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={
                      i === 0
                        ? "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=900&q=80"
                        : "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?auto=format&fit=crop&w=900&q=80"
                    }
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-block bg-[#0070FF]/10 text-[#0070FF] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    {svc.shortName}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{svc.tagline}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.benefits.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-500">
                        <svg className="w-4 h-4 text-[#0070FF] mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 8l3.5 3.5L14 3.5" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-2 text-[#0070FF] hover:text-[#0058CC] font-semibold text-sm transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="flex items-center justify-center gap-2 text-[#0070FF] text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="block w-4 h-0.5 bg-[#0070FF]" />
              Why Choose Us
              <span className="block w-4 h-0.5 bg-[#0070FF]" />
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
              Built right. Backed by us.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-[#0070FF]/10 text-[#0070FF] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-800 text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="flex items-center justify-center gap-2 text-[#0070FF] text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="block w-4 h-0.5 bg-[#0070FF]" />
              Customer Reviews
              <span className="block w-4 h-0.5 bg-[#0070FF]" />
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
              Don&apos;t just take our word for it
            </h2>
            <p className="text-slate-500 mt-3">Real feedback from customers across Southwest Missouri.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((r) => (
              <div key={r.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-amber-400 text-lg mb-3 tracking-wide">★★★★★</div>
                <p className="text-slate-600 text-sm leading-relaxed italic mb-5">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{r.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{r.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SPLIT ────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-80">
        <div className="relative h-64 md:h-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
            alt="PC components and circuit board"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-[#0070FF] flex items-center justify-center px-10 py-12">
          <div>
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-3">Ready to Build?</p>
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
              Get your custom PC<br />quote today — free.
            </h2>
            <p className="text-blue-100/80 text-sm mb-7 leading-relaxed">
              Tell us what you need and your budget. We&apos;ll respond within a few hours with a detailed quote.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0070FF] font-bold px-7 py-3.5 rounded-lg text-sm hover:bg-blue-50 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="flex items-center justify-center gap-2 text-[#0070FF] text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="block w-4 h-0.5 bg-[#0070FF]" />
              Where We Serve
              <span className="block w-4 h-0.5 bg-[#0070FF]" />
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
              Serving Southwest Missouri
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Based in Springfield, we serve communities across the region. Click your city for local service info.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/pc-build/${city.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#0070FF] hover:shadow-sm transition-all group"
              >
                <svg className="w-5 h-5 text-[#0070FF]/40 group-hover:text-[#0070FF] mx-auto mb-2 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-slate-700 text-xs font-semibold">{city.name}</p>
                <p className="text-slate-400 text-[10px]">MO</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-5">
          <div className="text-center mb-10">
            <p className="flex items-center justify-center gap-2 text-[#0070FF] text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="block w-4 h-0.5 bg-[#0070FF]" />
              Get Started
              <span className="block w-4 h-0.5 bg-[#0070FF]" />
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight mb-3">
              Request a Free Quote
            </h2>
            <p className="text-slate-500">
              Fill out the form and we&apos;ll get back to you within a few hours with pricing and next steps.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-7 sm:p-10 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
