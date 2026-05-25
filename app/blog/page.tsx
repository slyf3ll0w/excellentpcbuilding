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
      <section className="bg-[#0f172a] pt-16 pb-14">
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-[#0070FF] text-xs font-semibold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">PC Building Blog</h1>
          <p className="text-white/65 leading-relaxed max-w-xl">
            Practical guides, pricing breakdowns, and honest advice from our team in Springfield, MO.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-7 shadow-sm hover:shadow-md hover:border-[#0070FF]/30 transition-all"
              >
                <span className="inline-block bg-[#0070FF]/10 text-[#0070FF] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {post.category}
                </span>
                <h2 className="text-lg font-bold text-slate-800 leading-snug mb-3 group-hover:text-[#0070FF] transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{post.description}</p>
                <div className="flex items-center gap-3 text-xs text-slate-400">
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
      <section className="py-16 bg-slate-50 border-t border-gray-200">
        <div className="max-w-xl mx-auto px-5 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Ready to build your PC?</h2>
          <p className="text-slate-500 mb-6">
            Get a free quote from our team in Springfield, MO. We serve all of Southwest Missouri.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0070FF] hover:bg-[#0058CC] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
