import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Free PC Build Quote",
  description:
    "Get a free custom PC build quote from Excellent PC Building in Springfield, MO. We serve Springfield, Nixa, Ozark, Branson, and all of Southwest Missouri.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-card border-b border-border pt-16 pb-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
        <div className="max-w-4xl mx-auto px-5">
          <span className="inline-block bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">Get in Touch</span>
          <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
            Request a Free Quote
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Ready to get your custom PC built? Tell us about your project and budget and we&apos;ll
            put together a detailed quote — usually within a few hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: info */}
            <div>
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
                  {
                    title: "90-Day Workmanship Guarantee",
                    desc: "Every build we do is backed by our guarantee. If something's wrong with our work, we fix it free.",
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted border border-border p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">Email Us Directly</p>
                <a
                  href="mailto:excellentpcbuilding@gmail.com"
                  className="text-primary hover:underline font-medium"
                >
                  excellentpcbuilding@gmail.com
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-card border border-border border-t-2 border-t-primary p-7 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
