"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScrollY.current || current < 10);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services/pc-build", label: "Build Only" },
    { href: "/services/parts-and-build", label: "Parts + Build" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>

      {/* ── Row 1: Top info bar ──────────────────────────────── */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-5 py-2 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 tracking-wider">★★★★★</span>
            <span className="hidden sm:inline">5-Star Rated Custom PC Builder</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Springfield, MO</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>Mon–Sat 9AM–6PM</span>
          </div>
        </div>
      </div>

      {/* ── Row 2: Logo + contact + CTA ─────────────────────── */}
      <div className="bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Excellent PC Building"
              width={133}
              height={133}
              className="w-[133px] h-[133px] object-contain"
            />
          </Link>

          {/* Desktop: contact info + CTA */}
          <div className="hidden md:flex items-center gap-5">

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Call Us</p>
                <a href="tel:4173197589" className="text-foreground font-bold text-base hover:text-primary transition-colors">
                  (417) 319-7589
                </a>
              </div>
            </div>

            <div className="w-px h-10 bg-border" />

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Email Us</p>
                <a href="mailto:excellentpcbuilding@gmail.com" className="text-foreground font-bold text-sm hover:text-primary transition-colors">
                  excellentpcbuilding@gmail.com
                </a>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-7 py-4 text-sm transition-colors whitespace-nowrap ml-2"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a href="tel:4173197589" className="text-primary font-bold text-sm">
              (417) 319-7589
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Row 3: Nav bar ──────────────────────────────────── */}
      <nav className="bg-primary hidden md:block">
        <div className="max-w-6xl mx-auto px-5 flex items-center">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-5 py-4 text-sm font-bold transition-colors ${
                (l.href === "/" ? pathname === "/" : pathname.startsWith(l.href))
                  ? "bg-black/20 text-primary-foreground"
                  : "text-primary-foreground/85 hover:text-primary-foreground hover:bg-black/15"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-5 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors font-medium text-sm"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:excellentpcbuilding@gmail.com"
            className="py-3 px-4 text-muted-foreground text-sm"
          >
            excellentpcbuilding@gmail.com
          </a>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-primary text-primary-foreground font-bold px-4 py-3 text-sm text-center transition-colors hover:bg-primary/90"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
