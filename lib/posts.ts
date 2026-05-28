export type SectionType =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  sections: SectionType[];
}

export const posts: Post[] = [
  {
    slug: "how-much-does-a-custom-pc-build-service-cost",
    title: "How Much Does a Custom PC Build Service Cost?",
    description:
      "A transparent breakdown of what you actually pay for when you hire a professional PC builder — labor, parts, and what drives the price up or down.",
    date: "2025-05-01",
    readTime: "6 min read",
    category: "Pricing & Value",
    sections: [
      {
        type: "p",
        text: "One of the first questions people ask us is: how much does it cost to have a PC built professionally? The answer depends on two things — what parts go into the machine, and what service you're paying for. This guide breaks it all down so there are no surprises.",
      },
      {
        type: "h2",
        text: "The Two Main Costs: Parts and Labor",
      },
      {
        type: "p",
        text: "When you hire a professional PC builder, your total cost has two components. Parts are the hardware that goes into the machine — the CPU, GPU, RAM, storage, case, and power supply. Labor is the fee for the builder's time, expertise, and any services like cable management, BIOS setup, and stress testing.",
      },
      {
        type: "p",
        text: "If you're using a 'build only' service, you're supplying your own parts and paying only for labor. If you're using a 'parts and build' service, the builder sources everything and you pay for both parts and labor together.",
      },
      {
        type: "h2",
        text: "What Does a Typical Build Cost in Parts?",
      },
      {
        type: "p",
        text: "PC parts costs vary enormously depending on the performance tier you're targeting. Here's a realistic breakdown by budget range:",
      },
      {
        type: "ul",
        items: [
          "$500–$700: Entry-level gaming PC. Handles 1080p gaming at medium-high settings. Good for popular online games like Fortnite, Warzone, and Minecraft.",
          "$700–$1,000: Mid-range gaming PC. Solid 1080p performance at high settings, playable at 1440p in many titles.",
          "$1,000–$1,500: High-performance gaming and content creation. 1440p gaming, handles editing software like Premiere and Lightroom.",
          "$1,500–$2,500+: Enthusiast or professional workstation. 4K gaming, heavy video production, 3D rendering, simulation workloads.",
        ],
      },
      {
        type: "h2",
        text: "What Does Professional Labor Typically Cost?",
      },
      {
        type: "p",
        text: "Professional PC assembly services vary by region and builder experience, but you can generally expect to pay $75–$200 for build-only assembly. This covers physical assembly, cable management, thermal paste application, BIOS configuration, Windows installation, and a stress test before handoff.",
      },
      {
        type: "p",
        text: "Some builders charge flat fees; others charge by the hour. Either way, the labor cost is small relative to the parts cost — typically 8–15% of total spend on a mid-range build.",
      },
      {
        type: "h2",
        text: "What Drives Costs Up?",
      },
      {
        type: "ul",
        items: [
          "Custom water cooling: Adds $150–$400+ to a build, plus additional installation time.",
          "High-end components: GPUs and CPUs at the top of the stack carry significant price premiums.",
          "Larger or windowed cases with RGB: Premium cases add $50–$150 to the parts cost.",
          "Multiple storage drives: NVMe SSDs are affordable, but adding two or three drives adds up.",
          "Windows license: A retail Windows 11 Home license adds about $139 to the build cost if not included.",
        ],
      },
      {
        type: "h2",
        text: "Is Hiring a Builder Worth It?",
      },
      {
        type: "p",
        text: "For many people, yes — especially if you've never built a PC before or don't want to spend time troubleshooting a new build. A professional builder ensures everything is installed correctly, the machine is stable under load before you receive it, and any issues during assembly are handled on their dime, not yours.",
      },
      {
        type: "p",
        text: "The risk of a DIY build isn't that parts are damaged during assembly — it's more that a first-time builder may not get BIOS settings right, may not apply thermal paste correctly, or may seat a component improperly and spend hours troubleshooting. A professional eliminates all of that.",
      },
      {
        type: "h2",
        text: "Getting a Quote",
      },
      {
        type: "p",
        text: "The best way to know what your specific build will cost is to request a free quote. At Excellent PC Building, we'll ask about your use case and budget, put together a detailed parts list, and tell you exactly what everything will cost before you commit to anything.",
      },
    ],
  },
  {
    slug: "custom-pc-vs-prebuilt-why-custom-wins",
    title: "Custom PC vs. Prebuilt: Why Custom Wins (Almost) Every Time",
    description:
      "Honest comparison of custom-built PCs versus prebuilt systems from big box retailers. When custom makes sense, when prebuilt might, and what the data actually shows.",
    date: "2025-05-08",
    readTime: "7 min read",
    category: "Buying Guide",
    sections: [
      {
        type: "p",
        text: "Walk into any Best Buy or Walmart and you'll find rows of prebuilt desktop PCs. They look convenient. They have a clear price tag. They're ready to take home today. So why do PC enthusiasts almost universally recommend building custom instead? Here's the honest breakdown.",
      },
      {
        type: "h2",
        text: "The Core Problem with Prebuilts",
      },
      {
        type: "p",
        text: "Prebuilt PC manufacturers make their money on margin. To hit an attractive retail price point while still making a profit, they cut corners in places that aren't immediately obvious to the buyer. The most common compromises are:",
      },
      {
        type: "ul",
        items: [
          "Cheap power supplies: A prebuilt priced at $800 may have a 400W PSU with no efficiency rating. This is a reliability and safety issue.",
          "Mechanical hard drives instead of SSDs: Some prebuilts at $600–$700 still ship with traditional spinning hard drives, which are dramatically slower than SSDs.",
          "Inadequate cooling: Stock coolers in prebuilts are often the bare minimum. High temps mean throttled performance and shorter component lifespan.",
          "No-name RAM and storage brands: Manufacturers source the cheapest compatible components. Brand-name RAM and SSDs last significantly longer.",
          "Proprietary form factors: Some manufacturers use non-standard cases, motherboards, or PSU connectors that make future upgrades difficult or impossible.",
        ],
      },
      {
        type: "h2",
        text: "What You Get with a Custom Build at the Same Price",
      },
      {
        type: "p",
        text: "When a skilled builder puts together a custom PC at the same price as a prebuilt, every dollar goes directly into the components you'll actually use. There's no retail markup, no proprietary hardware tax, and no compromise components hiding in the box.",
      },
      {
        type: "p",
        text: "A $750 custom build will consistently outperform a $750 prebuilt in benchmarks, run cooler, and last longer. This isn't an opinion — it's a predictable outcome of how each type of machine is built.",
      },
      {
        type: "h2",
        text: "The Upgrade Argument",
      },
      {
        type: "p",
        text: "Custom builds are designed around standard form factors. That means when you want to upgrade your GPU two years from now, you can buy any standard GPU and drop it in. When you want more RAM, you buy standard DDR5 DIMMs.",
      },
      {
        type: "p",
        text: "Many prebuilts use proprietary designs that limit upgrade options. Some HP and Dell systems use custom PSU connectors that prevent standard GPU upgrades. Some use mini-ITX boards in standard mid-tower cases with only one RAM slot. These constraints are a hidden long-term cost.",
      },
      {
        type: "h2",
        text: "When Does a Prebuilt Make Sense?",
      },
      {
        type: "p",
        text: "Prebuilts aren't always the wrong choice. They make sense when:",
      },
      {
        type: "ul",
        items: [
          "You need a PC today and can't wait for parts to ship and a build to be completed.",
          "You're buying a business PC from a reputable enterprise manufacturer like Lenovo ThinkStation or HP Z-series, which use quality components.",
          "The prebuilt is on a significant sale that undercuts the equivalent custom build cost.",
          "You genuinely want zero involvement in the hardware decision process and value simplicity above all else.",
        ],
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "p",
        text: "For gaming PCs and general home desktop use, a custom build from a reputable builder will outperform, outlast, and out-upgrade a prebuilt at the same price — every time. The question is really just how you want to get to a custom build: build it yourself, or hire a professional.",
      },
      {
        type: "p",
        text: "At Excellent PC Building, we make the custom route as simple as buying a prebuilt. Tell us your budget, tell us what you'll use it for, and we'll handle every decision from there. You get a better machine without needing to understand any of the technical details.",
      },
    ],
  },
  {
    slug: "what-to-look-for-in-a-pc-builder",
    title: "What to Look for When Hiring a Local PC Builder",
    description:
      "How to evaluate a PC building service before you hand over your parts or money. The questions to ask, the green flags to look for, and the red flags to avoid.",
    date: "2025-05-15",
    readTime: "5 min read",
    category: "Tips & Advice",
    sections: [
      {
        type: "p",
        text: "Hiring someone to build your PC means trusting them with hundreds or thousands of dollars in hardware, plus your time. Choosing the wrong builder can mean a poorly assembled machine, damaged components, or worse — no recourse if something goes wrong. Here's how to vet a builder properly.",
      },
      {
        type: "h2",
        text: "Green Flags",
      },
      {
        type: "h3",
        text: "They're transparent about what's included",
      },
      {
        type: "p",
        text: "A reputable builder clearly explains what's covered in their service. Does the fee include BIOS setup? Windows installation? Stress testing? Cable management? If a builder is vague about what you're paying for, that's a problem. Get it in writing or at minimum in a clear email before you agree to anything.",
      },
      {
        type: "h3",
        text: "They offer some form of workmanship guarantee",
      },
      {
        type: "p",
        text: "Parts have manufacturer warranties. Labor should have a workmanship guarantee. Any professional builder should stand behind their assembly work — if a cable works loose because it wasn't seated properly, or a cooler wasn't mounted with enough pressure, that should be their responsibility to fix.",
      },
      {
        type: "h3",
        text: "They show real work or have real reviews",
      },
      {
        type: "p",
        text: "Photos of actual builds, customer reviews, or word-of-mouth recommendations are all meaningful signals. A builder who can show you completed work is demonstrating accountability. Anyone can claim to be a professional — the work tells the real story.",
      },
      {
        type: "h3",
        text: "They communicate clearly and quickly",
      },
      {
        type: "p",
        text: "Good builders respond promptly, answer questions in plain language, and proactively update you on the build status. If a builder is hard to reach before the sale, they'll be harder to reach if something goes wrong later.",
      },
      {
        type: "h2",
        text: "Red Flags",
      },
      {
        type: "ul",
        items: [
          "No guarantee of any kind on the labor or assembled system.",
          "Requests for payment in full upfront with no milestone or receipt.",
          "Unable or unwilling to provide references, reviews, or examples of past work.",
          "Vague about what's included — 'I'll build it for you' without any specifics.",
          "No clear process for how they handle parts damage or mistakes during assembly.",
          "Significantly below-market pricing without explanation (often means cutting corners on care).",
        ],
      },
      {
        type: "h2",
        text: "Questions to Ask Any Builder",
      },
      {
        type: "ol",
        items: [
          "What exactly is included in your service (cable management, BIOS, Windows, stress test)?",
          "What happens if a part is damaged during assembly — whose responsibility is it?",
          "Do you offer any kind of guarantee on your workmanship?",
          "How long will the build take from when you receive my parts?",
          "Do you have reviews or examples of completed builds I can see?",
        ],
      },
      {
        type: "h2",
        text: "Why Local Matters",
      },
      {
        type: "p",
        text: "Hiring a local builder in your area has real advantages over shipping your parts to a remote service. You can meet in person, there's physical accountability, and logistics for pickup and delivery are straightforward. If something needs to be corrected, you're not paying to ship a heavy PC across the country.",
      },
      {
        type: "p",
        text: "At Excellent PC Building, we serve Springfield, MO and all of Southwest Missouri. We stand behind our work with a 90-day workmanship guarantee, communicate clearly throughout the process, and have built machines for customers across the region.",
      },
    ],
  },
  {
    slug: "gaming-pc-budget-guide-2025",
    title: "Gaming PC Budget Guide 2025: How Much to Spend at Every Tier",
    description:
      "A practical guide to gaming PC performance tiers in 2025 — what $800–$1,400, $1,500–$2,400, and $2,500–$3,500 actually gets you, and which tier is right for how you play.",
    date: "2025-05-22",
    readTime: "8 min read",
    category: "Buying Guide",
    sections: [
      {
        type: "p",
        text: "Choosing a budget for a gaming PC is one of the most common questions we hear. Spend too little and you'll be frustrated by the performance. Spend too much and you're paying for performance you'll never use. This guide breaks down what each budget tier actually delivers in 2025 based on builds we put together every day.",
      },
      {
        type: "h2",
        text: "Entry Level: $800–$1,400",
      },
      {
        type: "p",
        text: "The entry-level range is a solid starting point for anyone getting into PC gaming. Builds in this tier are capable of hitting 1080p at medium to high settings with 120+ fps in the majority of games — which is a great experience on any 1080p monitor.",
      },
      {
        type: "p",
        text: "Most games will run comfortably, including online multiplayer titles, esports games, and a wide range of single-player titles. Where this tier starts to show its limits is with the most demanding AAA releases — think open-world games with heavy graphics at high or ultra settings. You may need to dial back a setting or two, but for the most part these builds hold up well.",
      },
      {
        type: "ul",
        items: [
          "Target performance: 1080p medium to high settings, 120+ fps",
          "AAA games may require lowering some settings from high or ultra, but will still be very playable",
          "Best for: First-time PC gamers, esports players, budget-conscious builds",
          "Upgrade potential: Good — GPU can be swapped in a few years without replacing the whole system",
        ],
      },
      {
        type: "h2",
        text: "Mid Range: $1,500–$2,400",
      },
      {
        type: "p",
        text: "The mid-range tier is where things get genuinely impressive. Most builds in this range — especially toward the higher end — will deliver solid 120+ fps at 1440p with high to ultra settings across the vast majority of games released today.",
      },
      {
        type: "p",
        text: "Builds on the lower end of this range may see some performance dips in the most demanding AAA titles at 1440p ultra, but will still be very playable and look great. This is the range we recommend most often for serious gamers who want a setup that stays relevant for several years.",
      },
      {
        type: "ul",
        items: [
          "Target performance: 1440p high to ultra settings, 120+ fps on most games",
          "Lower-end builds in this range may dip below 120fps in the heaviest AAA titles at ultra — still very playable",
          "Best for: Dedicated gamers who want strong 1440p performance without going all-out",
          "Upgrade potential: Excellent — strong platform longevity",
        ],
      },
      {
        type: "h2",
        text: "High End: $2,500–$3,500",
      },
      {
        type: "p",
        text: "The high-end tier is built for people who want top-tier performance and aren't willing to compromise. Builds in this range can run virtually any game at ultra settings at 1440p, and handle a wide variety of games at 4K on medium or high settings — with some titles even pushing into ultra at 4K with still-playable frame rates.",
      },
      {
        type: "p",
        text: "Builds toward the lower end of this range ($2,000–$2,300) may have some limitations at 4K high or ultra in the most demanding games, but they are still outstanding 1440p machines at high and ultra — and very capable at 4K medium. The upper end of this range removes most of those compromises entirely.",
      },
      {
        type: "ul",
        items: [
          "Target performance: 1440p ultra in virtually everything; 4K medium to high in most games",
          "Top-end builds in this range can push 4K ultra in many titles with playable frame rates",
          "Lower-end builds may struggle at 4K high/ultra but are exceptional at 1440p and solid at 4K medium",
          "Best for: Enthusiast gamers, content creators, anyone who wants to be set for years",
          "Upgrade potential: Excellent — top-tier platform with room to grow",
        ],
      },
      {
        type: "h2",
        text: "Which Tier Is Right for You?",
      },
      {
        type: "p",
        text: "If you're gaming on a 1080p monitor and mostly play online multiplayer or esports titles, the entry-level range ($800–$1,400) is all you need and going higher would be wasted money. If you're on a 1440p monitor or planning to upgrade to one, the mid-range tier ($1,500–$2,400) is the sweet spot — strong performance, great value, and plenty of longevity.",
      },
      {
        type: "p",
        text: "The high-end range ($2,500–$3,500) makes sense if you want 4K capability, you're a content creator who also games, or you simply want the best available and plan to keep the machine for a long time. It's a meaningful step up from mid-range, and you'll feel the difference.",
      },
      {
        type: "p",
        text: "Not sure where you fall? Tell us what games you play, what monitor you're using or planning to buy, and what your budget looks like. We'll point you to the right tier and put together a specific parts list — completely free.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
