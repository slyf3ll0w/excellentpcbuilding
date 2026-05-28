import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Meet Brendan | Excellent PC Building",
  description:
    "Meet Brendan, the owner of Excellent PC Building in Springfield, MO. A lifelong PC enthusiast with a passion for custom builds and a commitment to quality workmanship.",
};

const values = [
  {
    title: "Passion-Driven",
    desc: "PC building isn't just a job — it's something Brendan genuinely loves. That passion shows in every cable routed and every system tested.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    title: "Local & Accountable",
    desc: "Brendan is your neighbor. When you work with Excellent PC Building, you're working directly with him — not a middleman.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    title: "No Shortcuts",
    desc: "Every build gets the same attention whether it's a $500 starter or a $3,000 workstation. Proper cable management, thermal paste, BIOS config — always.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Honest Advice",
    desc: "Brendan will tell you what you actually need — not what makes the invoice bigger. Straightforward recommendations, fair prices, no upsells.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-card border-b border-border border-t-2 border-t-primary pt-16 pb-14 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5">
          <span className="inline-block bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
            About Us
          </span>
          <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
            Built by someone who loves it.
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Excellent PC Building is a one-person operation run by Brendan — a Springfield local
            who turned a personal obsession with PC building into a trusted service for the community.
          </p>
        </div>
      </section>

      {/* Main story */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Photo */}
            <div className="relative overflow-hidden">
              <Image
                src="/brendan.jpg"
                alt="Brendan, owner of Excellent PC Building"
                width={600}
                height={750}
                className="w-full object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-6">
                <p className="text-white font-bold text-lg">Brendan</p>
                <p className="text-white/80 text-sm font-semibold">Owner — Excellent PC Building</p>
              </div>
            </div>

            {/* Story */}
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-foreground">
                It started with his own build.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Like a lot of PC enthusiasts, Brendan&apos;s journey started with wanting to build his own
                machine. He spent hours researching parts, watching builds, and learning everything about
                how computers come together — and he loved every minute of it. That first build hooked him.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After building for himself, friends started asking for help. Then friends of friends.
                Word spread fast because Brendan doesn&apos;t just put parts in a case — he takes pride in
                the craft. Clean cable management, proper thermal application, a fully tested and
                configured system ready to use out of the box.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Raised in the Springfield area, Brendan started Excellent PC Building to serve
                his community. He&apos;s built gaming rigs, workstations, video editing machines, and
                budget-friendly everyday PCs for customers across Southwest Missouri. Each one gets
                the same level of care and attention.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When you work with Excellent PC Building, you&apos;re working directly with Brendan —
                someone who genuinely cares about getting your build right, will answer your questions
                honestly, and stands behind his work with a 90-day guarantee.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-7 py-3.5 text-sm transition-colors text-center"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:4173197589"
                  className="inline-block border border-border hover:border-primary text-foreground hover:text-primary font-semibold px-7 py-3.5 text-sm transition-colors text-center"
                >
                  (417) 319-7589
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
              How We Work
            </span>
            <h2 className="text-2xl font-bold text-foreground">What you can expect from Brendan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border p-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary" />
                <div className="w-11 h-11 bg-primary/15 text-primary flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-foreground text-base mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to work with Brendan?</h2>
          <p className="text-muted-foreground mb-7">
            Reach out for a free quote. He typically responds within a few hours during business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-sm transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href="mailto:excellentpcbuilding@gmail.com"
              className="inline-block border border-border hover:border-primary text-muted-foreground hover:text-primary font-semibold px-8 py-4 text-sm transition-colors"
            >
              excellentpcbuilding@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
