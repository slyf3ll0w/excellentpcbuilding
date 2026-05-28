import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cities, SERVICES } from "@/lib/cities";
import { ContactForm } from "@/components/ContactForm";

const svc = SERVICES[0];

export const metadata: Metadata = {
  title: "PC Build Service — Professional Assembly in Springfield, MO",
  description:
    "You bring the parts — we build your custom PC. Professional assembly, cable management, and stress testing. Serving Springfield, MO and surrounding communities.",
};

export default function PCBuildPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-card border-b border-border pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary/15 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 mb-5">
              Build Only Service
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight mb-5">
              Professional PC<br />Assembly Service
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{svc.description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 transition-all"
            >
              Get a Free Quote
            </Link>
          </div>
          <div className="relative overflow-hidden h-72 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?auto=format&fit=crop&w=900&q=80"
              alt="PC assembly and building service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {svc.benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-card border border-border p-5">
                <div className="w-8 h-8 bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 8l3.5 3.5L14 3.5" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-foreground mb-3 text-center">
            PC Build Service Near You
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Select your city for local service information and pricing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/pc-build/${city.slug}`}
                className="bg-card border border-border hover:border-primary p-4 text-center text-sm font-semibold text-foreground hover:text-primary transition-all"
              >
                {city.name}, MO
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA form */}
      <section className="py-20 bg-background">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-foreground mb-2 text-center">Ready to get started?</h2>
          <p className="text-muted-foreground text-center mb-8">Request a quote below — it&apos;s free.</p>
          <div className="bg-card border border-border p-7">
            <ContactForm defaultService="build-only" />
          </div>
        </div>
      </section>
    </>
  );
}
