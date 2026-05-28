import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "PC Building Blog — Tips, Guides & Advice",
  description:
    "Practical guides on custom PC building, pricing, and what to look for when hiring a builder. Written by the team at Excellent PC Building in Springfield, MO.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-card border-b border-border border-t-2 border-t-primary pt-16 pb-14">
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">PC Building Blog</h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Practical guides, pricing breakdowns, and honest advice from our team in Springfield, MO.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card border border-border border-t-2 border-t-primary p-7 hover:border-primary transition-all"
              >
                <span className="inline-block bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
                  {post.category}
                </span>
                <h2 className="text-lg font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{post.description}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted border-t border-border">
        <div className="max-w-xl mx-auto px-5 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to build your PC?</h2>
          <p className="text-muted-foreground mb-6">
            Get a free quote from our team in Springfield, MO. We serve all of Southwest Missouri.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3.5 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
