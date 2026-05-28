import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/posts";
import { BASE_URL } from "@/lib/cities";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Excellent PC Building`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Excellent PC Building",
    },
    publisher: {
      "@type": "Organization",
      name: "Excellent PC Building",
      address: { "@type": "PostalAddress", addressLocality: "Springfield", addressRegion: "MO" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-card border-b border-border pt-16 pb-14">
        <div className="max-w-3xl mx-auto px-5">
          <div className="flex flex-wrap gap-2 mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground truncate">{post.title}</span>
          </div>
          <span className="inline-block bg-primary/15 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 mb-5">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>Excellent PC Building — Springfield, MO</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 bg-background">
        <div className="max-w-3xl mx-auto px-5">
          <div className="max-w-none">
            {post.sections.map((section, i) => {
              if (section.type === "p") {
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-5">
                    {section.text}
                  </p>
                );
              }
              if (section.type === "h2") {
                return (
                  <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "h3") {
                return (
                  <h3 key={i} className="text-lg font-semibold text-foreground mt-7 mb-3">
                    {section.text}
                  </h3>
                );
              }
              if (section.type === "ul") {
                return (
                  <ul key={i} className="space-y-3 mb-6">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                        <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 8l3.5 3.5L14 3.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === "ol") {
                return (
                  <ol key={i} className="space-y-3 mb-6">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="w-6 h-6 bg-primary/15 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {j + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                );
              }
              return null;
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-muted border border-border p-7">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">Excellent PC Building</p>
            <h3 className="text-xl font-bold text-foreground mb-2">Ready to build? We serve{" "}
              <Link href="/services/pc-build/springfield" className="text-primary hover:underline">Springfield</Link>
              {" "}and all of Southwest Missouri.
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Get a free custom quote — we respond within a few hours during business hours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 transition-colors text-sm"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="py-14 bg-muted border-t border-border">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-lg font-bold text-foreground mb-6">More from the blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-card border border-border p-5 hover:border-primary transition-all"
                >
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground mt-2 leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-2">{p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
