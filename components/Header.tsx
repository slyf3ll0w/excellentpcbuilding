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
    { href: "/services/pc-build", label: "Build Only" },
    { href: "/services/parts-and-build", label: "Parts + Build" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className={`bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Excellent PC Building"
            width={133}
            height={133}
            className="w-[133px] h-[133px] object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith(l.href)
                  ? "text-foreground bg-card"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:4173197589"
            className="text-primary font-semibold text-sm hidden sm:block hover:text-foreground transition-colors"
          >
            (417) 319-7589
          </a>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2 text-sm transition-colors hidden sm:block"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
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
            href="tel:4173197589"
            className="py-3 px-4 text-primary font-semibold text-sm"
          >
            (417) 319-7589
          </a>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-primary text-primary-foreground font-semibold px-4 py-3 text-sm text-center transition-colors hover:bg-primary/90"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
