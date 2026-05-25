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

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060B16] pt-16 pb-24">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,112,255,0.12),transparent)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0070FF]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0070FF]/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-5 text-center">
          {/* Big logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#0070FF]/20 blur-2xl scale-110" />
              <Image
                src="/logo.png"
                alt="Excellent PC Building Logo"
                width={300}
                height={300}
                className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-[0_0_40px_rgba(0,112,255,0.5)]"
                priority
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5">
            Springfield&apos;s Premier<br />
            <span className="text-[#0070FF]">Custom PC Building</span> Service
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Professional PC assembly for gamers, creators, and businesses across Southwest Missouri.
            You pick the build — we make it reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/contact"
              className="bg-[#0070FF] hover:bg-[#0058CC] text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-[#0070FF]/25 hover:-translate-y-px"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="#services"
              className="border border-[#1A2840] hover:border-[#0070FF]/50 bg-white/[0.04] hover:bg-white/[0.07] text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
            >
              View Services
            </Link>
          </div>

          {/* Stat badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "14 Cities Served",
              "Gaming & Workstation Builds",
              "90-Day Guarantee",
              "Based in Springfield, MO",
            ].map((s) => (
              <div key={s} className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070FF]" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PC IMAGE STRIP ───────────────────────────────────── */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1800&q=80"
          alt="Custom gaming PC with RGB lighting"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B16] via-transparent to-[#060B16]" />
        <div className="absolute inset-0 bg-[#0070FF]/10" />
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#060B16]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="text-[#0070FF] text-xs font-bold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Two ways we can help you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.slug}
                className="group bg-[#0D1626] border border-[#1A2840] rounded-2xl overflow-hidden hover:border-[#0070FF]/50 transition-all hover:shadow-xl hover:shadow-[#0070FF]/5"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={
                      i === 0
                        ? "https://images.unsplash.com/photo-1593640408182-31c228b4b9c5?auto=format&fit=crop&w=900&q=80"
                        : "https://images.unsplash.com/photo-1547628641-ec2090d0e60f?auto=format&fit=crop&w=900&q=80"
                    }
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1626] via-[#0D1626]/40 to-transparent" />
                </div>
                <div className="p-7">
                  <span className="inline-block bg-[#0070FF]/15 text-[#0070FF] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    {svc.shortName}
                  </span>
                  <h3 className="text-xl font-extrabold text-white mb-2">{svc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{svc.tagline}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.benefits.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-[#0070FF] mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 8l3.5 3.5L14 3.5" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-2 text-[#0070FF] hover:text-white font-semibold text-sm transition-colors group/link"
                  >
                    Learn more
                    <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <section className="py-24 bg-[#0A1220]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="text-[#0070FF] text-xs font-bold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built right. Backed by us.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-[#0D1626] border border-[#1A2840] rounded-2xl p-6 hover:border-[#0070FF]/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0070FF]/10 text-[#0070FF] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PC IMAGE SECTION ─────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-80">
        <div className="relative h-64 md:h-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
            alt="PC components and circuit board"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0070FF]/10" />
        </div>
        <div className="bg-[#0070FF] flex items-center justify-center px-10 py-12">
          <div>
            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">Ready to Build?</p>
            <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">
              Get your custom PC<br />quote today — free.
            </h2>
            <p className="text-blue-100/80 text-sm mb-7 leading-relaxed">
              Tell us what you need and your budget. We&apos;ll respond within a few hours with a detailed quote.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0070FF] font-bold px-7 py-3.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
            >
              Request a Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────────── */}
      <section className="py-24 bg-[#060B16]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="text-[#0070FF] text-xs font-bold uppercase tracking-widest mb-3">Where We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Serving Southwest Missouri
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Based in Springfield, we serve communities across the region. Click your city for local service info.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/pc-build/${city.slug}`}
                className="bg-[#0D1626] border border-[#1A2840] rounded-xl p-4 text-center hover:border-[#0070FF]/50 hover:bg-[#0070FF]/5 transition-all group"
              >
                <svg className="w-5 h-5 text-[#0070FF]/50 group-hover:text-[#0070FF] mx-auto mb-2 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-white text-xs font-semibold">{city.name}</p>
                <p className="text-gray-600 text-[10px]">MO</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-[#0A1220]">
        <div className="max-w-2xl mx-auto px-5">
          <div className="text-center mb-10">
            <p className="text-[#0070FF] text-xs font-bold uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Request a Free Quote
            </h2>
            <p className="text-gray-500">
              Fill out the form and we&apos;ll get back to you within a few hours with pricing and next steps.
            </p>
          </div>
          <div className="bg-[#0D1626] border border-[#1A2840] rounded-2xl p-7 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
