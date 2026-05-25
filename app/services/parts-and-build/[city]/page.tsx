import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, SERVICES, BASE_URL } from "@/lib/cities";
import { ContactForm } from "@/components/ContactForm";

const svc = SERVICES[1];

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return {};
  return {
    title: `Parts & Build Service in ${city.name}, MO — We Source & Build`,
    description: `Custom PC parts sourcing and assembly in ${city.name}, Missouri. Tell us your budget and use case — we'll source the best components, build your PC, and deliver a fully tested machine. Serving ${city.name} and Southwest Missouri.`,
    alternates: { canonical: `${BASE_URL}/services/parts-and-build/${city.slug}` },
    openGraph: {
      title: `Parts & Build in ${city.name}, MO | Excellent PC Building`,
      description: `Full-service custom PC: parts sourcing, assembly, and testing in ${city.name}, MO.`,
    },
  };
}

export default async function CityPartsAndBuildPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) notFound();

  const nearbyCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Parts & Build Service in ${city.name}, MO`,
    description: `Custom PC parts sourcing and assembly service in ${city.name}, Missouri.`,
    provider: {
      "@type": "LocalBusiness",
      name: "Excellent PC Building",
      address: { "@type": "PostalAddress", addressLocality: "Springfield", addressRegion: "MO" },
    },
    areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "Missouri" } },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {/* Hero */}
      <section className="bg-[#060B16] pt-16 pb-20 border-b border-[#1A2840]">
        <div className="max-w-4xl mx-auto px-5">
          <div className="flex flex-wrap gap-2 mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/parts-and-build" className="hover:text-white transition-colors">Parts + Build</Link>
            <span>/</span>
            <span className="text-white">{city.name}</span>
          </div>
          <span className="inline-block bg-[#0070FF]/15 text-[#0070FF] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
            {city.name}, MO
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Parts &amp; Build Service in<br />
            <span className="text-[#0070FF]">{city.name}, Missouri</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
            Serving {city.name} residents who want a custom PC but don&apos;t know where to start. We&apos;ll
            consult with you, source the best parts for your budget, and build a machine tailored exactly to
            how you use it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#quote"
              className="inline-flex items-center justify-center bg-[#0070FF] hover:bg-[#0058CC] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#0070FF]/20"
            >
              Start My Build in {city.name} →
            </Link>
            <Link
              href="/services/parts-and-build"
              className="inline-flex items-center justify-center border border-[#1A2840] hover:border-[#0070FF]/40 text-gray-400 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              About This Service
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us for this city */}
      <section className="py-16 bg-[#0A1220]">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-extrabold text-white mb-8">
            Full-Service PC Builds for {city.name} Residents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Budget Consultation",
                desc: `We work with ${city.name} customers at every budget level — from $500 starter builds to $3,000+ workstations.`,
              },
              {
                title: "Best Parts at Best Prices",
                desc: "We know where to find quality parts at fair prices. No bloated markups or unnecessary upgrades.",
              },
              {
                title: "Fully Ready to Use",
                desc: "Windows installed, drivers configured, and everything tested. Plug it in and get to work.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#0D1626] border border-[#1A2840] rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-[#0070FF] mb-3" />
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-[#060B16]">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-extrabold text-white mb-6">Everything Included</h2>
          <ul className="space-y-3">
            {svc.benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-gray-300 text-sm">
                <svg className="w-4 h-4 text-[#0070FF] flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 8l3.5 3.5L14 3.5" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="py-16 bg-[#0A1220]">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-2xl font-extrabold text-white mb-2 text-center">
            Start Your Build in {city.name}
          </h2>
          <p className="text-gray-500 text-center mb-8">Free consultation — we respond fast.</p>
          <div className="bg-[#0D1626] border border-[#1A2840] rounded-2xl p-7">
            <ContactForm defaultService="parts-and-build" defaultCity={city.name} />
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-14 bg-[#060B16] border-t border-[#1A2840]">
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-sm text-gray-500 mb-4">Also serving nearby communities:</p>
          <div className="flex flex-wrap gap-2">
            {nearbyCities.map((c) => (
              <Link
                key={c.slug}
                href={`/services/parts-and-build/${c.slug}`}
                className="bg-[#0D1626] border border-[#1A2840] hover:border-[#0070FF]/40 text-gray-400 hover:text-white text-sm px-4 py-2 rounded-lg transition-all"
              >
                {c.name}, MO
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
