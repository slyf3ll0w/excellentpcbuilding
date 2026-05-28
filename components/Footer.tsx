import Link from "next/link";
import Image from "next/image";
import { cities } from "@/lib/cities";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Excellent PC Building"
                width={133}
                height={133}
                className="w-[133px] h-[133px] object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Springfield&apos;s premier custom PC building service. Professional builds, fair prices.
            </p>
            <p className="text-muted-foreground text-sm mt-3">
              Springfield, MO<br />
              <a href="mailto:excellentpcbuilding@gmail.com" className="text-primary hover:underline">
                excellentpcbuilding@gmail.com
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-4">Services</p>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <Link href="/services/pc-build" className="hover:text-foreground transition-colors">Build Only Service</Link>
              <Link href="/services/parts-and-build" className="hover:text-foreground transition-colors">Parts + Build Service</Link>
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog & Guides</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Get a Free Quote</Link>
            </div>
          </div>

          {/* Cities 1 */}
          <div>
            <p className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-4">Service Areas</p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {cities.slice(0, 7).map((c) => (
                <Link key={c.slug} href={`/services/pc-build/${c.slug}`} className="hover:text-foreground transition-colors">
                  {c.name}, MO
                </Link>
              ))}
            </div>
          </div>

          {/* Cities 2 */}
          <div>
            <p className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-4 sm:invisible lg:visible">
              &nbsp;
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {cities.slice(7).map((c) => (
                <Link key={c.slug} href={`/services/pc-build/${c.slug}`} className="hover:text-foreground transition-colors">
                  {c.name}, MO
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Excellent PC Building. All rights reserved. Springfield, MO.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Serving Springfield and surrounding Southwest Missouri communities
          </p>
        </div>
      </div>
    </footer>
  );
}
