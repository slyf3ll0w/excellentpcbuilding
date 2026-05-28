import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, SERVICES, BASE_URL } from "@/lib/cities";
import { ContactForm } from "@/components/ContactForm";

const svc = SERVICES[0];

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
    title: `PC Build Service in ${city.name}, MO — Expert Assembly`,
    description: `Professional PC building service in ${city.name}, Missouri. You provide the parts, we assemble your custom PC with expert cable management, BIOS setup, and stress testing. Serving ${city.name} and surrounding Southwest Missouri communities.`,
    alternates: { canonical: `${BASE_URL}/services/pc-build/${city.slug}` },
    openGraph: {
      title: `PC Build Service in ${city.name}, MO | Excellent PC Building`,
      description: `Expert PC assembly in ${city.name}, MO. Professional build service with 90-day guarantee.`,
    },
  };
}

export default async function CityPCBuildPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) notFound();

  const nearbyCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `PC Build Service in ${city.name}, MO`,
    description: `Professional custom PC assembly service in ${city.name}, Missouri.`,
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
      <section className="bg-card border-b border-border border-t-2 border-t-primary pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="flex flex-wrap gap-2 mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/pc-build" className="hover:text-foreground transition-colors">PC Build Service</Link>
            <span>/</span>
            <span className="text-foreground">{city.name}</span>
          </div>
          <span className="inline-block bg-primary/15 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 mb-5">
            {city.name}, MO
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight mb-5">
            PC Build Service in<br />
            <span className="text-primary">{city.name}, Missouri</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-8">
            Looking for professional PC assembly in {city.name}, MO? Excellent PC Building serves {city.name} and
            all of Southwest Missouri. You bring the parts — we build a machine you&apos;ll be proud of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#quote"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 transition-all"
            >
              Get a Quote in {city.name}
            </Link>
            <Link
              href="/services/pc-build"
              className="inline-flex items-center justify-center border border-border hover:border-foreground/40 text-muted-foreground hover:text-foreground font-semibold px-8 py-4 transition-all"
            >
              About This Service
            </Link>
          </div>
        </div>
      </section>

      {/* City-specific context */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                PC Building in {city.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{city.blurb}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{city.about}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
                Popular Builds in {city.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.popularBuilds.map((b) => (
                  <span
                    key={b}
                    className="bg-muted border border-border text-muted-foreground text-sm font-medium px-4 py-2"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-8 bg-muted border border-border p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Build Only Service</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You supply the parts — we do the assembly, cable management, BIOS setup, and stress testing.
                  A 90-day workmanship guarantee is included with every build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Why {city.name} Residents Choose Excellent PC Building
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Local Service",
                desc: `We're based in Springfield, just minutes from ${city.name}. Easy drop-off, pickup, and communication.`,
              },
              {
                title: "Expert Assembly",
                desc: "Every build gets professional cable management, proper thermal application, and BIOS configuration.",
              },
              {
                title: "Stress Tested",
                desc: "Your PC is fully stress tested before we hand it back. No surprises after you get it home.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border p-5">
                <div className="w-2 h-2 bg-primary mb-3" />
                <h3 className="text-foreground font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            What&apos;s Included with Every Build
          </h2>
          <ul className="space-y-3">
            {svc.benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-muted-foreground text-sm">
                <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 8l3.5 3.5L14 3.5" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Questions from {city.name} Customers
          </h2>
          <div className="space-y-5">
            {city.faq.map((item) => (
              <div key={item.q} className="bg-card border border-border border-l-2 border-l-primary p-6">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="py-16 bg-background">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
            Request a Quote in {city.name}
          </h2>
          <p className="text-muted-foreground text-center mb-8">Free, no obligation. We respond fast.</p>
          <div className="bg-card border border-border border-t-2 border-t-primary p-7">
            <ContactForm defaultService="build-only" defaultCity={city.name} />
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-14 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-sm text-muted-foreground mb-4">Also serving nearby communities:</p>
          <div className="flex flex-wrap gap-2">
            {nearbyCities.map((c) => (
              <Link
                key={c.slug}
                href={`/services/pc-build/${c.slug}`}
                className="bg-card border border-border hover:border-primary text-muted-foreground hover:text-primary text-sm px-4 py-2 transition-all"
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
