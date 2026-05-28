"use client";

import { useState } from "react";
import { cities } from "@/lib/cities";

interface Props {
  defaultService?: string;
  defaultCity?: string;
}

export function ContactForm({ defaultService, defaultCity }: Props) {
  const [service, setService] = useState(defaultService ?? "");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xgoqdvjj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-muted border border-border p-10 text-center">
        <div className="w-14 h-14 bg-primary/15 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Message Received!</h3>
        <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours with a custom quote.</p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-input border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-colors";
  const labelCls = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input name="name" type="text" required placeholder="John Smith" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Email Address *</label>
          <input name="email" type="email" required placeholder="you@example.com" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Phone Number</label>
          <input name="phone" type="tel" placeholder="(417) 319-7589" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Your City *</label>
          <select name="city" required defaultValue={defaultCity ?? ""} className={inputCls + " cursor-pointer"}>
            <option value="" disabled>Select your city…</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>{c.name}, MO</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Service Needed *</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className={`flex items-start gap-3 border p-4 cursor-pointer transition-all ${
            service === "build-only"
              ? "border-primary bg-primary/10"
              : "border-border hover:border-primary/50 bg-muted"
          }`}>
            <input
              type="radio"
              name="service"
              value="build-only"
              required
              checked={service === "build-only"}
              onChange={() => setService("build-only")}
              className="mt-0.5 accent-primary"
            />
            <div>
              <p className="text-foreground font-semibold text-sm">Build Only</p>
              <p className="text-muted-foreground text-xs mt-0.5">I have my parts — just need assembly</p>
            </div>
          </label>
          <label className={`flex items-start gap-3 border p-4 cursor-pointer transition-all ${
            service === "parts-and-build"
              ? "border-primary bg-primary/10"
              : "border-border hover:border-primary/50 bg-muted"
          }`}>
            <input
              type="radio"
              name="service"
              value="parts-and-build"
              required
              checked={service === "parts-and-build"}
              onChange={() => setService("parts-and-build")}
              className="mt-0.5 accent-primary"
            />
            <div>
              <p className="text-foreground font-semibold text-sm">Parts + Build</p>
              <p className="text-muted-foreground text-xs mt-0.5">Source the parts and build for me</p>
            </div>
          </label>
        </div>
      </div>

      <div>
        <label className={labelCls}>Budget (optional)</label>
        <input name="budget" type="text" placeholder="e.g. $800 – $1,200" className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>Tell us about your build *</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="What will you use it for? Gaming, streaming, video editing, work? Any specific components or brands in mind?"
          className={inputCls + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {loading ? "Sending…" : "Send My Request"}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        We typically respond within a few hours during business hours.
      </p>
    </form>
  );
}
